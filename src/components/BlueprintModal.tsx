import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Layers, 
  FileCode2, 
  DollarSign, 
  Video, 
  BookOpen, 
  Cpu, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { OPENSCAD_CAD_SCRIPT, PROTOTYPE_BOM, VIDEO_SCRIPT } from '../utils/physicsModel';
import { EDGE_AI_METADATA } from '../utils/edgeAiEngine';

interface BlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExportStl: () => void;
  onShowToast: (title: string, desc?: string, type?: 'info' | 'success' | 'warning' | 'error') => void;
}

export const BlueprintModal: React.FC<BlueprintModalProps> = ({
  isOpen,
  onClose,
  onExportStl,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'cad' | 'bom' | 'video' | 'math' | 'edgeai'>('specs');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(OPENSCAD_CAD_SCRIPT).then(() => {
      setCopied(true);
      onShowToast('✓ Copied to Clipboard', 'OpenSCAD parametric CAD model code ready to paste.', 'success');
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-obsidian-900 border border-slate-700/80 shadow-2xl overflow-hidden ring-1 ring-white/10">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-obsidian-950/80">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-photon-cyan/10 text-photon-cyan border border-photon-cyan/30">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans">
                  DoseGuard™ 3D CAD &amp; Engineering Blueprint
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-photon-cyan/15 text-photon-cyan border border-photon-cyan/30 font-mono">
                  atomQUEST 2026
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Team SpaceX (KIIT) • Track 2: Smart Water Purifier • 30 mL Reaction Chamber
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onExportStl}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-photon-cyan to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-obsidian-950 text-xs font-mono font-bold shadow-lg shadow-photon-cyan/20 transition-all active:scale-[0.98]"
              title="Download 3D CAD mesh in .STL format"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export .STL</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center space-x-1 px-6 pt-2 border-b border-slate-800 bg-obsidian-950/40 text-xs font-mono overflow-x-auto">
          {[
            { id: 'specs', label: 'CAD Specs & Dimensions', icon: Layers },
            { id: 'edgeai', label: 'Int8 Edge AI (ESP32 + Colab)', icon: Cpu },
            { id: 'cad', label: 'OpenSCAD / Fusion Script', icon: FileCode2 },
            { id: 'bom', label: 'Prototype BOM (₹28,000)', icon: DollarSign },
            { id: 'video', label: '90-Sec Video Script', icon: Video },
            { id: 'math', label: 'Physics & Equations', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-3.5 py-2.5 border-b-2 font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'border-photon-cyan text-photon-cyan bg-photon-cyan/5'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 font-mono text-xs text-slate-300">
          
          {/* TAB 1: Specs & Dimensions */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Core Geometry */}
                <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 text-photon-cyan font-bold text-sm">
                    <Layers className="w-4 h-4" />
                    <span>Reactor Chamber Core Geometry</span>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <div className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span className="text-slate-400">Internal Fluid Volume (V):</span>
                      <strong className="text-white">30.0 mL (30,000 mm³)</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span className="text-slate-400">Bore Internal Diameter (ID):</span>
                      <strong className="text-photon-cyan">Ø 25.0 mm (±0.05 mm)</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span className="text-slate-400">Active Chamber Length (L):</span>
                      <strong className="text-photon-cyan">61.12 mm (V = π · r² · L)</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span className="text-slate-400">Outer Shell Diameter (OD):</span>
                      <strong className="text-slate-200">Ø 32.0 mm (3.5 mm 316L SS Wall)</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span className="text-slate-400">Wetted Metal Material:</span>
                      <strong className="text-emerald-400">AISI 316L Stainless Steel</strong>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-400">Hydraulic Pressure Rating:</span>
                      <strong className="text-slate-200">Tested to 8.0 bar (116 PSI)</strong>
                    </div>
                  </div>
                </div>

                {/* Optics & Sensors */}
                <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 text-purple-400 font-bold text-sm">
                    <Cpu className="w-4 h-4" />
                    <span>Optics, Windows &amp; Dual Sensors</span>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <div className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span className="text-slate-400">Calibrated Water Optical Gap:</span>
                      <strong className="text-purple-300">20.0 mm (2.00 cm ±0.1 mm)</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span className="text-slate-400">Fused-Silica Windows (3x):</span>
                      <strong className="text-white">Ø 15.0 mm × 2.0 mm (Suprasil 300)</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span className="text-slate-400">UVC Emitter Board:</span>
                      <strong className="text-photon-cyan">4x 275 nm LEDs + MCPCB Al Heat Sink</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span className="text-slate-400">SiC Photodiodes (2x):</span>
                      <strong className="text-sky-300">sglux SG01S-C18 (Solar-Blind UVC)</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span className="text-slate-400">Internal Reflective Liner:</span>
                      <strong className="text-emerald-400">Virgin PTFE (&gt;90% Diffuse Refl)</strong>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-400">Static Seals (O-Rings):</span>
                      <strong className="text-slate-200">Food-Grade EPDM (FDA 21 CFR 177)</strong>
                    </div>
                  </div>
                </div>

              </div>

              {/* Hydraulics & Safety Architecture */}
              <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Hydraulics &amp; Fail-Safe Actuation Architecture</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300">
                  <div className="p-3 rounded-xl bg-obsidian-900 border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400">Booster Pump Control:</span>
                    <p className="font-bold text-photon-cyan">24V Diaphragm Pump</p>
                    <p className="text-[10px] text-slate-400">PWM Speed Controlled via PI loop at 2 Hz update rate</p>
                  </div>
                  <div className="p-3 rounded-xl bg-obsidian-900 border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400">Fail-Closed Safety Valve:</span>
                    <p className="font-bold text-rose-400">Normally-Closed Solenoid</p>
                    <p className="text-[10px] text-slate-400">De-energized shut in &lt;2s when Dose &lt; 40 mJ/cm² or power cut</p>
                  </div>
                  <div className="p-3 rounded-xl bg-obsidian-900 border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400">Interlock Protection:</span>
                    <p className="font-bold text-amber-400">Magnetic Reed Switch</p>
                    <p className="text-[10px] text-slate-400">Hardware interrupt directly cuts UVC LED driver power in &lt;1 ms</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Parametric OpenSCAD Code */}
          {activeTab === 'cad' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white font-sans">Parametric OpenSCAD / Fusion 360 Script</h4>
                  <p className="text-xs text-slate-400">
                    Use this script to generate exact solids in Onshape, Autodesk Fusion 360, or OpenSCAD.
                  </p>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 hover:bg-slate-850 text-photon-cyan border border-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Script'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-obsidian-950 border border-slate-800 text-photon-cyan/90 overflow-x-auto max-h-[380px] leading-relaxed select-all">
                <code>{OPENSCAD_CAD_SCRIPT}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: Prototype BOM */}
          {activeTab === 'bom' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white font-sans">Prototype Sourcing &amp; Execution Budget</h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Verified against Team SpaceX Stage 1 Abstract Submission (Order of Magnitude: ₹28,000)
                  </p>
                </div>
                <span className="px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                  Total Prototype Cost: ₹28,000
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-950 shadow-nested">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-obsidian-950 border-b border-slate-800 text-slate-400 text-[11px]">
                      <th className="p-3">Component</th>
                      <th className="p-3">Qty</th>
                      <th className="p-3">Purpose / Technical Specification</th>
                      <th className="p-3 text-right">Approx. ₹</th>
                      <th className="p-3">Sourcing Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {PROTOTYPE_BOM.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-850/40 transition-colors">
                        <td className="p-3 font-bold text-white font-sans">{item.component}</td>
                        <td className="p-3">{item.qty}</td>
                        <td className="p-3 text-slate-400">{item.spec}</td>
                        <td className="p-3 text-right text-photon-cyan font-bold">{item.approxInr.toLocaleString()}</td>
                        <td className="p-3 text-slate-300">{item.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3.5 rounded-2xl bg-photon-cyan/5 border border-photon-cyan/20 text-xs text-slate-300 flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-photon-cyan mt-0.5 flex-shrink-0" />
                <p>
                  <strong className="text-white">Atomberg Mass-Production Cost Target: ₹800</strong> — In high-volume production, the add-on module replaces dedicated drivers with Atomberg’s main BLDC motor controller board, uses dual SMD photodiode packages, and utilizes existing IoT MCU lines, bringing marginal BOM cost to under ₹800.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: 90-Sec Video Script */}
          {activeTab === 'video' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-purple-200 font-sans">
                    atomQUEST 2026 • Round 2 Level 1 Video Submission
                  </h4>
                  <p className="text-xs text-purple-300/80">
                    Exact 90-second script &amp; storyboard for Team SpaceX (KIIT) to showcase DoseGuard.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold">
                  Target: 01:30 Max
                </span>
              </div>

              <div className="space-y-3">
                {VIDEO_SCRIPT.map((scene, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-photon-cyan font-bold">
                      <span>{scene.scene}</span>
                      <span className="text-[11px] text-slate-500">{scene.timestamp}</span>
                    </div>
                    <p className="text-slate-300 font-sans leading-relaxed">
                      <strong className="text-white font-mono">Spoken Audio:</strong> {scene.spoken}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      <strong className="text-amber-400">Visual:</strong> {scene.visual}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: Physics & Mathematical Control Model */}
          {activeTab === 'math' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-sm text-white font-sans">DoseGuard Photochemical &amp; Radiative Control Model</h4>
                <p className="text-xs text-slate-400">
                  Exact mathematical equations governing real-time firmware execution at 2 Hz.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-2">
                  <span className="text-photon-cyan font-bold block">1. Optical Transmittance &amp; Sensors</span>
                  <p>• A₁ = 0.02 + 0.0045 · tea (Absorbance at 1 cm, cm⁻¹)</p>
                  <p>• T = 10^(-PATH · A₁) (Transmittance over PATH = 2.0 cm)</p>
                  <p>• PD-A = (coverClosed &amp;&amp; !fault) ? (lampOutput / 100) · noise : 0</p>
                  <p>• PD-B = PD-A · T · noise (noise = 1 ± 0.5%)</p>
                  <p>• sensorsOk = coverClosed &amp;&amp; !fault &amp;&amp; PD-A &gt; 0.30 &amp;&amp; PD-B &gt; 0 &amp;&amp; PD-B ≤ 1.05·PD-A</p>
                </div>

                <div className="p-4 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-2">
                  <span className="text-purple-400 font-bold block">2. Chamber Fluence &amp; Adaptive Dosing</span>
                  <p>• tRatio = clamp(PD-B / PD-A, 0.02, 1.0)</p>
                  <p>• af = tRatio &gt; 0.999 ? 1.0 : (1 - tRatio) / (-ln tRatio) (Mean fluence factor)</p>
                  <p>• Fluence Rate F = K · PD-A · af (where K = 8.4 mW/cm²)</p>
                  <p>• qSet = clamp(F · V / D_TARGET, Q_MIN, Q_MAX) (V = 30 mL, D_TARGET = 44 mJ/cm²)</p>
                  <p>• Delivered Dose = F · V / qSet</p>
                  <p>• valveOpen = sensorsOk &amp;&amp; (Dose ≥ D_SET = 40 mJ/cm²) (Fail-Closed)</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: Int8 Edge AI & ESP32 Firmware */}
          {activeTab === 'edgeai' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-photon-cyan/5 border border-photon-cyan/25 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-sm text-white font-sans">
                    Symmetric Int8 Edge AI Prognosis &amp; Anomaly Engine (ESP32 Core 0)
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Trained on {EDGE_AI_METADATA.dataset_rows.toLocaleString()} Monte Carlo optical-hydraulic snapshots ({EDGE_AI_METADATA.dataset_units} purifier units, unit-grouped split).
                  </p>
                </div>
                <a
                  href="https://colab.research.google.com/github/kodeashu/doseguard/blob/main/edge_ai/DoseGuard_Edge_AI_Colab.ipynb"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-photon-cyan to-teal-400 text-obsidian-950 font-bold text-xs shadow-md hover:opacity-95 transition-opacity"
                >
                  Open Colab Notebook ↗
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[11px]">Task 1: Lamp RUL Regression</span>
                  <p className="text-lg font-extrabold text-photon-cyan">
                    {EDGE_AI_METADATA.rul_int8_mae_days}d MAE (R² {EDGE_AI_METADATA.rul_int8_r2})
                  </p>
                  <p className="text-[11px] text-emerald-400">
                    -{EDGE_AI_METADATA.rul_mae_improvement_pct}% error vs Linear L70 ({EDGE_AI_METADATA.rul_linear_mae_days}d MAE)
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[11px]">Task 2 &amp; 3: Surge &amp; Fouling ROC-AUC</span>
                  <p className="text-lg font-extrabold text-purple-300">
                    {EDGE_AI_METADATA.spike_int8_roc_auc} / {EDGE_AI_METADATA.anom_int8_roc_auc}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    15-min Monsoon Surge (F1 {EDGE_AI_METADATA.spike_int8_f1}) &amp; Quartz Scaling
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[11px]">ESP32 Footprint &amp; Parity</span>
                  <p className="text-lg font-extrabold text-emerald-400">
                    {EDGE_AI_METADATA.total_int8_flash_bytes} Bytes Flash
                  </p>
                  <p className="text-[11px] text-slate-400">
                    ~{EDGE_AI_METADATA.esp32_est_latency_us} µs on Core 0 • ΔInt8={EDGE_AI_METADATA.quantization_mae_delta_days}d
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-2">
                <span className="text-emerald-400 font-bold block">
                  Safety Case: Hardware-Isolated Advisory Architecture
                </span>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">
                  On the dual-core ESP32, Core 1 executes the deterministic 2 Hz (500 ms) Beer-Lambert control loop and owns exclusive hardware write access to <code className="text-photon-cyan">PIN_SOLENOID_VALVE</code>. Core 0 runs <code className="text-purple-300">doseguard_run_advisory_inference()</code> every 5 seconds inside an isolated FreeRTOS task (<code className="text-photon-cyan">edge_ai/esp32_firmware/doseguard_model_int8.h</code>). Even if adversarial or corrupted sensor inputs are fed into the neural network, it is physically and architecturally impossible for the ML model to hold the solenoid valve open when Delivered Dose &lt; 40.0 mJ/cm².
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-obsidian-950/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Target CAD Environment: Autodesk Fusion 360 / Onshape / SolidWorks</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close Blueprint
          </button>
        </div>

      </div>
    </div>
  );
};
