import { SystemInputs, SimulationOutputs, LampPrognosis, SafetyState } from '../types';

export const CHAMBER_CONSTANTS = {
  V: 30.0,             // Internal chamber fluid volume in mL (30,000 mm^3)
  D_SET: 40.0,         // NSF 55 Class A minimum fail-safe cutoff dose (mJ/cm^2)
  D_TARGET: 44.0,      // Control target dose providing 10% safety margin (mJ/cm^2)
  Q_MIN: 3.0,          // Minimum booster pump flow limit in mL/s (0.18 L/min)
  Q_MAX: 8.33,         // Maximum booster pump flow limit in mL/s (0.50 L/min)
  K: 8.4,              // Chamber optical cavity geometric factor (mW/cm^2)
  PATH: 2.0,           // Calibrated water optical path between emitter and PD-B (cm)
  TICK_MS: 500,        // Closed-loop PID execution period (ms)
  DECAY_RATE_PER_HOUR: 0.2 / 9000, // L70 LED degradation per operating hour
};

export function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

export function calculatePhysicsStep(
  inputs: SystemInputs,
  noiseA = 1.0,
  noiseB = 1.0
): SimulationOutputs {
  const { V, D_SET, D_TARGET, Q_MIN, Q_MAX, K, PATH } = CHAMBER_CONSTANTS;
  const { tea, lampOutput, coverClosed, sensorFault } = inputs;

  // 1. Water Optical Absorbance via Beer-Lambert
  const teaIndex = clamp(tea, 0, 100);
  const A1 = 0.02 + 0.0045 * teaIndex;
  const T = Math.pow(10, -PATH * A1);
  const uvtPerCm = Math.pow(T, 1 / PATH) * 100;

  // 2. Photodiode Sensor Signals
  const lampRatio = clamp(lampOutput, 0, 100) / 100;
  let pdA = 0;
  let pdB = 0;

  if (coverClosed && !sensorFault) {
    pdA = lampRatio * noiseA;
    pdB = pdA * T * noiseB;
  } else if (!coverClosed) {
    // Interlock breach: physical reed switch cuts emitter power immediately
    pdA = 0;
    pdB = 0;
  } else if (sensorFault) {
    // Injected hardware fault: corrupt ADC readout violating optical physics
    pdA = lampRatio * 0.85;
    pdB = pdA * 1.5; // Impossible reading (transmitted > source)
  }

  // 3. Sensor Integrity & Sanity Verification
  const sensorsOk =
    coverClosed &&
    !sensorFault &&
    pdA > 0.30 &&
    pdB > 0 &&
    pdB <= 1.05 * pdA;

  // 4. Optical Transmittance Ratio & Mean Fluence Absorption Factor
  const tRatio = clamp(pdA > 1e-4 ? pdB / pdA : 0.02, 0.02, 1.0);
  const absorptionFactor = tRatio > 0.999 ? 1.0 : (1 - tRatio) / -Math.log(tRatio);

  // 5. Average Chamber Fluence Rate (mW/cm^2)
  const fluence = K * pdA * absorptionFactor;

  // 6. Adaptive Flow Rate Calculation (mL/s)
  const qSet = clamp((fluence * V) / D_TARGET, Q_MIN, Q_MAX);

  // 7. Actual Delivered UV Dose (mJ/cm^2)
  const dose = qSet > 0 ? (fluence * V) / qSet : 0;

  // 8. Solenoid Valve Actuation (Fail-Closed)
  const valveOpen = sensorsOk && dose >= D_SET;
  const flowMlPerSec = valveOpen ? qSet : 0;
  const flowLPerMin = flowMlPerSec * 0.06;

  // 9. Deterministic State Machine & Diagnostic Reason
  let safetyState: SafetyState = 'FAIL_CLOSED';
  let stateReason = '';

  if (!coverClosed) {
    safetyState = 'FAIL_CLOSED';
    stateReason = 'Safety Interlock: Reactor access cover breached. UVC LED power cut via hardware reed switch.';
  } else if (sensorFault) {
    safetyState = 'FAIL_CLOSED';
    stateReason = 'Hardware Fault: Dual-photodiode sanity check failed. Transmittance exceeds physical emitter envelope.';
  } else if (pdA <= 0.30) {
    safetyState = 'FAIL_CLOSED';
    stateReason = `UV Lamp Critical: Reference photodiode (${pdA.toFixed(2)}) depleted below safe operational floor (0.30).`;
  } else if (dose < D_SET) {
    safetyState = 'FAIL_CLOSED';
    stateReason = `Insufficient Dose: Delivered dose (${dose.toFixed(1)} mJ/cm²) below NSF 55 Class A threshold (40.0 mJ/cm²). Solenoid tripped.`;
  } else if (!valveOpen) {
    safetyState = 'FAIL_CLOSED';
    stateReason = 'Safety trip: Dispensing valve de-energized fail-closed.';
  } else if (qSet <= Q_MIN + 0.001 && dose < D_TARGET && dose >= D_SET) {
    safetyState = 'DEGRADED';
    stateReason = `Degraded Flow: Pump clamped at minimum limit (3.0 mL/s). Dose is ${dose.toFixed(1)} mJ/cm² (margin +${(dose - D_SET).toFixed(1)} above cutoff).`;
  } else if (qSet < 5.0 || teaIndex > 12) {
    safetyState = 'THROTTLED';
    stateReason = `Adaptive Control: Booster pump throttled to ${qSet.toFixed(2)} mL/s (${flowLPerMin.toFixed(2)} L/min) to maintain NSF-55 compliance.`;
  } else {
    safetyState = 'RUNNING';
    stateReason = `Nominal Operation: Optimal flow (${flowLPerMin.toFixed(2)} L/min) delivering verified ${dose.toFixed(1)} mJ/cm² dose.`;
  }

  return {
    A1,
    T,
    uvtPerCm,
    pdA,
    pdB,
    sensorsOk,
    tRatio,
    absorptionFactor,
    fluence,
    qSet,
    dose,
    valveOpen,
    flowMlPerSec,
    flowLPerMin,
    safetyState,
    stateReason,
  };
}

export function calculateLampPrognosis(
  currentPdA: number,
  waterTransmittance: number,
  accumulatedHours: number,
  speedMultiplier = 1
): LampPrognosis {
  const { D_SET, Q_MIN, K, V, DECAY_RATE_PER_HOUR } = CHAMBER_CONSTANTS;
  const tRatio = Math.max(0.02, waterTransmittance);

  // Critical PD-A is the minimum emitter output that can still deliver 40 mJ/cm^2 at Q_MIN
  const criticalPdA = Math.max(0.301, (D_SET * Q_MIN) / (K * tRatio * V));
  const margin = currentPdA - criticalPdA;
  const safetyMarginPct = Math.max(0, (margin / criticalPdA) * 100);

  let remainingHours = 0;
  if (margin > 0 && DECAY_RATE_PER_HOUR > 0) {
    remainingHours = margin / DECAY_RATE_PER_HOUR;
  }
  const remainingDays = remainingHours / 24;
  const isUrgent = margin <= 0.04 || currentPdA <= 0.35;

  return {
    currentPdA,
    criticalPdA,
    remainingHours: Math.max(0, remainingHours),
    remainingDays: Math.max(0, remainingDays),
    isUrgent,
    decayRatePerHour: DECAY_RATE_PER_HOUR * speedMultiplier,
    accumulatedHours,
    safetyMarginPct,
  };
}

export const OPENSCAD_CAD_SCRIPT = `// DoseGuard UV Reactor Chamber - Parametric CAD Model (OpenSCAD)
// Team SpaceX, KIIT | atomQUEST 2026 - Track 2 Water Purifier
// Units: Millimeters (mm)

$fn = 64;

// Key Dimensional Parameters
chamber_id = 25.0;            // Internal Diameter (mm)
chamber_length = 61.12;       // Internal Length for 30.0 mL volume (pi * 12.5^2 * 61.12 = 30000 mm^3)
wall_thickness = 3.5;         // 316 Stainless Steel pressure containment wall
chamber_od = chamber_id + 2 * wall_thickness; // 32.0 mm Outer Diameter

ptfe_liner_thickness = 1.5;   // Virgin PTFE diffuse reflectance sleeve (>90% refl @ 275nm)
optical_path_length = 20.0;   // Exact 2.0 cm calibrated path between emitter & PD-B

window_diameter = 15.0;       // Fused-silica optical window OD (Suprasil 300)
window_thickness = 2.0;       // Quartz window thickness

port_npt_diameter = 11.5;     // 1/4" NPT fluid port tapping diameter

module reactor_body() {
    difference() {
        // Main 316L SS Machined Cylinder Body
        cylinder(h = chamber_length, d = chamber_od, center = true);
        
        // 30 mL Fluid Reaction Bore
        cylinder(h = chamber_length + 2, d = chamber_id, center = true);
        
        // Port 1: Raw Water Inlet (Lateral, -X)
        translate([-(chamber_od / 2), 0, -(chamber_length / 2) + 12])
            rotate([0, -90, 0])
                cylinder(h = 10, d = port_npt_diameter);
                
        // Port 2: Disinfected Water Outlet (Lateral, +X)
        translate([(chamber_od / 2), 0, (chamber_length / 2) - 12])
            rotate([0, 90, 0])
                cylinder(h = 10, d = port_npt_diameter);
                
        // Port 3: PD-A Source Photodiode Optical Port (0 mm gap monitor)
        translate([0, (chamber_od / 2), -(optical_path_length / 2)])
            rotate([-90, 0, 0])
                cylinder(h = 10, d = window_diameter);
                
        // Port 4: PD-B Attenuated Photodiode Optical Port (20.0 mm water path)
        translate([0, (chamber_od / 2), (optical_path_length / 2)])
            rotate([-90, 0, 0])
                cylinder(h = 10, d = window_diameter);
    }
}

module ptfe_liner() {
    difference() {
        cylinder(h = chamber_length - 4, d = chamber_id - 0.1, center = true);
        cylinder(h = chamber_length, d = chamber_id - 2 * ptfe_liner_thickness, center = true);
    }
}

// Render Assembled Geometry
color([0.7, 0.75, 0.8, 0.85]) reactor_body();
color([0.95, 0.95, 0.95, 0.6]) ptfe_liner();
`;

export const PROTOTYPE_BOM = [
  {
    component: 'ESP32 Dev Board + ADS1115 ADC',
    qty: '1 + 1',
    spec: 'Dual-core MCU, Wi-Fi/MQTT, 16-bit 4-channel oversampled analog acquisition',
    approxInr: 800,
    risk: 'Low (Off-the-shelf local)',
  },
  {
    component: '275 nm UVC LEDs + CC Driver',
    qty: '4 + 1',
    spec: 'AlGaN deep UVC source (60 mW radiant flux), MCPCB heat sink, hardware enable line',
    approxInr: 6000,
    risk: 'High (Import 2-3 wks)',
  },
  {
    component: 'SiC UVC Photodiodes + TIA Op-Amps',
    qty: '2',
    spec: 'sglux SG01S-C18 solar-blind SiC sensors + low-drift transimpedance amplifiers',
    approxInr: 3000,
    risk: 'Medium (Specialized vendor)',
  },
  {
    component: 'Fused-Silica Quartz Windows',
    qty: '3',
    spec: 'Ø 15.0 mm × 2.0 mm Suprasil 300 UVC-grade optical windows (>92% transmission)',
    approxInr: 2500,
    risk: 'Medium (Precision optics)',
  },
  {
    component: 'PTFE-Lined 316L SS Reactor Body',
    qty: '1',
    spec: 'CNC machined 316L stainless body (30 mL bore) + virgin PTFE diffuse liner (>90% refl)',
    approxInr: 3500,
    risk: 'Low (Local CNC machine shop)',
  },
  {
    component: 'Hall-Effect Flow Meter',
    qty: '1',
    spec: '0.1 - 2.0 L/min pulse output flow sensor for real-time residence time calculation',
    approxInr: 400,
    risk: 'Low (Off-the-shelf)',
  },
  {
    component: '24V Diaphragm Pump + PWM Driver',
    qty: '1',
    spec: 'Variable displacement booster pump with low-noise MOSFET PWM speed control',
    approxInr: 1800,
    risk: 'Low (Standard purifier pump)',
  },
  {
    component: 'Normally-Closed Solenoid Valve',
    qty: '1',
    spec: 'Food-grade 24V NC valve, spring-return shutoff in <2s upon power/dose fail',
    approxInr: 800,
    risk: 'Low (Standard fail-closed)',
  },
  {
    component: 'Safety Interlock (Reed Switch & NTC)',
    qty: '1 set',
    spec: 'Hermetic magnetic reed switch for cover cut + 10k NTC thermal safety derating',
    approxInr: 1500,
    risk: 'Low (Off-the-shelf)',
  },
  {
    component: 'Plumbing, Test Rig Chassis & Power Supply',
    qty: '1 set',
    spec: 'Laser-cut acrylic test rig, food-grade silicone tubing, 24V 5A power brick',
    approxInr: 7700,
    risk: 'Low (Fabrication lab)',
  },
];

export const COMPETITOR_COMPARISON = [
  {
    feature: 'UV Dosage Verification',
    conventional: 'Blind / None (Assumes lamp is bright)',
    timerBased: 'None (Timer counts calendar months)',
    doseguard: 'Continuous Real-Time Measurement (mJ/cm²)',
    advantage: 'Guarantees microbiological destruction per NSF-55',
  },
  {
    feature: 'Turbidity & Tannin Compensation',
    conventional: 'Fixed pump flow (Under-doses turbid water)',
    timerBased: 'Fixed pump flow (Zero compensation)',
    doseguard: 'Adaptive Closed-Loop PID Flow Throttling',
    advantage: 'Slows down flow to deliver required UV photon fluence',
  },
  {
    feature: 'Safety Shutoff Mechanism',
    conventional: 'None (Continues dispensing bad water)',
    timerBased: 'None (Only beeps on calendar expiry)',
    doseguard: 'Hardware Fail-Closed NC Solenoid (<2s Cutoff)',
    advantage: 'Physical water shutoff prevents drinking untreated water',
  },
  {
    feature: 'Chamber Cover Interlock',
    conventional: 'None (UV light exposure hazard)',
    timerBased: 'None (Unprotected)',
    doseguard: 'Hardware Reed Switch Interrupt Power Cut',
    advantage: 'Instantaneous eye/skin UVC radiation protection',
  },
  {
    feature: 'Lamp Life Prognosis',
    conventional: 'Arbitrary 12-month calendar change',
    timerBased: 'Hour counter (Ignores actual LED degradation)',
    doseguard: 'Physics-Informed L70 Irradiance Decay Model',
    advantage: 'Condition-based predictive maintenance alerts',
  },
  {
    feature: 'Atomberg Mass-Production Cost',
    conventional: 'Baseline',
    timerBased: '+₹150 (Basic EEPROM)',
    doseguard: '+₹800 (Add-on module integrating with Atomberg IoT)',
    advantage: 'High margin, premium USP for smart home purifiers',
  },
];

export const VIDEO_SCRIPT = [
  {
    scene: 'Scene 1: Problem Framing',
    timestamp: '0:00 - 0:15 (15s)',
    spoken: '“Today, the UV stage in home purifiers is a silent black box. Sources degrade invisibly, and water with iron or dissolved tannins drops UV transmittance without changing TDS. The user drinks under-disinfected water with zero warning. We are Team SpaceX from KIIT, presenting DoseGuard.”',
    visual: 'Camera on 3D Live Reactor running clear water, then transitioning to mission control dashboard showing stable 44.0 mJ/cm² dose.',
  },
  {
    scene: 'Scene 2: 3D CAD & Hardware Architecture',
    timestamp: '0:15 - 0:35 (20s)',
    spoken: '“Here is our 30 mL reactor CAD design. Four 275 nm UVC LEDs radiate through fused-silica windows inside a high-reflectivity PTFE-lined 316 stainless body. Two SiC photodiodes form an optical ratio: PD-A measures source irradiance, while PD-B measures light after a calibrated 2.0 cm water path, calculating real-time UV transmittance.”',
    visual: 'Switch to 3D Exploded View! Show the separated 316L SS shell, PTFE liner, 4x LEDs, and dual photodiodes across the 20 mm gap.',
  },
  {
    scene: 'Scene 3: Live Closed-Loop Control & Fail-Safe Trip',
    timestamp: '0:35 - 0:55 (20s)',
    spoken: '“Watch our closed-loop in action. When tea tannins cut UVT down to 70%, our PI controller adaptively throttles pump flow to guarantee the NSF 55 Class A benchmark of 40 mJ/cm². But if water quality degrades beyond recovery, our normally-closed solenoid valve trips shut in under two seconds—failing safe.”',
    visual: 'Trigger the Monsoon Turbid scenario. Show the solenoid valve de-energizing shut, beacon pulsing red, and particle flow stopping instantly.',
  },
  {
    scene: 'Scene 4: Interlock Safety & Predictive Maintenance',
    timestamp: '0:55 - 1:15 (20s)',
    spoken: '“Safety is hardware-enforced. A magnetic reed switch cuts UVC LED power the millisecond the cover is breached. Simultaneously, our physics-informed decay model tracks LED degradation over operating hours, replacing calendar-based guesswork with predictive filter replacement alerts.”',
    visual: 'Open the interlock cover—show violet UV beam cutting instantly. Show the Lamp Forecast Card with days-remaining prognosis.',
  },
  {
    scene: 'Scene 5: Feasibility & Atomberg Fit',
    timestamp: '1:15 - 1:30 (15s)',
    spoken: '“DoseGuard is not an expensive new purifier—it is an elegant ₹800 mass-production add-on designed for Atomberg’s BLDC motor and IoT ecosystem. We deliver verified microbiological safety with closed-loop engineering. Thank you.”',
    visual: 'Closing shot of Team SpaceX logo, KIIT, and live production deployment URL.',
  },
];
