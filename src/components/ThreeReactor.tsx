import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Box, 
  Layers, 
  Eye, 
  Download, 
  Sliders, 
  Maximize, 
  RotateCw,
  AlertTriangle,
  Lock,
  Unlock,
  Radio
} from 'lucide-react';
import { SimulationOutputs, SystemInputs } from '../types';

interface ThreeReactorProps {
  outputs: SimulationOutputs;
  inputs: SystemInputs;
  viewMode: '3d' | '2d';
  onToggleViewMode: (mode: '3d' | '2d') => void;
  onOpenBlueprint: () => void;
  onExportStl: () => void;
}

export const ThreeReactor: React.FC<ThreeReactorProps> = ({
  outputs,
  inputs,
  viewMode,
  onToggleViewMode,
  onOpenBlueprint,
  onExportStl,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [explodeRatio, setExplodeRatio] = useState(0);
  const [cameraPreset, setCameraPreset] = useState<'overview' | 'cutaway' | 'valve'>('overview');
  
  // Refs to Three.js objects for smooth per-frame updates
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const uvBeamRef = useRef<THREE.Mesh | null>(null);
  const waterMeshRef = useRef<THREE.Mesh | null>(null);
  const valveMeshRef = useRef<THREE.Mesh | null>(null);
  const valveBeaconRef = useRef<THREE.PointLight | null>(null);
  const explodeGroupRef = useRef<THREE.Group | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const outputsRef = useRef(outputs);
  const inputsRef = useRef(inputs);
  const explodeRatioRef = useRef(explodeRatio);

  useEffect(() => {
    outputsRef.current = outputs;
    inputsRef.current = inputs;
  }, [outputs, inputs]);

  useEffect(() => {
    explodeRatioRef.current = explodeRatio;
  }, [explodeRatio]);

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current || viewMode !== '3d') return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight || 460;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#07090e');
    scene.fog = new THREE.FogExp2('#07090e', 0.04);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(5.5, 3.2, 5.0);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;
    mountRef.current.replaceChildren(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight('#e0f2fe', 2.0);
    dirLight1.position.set(6, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight('#93c5fd', 1.0);
    dirLight2.position.set(-6, -4, -4);
    scene.add(dirLight2);

    const uvPointLight = new THREE.PointLight('#a855f7', 4.0, 8);
    uvPointLight.position.set(0, 0, 0);
    scene.add(uvPointLight);

    // 5. Build Reactor Assembly Group
    const reactorAssembly = new THREE.Group();
    explodeGroupRef.current = reactorAssembly;
    scene.add(reactorAssembly);

    // Outer 316L Stainless Steel Shell (cutaway to see inside)
    const shellGeo = new THREE.CylinderGeometry(1.15, 1.15, 4.2, 36, 1, false, 0, Math.PI * 1.55);
    const shellMat = new THREE.MeshStandardMaterial({
      color: '#94a3b8',
      metalness: 0.88,
      roughness: 0.22,
      side: THREE.DoubleSide,
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    shellMesh.rotation.z = Math.PI / 2;
    reactorAssembly.add(shellMesh);

    // End Flanges
    const flangeGeo = new THREE.CylinderGeometry(1.35, 1.35, 0.22, 32);
    const flangeMat = new THREE.MeshStandardMaterial({ color: '#64748b', metalness: 0.9, roughness: 0.2 });
    
    const flangeLeft = new THREE.Mesh(flangeGeo, flangeMat);
    flangeLeft.rotation.z = Math.PI / 2;
    flangeLeft.position.x = -2.15;
    reactorAssembly.add(flangeLeft);

    const flangeRight = new THREE.Mesh(flangeGeo, flangeMat);
    flangeRight.rotation.z = Math.PI / 2;
    flangeRight.position.x = 2.15;
    reactorAssembly.add(flangeRight);

    // Fluid Ports (Inlet at -X, Outlet at +X)
    const portGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.9, 20);
    const portMat = new THREE.MeshStandardMaterial({ color: '#475569', metalness: 0.85, roughness: 0.3 });
    
    const inletPort = new THREE.Mesh(portGeo, portMat);
    inletPort.position.set(-1.6, -1.2, 0);
    reactorAssembly.add(inletPort);

    const outletPort = new THREE.Mesh(portGeo, portMat);
    outletPort.position.set(1.6, 1.2, 0);
    reactorAssembly.add(outletPort);

    // Solenoid Valve at Outlet
    const valveGroup = new THREE.Group();
    valveGroup.position.set(1.6, 1.75, 0);
    
    const valveBodyGeo = new THREE.BoxGeometry(0.65, 0.75, 0.65);
    const valveBodyMat = new THREE.MeshStandardMaterial({ color: '#1e293b', metalness: 0.7, roughness: 0.3 });
    const valveBody = new THREE.Mesh(valveBodyGeo, valveBodyMat);
    valveGroup.add(valveBody);

    const coilGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.5, 20);
    const coilMat = new THREE.MeshStandardMaterial({ color: '#0f172a', metalness: 0.5, roughness: 0.5 });
    const coilMesh = new THREE.Mesh(coilGeo, coilMat);
    coilMesh.position.y = 0.55;
    valveGroup.add(coilMesh);

    // Solenoid State Indicator Beacon
    const beaconGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const beaconMat = new THREE.MeshStandardMaterial({
      color: '#10b981',
      emissive: '#10b981',
      emissiveIntensity: 2.0,
      roughness: 0.1,
    });
    const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
    beaconMesh.position.y = 0.95;
    valveGroup.add(beaconMesh);
    valveMeshRef.current = beaconMesh;

    const valveLight = new THREE.PointLight('#10b981', 1.5, 3);
    valveLight.position.set(0, 0.95, 0);
    valveGroup.add(valveLight);
    valveBeaconRef.current = valveLight;

    reactorAssembly.add(valveGroup);

    // Virgin PTFE Liner (Reflective sleeve)
    const ptfeGeo = new THREE.CylinderGeometry(1.05, 1.05, 4.0, 32, 1, true, 0, Math.PI * 1.55);
    const ptfeMat = new THREE.MeshStandardMaterial({
      color: '#f8fafc',
      roughness: 0.95,
      metalness: 0.05,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const ptfeMesh = new THREE.Mesh(ptfeGeo, ptfeMat);
    ptfeMesh.rotation.z = Math.PI / 2;
    reactorAssembly.add(ptfeMesh);

    // Water Column
    const waterGeo = new THREE.CylinderGeometry(0.98, 0.98, 3.9, 32);
    const waterMat = new THREE.MeshStandardMaterial({
      color: '#38bdf8',
      transparent: true,
      opacity: 0.4,
      roughness: 0.1,
      metalness: 0.1,
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.rotation.z = Math.PI / 2;
    waterMeshRef.current = waterMesh;
    reactorAssembly.add(waterMesh);

    // Central Quartz Sleeve & UV Emitter Rod
    const quartzGeo = new THREE.CylinderGeometry(0.24, 0.24, 4.3, 24);
    const quartzMat = new THREE.MeshPhysicalMaterial({
      color: '#e0f2fe',
      transmission: 0.92,
      opacity: 0.65,
      transparent: true,
      roughness: 0.05,
      ior: 1.48,
    });
    const quartzMesh = new THREE.Mesh(quartzGeo, quartzMat);
    quartzMesh.rotation.z = Math.PI / 2;
    reactorAssembly.add(quartzMesh);

    // Glowing UV Core Beam
    const uvGeo = new THREE.CylinderGeometry(0.12, 0.12, 4.0, 16);
    const uvMat = new THREE.MeshBasicMaterial({
      color: '#c084fc',
      transparent: true,
      opacity: 0.9,
    });
    const uvBeam = new THREE.Mesh(uvGeo, uvMat);
    uvBeam.rotation.z = Math.PI / 2;
    uvBeamRef.current = uvBeam;
    reactorAssembly.add(uvBeam);

    // Dual Optical Sensor Ports (PD-A & PD-B)
    const sensorGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const pdAMat = new THREE.MeshStandardMaterial({ color: '#0284c7', emissive: '#0284c7', emissiveIntensity: 0.8 });
    const pdBMat = new THREE.MeshStandardMaterial({ color: '#7c3aed', emissive: '#7c3aed', emissiveIntensity: 0.8 });

    const pdAMesh = new THREE.Mesh(sensorGeo, pdAMat);
    pdAMesh.position.set(-0.6, 0, 1.4);
    reactorAssembly.add(pdAMesh);

    const pdBMesh = new THREE.Mesh(sensorGeo, pdBMat);
    pdBMesh.position.set(0.6, 0, 1.4);
    reactorAssembly.add(pdBMesh);

    // Calibrated Optical Gap Indicator Line (20.0 mm = 2.0 cm)
    const gapPoints = [new THREE.Vector3(-0.6, 0.25, 1.4), new THREE.Vector3(0.6, 0.25, 1.4)];
    const gapGeo = new THREE.BufferGeometry().setFromPoints(gapPoints);
    const gapLine = new THREE.Line(gapGeo, new THREE.LineDashedMaterial({ color: '#c084fc', dashSize: 0.1, gapSize: 0.05 }));
    reactorAssembly.add(gapLine);

    // 6. Water Flow Particles
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3.8;      // X along chamber length
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1.5;  // Y radius
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;  // Z radius
      speeds[i] = 0.5 + Math.random() * 0.5;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: '#38bdf8',
      size: 0.08,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    particlesRef.current = particles;
    reactorAssembly.add(particles);

    // Mouse drag interaction
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let rotX = 0.3;
    let rotY = -0.4;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouse.x;
      const deltaY = e.clientY - prevMouse.y;
      prevMouse = { x: e.clientX, y: e.clientY };

      rotY += deltaX * 0.008;
      rotX += deltaY * 0.008;
      rotX = Math.max(-1.2, Math.min(1.2, rotX));
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.multiplyScalar(e.deltaY > 0 ? 1.05 : 0.95);
      camera.position.clampLength(3.0, 15.0);
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('wheel', onWheel, { passive: false });

    // 7. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const curOutputs = outputsRef.current;
      const curInputs = inputsRef.current;
      const curExplode = explodeRatioRef.current;

      // Update rotation from drag or gentle idle drift
      if (!isDragging) {
        rotY += delta * 0.05;
      }
      reactorAssembly.rotation.y = rotY;
      reactorAssembly.rotation.x = rotX;

      // Apply Exploded CAD View offset
      flangeLeft.position.x = -2.15 - curExplode * 1.5;
      flangeRight.position.x = 2.15 + curExplode * 1.5;
      shellMesh.position.y = -curExplode * 1.2;
      ptfeMesh.position.z = curExplode * 1.4;
      valveGroup.position.y = 1.75 + curExplode * 1.2;

      // Dynamic Water Color based on tea turbidity
      if (waterMeshRef.current) {
        const tea = curInputs.tea;
        const waterColor = new THREE.Color();
        if (tea <= 25) {
          waterColor.set('#38bdf8'); // Clear cyan
        } else if (tea <= 70) {
          waterColor.set('#f59e0b'); // Amber borewell
        } else {
          waterColor.set('#991b1b'); // Dark silt / monsoon
        }
        (waterMeshRef.current.material as THREE.MeshStandardMaterial).color.lerp(waterColor, 0.1);
      }

      // Dynamic UV Core Intensity
      if (uvBeamRef.current) {
        const uvMat = uvBeamRef.current.material as THREE.MeshBasicMaterial;
        if (!curInputs.coverClosed) {
          uvMat.opacity = 0; // Cut off on interlock open
        } else {
          const intensity = (curInputs.lampOutput / 100) * (curOutputs.sensorsOk ? 1.0 : 0.3);
          uvMat.opacity = 0.3 + intensity * 0.7;
        }
      }

      // Dynamic Solenoid Valve Status & Beacon Light
      if (valveMeshRef.current && valveBeaconRef.current) {
        const beaconMat = valveMeshRef.current.material as THREE.MeshStandardMaterial;
        if (curOutputs.valveOpen) {
          beaconMat.color.set('#10b981');
          beaconMat.emissive.set('#10b981');
          valveBeaconRef.current.color.set('#10b981');
        } else {
          // FAIL_CLOSED: Pulsing crimson hazard beacon
          const pulse = (Math.sin(clock.getElapsedTime() * 6) + 1) * 0.5;
          beaconMat.color.set('#f43f5e');
          beaconMat.emissive.set('#f43f5e');
          beaconMat.emissiveIntensity = 1.0 + pulse * 2.5;
          valveBeaconRef.current.color.set('#f43f5e');
        }
      }

      // CRITICAL FIX: Animate Water Flow Particles
      // If FAIL_CLOSED, particle flow speed drops to 0 immediately!
      if (particlesRef.current) {
        const posAttr = particlesRef.current.geometry.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;
        const flowRate = curOutputs.valveOpen ? curOutputs.flowMlPerSec : 0; // 0 if valve closed!

        for (let i = 0; i < particleCount; i++) {
          if (flowRate > 0) {
            posArray[i * 3] += delta * flowRate * 0.5 * speeds[i];
            if (posArray[i * 3] > 1.9) {
              posArray[i * 3] = -1.9;
            }
          }
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [viewMode]);

  // Camera preset selector
  const handleSelectPreset = (preset: 'overview' | 'cutaway' | 'valve') => {
    setCameraPreset(preset);
    if (!cameraRef.current) return;
    if (preset === 'overview') {
      cameraRef.current.position.set(5.5, 3.2, 5.0);
    } else if (preset === 'cutaway') {
      cameraRef.current.position.set(0, 0.5, 6.5);
    } else if (preset === 'valve') {
      cameraRef.current.position.set(3.2, 2.5, 2.8);
    }
    cameraRef.current.lookAt(0, 0, 0);
  };

  return (
    <div className="relative w-full rounded-3xl bg-obsidian-900/90 border border-slate-800 shadow-bezel overflow-hidden mb-6 backdrop-blur-md">
      
      {/* Viewport Header Overlay */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        
        {/* State Pill */}
        <div className="flex items-center space-x-2 pointer-events-auto">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-obsidian-950/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono text-slate-200 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-photon-cyan animate-ping" />
            <span className="font-bold tracking-wider text-photon-cyan">
              {viewMode === '3d' ? '3D LIVE REACTOR' : '2D OPTICAL SCHEMATIC'}
            </span>
            <span className="text-slate-600">|</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase">
              {outputs.valveOpen ? 'FLOW ACTIVE' : 'FAIL-CLOSED'}
            </span>
          </div>

          <div className={`hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase border backdrop-blur-md shadow-lg ${
            outputs.safetyState === 'RUNNING'
              ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
              : outputs.safetyState === 'THROTTLED'
              ? 'bg-amber-950/80 text-amber-400 border-amber-500/40'
              : outputs.safetyState === 'DEGRADED'
              ? 'bg-orange-950/80 text-orange-400 border-orange-500/40'
              : 'bg-rose-950/90 text-rose-400 border-rose-500/50 animate-hazard'
          }`}>
            {outputs.valveOpen ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
            <span>{outputs.safetyState}</span>
          </div>
        </div>

        {/* Viewport Control Bar */}
        <div className="flex items-center space-x-2 pointer-events-auto">
          {viewMode === '3d' && (
            <>
              {/* Camera Angle Presets */}
              <div className="hidden md:flex items-center p-0.5 rounded-xl bg-obsidian-950/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono">
                <button
                  onClick={() => handleSelectPreset('overview')}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    cameraPreset === 'overview' ? 'bg-photon-cyan/20 text-photon-cyan font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => handleSelectPreset('cutaway')}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    cameraPreset === 'cutaway' ? 'bg-photon-cyan/20 text-photon-cyan font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Cutaway
                </button>
                <button
                  onClick={() => handleSelectPreset('valve')}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    cameraPreset === 'valve' ? 'bg-photon-cyan/20 text-photon-cyan font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Valve
                </button>
              </div>

              {/* Exploded View Slider */}
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-obsidian-950/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono text-slate-300 shadow-lg">
                <Sliders className="w-3.5 h-3.5 text-purple-400" />
                <span className="hidden sm:inline">CAD Explode:</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={explodeRatio}
                  onChange={(e) => setExplodeRatio(parseFloat(e.target.value))}
                  className="w-20 sm:w-28 accent-purple-400 cursor-pointer"
                  title="Explode 3D Assemblies"
                />
                <span className="w-8 text-right font-bold text-purple-300">
                  {Math.round(explodeRatio * 100)}%
                </span>
              </div>
            </>
          )}

          {/* Export CAD .STL button */}
          <button
            onClick={onExportStl}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-obsidian-950/90 border border-slate-700/80 hover:border-photon-cyan/50 text-photon-cyan hover:text-white backdrop-blur-md text-xs font-mono font-medium transition-all shadow-lg active:scale-[0.98]"
            title="Download Parametric .STL 3D Model File"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export .STL</span>
          </button>
        </div>
      </div>

      {/* Main 3D / 2D Viewport Container */}
      <div className="relative w-full h-[440px] sm:h-[480px] md:h-[520px]">
        {viewMode === '3d' ? (
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing select-none" />
        ) : (
          /* 2D Orthographic Engineering Schematic */
          <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between bg-obsidian-950 font-mono text-xs select-none overflow-x-auto">
            <div className="text-center space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-photon-cyan">
                DoseGuard 2.0 cm Calibrated Optical Path Schematic
              </span>
              <p className="text-[11px] text-slate-400">
                Chamber Volume V = 30 mL • AISI 316L Stainless Steel Bore (Ø 25 mm × 61.12 mm)
              </p>
            </div>

            {/* Schematic SVG Diagram */}
            <div className="relative my-4 max-w-2xl mx-auto w-full">
              <svg viewBox="0 0 600 240" className="w-full h-auto">
                <rect x="50" y="30" width="500" height="180" rx="20" fill="#080d14" stroke="#1e2c40" strokeWidth="2" />
                
                {/* Virgin PTFE Diffuse Liner */}
                <rect x="70" y="45" width="460" height="150" rx="12" fill="none" stroke="#64748b" strokeDasharray="4 4" strokeWidth="1.5" />
                
                {/* Water Column with Turbidity Fill */}
                <rect 
                  x="80" 
                  y="55" 
                  width="440" 
                  height="130" 
                  rx="8" 
                  fill={inputs.tea <= 25 ? '#0369a1' : inputs.tea <= 70 ? '#b45309' : '#7f1d1d'} 
                  fillOpacity="0.35" 
                />

                {/* UVC LED Array at Left */}
                <rect x="90" y="70" width="20" height="100" rx="4" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
                <text x="100" y="190" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">
                  4x 275nm
                </text>

                {/* UV Photons Ray Cone */}
                <polygon 
                  points="110,75 480,55 480,185 110,165" 
                  fill="url(#uvGrad)" 
                  fillOpacity={inputs.coverClosed ? (inputs.lampOutput / 100) * 0.45 : 0} 
                />

                {/* Sensor A: Reference (0 mm Gap) */}
                <rect x="150" y="40" width="30" height="15" rx="3" fill="#0284c7" />
                <text x="165" y="32" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
                  PD-A (Ref)
                </text>
                <line x1="165" y1="55" x2="165" y2="80" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />

                {/* Sensor B: Attenuated (20.0 mm Gap) */}
                <rect x="350" y="40" width="30" height="15" rx="3" fill="#7c3aed" />
                <text x="365" y="32" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">
                  PD-B (2.0 cm)
                </text>
                <line x1="365" y1="55" x2="365" y2="80" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="2 2" />

                {/* Gap Dimension Line */}
                <line x1="165" y1="210" x2="365" y2="210" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="165" y1="205" x2="165" y2="215" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="365" y1="205" x2="365" y2="215" stroke="#94a3b8" strokeWidth="1.5" />
                <text x="265" y="225" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold">
                  20.0 mm Calibrated Optical Gap (T = {(outputs.T * 100).toFixed(1)}%)
                </text>

                {/* Solenoid Valve at Outlet */}
                <rect 
                  x="485" 
                  y="20" 
                  width="40" 
                  height="40" 
                  rx="6" 
                  fill={outputs.valveOpen ? '#065f46' : '#881337'} 
                  stroke={outputs.valveOpen ? '#34d399' : '#f43f5e'} 
                  strokeWidth="2" 
                />
                <text x="505" y="15" textAnchor="middle" fill={outputs.valveOpen ? '#34d399' : '#f43f5e'} fontSize="10" fontWeight="bold">
                  {outputs.valveOpen ? 'VALVE OPEN' : 'FAIL-CLOSED'}
                </text>

                <defs>
                  <linearGradient id="uvGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#581c87" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
              <span>Fluence Rate: <strong className="text-photon-cyan">{outputs.fluence.toFixed(2)} mW/cm²</strong></span>
              <span>Flow Setting: <strong className="text-photon-amber">{outputs.qSet.toFixed(2)} mL/s</strong></span>
              <span>Delivered Dose: <strong className={outputs.dose >= 40 ? 'text-emerald-400' : 'text-rose-400'}>{outputs.dose.toFixed(1)} mJ/cm²</strong></span>
              <span>Solenoid Type: <strong className="text-slate-200">Normally-Closed (NC) Safe Default</strong></span>
            </div>
          </div>
        )}
      </div>

      {/* Interaction Hint Footer */}
      <div className="px-6 py-2.5 border-t border-slate-800/80 bg-obsidian-950/70 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
        <div className="flex items-center space-x-3">
          <span>Drag: <strong>Rotate</strong></span>
          <span>•</span>
          <span>Scroll: <strong>Zoom</strong></span>
          <span>•</span>
          <span>Right-Click: <strong>Pan</strong></span>
        </div>
        <div className="flex items-center space-x-2 text-slate-400">
          <span>Flow: <strong className={outputs.valveOpen ? 'text-emerald-400' : 'text-rose-400'}>{outputs.flowLPerMin.toFixed(2)} L/min</strong></span>
          <span>•</span>
          <span>Chamber: <strong>30 mL 316L SS + Virgin PTFE Liner</strong></span>
        </div>
      </div>

    </div>
  );
};
