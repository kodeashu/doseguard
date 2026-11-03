import React, { useState } from 'react';
import { 
  TrendingDown, 
  Wrench, 
  Clock, 
  Sparkles,
  Cpu,
  ShieldCheck,
  CloudRain,
  Eye
} from 'lucide-react';
import { LampPrognosis, EdgeAiAdvisory } from '../types';
import { EDGE_AI_METADATA } from '../utils/edgeAiEngine';

interface PredictiveEngineProps {
  prognosis: LampPrognosis;
  edgeAi: EdgeAiAdvisory;
  windowFouling: number;
  onInstallNewLamp: () => void;
  onWipeQuartzWindow: () => void;
  speedMultiplier: number;
  onSetSpeedMultiplier: (speed: number) => void;
}

export const PredictiveEngine: React.FC<PredictiveEngineProps> = ({
  prognosis,
  edgeAi,
  windowFouling,
  onInstallNewLamp,
  onWipeQuartzWindow,
  speedMultiplier,
  onSetSpeedMultiplier,
}) => {
  const { currentPdA, criticalPdA, remainingHours, remainingDays, isUrgent, accumulatedHours, safetyMarginPct } = prognosis;
  const [geminiReport, setGeminiReport] = useState<string | null>(null);
  const [geminiLoading, setGeminiLoading] = useState(false);

  const handleRunGeminiAudit = async () => {
    const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      setGeminiReport('Set VITE_GEMINI_API_KEY in .env.local to enable live Gemini 2.5 Flash telemetry audits.');
      return;
    }
    setGeminiLoading(true);
    try {
      const prompt = `You are the DoseGuard Edge AI Firmware & Telemetry Copilot (Team SpaceX, KIIT). Analyze this live 2 Hz reactor snapshot and Int8 ESP32 Edge AI output in 3 concise, technical bullet points (1. Optical & Dose Status, 2. Int8 RUL vs Linear L70 Analysis, 3. Prescribed Action):
- PD-A Reference: ${currentPdA.toFixed(3)} V (Critical Floor: ${criticalPdA.toFixed(3)} V, Headroom: +${safetyMarginPct.toFixed(1)}%)
- Operating Hours: ${Math.round(accumulatedHours)} hrs | Quartz Window Scaling: ${windowFouling.toFixed(0)}%
- Int8 Edge AI RUL: ${Math.round(edgeAi.aiRulDays)} days (90% CI: [${Math.round(edgeAi.aiRulLowerDays)}, ${Math.round(edgeAi.aiRulUpperDays)}] days) vs Linear L70 Baseline: ${Math.round(remainingDays)} days
- 15m Monsoon Surge Risk: ${(edgeAi.monsoonSpikeProb * 100).toFixed(1)}% | Quartz Fouling/Drift Prob: ${(edgeAi.opticalFoulingProb * 100).toFixed(1)}%`;

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        }
      );
      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setGeminiReport(text || 'Unable to parse Gemini response.');
    } catch (err: any) {
      setGeminiReport(`Gemini API error: ${err?.message || 'Network request failed'}`);
    } finally {
      setGeminiLoading(false);
    }
  };

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

  // Linear decay curve line: starts at 1.0 at 0 hrs and reaches 0.3 at 12,000 hrs
  const startY = getY(1.0);
  const endY = getY(0.3);

  // Nonlinear AlGaN Edge AI curve path points
  const aiCurvePoints: string[] = [];
  const aiBandUpper: string[] = [];
  const aiBandLower: string[] = [];
  for (let h = 0; h <= maxHours; h += 600) {
    const x = getX(h);
    const nonLinVal = Math.max(
      0.22,
      1.0 - (0.2 / 9000) * 1.05 * h - 0.28 * 0.35 * Math.pow(h / 9000, 2.35)
    );
    aiCurvePoints.push(`${x.toFixed(1)},${getY(nonLinVal).toFixed(1)}`);
    aiBandUpper.push(`${x.toFixed(1)},${getY(Math.min(1.0, nonLinVal + 0.04)).toFixed(1)}`);
    aiBandLower.unshift(`${x.toFixed(1)},${getY(Math.max(0.2, nonLinVal - 0.04)).toFixed(1)}`);
  }
  const aiPolygonPoints = [...aiBandUpper, ...aiBandLower].join(' ');

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
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-bold tracking-wider text-white uppercase font-sans">
                Predictive Lamp-Decay &amp; Int8 Edge AI Advisory Engine
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-photon-cyan/15 text-photon-cyan border border-photon-cyan/30">
                ESP32 Core 0 • {EDGE_AI_METADATA.total_int8_flash_bytes} B Int8 Flash • R² {EDGE_AI_METADATA.rul_int8_r2}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Nonlinear AlGaN RUL Regression (MAE {EDGE_AI_METADATA.rul_int8_mae_days}d vs {EDGE_AI_METADATA.rul_linear_mae_days}d Linear) • Advisory-Only Safety Isolation
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {windowFouling > 0 && (
            <button
              onClick={onWipeQuartzWindow}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-mono font-bold text-xs border border-amber-500/40 transition-all active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Wipe Quartz Window ({windowFouling}% Scaled)</span>
            </button>
          )}
          <button
            onClick={onInstallNewLamp}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-bold text-xs shadow-md shadow-purple-500/20 border border-purple-400/40 transition-all active:scale-[0.98]"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Install Brand-New Lamp</span>
          </button>
        </div>
      </div>

      {/* 3 Metric Cards + Trajectory Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 font-mono">
        
        {/* Card 1: Int8 Edge AI vs Linear L70 Service Prognosis */}
        <div className={`p-4 rounded-2xl border flex flex-col justify-between transition-all ${
          prognosisStatus === 'EXPIRED'
            ? 'bg-rose-950/30 border-rose-500/50 shadow-hazard-glow'
            : prognosisStatus === 'SERVICE SOON'
            ? 'bg-amber-950/30 border-amber-500/50'
            : 'bg-obsidian-950/70 border-slate-800'
        }`}>
          <div className="flex items-center justify-between text-xs">
            <span className="text-photon-cyan font-bold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Int8 Edge AI RUL:</span>
            </span>
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

          <div className="my-2.5">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline space-x-2">
                <span className={`text-3xl sm:text-4xl font-black tracking-tight ${
                  prognosisStatus === 'EXPIRED' ? 'text-rose-400' : prognosisStatus === 'SERVICE SOON' ? 'text-amber-400' : 'text-photon-cyan'
                }`}>
                  {prognosisStatus === 'EXPIRED' ? '0' : Math.round(edgeAi.aiRulDays)}
                </span>
                <span className="text-xs font-bold text-slate-300">Days (AI)</span>
              </div>
              <span className="text-[11px] text-slate-400">
                90% CI: [{Math.round(edgeAi.aiRulLowerDays)}–{Math.round(edgeAi.aiRulUpperDays)}d]
              </span>
            </div>

            <div className="mt-2 p-2 rounded-xl bg-obsidian-900/90 border border-slate-800/80 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Linear L70 Baseline:</span>
              <span className="text-purple-300 font-bold">
                {prognosisStatus === 'EXPIRED' ? '0' : remainingDays >= 999 ? '> 999' : Math.round(remainingDays)} Days
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
            <span>Runtime Tracked: <strong className="text-white">{Math.round(accumulatedHours).toLocaleString()} hrs</strong></span>
            <span className="text-emerald-400 font-bold">-{EDGE_AI_METADATA.rul_mae_improvement_pct}% Error</span>
          </div>
        </div>

        {/* Card 2: Optical Safety Headroom & Fouling Isolation */}
        <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Optical Safety Margin:</span>
            <span className="text-photon-cyan font-bold">PD-A vs Critical Floor</span>
          </div>

          <div className="space-y-1.5 my-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Current PD-A:</span>
              <span className="text-white font-bold">{currentPdA.toFixed(3)} V</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Critical Cutoff Floor:</span>
              <span className="text-rose-400 font-bold">{criticalPdA.toFixed(3)} V</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Quartz Window Scaling:</span>
              <span className={`font-bold ${windowFouling >= 3 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {windowFouling.toFixed(0)}% {windowFouling >= 3 ? '(Wipe Advised)' : '(Clean)'}
              </span>
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

        {/* Card 3: Expanded Decay Trajectory Chart (Linear vs Nonlinear AI) */}
        <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-slate-300 font-bold">AlGaN Decay: AI vs Linear</span>
            <span className="text-[10px] text-photon-cyan font-mono">Cyan=AI • Purple=L70</span>
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

              {/* AI 90% Confidence Band */}
              <polygon points={aiPolygonPoints} fill="#00f2fe" fillOpacity="0.12" />

              {/* Linear L70 Baseline Slope (Dashed Purple) */}
              <line 
                x1={pad.left} 
                y1={startY} 
                x2={getX(12000)} 
                y2={endY} 
                stroke="#c084fc" 
                strokeWidth="1.75" 
                strokeDasharray="4 3"
                strokeLinecap="round" 
              />

              {/* Nonlinear Edge AI Curve (Solid Cyan) */}
              <polyline
                fill="none"
                stroke="#00f2fe"
                strokeWidth="2.5"
                points={aiCurvePoints.join(' ')}
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
            <span>ESP32 Inference: <strong className="text-emerald-400">~{edgeAi.inferenceLatencyUs} µs</strong></span>
            <span className="text-photon-cyan font-bold">{speedMultiplier}x Speed</span>
          </div>
        </div>

      </div>

      {/* Edge AI Multi-Task Advisory Diagnostic Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 font-mono text-xs">
        
        {/* Task 2: Monsoon Turbidity Surge Forecaster */}
        <div className={`p-3.5 rounded-2xl border transition-all ${
          edgeAi.monsoonSpikeAlert
            ? 'bg-amber-950/30 border-amber-500/50'
            : 'bg-obsidian-950/70 border-slate-800/90'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-slate-300 font-bold flex items-center gap-1.5">
              <CloudRain className="w-3.5 h-3.5 text-photon-cyan" />
              <span>15m Monsoon Surge Risk</span>
            </span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              edgeAi.monsoonSpikeAlert ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-800 text-slate-300'
            }`}>
              {(edgeAi.monsoonSpikeProb * 100).toFixed(1)}% (AUC {EDGE_AI_METADATA.spike_int8_roc_auc})
            </span>
          </div>
          <div className="w-full bg-obsidian-900 rounded-full h-1.5 overflow-hidden border border-slate-800 mb-1.5">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                edgeAi.monsoonSpikeAlert ? 'bg-amber-400' : 'bg-photon-cyan'
              }`}
              style={{ width: `${Math.min(100, Math.round(edgeAi.monsoonSpikeProb * 100))}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-400 font-sans">
            {edgeAi.monsoonSpikeAlert
              ? 'Early Warning: Rising organic tannin/silt absorbance detected; pre-throttling booster pump.'
              : 'Feed water transmittance stable over rolling 15-minute window.'}
          </p>
        </div>

        {/* Task 3: Optical Window Fouling & Drift Diagnostic */}
        <div className={`p-3.5 rounded-2xl border transition-all ${
          edgeAi.opticalFoulingAlert
            ? 'bg-purple-950/30 border-purple-500/50'
            : 'bg-obsidian-950/70 border-slate-800/90'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-slate-300 font-bold flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-purple-400" />
              <span>Quartz Fouling / Drift Probability</span>
            </span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              edgeAi.opticalFoulingAlert ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'bg-slate-800 text-slate-300'
            }`}>
              {(edgeAi.opticalFoulingProb * 100).toFixed(1)}% (AUC {EDGE_AI_METADATA.anom_int8_roc_auc})
            </span>
          </div>
          <div className="w-full bg-obsidian-900 rounded-full h-1.5 overflow-hidden border border-slate-800 mb-1.5">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                edgeAi.opticalFoulingAlert ? 'bg-purple-400' : 'bg-emerald-400'
              }`}
              style={{ width: `${Math.min(100, Math.round(edgeAi.opticalFoulingProb * 100))}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-400 font-sans">
            {edgeAi.opticalFoulingAlert
              ? 'Optical Divergence: Suprasil-300 quartz scaling or SiC TIA drift isolated from true LED wear.'
              : 'Dual-SiC ratio matches nominal Beer-Lambert optical cavity calibration.'}
          </p>
        </div>

        {/* Top Permutation Feature Attributions */}
        <div className="p-3.5 rounded-2xl bg-obsidian-950/70 border border-slate-800/90">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-slate-300 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Top Feature Attribution (SHAP/Perm)</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-bold">Advisory Only</span>
          </div>
          <div className="space-y-1">
            {edgeAi.featureContributions.slice(0, 3).map((fc) => (
              <div key={fc.name} className="flex items-center justify-between text-[10px]">
                <span className="text-slate-400 truncate max-w-[165px]">{fc.label}</span>
                <span className="text-photon-cyan font-bold">±{fc.importanceDays.toFixed(1)}d impact</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Live Advisory Diagnostic Banner + Gemini 2.5 Flash Copilot Trigger */}
      <div className="p-3.5 rounded-2xl bg-photon-cyan/5 border border-photon-cyan/25 mb-5 space-y-3 text-xs font-mono">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2 text-slate-200">
            <Cpu className="w-4 h-4 text-photon-cyan flex-shrink-0" />
            <span className="font-sans text-xs">{edgeAi.advisorySummary}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRunGeminiAudit}
              disabled={geminiLoading}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-photon-cyan to-teal-400 text-obsidian-950 font-bold text-[11px] shadow-sm hover:opacity-95 disabled:opacity-50 transition-all"
            >
              <Sparkles className="w-3 h-3" />
              <span>{geminiLoading ? 'Querying Gemini 2.5 Flash...' : 'Ask Gemini 2.5 Copilot'}</span>
            </button>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
              Valve Lock: Hardware Deterministic (≥40 mJ/cm²)
            </span>
          </div>
        </div>

        {geminiReport && (
          <div className="p-3 rounded-xl bg-obsidian-950/90 border border-photon-cyan/30 text-slate-200 font-sans text-xs whitespace-pre-line leading-relaxed">
            <div className="flex items-center justify-between text-[10px] font-mono text-photon-cyan mb-1">
              <span>GEMINI 2.5 FLASH • LIVE TELEMETRY &amp; INT8 EDGE AI AUDIT</span>
              <button onClick={() => setGeminiReport(null)} className="text-slate-400 hover:text-white">Dismiss ✕</button>
            </div>
            {geminiReport}
          </div>
        )}
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
