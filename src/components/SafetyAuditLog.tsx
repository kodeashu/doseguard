import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Trash2, 
  Download, 
  ShieldCheck, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2,
  Lock,
  Unlock
} from 'lucide-react';
import { AuditLogEvent, SafetyState } from '../types';

interface SafetyAuditLogProps {
  logs: AuditLogEvent[];
  currentState: SafetyState;
  stateReason: string;
  onClearLogs: () => void;
  onExportLogs: () => void;
}

export const SafetyAuditLog: React.FC<SafetyAuditLogProps> = ({
  logs,
  currentState,
  stateReason,
  onClearLogs,
  onExportLogs,
}) => {
  const [filter, setFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLogs = logs.filter((log) => {
    const matchesFilter = filter === 'ALL' || log.state === filter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      log.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStateBadge = (state: SafetyState) => {
    switch (state) {
      case 'RUNNING':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40';
      case 'THROTTLED':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/40';
      case 'DEGRADED':
        return 'bg-orange-500/15 text-orange-300 border-orange-500/40';
      case 'FAIL_CLOSED':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/50';
    }
  };

  return (
    <div className="rounded-3xl p-5 sm:p-6 bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md mb-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase font-sans">
              Safety State Machine &amp; Audit Log
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Deterministic Controller States, Transition Triggers &amp; Historical Event Sequence
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onExportLogs}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-mono transition-colors"
            title="Download audit logs as JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export Audit</span>
          </button>

          <button
            onClick={onClearLogs}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 border border-slate-700/80 text-xs font-mono transition-colors"
            title="Clear event history"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        </div>
      </div>

      {/* 4 Deterministic State Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 font-mono text-xs">
        
        {/* State 01: RUNNING */}
        <div className={`p-3.5 rounded-2xl border transition-all ${
          currentState === 'RUNNING'
            ? 'bg-emerald-950/40 border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg'
            : 'bg-obsidian-950/60 border-slate-800 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-slate-400">STATE: 01</span>
            {currentState === 'RUNNING' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
          </div>
          <h4 className="font-bold text-emerald-400 text-sm">RUNNING</h4>
          <p className="text-[11px] text-slate-400 mt-1 leading-normal font-sans">
            Nominal flow. Delivered dose ≥ 44 mJ/cm². Solenoid valve OPEN.
          </p>
        </div>

        {/* State 02: THROTTLED */}
        <div className={`p-3.5 rounded-2xl border transition-all ${
          currentState === 'THROTTLED'
            ? 'bg-amber-950/40 border-amber-500/60 ring-1 ring-amber-500/30 shadow-lg'
            : 'bg-obsidian-950/60 border-slate-800 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-slate-400">STATE: 02</span>
            {currentState === 'THROTTLED' && <AlertTriangle className="w-4 h-4 text-amber-400" />}
          </div>
          <h4 className="font-bold text-amber-400 text-sm">THROTTLED</h4>
          <p className="text-[11px] text-slate-400 mt-1 leading-normal font-sans">
            Pump speed slowed to maintain 44 mJ/cm² dose. Valve OPEN.
          </p>
        </div>

        {/* State 03: DEGRADED */}
        <div className={`p-3.5 rounded-2xl border transition-all ${
          currentState === 'DEGRADED'
            ? 'bg-orange-950/40 border-orange-500/60 ring-1 ring-orange-500/30 shadow-lg'
            : 'bg-obsidian-950/60 border-slate-800 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-slate-400">STATE: 03</span>
            {currentState === 'DEGRADED' && <AlertTriangle className="w-4 h-4 text-orange-400" />}
          </div>
          <h4 className="font-bold text-orange-400 text-sm">DEGRADED</h4>
          <p className="text-[11px] text-slate-400 mt-1 leading-normal font-sans">
            Pinned at Q_MIN (3.0 mL/s). Delivered dose 40–44 mJ/cm².
          </p>
        </div>

        {/* State 04: FAIL_CLOSED */}
        <div className={`p-3.5 rounded-2xl border transition-all ${
          currentState === 'FAIL_CLOSED'
            ? 'bg-rose-950/50 border-rose-500/70 ring-1 ring-rose-500/40 shadow-hazard-glow animate-hazard'
            : 'bg-obsidian-950/60 border-slate-800 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-slate-400">STATE: 04</span>
            {currentState === 'FAIL_CLOSED' && <Lock className="w-4 h-4 text-rose-400" />}
          </div>
          <h4 className="font-bold text-rose-400 text-sm">FAIL_CLOSED</h4>
          <p className="text-[11px] text-slate-400 mt-1 leading-normal font-sans">
            Safety cutoff! Solenoid valve de-energized. Flow = 0.00 L/min.
          </p>
        </div>

      </div>

      {/* Active Trigger / Rationale Banner */}
      <div className="p-3.5 rounded-2xl bg-obsidian-950/90 border border-slate-800 mb-4 flex items-start space-x-2.5 font-mono text-xs">
        <div className="mt-0.5">
          {currentState === 'RUNNING' && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
          {currentState === 'THROTTLED' && <AlertTriangle className="w-4 h-4 text-amber-400" />}
          {currentState === 'DEGRADED' && <AlertTriangle className="w-4 h-4 text-orange-400" />}
          {currentState === 'FAIL_CLOSED' && <ShieldAlert className="w-4 h-4 text-rose-400" />}
        </div>
        <div className="flex-1">
          <span className="text-slate-400 font-semibold block">Active State Rationale:</span>
          <p className="text-white mt-0.5">{stateReason}</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-1.5">
          {['ALL', 'RUNNING', 'THROTTLED', 'DEGRADED', 'FAIL_CLOSED'].map((st) => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              className={`px-2.5 py-1 rounded-lg border transition-all ${
                filter === st
                  ? 'bg-photon-cyan/20 text-photon-cyan border-photon-cyan/50 font-bold'
                  : 'bg-obsidian-950 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search event logs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 pr-3 py-1 rounded-xl bg-obsidian-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-photon-cyan"
          />
        </div>
      </div>

      {/* Audit Log Table / List */}
      <div className="rounded-2xl border border-slate-800/80 bg-obsidian-950/80 overflow-hidden max-h-56 overflow-y-auto font-mono text-xs divide-y divide-slate-800/60 shadow-nested">
        {filteredLogs.length === 0 ? (
          <div className="p-6 text-center text-slate-500">No events matching current filter.</div>
        ) : (
          filteredLogs.map((log) => (
            <div key={log.id} className="p-3 hover:bg-slate-850/40 flex flex-wrap items-center justify-between gap-2 transition-colors">
              <div className="flex items-center space-x-2.5 min-w-[200px]">
                <span className="text-slate-500 text-[11px]">{log.timestamp}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${getStateBadge(log.state)}`}>
                  {log.state}
                </span>
                <span className="text-slate-300 truncate max-w-sm sm:max-w-md font-sans">
                  {log.reason}
                </span>
              </div>

              <div className="flex items-center space-x-3 text-[11px] text-slate-400 ml-auto">
                <span>Dose: <strong className={log.dose >= 40 ? 'text-emerald-400' : 'text-rose-400'}>{log.dose.toFixed(1)}</strong></span>
                <span>•</span>
                <span>Flow: <strong className="text-amber-300">{log.flowLPerMin.toFixed(2)} L/m</strong></span>
                <span>•</span>
                <span>UVT: <strong className="text-cyan-300">{log.uvtPerCm.toFixed(1)}%</strong></span>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};
