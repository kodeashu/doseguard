import React, { useState } from 'react';
import { ShieldCheck, Zap, Droplets, ChevronDown, ChevronUp, Layers, Compass, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  onOpenBlueprint: () => void;
  onScrollToSim: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBlueprint, onScrollToSim }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className="relative w-full mb-6 rounded-3xl bg-gradient-to-b from-obsidian-900/90 via-obsidian-900/60 to-obsidian-950/80 border border-slate-800/80 shadow-bezel backdrop-blur-md overflow-hidden">
      {/* Subtle background ambient mesh glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-uv-glow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-photon-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar with toggle */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/60 bg-slate-950/40">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-photon-cyan/10 text-photon-cyan border border-photon-cyan/30 text-[11px] font-mono font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-photon-cyan animate-pulse" />
            <span>atomQUEST 2026 • Round 2</span>
          </span>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            Team SpaceX (KIIT) • Track 2: Smart Water Purifier
          </span>
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          title={collapsed ? 'Expand Problem Framing' : 'Collapse Overview'}
        >
          <span>{collapsed ? 'Why This Matters' : 'Minimize'}</span>
          {collapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>

      {!collapsed && (
        <div className="p-6 md:p-8 space-y-6">
          <div className="max-w-4xl space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              The First <span className="text-transparent bg-clip-text bg-gradient-to-r from-photon-cyan via-teal-300 to-uv-bright">Closed-Loop Optical UV Dosing</span> Digital Twin for Smart Home Purifiers
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              In conventional home purifiers, the UV stage is a <strong className="text-white font-semibold">silent black box</strong> running at a blind, fixed flow rate. 
              When dissolved iron, silt, or seasonal tannins enter the feed water, <strong className="text-amber-300 font-semibold">UV Transmittance (UVT) drops by up to 60%</strong> while TDS remains unchanged—causing households to drink under-disinfected water with zero warning.
            </p>
          </div>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            <div className="p-4 rounded-2xl bg-obsidian-850/80 border border-slate-800/90 shadow-nested space-y-1.5">
              <div className="flex items-center space-x-2 text-photon-cyan">
                <ShieldCheck className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">NSF 55 Class A Benchmark</h4>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Guarantees ≥ 40 mJ/cm² delivered UV dose with a +10% target margin (44 mJ/cm²) verified by real-time fluence physics.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-850/80 border border-slate-800/90 shadow-nested space-y-1.5">
              <div className="flex items-center space-x-2 text-uv-bright">
                <Droplets className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Dual-SiC Ratio Sensing</h4>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                PD-A measures emitter output while PD-B measures across a 2.0 cm water gap, cancelling lamp aging noise from water quality.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-850/80 border border-slate-800/90 shadow-nested space-y-1.5">
              <div className="flex items-center space-x-2 text-photon-amber">
                <Zap className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Adaptive Flow PID Loop</h4>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Dynamically throttles pump flow (3.0 – 8.33 mL/s) when turbidity rises. Trips shut in &lt;2s if water cannot be disinfected.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-850/80 border border-slate-800/90 shadow-nested space-y-1.5">
              <div className="flex items-center space-x-2 text-emerald-400">
                <Layers className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">₹800 Atomberg Add-On</h4>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Not an expensive new purifier: an elegant modular drop-in engineered to interface directly with Atomberg BLDC pumps &amp; IoT.
              </p>
            </div>
          </div>

          {/* Quick Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/60 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onScrollToSim}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-photon-cyan to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-obsidian-950 font-bold shadow-lg shadow-photon-cyan/20 transition-all active:scale-[0.98]"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Interact with Simulation</span>
              </button>

              <button
                onClick={onOpenBlueprint}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700/80 transition-all font-semibold active:scale-[0.98]"
              >
                <Layers className="w-3.5 h-3.5 text-photon-cyan" />
                <span>View 3D CAD &amp; BOM Specs</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Firmware-identical control loop executing at 2 Hz (500 ms)</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
