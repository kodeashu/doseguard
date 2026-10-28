import React, { useState } from 'react';
import { LineChart, Activity, Clock, ShieldAlert, Sparkles } from 'lucide-react';
import { TelemetryPoint } from '../types';

interface TelemetryChartProps {
  telemetry: TelemetryPoint[];
  bufferCapacity: number;
  onSetBufferCapacity: (cap: number) => void;
  totalLoggedCount: number;
}

export const TelemetryChart: React.FC<TelemetryChartProps> = ({
  telemetry,
  bufferCapacity,
  onSetBufferCapacity,
  totalLoggedCount,
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<TelemetryPoint | null>(null);

  // SVG dimensions
  const svgWidth = 800;
  const svgHeight = 240;
  const pad = { top: 20, right: 50, bottom: 35, left: 55 };
  const plotWidth = svgWidth - pad.left - pad.right;
  const plotHeight = svgHeight - pad.top - pad.bottom;

  // Scales
  const maxDose = 65; // Fixed rock-solid domain (0 - 65 mJ/cm^2)
  const maxFlow = 0.6; // Fixed domain (0 - 0.6 L/min)

  const getY_Dose = (val: number) => {
    const clamped = Math.max(0, Math.min(maxDose, val));
    return pad.top + plotHeight - (clamped / maxDose) * plotHeight;
  };

  const getY_Flow = (val: number) => {
    const clamped = Math.max(0, Math.min(maxFlow, val));
    return pad.top + plotHeight - (clamped / maxFlow) * plotHeight;
  };

  const getX = (idx: number, total: number) => {
    if (total <= 1) return pad.left;
    return pad.left + (idx / (total - 1)) * plotWidth;
  };

  // Build SVG Path strings
  const points = telemetry.slice(-120); // Last 60 seconds (at 2 Hz)
  const totalPoints = points.length;

  let dosePath = '';
  let flowPath = '';

  points.forEach((pt, idx) => {
    const x = getX(idx, totalPoints);
    const yDose = getY_Dose(pt.dose);
    const yFlow = getY_Flow(pt.flowLPerMin);

    if (idx === 0) {
      dosePath += `M ${x.toFixed(1)} ${yDose.toFixed(1)}`;
      flowPath += `M ${x.toFixed(1)} ${yFlow.toFixed(1)}`;
    } else {
      dosePath += ` L ${x.toFixed(1)} ${yDose.toFixed(1)}`;
      flowPath += ` L ${x.toFixed(1)} ${yFlow.toFixed(1)}`;
    }
  });

  const targetY = getY_Dose(44.0);
  const cutoffY = getY_Dose(40.0);

  return (
    <div className="rounded-3xl p-5 sm:p-6 bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md mb-6">
      
      {/* Chart Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-photon-cyan/10 text-photon-cyan border border-photon-cyan/30">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase font-sans">
              60-Second Real-Time Telemetry Stream
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Live UV Dose (mJ/cm²), NSF-55 Target (44), Cutoff Setpoint (40), and Dispense Flow (L/min)
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-0.5 bg-photon-cyan rounded-full" />
            <span className="text-slate-300">Dose (mJ/cm²)</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-0.5 border-t-2 border-dashed border-emerald-400" />
            <span className="text-emerald-400">Target (44)</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-0.5 border-t-2 border-dashed border-rose-500" />
            <span className="text-rose-400">Fail-Safe (40)</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-0.5 bg-photon-amber rounded-full" />
            <span className="text-amber-300">Flow (L/min)</span>
          </div>
        </div>
      </div>

      {/* Main SVG Telemetry Graph */}
      <div className="relative w-full rounded-2xl bg-obsidian-950/80 border border-slate-850 p-2 overflow-hidden shadow-nested">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto select-none"
          onMouseLeave={() => setHoveredPoint(null)}
        >
          <defs>
            {/* Danger Zone Gradient (Below 40 mJ/cm^2) */}
            <linearGradient id="dangerZone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.02" />
            </linearGradient>

            {/* Dose Line Gradient */}
            <linearGradient id="doseGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          {/* Danger Zone Shading (Below 40 mJ/cm^2) */}
          <rect
            x={pad.left}
            y={cutoffY}
            width={plotWidth}
            height={plotHeight - (cutoffY - pad.top)}
            fill="url(#dangerZone)"
          />

          {/* Horizontal Grid Lines & Y-Axis Labels (Left: Dose) */}
          {[0, 20, 40, 44, 60].map((val) => {
            const y = getY_Dose(val);
            const isTarget = val === 44;
            const isCutoff = val === 40;

            return (
              <g key={`grid-y-${val}`}>
                <line
                  x1={pad.left}
                  y1={y}
                  x2={svgWidth - pad.right}
                  y2={y}
                  stroke={isTarget ? '#10b981' : isCutoff ? '#f43f5e' : '#1e2c40'}
                  strokeWidth={isTarget || isCutoff ? 1.2 : 0.8}
                  strokeDasharray={isTarget || isCutoff ? '4 4' : undefined}
                  opacity={isTarget || isCutoff ? 0.7 : 0.4}
                />
                <text
                  x={pad.left - 8}
                  y={y + 3}
                  fill={isTarget ? '#34d399' : isCutoff ? '#f87171' : '#64748b'}
                  fontSize="10"
                  fontWeight={isTarget || isCutoff ? 'bold' : 'normal'}
                  fontFamily="JetBrains Mono"
                  textAnchor="end"
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Right Y-Axis Labels (Flow Rate L/min) */}
          {[0, 0.2, 0.4, 0.6].map((val) => {
            const y = getY_Flow(val);
            return (
              <text
                key={`flow-label-${val}`}
                x={svgWidth - pad.right + 8}
                y={y + 3}
                fill="#f59e0b"
                fontSize="10"
                fontFamily="JetBrains Mono"
                textAnchor="start"
                opacity="0.8"
              >
                {val.toFixed(1)}
              </text>
            );
          })}

          {/* Target & Cutoff Text Annotations */}
          <text
            x={pad.left + 10}
            y={targetY - 5}
            fill="#34d399"
            fontSize="9"
            fontWeight="bold"
            fontFamily="JetBrains Mono"
          >
            TARGET DOSE (44 mJ/cm²)
          </text>

          <text
            x={svgWidth - pad.right - 10}
            y={cutoffY + 12}
            fill="#f87171"
            fontSize="9"
            fontWeight="bold"
            fontFamily="JetBrains Mono"
            textAnchor="end"
          >
            FAIL-SAFE CUTOFF (40 mJ/cm²)
          </text>

          {/* Flow Rate Line (Amber) */}
          <path
            d={flowPath}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* Delivered Dose Line (Photon Cyan) */}
          <path
            d={dosePath}
            fill="none"
            stroke="url(#doseGlow)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Latest Point Indicator Circles */}
          {points.length > 0 && (
            <>
              {/* Dose Head */}
              <circle
                cx={getX(points.length - 1, totalPoints)}
                cy={getY_Dose(points[points.length - 1].dose)}
                r="4.5"
                fill="#00f2fe"
                stroke="#ffffff"
                strokeWidth="1.5"
              />

              {/* Flow Head */}
              <circle
                cx={getX(points.length - 1, totalPoints)}
                cy={getY_Flow(points[points.length - 1].flowLPerMin)}
                r="4"
                fill="#f59e0b"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </>
          )}

          {/* X-Axis Labels */}
          <text
            x={pad.left}
            y={svgHeight - 10}
            fill="#64748b"
            fontSize="10"
            fontFamily="JetBrains Mono"
          >
            -60s
          </text>

          <text
            x={svgWidth - pad.right}
            y={svgHeight - 10}
            fill="#38bdf8"
            fontSize="10"
            fontWeight="bold"
            fontFamily="JetBrains Mono"
            textAnchor="end"
          >
            NOW (Real-Time)
          </text>

          {/* Y-Axis Titles */}
          <text
            x={pad.left - 24}
            y={pad.top + plotHeight / 2}
            fill="#94a3b8"
            fontSize="9"
            fontFamily="JetBrains Mono"
            textAnchor="middle"
            transform={`rotate(-90 ${pad.left - 24} ${pad.top + plotHeight / 2})`}
          >
            Dose (mJ/cm²)
          </text>

          <text
            x={svgWidth - 10}
            y={pad.top + plotHeight / 2}
            fill="#f59e0b"
            fontSize="9"
            fontFamily="JetBrains Mono"
            textAnchor="middle"
            transform={`rotate(90 ${svgWidth - 10} ${pad.top + plotHeight / 2})`}
          >
            Flow (L/min)
          </text>
        </svg>
      </div>

      {/* Buffer Capacity Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400">
        <div className="flex items-center space-x-2">
          <Clock className="w-3.5 h-3.5 text-photon-cyan" />
          <span>Telemetry Buffer Capacity:</span>
          <strong className="text-white">({totalLoggedCount.toLocaleString()} points logged)</strong>
        </div>

        <div className="flex items-center space-x-1.5">
          {[
            { label: '3,600 (30m)', val: 3600 },
            { label: '7,200 (1h)', val: 7200 },
            { label: '14,400 (2h)', val: 14400 },
            { label: 'Full Session', val: 0 },
          ].map((item) => (
            <button
              key={item.val}
              onClick={() => onSetBufferCapacity(item.val)}
              className={`px-2.5 py-1 rounded-lg border transition-all ${
                bufferCapacity === item.val
                  ? 'bg-photon-cyan/20 text-photon-cyan border-photon-cyan/50 font-bold'
                  : 'bg-obsidian-950 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
