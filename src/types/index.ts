export type SafetyState = 'RUNNING' | 'THROTTLED' | 'DEGRADED' | 'FAIL_CLOSED';

export interface SystemInputs {
  tea: number;            // 0 - 100 (Turbidity / Organic Absorbance index)
  lampOutput: number;     // 40 - 100% (UVC Lamp Aging / Irradiance level)
  coverClosed: boolean;   // true = Interlock closed & safe; false = Cover open (interlock cut)
  sensorFault: boolean;   // true = Hardware sensor fault injected
}

export interface SimulationOutputs {
  A1: number;             // Absorbance coefficient at 1 cm (cm^-1)
  T: number;              // Optical transmittance across 2 cm path
  uvtPerCm: number;       // UV Transmittance % per 1 cm
  pdA: number;            // PD-A Reference photodiode irradiance (0-1 relative)
  pdB: number;            // PD-B Transmittance photodiode reading
  sensorsOk: boolean;     // Sensor signal sanity check
  tRatio: number;         // Ratio PD-B / PD-A
  absorptionFactor: number; // Mean fluence factor af
  fluence: number;        // Average chamber fluence rate (mW/cm^2)
  qSet: number;           // Target pump flow rate (mL/s)
  dose: number;           // Calculated delivered UV dose (mJ/cm^2)
  valveOpen: boolean;     // Normally-closed solenoid valve status
  flowMlPerSec: number;   // Actual dispensed flow rate (mL/s)
  flowLPerMin: number;    // Actual dispensed flow rate (L/min)
  safetyState: SafetyState;
  stateReason: string;
}

export interface LampPrognosis {
  currentPdA: number;
  criticalPdA: number;
  remainingHours: number;
  remainingDays: number;
  isUrgent: boolean;
  decayRatePerHour: number;
  accumulatedHours: number;
  safetyMarginPct: number;
}

export interface TelemetryPoint {
  tick: number;
  timestamp: string;
  simTime: number;
  dose: number;
  targetDose: number;
  cutoffDose: number;
  flowLPerMin: number;
  uvtPerCm: number;
  state: SafetyState;
}

export interface AuditLogEvent {
  id: string;
  timestamp: string;
  state: SafetyState;
  reason: string;
  dose: number;
  flowLPerMin: number;
  uvtPerCm: number;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}
