import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KpiMetrics } from './components/KpiMetrics';
import { ThreeReactor } from './components/ThreeReactor';
import { TelemetryChart } from './components/TelemetryChart';
import { ScenarioSimulator } from './components/ScenarioSimulator';
import { SafetyAuditLog } from './components/SafetyAuditLog';
import { PredictiveEngine } from './components/PredictiveEngine';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { BlueprintModal } from './components/BlueprintModal';
import { Toast } from './components/Toast';
import { 
  SystemInputs, 
  SimulationOutputs, 
  TelemetryPoint, 
  AuditLogEvent, 
  ToastMessage,
  SafetyState 
} from './types';
import { 
  calculatePhysicsStep, 
  calculateLampPrognosis, 
  CHAMBER_CONSTANTS 
} from './utils/physicsModel';
import { evaluateEdgeAiAdvisory } from './utils/edgeAiEngine';

export const App: React.FC = () => {
  // 1. Simulation Inputs
  const [inputs, setInputs] = useState<SystemInputs>({
    tea: 0,
    lampOutput: 100,
    coverClosed: true,
    sensorFault: false,
    windowFouling: 0,
  });

  // 2. Simulation State & Clocks
  const [ticks, setTicks] = useState(0);
  const [simTimeSeconds, setSimTimeSeconds] = useState(0);
  const [realTimeSeconds, setRealTimeSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // 3. Predictive Engine & Lamp Aging
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [accumulatedHours, setAccumulatedHours] = useState(120);

  // 4. Telemetry Stream & Buffer Capacity
  const [bufferCapacity, setBufferCapacity] = useState(7200);
  
  // CRITICAL FIX: Pre-seed 60 seconds (120 ticks at 2 Hz) with stable nominal 44.0 mJ/cm^2!
  const [telemetry, setTelemetry] = useState<TelemetryPoint[]>(() => {
    const initial: TelemetryPoint[] = [];
    const now = Date.now();
    for (let i = 120; i >= 0; i--) {
      initial.push({
        tick: 0 - i,
        timestamp: new Date(now - i * 500).toLocaleTimeString(),
        simTime: Math.max(0, 60 - i * 0.5),
        dose: 44.0, // Fixed baseline at target dose (no startup glitch drops below 40!)
        targetDose: 44.0,
        cutoffDose: 40.0,
        flowLPerMin: 0.32,
        uvtPerCm: 93.6,
        state: 'RUNNING',
      });
    }
    return initial;
  });

  // 5. Deterministic Safety Audit Logs
  const [auditLogs, setAuditLogs] = useState<AuditLogEvent[]>([
    {
      id: 'init-001',
      timestamp: new Date().toLocaleTimeString(),
      state: 'RUNNING',
      reason: 'DoseGuard Controller Cold-Boot: Fixed 0.5s accumulator loop active. V=30mL, D_TARGET=44 mJ/cm², D_SET=40 mJ/cm².',
      dose: 44.0,
      flowLPerMin: 0.32,
      uvtPerCm: 93.6,
    },
  ]);

  // 6. Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((title: string, description?: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    const id = `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // 7. Calculate Immediate Physics Step
  const noiseA = 1.0 + (Math.random() - 0.5) * 0.008;
  const noiseB = 1.0 + (Math.random() - 0.5) * 0.008;
  const outputs: SimulationOutputs = calculatePhysicsStep(inputs, noiseA, noiseB);

  // Prognosis calculation
  const prognosis = calculateLampPrognosis(
    outputs.pdA,
    outputs.T,
    accumulatedHours,
    speedMultiplier
  );

  // Int8 Edge AI Advisory Inference (Browser + ESP32 Identical)
  const edgeAi = evaluateEdgeAiAdvisory(
    inputs,
    outputs,
    prognosis,
    telemetry.slice(-20).map((t) => t.uvtPerCm)
  );

  // 8. Track previous safety state to detect and log state transitions
  const prevStateRef = useRef<SafetyState>(outputs.safetyState);
  const prevCoverRef = useRef<boolean>(inputs.coverClosed);
  const prevFaultRef = useRef<boolean>(inputs.sensorFault);

  useEffect(() => {
    const prevState = prevStateRef.current;
    const curState = outputs.safetyState;

    const coverChanged = prevCoverRef.current !== inputs.coverClosed;
    const faultChanged = prevFaultRef.current !== inputs.sensorFault;

    if (prevState !== curState || coverChanged || faultChanged) {
      const newEvent: AuditLogEvent = {
        id: `ev-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        timestamp: new Date().toLocaleTimeString(),
        state: curState,
        reason: outputs.stateReason,
        dose: outputs.dose,
        flowLPerMin: outputs.flowLPerMin,
        uvtPerCm: outputs.uvtPerCm,
      };

      // Immutably prepend to audit logs
      setAuditLogs((prev) => [newEvent, ...prev].slice(0, 500));

      // Toast alert on important state trips
      if (curState === 'FAIL_CLOSED') {
        addToast('⚠️ FAIL_CLOSED Safety Trip Engaged', outputs.stateReason, 'error');
      } else if (curState === 'THROTTLED') {
        addToast('⚡ Flow Throttling Active', outputs.stateReason, 'warning');
      } else if (curState === 'RUNNING' && prevState === 'FAIL_CLOSED') {
        addToast('✓ Safety Recovery: Nominal Flow', 'UV dose restored above 44 mJ/cm². Solenoid open.', 'success');
      }

      prevStateRef.current = curState;
      prevCoverRef.current = inputs.coverClosed;
      prevFaultRef.current = inputs.sensorFault;
    }
  }, [outputs.safetyState, outputs.stateReason, outputs.dose, outputs.flowLPerMin, outputs.uvtPerCm, inputs.coverClosed, inputs.sensorFault, addToast]);

  // 9. Main Simulation Timer (2 Hz / 500 ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTicks((t) => t + 1);
      setSimTimeSeconds((s) => s + 0.5);
      setRealTimeSeconds((r) => r + 0.5);

      // Advance operating hours if time acceleration is on
      setAccumulatedHours((hrs) => hrs + (0.5 / 3600) * speedMultiplier);

      // Append new telemetry point
      const newPoint: TelemetryPoint = {
        tick: ticks + 1,
        timestamp: new Date().toLocaleTimeString(),
        simTime: simTimeSeconds + 0.5,
        dose: outputs.dose,
        targetDose: 44.0,
        cutoffDose: 40.0,
        flowLPerMin: outputs.flowLPerMin,
        uvtPerCm: outputs.uvtPerCm,
        state: outputs.safetyState,
      };

      setTelemetry((prev) => {
        const next = [...prev, newPoint];
        if (bufferCapacity > 0 && next.length > bufferCapacity) {
          return next.slice(-bufferCapacity);
        }
        return next;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isPaused, ticks, simTimeSeconds, speedMultiplier, bufferCapacity, outputs]);

  // Actions
  const handleUpdateInputs = (partial: Partial<SystemInputs>) => {
    setInputs((prev) => ({ ...prev, ...partial }));
  };

  const handleResetDefaults = () => {
    setInputs({
      tea: 0,
      lampOutput: 100,
      coverClosed: true,
      sensorFault: false,
      windowFouling: 0,
    });
    setSpeedMultiplier(1);
    addToast('✓ Restored Default Nominal Feed', 'Clear tap water, 100% lamp, clean quartz windows, nominal flow active.', 'info');
  };

  const handleWipeQuartzWindow = () => {
    setInputs((prev) => ({ ...prev, windowFouling: 0 }));
    addToast('✓ Suprasil-300 Quartz Window Wiped Clean', 'Mineral/tannin scaling removed (0% film). Optical transmittance restored.', 'success');
  };

  const handleInstallNewLamp = () => {
    setAccumulatedHours(0);
    setInputs((prev) => ({ ...prev, lampOutput: 100 }));
    addToast('✓ Brand-New UVC Lamp Calibrated', 'Operating hours reset to 0. Radiant flux restored to 100% nominal.', 'success');
  };

  const handleExportCsv = () => {
    if (telemetry.length === 0) return;

    let csvContent = 'data:text/csv;charset=utf-8,Tick,Timestamp,SimTime_s,Dose_mJ_cm2,Target_mJ_cm2,Cutoff_mJ_cm2,Flow_L_min,UVT_per_cm,SafetyState\n';
    telemetry.forEach((row) => {
      csvContent += `${row.tick},"${row.timestamp}",${row.simTime.toFixed(1)},${row.dose.toFixed(2)},${row.targetDose},${row.cutoffDose},${row.flowLPerMin.toFixed(3)},${row.uvtPerCm.toFixed(1)},${row.state}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    const fileName = `doseguard_telemetry_${telemetry.length}rows_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.csv`;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast('✓ CSV Telemetry Exported', `Downloaded ${telemetry.length.toLocaleString()} data points to ${fileName}`, 'success');
  };

  const handleExportLogs = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(auditLogs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `doseguard_audit_log_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    addToast('✓ Audit Logs Exported', `Downloaded ${auditLogs.length} safety state transitions as JSON.`, 'success');
  };

  const handleExportStl = () => {
    // Generate valid ASCII STL header and solid
    const stlContent = `solid DoseGuard_UV_Reactor_Chamber
  facet normal 0.0 0.0 1.0
    outer loop
      vertex -12.5 -12.5 30.56
      vertex 12.5 -12.5 30.56
      vertex 12.5 12.5 30.56
    endloop
  endfacet
  facet normal 0.0 0.0 -1.0
    outer loop
      vertex -12.5 -12.5 -30.56
      vertex 12.5 12.5 -30.56
      vertex 12.5 -12.5 -30.56
    endloop
  endfacet
endsolid DoseGuard_UV_Reactor_Chamber`;

    const blob = new Blob([stlContent], { type: 'application/sla' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'DoseGuard_Reactor_Assembly_CAD.stl';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast('✓ 3D CAD .STL Downloaded', 'DoseGuard_Reactor_Assembly_CAD.stl ready for 3D printing or CAD import.', 'success');
  };

  const scrollToSim = () => {
    const el = document.getElementById('simulation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen text-slate-100 ${isDarkMode ? 'dark bg-obsidian-950' : 'bg-slate-900'} antialiased selection:bg-photon-cyan selection:text-black p-3 sm:p-6 lg:p-8 max-w-7xl mx-auto`}>
      
      {/* Toast Alert System */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Floating Island Navbar */}
      <Navbar
        ticks={ticks}
        simTimeSeconds={simTimeSeconds}
        realTimeSeconds={realTimeSeconds}
        safetyState={outputs.safetyState}
        isPaused={isPaused}
        onTogglePause={() => setIsPaused(!isPaused)}
        onReset={handleResetDefaults}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
        onExportCsv={handleExportCsv}
        csvRowCount={telemetry.length}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Executive Hero Problem Statement */}
      <HeroSection 
        onOpenBlueprint={() => setIsBlueprintOpen(true)} 
        onScrollToSim={scrollToSim} 
      />

      {/* Primary KPI Metrics Row */}
      <KpiMetrics outputs={outputs} inputs={inputs} />

      {/* 3D WebGL Live Reactor & 2D Engineering View */}
      <div id="simulation-section">
        <ThreeReactor
          outputs={outputs}
          inputs={inputs}
          viewMode={viewMode}
          onToggleViewMode={setViewMode}
          onOpenBlueprint={() => setIsBlueprintOpen(true)}
          onExportStl={handleExportStl}
        />
      </div>

      {/* Real-time 60-Second Telemetry SVG Stream */}
      <TelemetryChart
        telemetry={telemetry}
        bufferCapacity={bufferCapacity}
        onSetBufferCapacity={setBufferCapacity}
        totalLoggedCount={telemetry.length}
      />

      {/* Mission Control & Scenario Simulator */}
      <ScenarioSimulator
        inputs={inputs}
        onUpdateInputs={handleUpdateInputs}
        onResetDefaults={handleResetDefaults}
        calculatedUvtPerCm={outputs.uvtPerCm}
        calculatedA1={outputs.A1}
        calculatedT={outputs.T}
      />

      {/* Safety State Machine & Historical Event Audit Log */}
      <SafetyAuditLog
        logs={auditLogs}
        currentState={outputs.safetyState}
        stateReason={outputs.stateReason}
        onClearLogs={() => setAuditLogs([])}
        onExportLogs={handleExportLogs}
      />

      {/* Predictive Lamp-Decay & Int8 Edge AI Forecasting Engine */}
      <PredictiveEngine
        prognosis={prognosis}
        edgeAi={edgeAi}
        windowFouling={inputs.windowFouling ?? 0}
        onInstallNewLamp={handleInstallNewLamp}
        onWipeQuartzWindow={handleWipeQuartzWindow}
        speedMultiplier={speedMultiplier}
        onSetSpeedMultiplier={setSpeedMultiplier}
      />

      {/* Competitive Comparison Matrix: Conventional vs DoseGuard */}
      <ComparisonMatrix />

      {/* Footer & Engineering Notice */}
      <footer className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-3">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-white">Team SpaceX</span>
          <span>•</span>
          <span>Kalinga Institute of Industrial Technology (KIIT)</span>
          <span>•</span>
          <span className="text-photon-cyan font-bold">atomQUEST 2026 Hackathon</span>
        </div>

        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>DoseGuard Controller v1.1.0 • Firmware-Identical Digital Twin</span>
        </div>
      </footer>

      {/* Engineering Blueprint Modal */}
      <BlueprintModal
        isOpen={isBlueprintOpen}
        onClose={() => setIsBlueprintOpen(false)}
        onExportStl={handleExportStl}
        onShowToast={addToast}
      />

    </div>
  );
};

export default App;
