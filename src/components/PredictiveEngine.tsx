import React, { useState } from 'react';
import { 
  TrendingDown, 
  Wrench, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Gauge
} from 'lucide-react';
import { LampPrognosis } from '../types';

interface PredictiveEngineProps {
  prognosis: LampPrognosis;
  onInstallNewLamp: () => void;
  speedMultiplier: number;
  onSetSpeedMultiplier: (speed: number) => void;
}

export const PredictiveEngine: React.FC<PredictiveEngineProps> = ({
  prognosis,
  onInstallNewLamp,
  speedMultiplier,
  onSetSpeedMultiplier,
}) => {
  const { currentPdA, criticalPdA, remainingHours, remainingDays, isUrgent, accumulatedHours, safetyMarginPct } = prognosis;

  // SVG chart dimensions
  const width = 480;
  const height = 180;
  const pad = { top: 20, right: 30, bottom: 30, left: 45 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;

  // Scales
  const maxHours = 12000;
  const getY = (val: number) => pad.top + plotH - (Math.max(0, Math.min(1.0, val)) / 1.0) * plotH;
  const getX = (hrs: number) => pad.left + (Math.max(0, Math.min(maxHours, hrs)) / maxHours) * plotW;

  // Critical threshold Y
  const critY = getY(criticalPdA);
  const curX = getX(accumulatedHours);
  const curY = getY(currentPdA);

  // Decay curve line: starts at 1.0 at 0 hrs and reaches 0.3 at 12,000 hrs
  const startY = getY(1.0);
  const endY = getY(0.3);

  const prognosisStatus = remainingHours <= 0 
    ? 'EXPIRED' 
    : isUrgent 
    ? 'SERVICE SOON' 
    : 'OPTIMAL';

  return (
    <div className="rounded-3xl p-5 sm:p-6 bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md mb-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-purple-500/10 text-uv-bright border border-purple-500/30">
            <TrendingDown className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase font-sans">
              Predictive Lamp-Decay Forecasting Engine
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Photodiode Trend Regression &amp; Service Lifetime Projection at Q_MIN (3.0 mL/s)
            </p>
          </div>
        </div>

        <button
          onClick={onInstallNewLamp}
          className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-bold text-xs shadow-md shadow-purple-500/20 border border-purple-400/40 transition-all active:scale-[0.98]"
        >
          <Wrench className="w-3.5 h-3.5" />
          <span>Install Brand-New Lamp</span>
        </button>
      </div>

      {/* 3 Metric Cards + Trajectory Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 font-mono">
        
        {/* Card 1: Service Prognosis */}
        <div className={`p-4 rounded-2xl border flex flex-col justify-between transition-all ${
          prognosisStatus === 'EXPIRED'
            ? 'bg-rose-950/30 border-rose-500/50 shadow-hazard-glow'
            : prognosisStatus === 'SERVICE SOON'
            ? 'bg-amber-950/30 border-amber-500/50'
            : 'bg-obsidian-950/70 border-slate-800'
        }`}>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Service Prognosis:</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
              prognosisStatus === 'EXPIRED'
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                : prognosisStatus === 'SERVICE SOON'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
            }`}>
              {prognosisStatus}
            </span>
          </div>

          <div className="my-3">
            <div className="flex items-baseline space-x-2">
              <span className={`text-4xl font-black tracking-tight ${
                prognosisStatus === 'EXPIRED' ? 'text-rose-400' : prognosisStatus === 'SERVICE SOON' ? 'text-amber-400' : 'text-purple-300'
              }`}>
                {prognosisStatus === 'EXPIRED' ? '0' : remainingDays >= 999 ? '> 999' : Math.round(remainingDays)}
              </span>
              <span className="text-sm font-bold text-slate-400">Days</span>
            </div>
            <p className="text-xs text-slate-400 font-sans mt-1">
              {prognosisStatus === 'EXPIRED' 
                ? 'Lamp irradiance depleted below Q_MIN safety envelope.' 
                : `≈ ${Math.round(remainingHours).toLocaleString()} operating hours remaining`}
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
            <span>Runtime Tracked:</span>
            <span className="text-white font-bold">{Math.round(accumulatedHours).toLocaleString()} hrs</span>
          </div>
        </div>

        {/* Card 2: Optical Headroom Margin */}
        <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Optical Safety Margin:</span>
            <span className="text-photon-cyan font-bold">PD-A vs Critical Floor</span>
          </div>

          <div className="space-y-2 my-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Current PD-A:</span>
              <span className="text-white font-bold">{currentPdA.toFixed(3)} V</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Critical Cutoff Floor:</span>
              <span className="text-rose-400 font-bold">{criticalPdA.toFixed(3)} V</span>
            </div>
            <div className="flex justify-between border-t border-slate-800/80 pt-1.5">
              <span className="text-slate-300">Safety Headroom:</span>
              <span className={`font-bold ${safetyMarginPct > 20 ? 'text-emerald-400' : 'text-amber-400'}`}>
                +{safetyMarginPct.toFixed(1)}%
              </span>
            </div>
          </div>

          <div className="w-full bg-obsidian-900 rounded-full h-1.5 overflow-hidden border border-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-rose-500 via-amber-400 to-photon-cyan rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, Math.max(0, safetyMarginPct))}%` }}
            />
          </div>
        </div>

        {/* Card 3: Expanded Decay Trajectory Chart */}
        <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-slate-300 font-bold">L70 Decay Trajectory</span>
            <span className="text-[10px] text-purple-300 font-mono">20% drop / 9,000 hrs</span>
          </div>

          {/* SVG Trajectory */}
          <div className="relative w-full h-28">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
              {/* Y Grid lines */}
              {[0.3, 0.6, 1.0].map((v) => {
                const y = getY(v);
                return (
                  <g key={`y-${v}`}>
                    <line x1={pad.left} y1={y} x2={width - pad.right} y2={y} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                    <text x={pad.left - 6} y={y + 3} fill="#64748b" fontSize="9" textAnchor="end">{v.toFixed(1)}</text>
                  </g>
                );
              })}

              {/* Critical Cutoff Line (Red) */}
              <line 
                x1={pad.left} 
                y1={critY} 
                x2={width - pad.right} 
                y2={critY} 
                stroke="#f43f5e" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
              />
              <text x={width - pad.right} y={critY - 4} fill="#f43f5e" fontSize="9" fontWeight="bold" textAnchor="end">
                PD-A Crit ({criticalPdA.toFixed(2)})
              </text>

              {/* Decay Curve Slope */}
              <line 
                x1={pad.left} 
                y1={startY} 
                x2={getX(12000)} 
                y2={endY} 
                stroke="#c084fc" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
              />

              {/* Current Operating Point Dot */}
              <circle 
                cx={curX} 
                cy={curY} 
                r="5" 
                fill="#00f2fe" 
                stroke="#ffffff" 
                strokeWidth="2" 
                className={speedMultiplier > 1 ? 'animate-ping' : ''} 
              />

              {/* X Axis */}
              <text x={pad.left} y={height - 8} fill="#64748b" fontSize="9">0 hrs</text>
              <text x={width - pad.right} y={height - 8} fill="#64748b" fontSize="9" textAnchor="end">12k hrs</text>
            </svg>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 pt-1">
            <span>Simulation Clock:</span>
            <span className="text-photon-cyan font-bold">{speedMultiplier}x Speed</span>
          </div>
        </div>

      </div>

      {/* Lamp Aging Acceleration Control */}
      <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-slate-800/90 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-purple-400" />
          <span className="text-slate-300 font-semibold">Lamp Aging Time-Acceleration Multiplier:</span>
          <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/40">
            {speedMultiplier}x Speed
          </span>
        </div>

        <div className="flex items-center space-x-1.5">
          {[1, 10, 100, 1000, 10000].map((spd) => (
            <button
              key={spd}
              onClick={() => onSetSpeedMultiplier(spd)}
              className={`px-3 py-1.5 rounded-xl border transition-all ${
                speedMultiplier === spd
                  ? 'bg-purple-600 text-white border-purple-400 font-bold shadow-md shadow-purple-500/20'
                  : 'bg-obsidian-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {spd === 1 ? '1x (Real)' : `${spd.toLocaleString()}x`}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
