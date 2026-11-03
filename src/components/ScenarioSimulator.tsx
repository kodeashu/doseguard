import React, { useState, useEffect } from 'react';
import { 
  Sliders, 
  Sparkles, 
  Play, 
  RotateCcw, 
  Droplet, 
  Sun, 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle,
  Flame,
  CloudRain,
  GlassWater
} from 'lucide-react';
import { SystemInputs } from '../types';

interface ScenarioSimulatorProps {
  inputs: SystemInputs;
  onUpdateInputs: (partial: Partial<SystemInputs>) => void;
  onResetDefaults: () => void;
  calculatedUvtPerCm: number;
  calculatedA1: number;
  calculatedT: number;
}

export const ScenarioSimulator: React.FC<ScenarioSimulatorProps> = ({
  inputs,
  onUpdateInputs,
  onResetDefaults,
  calculatedUvtPerCm,
  calculatedA1,
  calculatedT,
}) => {
  const [autoDemoActive, setAutoDemoActive] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [demoProgress, setDemoProgress] = useState(0);

  // Auto demonstration sequence for screen recording
  useEffect(() => {
    if (!autoDemoActive) return;

    const steps = [
      { name: '1/4: Clear Tap Water (Nominal 44 mJ/cm²)', tea: 0, lamp: 100, cover: true, fault: false },
      { name: '2/4: Borewell w/ Dissolved Iron (Adaptive Throttling)', tea: 45, lamp: 95, cover: true, fault: false },
      { name: '3/4: Monsoon Silt & Tannins (FAIL_CLOSED Cutoff)', tea: 85, lamp: 90, cover: true, fault: false },
      { name: '4/4: Interlock Safety Breach (Cover Open Power Cut)', tea: 10, lamp: 100, cover: false, fault: false },
    ];

    let timer = setInterval(() => {
      setDemoProgress((prev) => {
        if (prev >= 100) {
          setDemoStep((s) => {
            const next = (s + 1) % steps.length;
            const target = steps[next];
            onUpdateInputs({
              tea: target.tea,
              lampOutput: target.lamp,
              coverClosed: target.cover,
              sensorFault: target.fault,
            });
            return next;
          });
          return 0;
        }
        return prev + 5;
      });
    }, 500);

    return () => clearInterval(timer);
  }, [autoDemoActive, onUpdateInputs]);

  const handleStartAutoDemo = () => {
    setAutoDemoActive(!autoDemoActive);
    if (!autoDemoActive) {
      setDemoStep(0);
      setDemoProgress(0);
      onUpdateInputs({ tea: 0, lampOutput: 100, coverClosed: true, sensorFault: false });
    }
  };

  const handleApplyPreset = (preset: 'clear' | 'borewell' | 'monsoon') => {
    setAutoDemoActive(false);
    if (preset === 'clear') {
      onUpdateInputs({ tea: 0, lampOutput: 100, coverClosed: true, sensorFault: false });
    } else if (preset === 'borewell') {
      onUpdateInputs({ tea: 45, lampOutput: 95, coverClosed: true, sensorFault: false });
    } else if (preset === 'monsoon') {
      onUpdateInputs({ tea: 85, lampOutput: 90, coverClosed: true, sensorFault: false });
    }
  };

  return (
    <div className="rounded-3xl p-5 sm:p-6 bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md mb-6">
      
      {/* Panel Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-purple-500/10 text-uv-bright border border-purple-500/30">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase font-sans">
              Mission Control &amp; Scenario Simulator
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Inject Environmental Turbidity, Lamp Aging, Interlock Breaches &amp; Hardware Faults
            </p>
          </div>
        </div>

        <button
          onClick={onResetDefaults}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-mono transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      {/* Preset Cards & Auto Demo Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        
        {/* Preset 1: Clear Water */}
        <button
          onClick={() => handleApplyPreset('clear')}
          className={`flex items-start space-x-3 p-3.5 rounded-2xl border text-left transition-all ${
            inputs.tea <= 5 && inputs.coverClosed && !inputs.sensorFault
              ? 'bg-photon-cyan/15 border-photon-cyan/50 text-white shadow-lg shadow-photon-cyan/10 ring-1 ring-photon-cyan/20'
              : 'bg-obsidian-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700'
          }`}
        >
          <div className="p-2 rounded-xl bg-photon-cyan/20 text-photon-cyan mt-0.5">
            <GlassWater className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold leading-tight block">Clear Tap Water</span>
            <span className="text-[11px] text-slate-400 font-mono">RUNNING (Max Flow)</span>
          </div>
        </button>

        {/* Preset 2: Borewell Iron */}
        <button
          onClick={() => handleApplyPreset('borewell')}
          className={`flex items-start space-x-3 p-3.5 rounded-2xl border text-left transition-all ${
            inputs.tea > 30 && inputs.tea <= 55 && inputs.coverClosed && !inputs.sensorFault
              ? 'bg-amber-500/15 border-amber-500/50 text-white shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/20'
              : 'bg-obsidian-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700'
          }`}
        >
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 mt-0.5">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold leading-tight block">Borewell w/ Iron</span>
            <span className="text-[11px] text-slate-400 font-mono">THROTTLED Control</span>
          </div>
        </button>

        {/* Preset 3: Monsoon Silt */}
        <button
          onClick={() => handleApplyPreset('monsoon')}
          className={`flex items-start space-x-3 p-3.5 rounded-2xl border text-left transition-all ${
            inputs.tea >= 80 && inputs.coverClosed && !inputs.sensorFault
              ? 'bg-rose-500/15 border-rose-500/50 text-white shadow-lg shadow-rose-500/10 ring-1 ring-rose-500/20'
              : 'bg-obsidian-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700'
          }`}
        >
          <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 mt-0.5">
            <CloudRain className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold leading-tight block">Monsoon Turbid</span>
            <span className="text-[11px] text-slate-400 font-mono">FAIL_CLOSED Cutoff</span>
          </div>
        </button>

        {/* Preset 4: Auto Demo Loop */}
        <button
          onClick={handleStartAutoDemo}
          className={`flex items-start space-x-3 p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden ${
            autoDemoActive
              ? 'bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-uv-deep/40 border-purple-500/60 text-white shadow-lg shadow-purple-500/20 ring-1 ring-purple-400/40'
              : 'bg-obsidian-950/70 border-purple-500/30 text-purple-300 hover:bg-purple-950/30 hover:border-purple-500/50'
          }`}
        >
          <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 mt-0.5">
            {autoDemoActive ? <Sparkles className="w-4 h-4 animate-spin text-purple-200" /> : <Play className="w-4 h-4" />}
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xs font-bold leading-tight">Auto Demo</span>
              {autoDemoActive && <span className="w-2 h-2 rounded-full bg-photon-cyan animate-ping" />}
            </div>
            <span className="text-[11px] text-purple-300/80 font-mono">
              {autoDemoActive ? 'Running Ramp...' : 'Screen-Rec Mode'}
            </span>
          </div>
        </button>
      </div>

      {/* Auto Demo Progress Bar */}
      {autoDemoActive && (
        <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-800/50 mb-5 space-y-2 animate-fade-in">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-purple-200 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>Automated Presentation Sequence</span>
            </span>
            <span className="text-photon-cyan font-bold">{Math.round(demoProgress)}%</span>
          </div>
          <div className="w-full bg-obsidian-950 rounded-full h-2 overflow-hidden border border-purple-900/50">
            <div
              className="h-full bg-gradient-to-r from-photon-cyan via-amber-400 to-rose-500 rounded-full transition-all duration-300"
              style={{ width: `${demoProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        
        {/* Slider 1: Water Turbidity / Tea Absorbance */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label htmlFor="tea-slider" className="text-xs font-bold text-slate-200 flex items-center space-x-1.5 font-mono">
              <Droplet className="w-3.5 h-3.5 text-amber-400" />
              <span>Water Absorbance / Turbidity (tea):</span>
            </label>
            <div className="flex items-center space-x-1 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-photon-cyan font-bold border border-slate-700">
                {inputs.tea}
              </span>
              <span className="text-slate-500">/ 100</span>
            </div>
          </div>

          <input
            id="tea-slider"
            type="range"
            min="0"
            max="100"
            step="1"
            value={inputs.tea}
            disabled={autoDemoActive}
            onChange={(e) => onUpdateInputs({ tea: Number(e.target.value) })}
            className="w-full h-2.5 bg-gradient-to-r from-sky-400 via-amber-500 to-amber-900 rounded-lg appearance-none cursor-pointer accent-photon-cyan disabled:opacity-50"
          />

          {/* Quick Preset Marks */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <button onClick={() => onUpdateInputs({ tea: 0 })} disabled={autoDemoActive} className="hover:text-photon-cyan transition-colors">0 (Clear)</button>
            <button onClick={() => onUpdateInputs({ tea: 30 })} disabled={autoDemoActive} className="hover:text-amber-300 transition-colors">30 (Slight)</button>
            <button onClick={() => onUpdateInputs({ tea: 60 })} disabled={autoDemoActive} className="hover:text-amber-400 transition-colors">60 (Moderate)</button>
            <button onClick={() => onUpdateInputs({ tea: 85 })} disabled={autoDemoActive} className="hover:text-rose-400 transition-colors">85 (Critical)</button>
            <button onClick={() => onUpdateInputs({ tea: 100 })} disabled={autoDemoActive} className="hover:text-rose-500 transition-colors">100 (Max)</button>
          </div>

          {/* CRITICAL FIX: Live Inline Calculated UVT % and Absorbance */}
          <div className="p-2.5 rounded-xl bg-obsidian-950/80 border border-slate-800/80 text-[11px] font-mono text-slate-300 flex items-center justify-between">
            <span>Resulting Optical Properties:</span>
            <div className="flex items-center space-x-2">
              <span className="text-photon-cyan font-bold">UVT: {calculatedUvtPerCm.toFixed(1)}%/cm</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">A₁: {calculatedA1.toFixed(3)} cm⁻¹</span>
              <span className="text-slate-600">|</span>
              <span className="text-purple-300 font-bold">2cm T: {(calculatedT * 100).toFixed(1)}%</span>
            </div>
          </div>
        </div>

        {/* Slider 2: Lamp Output / Emitter Aging */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label htmlFor="lamp-slider" className="text-xs font-bold text-slate-200 flex items-center space-x-1.5 font-mono">
              <Sun className="w-3.5 h-3.5 text-uv-bright" />
              <span>UV Lamp Intensity Output:</span>
            </label>
            <div className="flex items-center space-x-1 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-purple-300 font-bold border border-slate-700">
                {inputs.lampOutput}%
              </span>
            </div>
          </div>

          <input
            id="lamp-slider"
            type="range"
            min="40"
            max="100"
            step="1"
            value={inputs.lampOutput}
            disabled={autoDemoActive}
            onChange={(e) => onUpdateInputs({ lampOutput: Number(e.target.value) })}
            className="w-full h-2.5 bg-gradient-to-r from-purple-800 via-purple-500 to-uv-bright rounded-lg appearance-none cursor-pointer accent-purple-400 disabled:opacity-50"
          />

          {/* Quick Preset Marks */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <button onClick={() => onUpdateInputs({ lampOutput: 40 })} disabled={autoDemoActive} className="hover:text-rose-400 transition-colors">40% (Degraded)</button>
            <button onClick={() => onUpdateInputs({ lampOutput: 60 })} disabled={autoDemoActive} className="hover:text-amber-400 transition-colors">60%</button>
            <button onClick={() => onUpdateInputs({ lampOutput: 80 })} disabled={autoDemoActive} className="hover:text-purple-300 transition-colors">80%</button>
            <button onClick={() => onUpdateInputs({ lampOutput: 100 })} disabled={autoDemoActive} className="hover:text-emerald-400 transition-colors">100% (Nominal)</button>
          </div>

          {/* Photodiode Live Response Preview */}
          <div className="p-2.5 rounded-xl bg-obsidian-950/80 border border-slate-800/80 text-[11px] font-mono text-slate-300 flex items-center justify-between">
            <span>Reference Irradiance:</span>
            <div className="flex items-center space-x-2">
              <span className="text-cyan-300 font-bold">PD-A: {(inputs.lampOutput / 100).toFixed(2)} V</span>
              <span className="text-slate-600">|</span>
              <span className={inputs.lampOutput <= 50 ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                {inputs.lampOutput <= 50 ? 'Low Intensity' : 'Optimal Radiant Flux'}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Hardware Interlock, Fault Injection & Quartz Window Fouling Switches */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-5 border-t border-slate-800/80">
        
        {/* Cover Interlock Switch */}
        <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 flex items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-200 font-mono">
              {inputs.coverClosed ? <ShieldCheck className="w-4 h-4 text-emerald-400" /> : <ShieldAlert className="w-4 h-4 text-rose-400" />}
              <span>Chamber Cover Interlock</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              {inputs.coverClosed ? 'Reed switch latched. UVC power safe.' : 'Breached! Hardware cuts UVC power in <1 ms.'}
            </p>
          </div>

          <button
            onClick={() => onUpdateInputs({ coverClosed: !inputs.coverClosed })}
            disabled={autoDemoActive}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all whitespace-nowrap ${
              inputs.coverClosed
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 hover:bg-emerald-500/30'
                : 'bg-rose-500/20 text-rose-300 border-rose-500/50 hover:bg-rose-500/30 animate-pulse'
            }`}
          >
            {inputs.coverClosed ? 'Cover Closed' : 'Cover Breached'}
          </button>
        </div>

        {/* Sensor Anomaly Injection */}
        <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 flex items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-200 font-mono">
              <AlertTriangle className={`w-4 h-4 ${inputs.sensorFault ? 'text-rose-400' : 'text-slate-400'}`} />
              <span>Dual-Photodiode Fault</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              {inputs.sensorFault ? 'Corrupt ratio injected (PD-B > PD-A).' : 'Sensors within calibrated optical envelope.'}
            </p>
          </div>

          <button
            onClick={() => onUpdateInputs({ sensorFault: !inputs.sensorFault })}
            disabled={autoDemoActive}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all whitespace-nowrap ${
              inputs.sensorFault
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 hover:bg-rose-500/30 animate-pulse'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            {inputs.sensorFault ? 'Fault Active' : 'Inject Fault'}
          </button>
        </div>

        {/* Suprasil-300 Quartz Window Scaling (Edge AI Diagnostic Test) */}
        <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 flex items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-200 font-mono">
              <Sparkles className={`w-4 h-4 ${(inputs.windowFouling ?? 0) > 0 ? 'text-purple-400' : 'text-slate-400'}`} />
              <span>Quartz Window Fouling</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              {(inputs.windowFouling ?? 0) > 0
                ? `${inputs.windowFouling}% mineral film; AI isolates from LED wear.`
                : 'Suprasil-300 optical windows clean (0% film).'}
            </p>
          </div>

          <button
            onClick={() =>
              onUpdateInputs({
                windowFouling: (inputs.windowFouling ?? 0) >= 8 ? 0 : (inputs.windowFouling ?? 0) === 0 ? 5 : 10,
              })
            }
            disabled={autoDemoActive}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all whitespace-nowrap ${
              (inputs.windowFouling ?? 0) > 0
                ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 hover:bg-purple-500/30'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            {(inputs.windowFouling ?? 0) > 0 ? `Fouled (${inputs.windowFouling}%)` : 'Simulate Scaling'}
          </button>
        </div>

      </div>

    </div>
  );
};
