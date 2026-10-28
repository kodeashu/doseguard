import React from 'react';
import { ShieldCheck, Check, X, AlertTriangle, Cpu } from 'lucide-react';
import { COMPETITOR_COMPARISON } from '../utils/physicsModel';

export const ComparisonMatrix: React.FC = () => {
  return (
    <div className="rounded-3xl p-5 sm:p-6 bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md mb-6">
      
      <div className="flex items-center space-x-2.5 mb-5">
        <div className="p-2 rounded-xl bg-photon-cyan/10 text-photon-cyan border border-photon-cyan/30">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wider text-white uppercase font-sans">
            Competitive Technological Advantage &amp; Atomberg Fit
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            How DoseGuard Outperforms Blind UV Purifiers Across Indian Water Conditions
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-950/70 shadow-nested">
        <table className="w-full text-left border-collapse text-xs font-mono">
          <thead>
            <tr className="bg-obsidian-950 border-b border-slate-800 text-slate-400 text-[11px]">
              <th className="p-3.5">Engineering Parameter</th>
              <th className="p-3.5">Conventional Purifiers</th>
              <th className="p-3.5">Timer-Alert Purifiers</th>
              <th className="p-3.5 bg-photon-cyan/5 text-photon-cyan border-x border-slate-800">
                DoseGuard™ Controller
              </th>
              <th className="p-3.5 hidden md:table-cell">Microbiological Safety Impact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {COMPETITOR_COMPARISON.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-850/30 transition-colors">
                <td className="p-3.5 font-bold text-white font-sans">{row.feature}</td>
                
                <td className="p-3.5 text-slate-400">
                  <div className="flex items-center space-x-1.5 text-rose-400/90">
                    <X className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{row.conventional}</span>
                  </div>
                </td>

                <td className="p-3.5 text-slate-400">
                  <div className="flex items-center space-x-1.5 text-amber-400/90">
                    <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{row.timerBased}</span>
                  </div>
                </td>

                <td className="p-3.5 bg-photon-cyan/5 border-x border-slate-800 font-bold text-white">
                  <div className="flex items-center space-x-1.5 text-photon-cyan">
                    <Check className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                    <span>{row.doseguard}</span>
                  </div>
                </td>

                <td className="p-3.5 hidden md:table-cell text-slate-400 text-[11px] font-sans">
                  {row.advantage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
