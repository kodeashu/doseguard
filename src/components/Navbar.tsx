import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Pause, 
  Play, 
  RotateCcw, 
  Download, 
  Maximize2, 
  Minimize2, 
  Box, 
  Layers, 
  FileCode2, 
  Activity,
  Sun,
  Moon
} from 'lucide-react';
import { SafetyState } from '../types';

interface NavbarProps {
  ticks: number;
  simTimeSeconds: number;
  realTimeSeconds: number;
  safetyState: SafetyState;
  isPaused: boolean;
  onTogglePause: () => void;
  onReset: () => void;
  viewMode: '3d' | '2d';
  onToggleViewMode: (mode: '3d' | '2d') => void;
  onOpenBlueprint: () => void;
  onExportCsv: () => void;
  csvRowCount: number;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  ticks,
  simTimeSeconds,
  realTimeSeconds,
  safetyState,
  isPaused,
  onTogglePause,
  onReset,
  viewMode,
  onToggleViewMode,
  onOpenBlueprint,
  onExportCsv,
  csvRowCount,
  isDarkMode,
  onToggleTheme,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const getSafetyBadge = () => {
    switch (safetyState) {
      case 'RUNNING':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40 ring-1 ring-emerald-500/20';
      case 'THROTTLED':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/40 ring-1 ring-amber-500/20';
      case 'DEGRADED':
        return 'bg-orange-500/15 text-orange-400 border-orange-500/40 ring-1 ring-orange-500/20';
      case 'FAIL_CLOSED':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/50 ring-1 ring-rose-500/30 animate-pulse';
    }
  };

  return (
    <header className="sticky top-4 z-40 w-full mb-6">
      <nav className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 rounded-2xl bg-obsidian-900/90 border border-slate-700/70 shadow-bezel backdrop-blur-xl ring-1 ring-white/5">
        
        {/* Brand & Context */}
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-photon-cyan to-uv-deep border border-photon-cyan/40 shadow-lg shadow-photon-cyan/20">
            <ShieldCheck className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-photon-cyan animate-ping" />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-sans">
                DoseGuard<span className="text-photon-cyan">™</span>
              </span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-photon-cyan/15 text-photon-cyan border border-photon-cyan/30 uppercase">
                Digital Twin
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden md:block">
              Smart Water-Purifier UV Controller • Team SpaceX (KIIT) • atomQUEST 2026
            </p>
          </div>
        </div>

        {/* Real-time Telemetry Pulse Pill */}
        <div className="hidden lg:flex items-center space-x-3 px-3.5 py-1.5 rounded-xl bg-obsidian-950/80 border border-slate-800 text-xs font-mono text-slate-300 shadow-nested">
          <div className="flex items-center space-x-1.5 text-photon-cyan">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>Ticks: <strong className="text-white">{ticks}</strong></span>
          </div>
          <span className="text-slate-700">|</span>
          <span>Sim: <strong className="text-slate-200">{simTimeSeconds.toFixed(1)}s</strong></span>
          <span className="text-slate-700">|</span>
          <span>Real: <strong className="text-slate-200">{realTimeSeconds.toFixed(1)}s</strong></span>
          <span className="text-slate-700">|</span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${getSafetyBadge()}`}>
            {safetyState}
          </span>
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center flex-wrap gap-2 text-xs font-mono">
          {/* View Switcher: 3D vs 2D */}
          <div className="flex items-center p-0.5 rounded-xl bg-obsidian-950/90 border border-slate-800">
            <button
              onClick={() => onToggleViewMode('3d')}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg transition-all ${
                viewMode === '3d'
                  ? 'bg-photon-cyan/20 text-photon-cyan border border-photon-cyan/40 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="3D WebGL Reactor Model"
            >
              <Box className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">3D Live</span>
            </button>
            <button
              onClick={() => onToggleViewMode('2d')}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg transition-all ${
                viewMode === '2d'
                  ? 'bg-photon-cyan/20 text-photon-cyan border border-photon-cyan/40 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="2D Flow Schematic View"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">2D Flow</span>
            </button>
          </div>

          {/* CRITICAL FIX: Direct, prominent CAD Blueprint & BOM button */}
          <button
            onClick={onOpenBlueprint}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-uv-deep to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold shadow-md shadow-purple-500/20 border border-purple-400/40 transition-all active:scale-[0.98]"
            title="Open CAD Engineering Drawings, BOM Table, and 90-sec Video Script"
          >
            <FileCode2 className="w-3.5 h-3.5 text-purple-200" />
            <span className="hidden sm:inline">CAD Specs &amp; 90s Video</span>
            <span className="sm:hidden">CAD/BOM</span>
          </button>

          {/* Pause / Resume */}
          <button
            onClick={onTogglePause}
            className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all active:scale-[0.98] ${
              isPaused
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 hover:bg-amber-500/30'
                : 'bg-obsidian-850 hover:bg-slate-800 text-slate-300 border-slate-700/80 hover:text-white'
            }`}
            title={isPaused ? 'Resume Simulation' : 'Pause Simulation'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-amber-400" /> : <Pause className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{isPaused ? 'Resume' : 'Pause'}</span>
          </button>

          {/* System Reset */}
          <button
            onClick={onReset}
            className="p-2 rounded-xl bg-obsidian-850 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 transition-colors"
            title="Reset Simulation Defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Export CSV with count */}
          <button
            onClick={onExportCsv}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-obsidian-850 hover:bg-slate-800 text-slate-300 hover:text-photon-cyan border border-slate-700/80 transition-colors"
            title="Export full session telemetry data as CSV file"
          >
            <Download className="w-3.5 h-3.5 text-photon-cyan" />
            <span className="hidden sm:inline">Export CSV</span>
            <span className="px-1.5 py-0.2 rounded bg-slate-800 text-[10px] text-slate-400">
              {csvRowCount}
            </span>
          </button>

          {/* Working Presenter HUD Mode Fullscreen Toggle */}
          <button
            onClick={handleToggleFullscreen}
            className={`p-2 rounded-xl border transition-colors ${
              isFullscreen
                ? 'bg-photon-cyan/20 text-photon-cyan border-photon-cyan/40'
                : 'bg-obsidian-850 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-700/80'
            }`}
            title={isFullscreen ? 'Exit Fullscreen HUD' : 'Enter Presenter HUD Mode'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-obsidian-850 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-700/80 transition-colors"
            title="Toggle Light / Dark Ambient Theme"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </nav>
    </header>
  );
};
