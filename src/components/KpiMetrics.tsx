import React from 'react';
import { 
  Waves, 
  Gauge, 
  Droplet, 
  ShieldAlert, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Unlock,
  AlertTriangle
} from 'lucide-react';
import { SimulationOutputs, SystemInputs } from '../types';

interface KpiMetricsProps {
  outputs: SimulationOutputs;
  inputs: SystemInputs;
}

export const KpiMetrics: React.FC<KpiMetricsProps> = ({ outputs, inputs }) => {
  const { uvtPerCm, T, dose, flowLPerMin, flowMlPerSec, qSet, valveOpen, pdA, pdB, safetyState } = outputs;
  const { lampOutput, coverClosed } = inputs;

  const isSafeDose = dose >= 40.0;
  const doseMargin = dose - 40.0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6">
      
      {/* 1. UV Transmittance Card */}
      <div className="p-4 rounded-2xl bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md flex flex-col justify-between hover:border-slate-700/80 transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5 text-photon-cyan">
            <Waves className="w-4 h-4" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
              UV Transmittance
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-800 text-slate-400 border border-slate-700">
            Per cm
          </span>
        </div>

        <div className="my-2.5">
          <div className="flex items-baseline space-x-1.5">
            <span className={`text-3xl font-black font-mono tracking-tight ${
              uvtPerCm >= 85 ? 'text-white' : uvtPerCm >= 60 ? 'text-amber-300' : 'text-rose-400'
            }`}>
              {uvtPerCm.toFixed(1)}
            </span>
            <span className="text-sm font-bold text-slate-400 font-mono">%</span>
          </div>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">
            2.0 cm Path T: <strong className="text-slate-200">{(T * 100).toFixed(1)}%</strong>
          </p>
        </div>

        {/* Mini gauge bar */}
        <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
          <div 
            className={`h-full rounded-full transition-all duration-300 ${
              uvtPerCm >= 85 ? 'bg-photon-cyan' : uvtPerCm >= 60 ? 'bg-amber-400' : 'bg-rose-500'
            }`}
            style={{ width: `${Math.min(100, Math.max(0, uvtPerCm))}%` }}
          />
        </div>
      </div>

      {/* 2. Delivered UV Dose Card */}
      <div className={`p-4 rounded-2xl border shadow-bezel backdrop-blur-md flex flex-col justify-between transition-all ${
        !valveOpen 
          ? 'bg-rose-950/20 border-rose-500/40 ring-1 ring-rose-500/20' 
          : dose >= 44.0 
          ? 'bg-obsidian-900/90 border-slate-800' 
          : 'bg-amber-950/20 border-amber-500/40'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5 text-photon-teal">
            <Gauge className="w-4 h-4" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
              Delivered Dose
            </span>
          </div>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border ${
            !valveOpen 
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' 
              : dose >= 44.0 
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
              : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
          }`}>
            {!valveOpen ? 'TRIPPED' : dose >= 44.0 ? 'SAFE' : 'THROTTLED'}
          </span>
        </div>

        <div className="my-2.5">
          <div className="flex items-baseline space-x-1.5">
            <span className={`text-3xl font-black font-mono tracking-tight ${
              !valveOpen ? 'text-rose-400' : dose >= 44.0 ? 'text-emerald-400' : 'text-amber-300'
            }`}>
              {dose.toFixed(1)}
            </span>
            <span className="text-xs font-bold text-slate-400 font-mono">mJ/cm²</span>
          </div>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">
            Target: <span className="text-emerald-400 font-bold">44.0</span> • Min Cutoff: <span className="text-rose-400 font-bold">40.0</span>
          </p>
        </div>

        {/* Dose status badge */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>NSF 55 Class A:</span>
          <span className={`font-bold ${isSafeDose ? 'text-emerald-400' : 'text-rose-400'}`}>
            {isSafeDose ? `+${doseMargin.toFixed(1)} Margin` : 'Below 40 Cutoff'}
          </span>
        </div>
      </div>

      {/* 3. Dispense Flow Rate Card */}
      <div className="p-4 rounded-2xl bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md flex flex-col justify-between hover:border-slate-700/80 transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5 text-photon-amber">
            <Droplet className="w-4 h-4" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
              Dispense Flow
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700">
            qSet: {qSet.toFixed(1)} mL/s
          </span>
        </div>

        <div className="my-2.5">
          <div className="flex items-baseline space-x-1.5">
            <span className={`text-3xl font-black font-mono tracking-tight ${
              flowLPerMin > 0 ? 'text-amber-300' : 'text-slate-500'
            }`}>
              {flowLPerMin.toFixed(2)}
            </span>
            <span className="text-sm font-bold text-slate-400 font-mono">L/min</span>
          </div>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">
            Actual: <strong className="text-slate-200">{flowMlPerSec.toFixed(2)} mL/s</strong> {valveOpen ? '(Active)' : '(Locked 0)'}
          </p>
        </div>

        {/* Flow meter bar */}
        <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
          <div 
            className="h-full bg-photon-amber rounded-full transition-all duration-300"
            style={{ width: `${(flowLPerMin / 0.50) * 100}%` }}
          />
        </div>
      </div>

      {/* 4. Solenoid Valve Card — CRITICAL FIX: Clear Type vs State */}
      <div className={`p-4 rounded-2xl border shadow-bezel backdrop-blur-md flex flex-col justify-between transition-all ${
        valveOpen 
          ? 'bg-obsidian-900/90 border-slate-800' 
          : 'bg-rose-950/30 border-rose-500/50 shadow-hazard-glow'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5 text-slate-300">
            {valveOpen ? <Unlock className="w-4 h-4 text-emerald-400" /> : <Lock className="w-4 h-4 text-rose-400" />}
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
              Solenoid Valve
            </span>
          </div>
          {/* Clarified: NC describes valve mechanical safety design */}
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-800 text-slate-400 border border-slate-700" title="Mechanical configuration: Normally-Closed (spring shuts when de-energized)">
            Type: NC Safe
          </span>
        </div>

        <div className="my-2.5">
          <div className="flex items-center space-x-2">
            <span className={`w-3 h-3 rounded-full ${
              valveOpen ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : 'bg-rose-500 animate-ping'
            }`} />
            <span className={`text-xl sm:text-2xl font-black font-mono tracking-tight ${
              valveOpen ? 'text-emerald-400' : 'text-rose-400'
            }`}>
              {valveOpen ? 'OPEN' : 'FAIL-CLOSED'}
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-mono mt-1">
            {valveOpen ? 'Power Energized (Water Flowing)' : 'Spring Retracted (Safe Isolation)'}
          </p>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-1.5">
          <span>Cover Interlock:</span>
          <span className={`font-bold ${coverClosed ? 'text-emerald-400' : 'text-rose-400'}`}>
            {coverClosed ? 'LATCHED' : 'BREACHED'}
          </span>
        </div>
      </div>

      {/* 5. UV Source / Photodiode Status Card */}
      <div className="p-4 rounded-2xl bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md flex flex-col justify-between hover:border-slate-700/80 transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5 text-uv-bright">
            <Zap className="w-4 h-4" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
              UVC Source
            </span>
          </div>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border ${
            !coverClosed 
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' 
              : pdA > 0.6 
              ? 'bg-purple-500/20 text-purple-300 border-purple-500/40' 
              : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
          }`}>
            {!coverClosed ? 'CUT' : pdA > 0.6 ? 'HEALTHY' : 'AGING'}
          </span>
        </div>

        <div className="my-2.5">
          <div className="flex items-baseline space-x-1.5">
            <span className="text-3xl font-black font-mono tracking-tight text-white">
              {coverClosed ? lampOutput : 0}
            </span>
            <span className="text-sm font-bold text-slate-400 font-mono">%</span>
          </div>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">
            PD-A: <strong className="text-cyan-300">{pdA.toFixed(2)}</strong> • PD-B: <strong className="text-purple-300">{pdB.toFixed(2)}</strong>
          </p>
        </div>

        {/* Source emission bar */}
        <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-uv-deep to-uv-bright rounded-full transition-all duration-300"
            style={{ width: `${coverClosed ? lampOutput : 0}%` }}
          />
        </div>
      </div>

    </div>
  );
};
