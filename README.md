# DoseGuard™ — Smart Closed-Loop UV Disinfection Digital Twin

[![atomQUEST 2026](https://img.shields.io/badge/atomQUEST_2026-Round_2_Level_1-00f2fe?style=for-the-badge&logo=atomberg)](https://doseguard-spacex-kiit.netlify.app/)
[![Track](https://img.shields.io/badge/Track-2:_Smart_Water_Purifier-purple?style=for-the-badge)](https://doseguard-spacex-kiit.netlify.app/)
[![Team](https://img.shields.io/badge/Team-SpaceX_(KIIT)-emerald?style=for-the-badge)](https://doseguard-spacex-kiit.netlify.app/)
[![Standard](https://img.shields.io/badge/Standard-NSF_55_Class_A_(≥40_mJ/cm²)-blue?style=for-the-badge)](https://doseguard-spacex-kiit.netlify.app/)

> **Engineering-Validated Digital Twin & Firmware-Identical UV Dosing Controller for Smart Home Purifiers.**  
> Developed by **Team SpaceX**, Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar for **atomQUEST 2026** (organized by Atomberg Technologies).

---

## ⚡ The Core Problem: The Silent UV Black Box

In conventional home water purifiers, the UV disinfection stage runs at a **fixed, blind flow rate** with no optical feedback.
* **The Flaw:** When feed water contains dissolved iron, organic tannins, or seasonal silt (very common during Indian monsoons), **UV Transmittance (UVT) drops by 40%–60%** while TDS remains virtually unchanged.
* **The Hazard:** Conventional purifiers continue dispensing water normally, unknowingly exposing households to under-disinfected water containing live pathogens.
* **The DoseGuard Solution:** Real-time dual-photodiode ratio sensing ($PD\text{-}B / PD\text{-}A$), adaptive closed-loop pump flow throttling, and fail-closed solenoid isolation to guarantee the **NSF 55 Class A standard of ≥ 40 mJ/cm²**.

---

## 🔬 Mathematical Control & Radiative Transfer Model

The controller loop runs deterministically at **2 Hz (500 ms period)** executing analytical Beer-Lambert and mean fluence equations:

### 1. Optical Water Transmittance (Beer-Lambert Law)
$$A_1 = 0.02 + 0.0045 \cdot \text{tea} \quad (\text{cm}^{-1})$$
$$T = 10^{-\text{PATH} \cdot A_1} \quad (\text{where PATH} = 2.0\text{ cm})$$
$$\text{UVT}_{1\text{cm}} = T^{1/\text{PATH}} \times 100\%$$

### 2. Dual-Photodiode Sanity & Fluence Calculation
* $\text{PD-A}$: Monitors 275 nm emitter radiant flux at 0 mm reference gap.
* $\text{PD-B}$: Measures transmitted flux across a calibrated 2.0 cm water gap.
$$t_{\text{Ratio}} = \text{clamp}\left(\frac{\text{PD-B}}{\text{PD-A}}, 0.02, 1.0\right)$$
$$a_f = \frac{1 - t_{\text{Ratio}}}{-\ln(t_{\text{Ratio}})} \quad (\text{Mean Fluence Absorption Factor})$$
$$\text{Fluence Rate } F = K \cdot \text{PD-A} \cdot a_f \quad (K = 8.4\text{ mW/cm}^2)$$

### 3. Adaptive Flow & Delivered Dose
$$q_{\text{Set}} = \text{clamp}\left(\frac{F \cdot V}{D_{\text{TARGET}}}, Q_{\text{MIN}}, Q_{\text{MAX}}\right) \quad (V = 30\text{ mL}, D_{\text{TARGET}} = 44\text{ mJ/cm}^2)$$
$$\text{Delivered Dose} = \frac{F \cdot V}{q_{\text{Set}}} \quad (\text{mJ/cm}^2)$$
$$\text{Valve Energized} = \text{SensorsOK} \land (\text{Delivered Dose} \ge 40.0\text{ mJ/cm}^2)$$

---

## 🛡️ Four Deterministic Safety States

| State | Status | Condition | Flow Rate | Solenoid Valve |
|---|---|---|---|---|
| **RUNNING** | Nominal | Delivered Dose $\ge 44.0\text{ mJ/cm}^2$ | Optimal ($0.32\text{ L/min}$) | **OPEN** (Energized) |
| **THROTTLED** | Adaptive | Turbid water; pump slowed to maintain dose | Throttled ($0.18 - 0.30\text{ L/min}$) | **OPEN** (Energized) |
| **DEGRADED** | Boundary | Pump clamped at $Q_{\text{MIN}}$ ($3.0\text{ mL/s}$); Dose $40 - 44$ | Minimum ($0.18\text{ L/min}$) | **OPEN** (Energized) |
| **FAIL_CLOSED** | Tripped | Dose $< 40\text{ mJ/cm}^2$, cover breach, or sensor fault | **0.00 L/min** | **CLOSED** ($<2\text{s}$ Shutoff) |

---

## 📐 30 mL Reaction Chamber CAD Specifications

* **Fluid Volume:** $30.0\text{ mL}$ ($30,000\text{ mm}^3$)
* **Chamber Bore:** $\varnothing 25.0\text{ mm} \times 61.12\text{ mm}$ length
* **Shell Material:** Machined AISI 316L Stainless Steel ($\varnothing 32.0\text{ mm}$ OD, $3.5\text{ mm}$ wall thickness)
* **Reflective Liner:** Virgin PTFE sleeve ($>90\%$ diffuse reflectance at 275 nm)
* **Optical Windows:** $3\times \varnothing 15.0\text{ mm} \times 2.0\text{ mm}$ Suprasil 300 fused-silica quartz
* **Hydraulic Pressure Rating:** Tested to 8.0 bar (116 PSI)
* **Fail-Safe Actuator:** 24V Normally-Closed (NC) Food-Grade Solenoid Valve ($<2\text{s}$ spring-return shutoff)
* **Safety Interlock:** Hermetic magnetic reed switch cutting UVC LED driver power in $<1\text{ ms}$ upon cover opening

---

## 💰 Prototype Budget vs. Mass-Production Cost

| Item | Prototype Cost | Atomberg Mass-Production Architecture |
|---|---|---|
| **MCU & Processing** | ₹800 (ESP32 + ADS1115 ADC) | ₹0 (Integrated into existing Atomberg IoT/Motor MCU) |
| **275 nm UVC LEDs** | ₹6,000 (4x AlGaN MCPCB) | ₹350 (High-volume reel SMT package) |
| **SiC Photodiodes** | ₹3,000 (2x sglux SiC sensors) | ₹180 (Direct dual photodiode array) |
| **Optics & Liner** | ₹6,000 (Suprasil + PTFE + SS) | ₹190 (Molded PTFE cavity insert) |
| **Valves & Sensors** | ₹4,500 (NC Valve + Flow Meter) | ₹80 (Standardized supply chain) |
| **Assembly & Test** | ₹7,700 (Test chassis & plumbing) | — |
| **TOTAL** | **₹28,000** | **≈ ₹800 Add-On Target** |

---

## 💻 Tech Stack

* **Framework:** React 18, TypeScript, Vite
* **3D WebGL Visualization:** Three.js with real-time particle physics, PBR metallic shaders, and exploded assembly animation
* **Styling:** Custom Tailwind CSS (Deep Obsidian, Photon Cyan, Titanium hairlines, and double-bezel hardware architecture)
* **Icons:** Lucide React (Ultra-light precision lines)
* **Telemetry:** High-frequency SVG streaming engine with 60-second rolling window and CSV export

---

## 🚀 Getting Started

### Prerequisites
* Node.js $\ge 18$
* npm $\ge 9$

### Installation
```bash
# Clone the repository
git clone https://github.com/kodeashu/doseguard.git
cd doseguard

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 👥 Team SpaceX — KIIT

* **Institution:** Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, Odisha
* **Competition:** atomQUEST 2026 (Atomberg Technologies)
* **Track:** Track 2 — Smart Water Purifier
* **Live Deployment:** [doseguard-spacex-kiit.netlify.app](https://doseguard-spacex-kiit.netlify.app/)
