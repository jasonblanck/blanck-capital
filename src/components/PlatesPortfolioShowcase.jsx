import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Cpu, Crosshair, Radio, Shield, Globe, Terminal } from 'lucide-react';
import { flagshipPlates } from '../data/portfolioData';

// SVG Wireframe Renderers for Technical Blueprint Showcase
const SchematicBCI = () => (
  <div className="relative w-full h-full min-h-[260px] flex items-center justify-center p-4">
    <svg viewBox="0 0 320 200" className="w-full h-auto max-h-[260px] text-cyan-400 stroke-current fill-none stroke-[1.2]">
      {/* Target Crosshairs */}
      <circle cx="160" cy="100" r="80" strokeDasharray="3 3" className="opacity-30" />
      <circle cx="160" cy="100" r="45" strokeDasharray="2 4" className="opacity-50" />
      <circle cx="160" cy="100" r="6" className="fill-cyan-400 opacity-80" />
      
      {/* Brain Cortical Outline */}
      <path d="M 160 30 C 110 30 80 60 80 100 C 80 135 105 160 140 165 C 150 166 160 165 170 165 C 205 165 240 140 240 100 C 240 60 210 30 160 30 Z" className="opacity-70" />
      <path d="M 120 70 Q 140 85 160 70 Q 180 85 200 70" strokeDasharray="2 2" className="opacity-40" />
      <path d="M 110 110 Q 135 125 160 110 Q 185 125 210 110" strokeDasharray="2 2" className="opacity-40" />

      {/* N1 Implant Threads & Nodes */}
      {[
        { x: 140, y: 80 }, { x: 180, y: 80 }, { x: 130, y: 100 }, { x: 190, y: 100 },
        { x: 160, y: 70 }, { x: 160, y: 130 }, { x: 145, y: 120 }, { x: 175, y: 120 }
      ].map((pt, i) => (
        <g key={i}>
          <circle cx={pt.x} cy={pt.y} r="3" className="fill-cyan-300 opacity-90 animate-ping" style={{ animationDuration: `${2 + i % 3}s` }} />
          <line x1="160" y1="100" x2={pt.x} y2={pt.y} strokeDasharray="1 3" className="opacity-60" />
        </g>
      ))}

      {/* Monospace Overlay Telemetry */}
      <text x="15" y="25" className="text-[9px] font-mono fill-cyan-400 opacity-80 tracking-widest">N1_ARRAY: 1,024 THREADS</text>
      <text x="15" y="40" className="text-[8px] font-mono fill-neutral-400 tracking-widest">FREQ: 2.4 GHz UNIFIED</text>
      <text x="210" y="25" className="text-[9px] font-mono fill-emerald-400 opacity-90 tracking-widest">SIGNAL: 99.8% OK</text>
      <text x="210" y="40" className="text-[8px] font-mono fill-neutral-400 tracking-widest">LATENCY: &lt; 5.2ms</text>
      <line x1="20" y1="180" x2="300" y2="180" strokeDasharray="2 2" className="opacity-30" />
    </svg>
  </div>
);

const SchematicRobotics = () => (
  <div className="relative w-full h-full min-h-[260px] flex items-center justify-center p-4">
    <svg viewBox="0 0 320 200" className="w-full h-auto max-h-[260px] text-blue-400 stroke-current fill-none stroke-[1.2]">
      {/* Kinematic Grid */}
      <line x1="160" y1="10" x2="160" y2="190" strokeDasharray="2 4" className="opacity-30" />
      <line x1="20" y1="100" x2="300" y2="100" strokeDasharray="2 4" className="opacity-30" />

      {/* Bipedal Head & Torso Frame */}
      <rect x="145" y="25" width="30" height="22" rx="4" className="opacity-80" />
      <circle cx="153" cy="36" r="2.5" className="fill-blue-400 opacity-90" />
      <circle cx="167" cy="36" r="2.5" className="fill-blue-400 opacity-90" />
      <line x1="160" y1="47" x2="160" y2="60" />
      
      {/* Chest & Shoulder Chassis */}
      <path d="M 125 60 L 195 60 L 180 115 L 140 115 Z" className="opacity-80" />
      <circle cx="125" cy="60" r="5" className="opacity-70" />
      <circle cx="195" cy="60" r="5" className="opacity-70" />

      {/* Arms & Hands */}
      <line x1="125" y1="65" x2="105" y2="110" />
      <line x1="105" y1="110" x2="95" y2="145" />
      <circle cx="95" cy="145" r="3" className="fill-blue-300 opacity-90" />

      <line x1="195" y1="65" x2="215" y2="110" />
      <line x1="215" y1="110" x2="225" y2="145" />
      <circle cx="225" cy="145" r="3" className="fill-blue-300 opacity-90" />

      {/* Legs & Actuator Joints */}
      <line x1="145" y1="115" x2="140" y2="155" />
      <line x1="140" y1="155" x2="138" y2="185" />
      <circle cx="140" cy="155" r="4" className="opacity-70" />

      <line x1="175" y1="115" x2="180" y2="155" />
      <line x1="180" y1="155" x2="182" y2="185" />
      <circle cx="180" cy="155" r="4" className="opacity-70" />

      {/* Monospace Overlay */}
      <text x="15" y="25" className="text-[9px] font-mono fill-blue-400 opacity-90 tracking-widest">FIGURE_02 // KINEMATICS</text>
      <text x="15" y="40" className="text-[8px] font-mono fill-neutral-400 tracking-widest">16-DoF PALM / VLM INTEL</text>
      <text x="210" y="25" className="text-[9px] font-mono fill-blue-400 opacity-90 tracking-widest">ACTUATORS: TORQUE OK</text>
      <text x="210" y="40" className="text-[8px] font-mono fill-neutral-400 tracking-widest">PAYLOAD: 20 KG MAX</text>
    </svg>
  </div>
);

const SchematicDefense = () => (
  <div className="relative w-full h-full min-h-[260px] flex items-center justify-center p-4">
    <svg viewBox="0 0 320 200" className="w-full h-auto max-h-[260px] text-emerald-400 stroke-current fill-none stroke-[1.2]">
      {/* Radar Sweep Arc */}
      <circle cx="160" cy="100" r="75" strokeDasharray="3 3" className="opacity-25" />
      <circle cx="160" cy="100" r="45" strokeDasharray="1 3" className="opacity-40" />

      {/* Tactical Stealth Aircraft Geometry */}
      <path d="M 160 25 L 230 145 L 180 135 L 160 170 L 140 135 L 90 145 Z" className="opacity-80" />
      <line x1="160" y1="25" x2="160" y2="170" strokeDasharray="2 2" className="opacity-50" />
      <line x1="110" y1="110" x2="210" y2="110" strokeDasharray="2 2" className="opacity-50" />

      {/* Autonomous Swarm Vector Nodes */}
      {[
        { x: 75, y: 65, label: 'SWARM_01' },
        { x: 245, y: 65, label: 'SWARM_02' },
        { x: 75, y: 155, label: 'V-BAT_A' },
        { x: 245, y: 155, label: 'V-BAT_B' }
      ].map((node, i) => (
        <g key={i}>
          <rect x={node.x - 12} y={node.y - 12} width="24" height="24" className="opacity-40" />
          <circle cx={node.x} cy={node.y} r="3" className="fill-emerald-400 opacity-90 animate-pulse" />
          <line x1="160" y1="100" x2={node.x} y2={node.y} strokeDasharray="1 4" className="opacity-50" />
        </g>
      ))}

      {/* Monospace Overlay */}
      <text x="15" y="25" className="text-[9px] font-mono fill-emerald-400 opacity-90 tracking-widest">HIVEMIND // AUTONOMY STACK</text>
      <text x="15" y="40" className="text-[8px] font-mono fill-neutral-400 tracking-widest">GPS-DENIED: OPERATIONAL</text>
      <text x="210" y="25" className="text-[9px] font-mono fill-emerald-400 opacity-90 tracking-widest">MODE: SWARM TACTICAL</text>
      <text x="210" y="40" className="text-[8px] font-mono fill-neutral-400 tracking-widest">LINK: ENCRYPTED MESH</text>
    </svg>
  </div>
);

const SchematicSpace = () => (
  <div className="relative w-full h-full min-h-[260px] flex items-center justify-center p-4">
    <svg viewBox="0 0 320 200" className="w-full h-auto max-h-[260px] text-amber-400 stroke-current fill-none stroke-[1.2]">
      {/* Orbital Globe Grid */}
      <circle cx="160" cy="100" r="85" strokeDasharray="2 4" className="opacity-20" />
      <ellipse cx="160" cy="100" rx="85" ry="30" strokeDasharray="2 4" className="opacity-30" />

      {/* Starlab Habitat M1 Module */}
      <rect x="115" y="75" width="90" height="50" rx="10" className="opacity-90" />
      <line x1="140" y1="75" x2="140" y2="125" strokeDasharray="2 2" className="opacity-50" />
      <line x1="180" y1="75" x2="180" y2="125" strokeDasharray="2 2" className="opacity-50" />

      {/* Solar Panel Wings */}
      <rect x="35" y="85" width="70" height="30" rx="2" className="opacity-70" />
      <line x1="58" y1="85" x2="58" y2="115" />
      <line x1="81" y1="85" x2="81" y2="115" />
      <line x1="35" y1="100" x2="105" y2="100" strokeDasharray="1 2" />

      <rect x="215" y="85" width="70" height="30" rx="2" className="opacity-70" />
      <line x1="238" y1="85" x2="238" y2="115" />
      <line x1="261" y1="85" x2="261" y2="115" />
      <line x1="215" y1="100" x2="285" y2="100" strokeDasharray="1 2" />

      {/* SpaceX Starship Launch Envelope Overlay */}
      <path d="M 105 50 Q 160 30 215 50 L 215 150 L 105 150 Z" strokeDasharray="3 3" className="opacity-25" />

      {/* Monospace Overlay */}
      <text x="15" y="25" className="text-[9px] font-mono fill-amber-400 opacity-90 tracking-widest">STARLAB // HABITAT M1</text>
      <text x="15" y="40" className="text-[8px] font-mono fill-neutral-400 tracking-widest">SINGLE STARSHIP LAUNCH</text>
      <text x="210" y="25" className="text-[9px] font-mono fill-amber-400 opacity-90 tracking-widest">ALTITUDE: 408 KM LEO</text>
      <text x="210" y="40" className="text-[8px] font-mono fill-neutral-400 tracking-widest">CREW: 4 PERMANENT</text>
    </svg>
  </div>
);

export default function PlatesPortfolioShowcase() {
  const [activePlateIndex, setActivePlateIndex] = useState(0);
  const activePlate = flagshipPlates[activePlateIndex];

  const renderSchematic = (type) => {
    switch (type) {
      case 'bci': return <SchematicBCI />;
      case 'robotics': return <SchematicRobotics />;
      case 'defense': return <SchematicDefense />;
      case 'space': return <SchematicSpace />;
      default: return <SchematicBCI />;
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#050507] relative border-b border-white/10">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Terminal className="text-blue-400" size={16} />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                FLAGSHIP INVESTMENTS // BLUEPRINT SHOWCASE
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none">
              Technical Plates.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-sans">
            Structured architectural blueprints for Blanck Capital's core positions defining neurotech, robotics, defense autonomy, and commercial space infrastructure.
          </p>
        </div>

        {/* Horizontal Navigation Strip / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/10 scrollbar-none">
          {flagshipPlates.map((plate, idx) => {
            const isActive = activePlateIndex === idx;
            return (
              <button
                key={plate.id}
                onClick={() => setActivePlateIndex(idx)}
                className={`px-5 py-3 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-3 shrink-0 cursor-pointer border ${
                  isActive
                    ? 'bg-blue-950/40 border-blue-500/60 text-white shadow-lg shadow-blue-950/50'
                    : 'bg-neutral-900/60 border-white/5 text-neutral-400 hover:text-white hover:bg-neutral-800/80 hover:border-white/20'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-blue-400 animate-pulse' : 'bg-neutral-600'
                  }`}
                />
                <span className="font-bold">{plate.plateNumber}</span>
                <span className="text-neutral-400">·</span>
                <span>{plate.name}</span>
                {isActive && (
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-400/30 px-1.5 py-0.5 rounded ml-1">
                    SYS-ACTIVE
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Technical Plate Container */}
        <div className="bg-[#0b0b0e] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Top Classification Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-blue-400 font-mono text-xs font-bold tracking-widest">
                {activePlate.plateNumber} · {activePlate.name.toUpperCase()} // {activePlate.sysTag}
              </span>
              <span className="text-neutral-400 text-xs font-mono">|</span>
              <span className="text-neutral-300 font-mono text-xs">
                LOC: <strong className="text-white">{activePlate.location}</strong>
              </span>
              <span className="text-neutral-400 text-xs font-mono">|</span>
              <span className="text-neutral-300 font-mono text-xs">
                STAGE: <strong className="text-emerald-400">{activePlate.stage}</strong>
              </span>
            </div>

            <a
              href={activePlate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 hover:underline uppercase tracking-wider self-start sm:self-auto"
            >
              VISIT COMPANY <ExternalLink size={14} />
            </a>
          </div>

          {/* Main Content Grid: Schematic (Left) & Metadata/Mission/Milestones (Right) */}
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Interactive Vector Schematic Box */}
            <div className="lg:col-span-5 bg-[#070709] border border-white/10 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden group">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2 px-2">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Crosshair size={12} className="text-blue-400" />
                  TECHNICAL SCHEMATIC WIREFRAME
                </span>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Dynamic SVG Schematic Component */}
              <div className="flex-1 flex items-center justify-center">
                {renderSchematic(activePlate.wireframeType)}
              </div>

              {/* Bottom Schematic Footer Data */}
              <div className="border-t border-white/10 pt-3 px-2 flex justify-between items-center text-[10px] font-mono text-neutral-500 uppercase">
                <span>SUB-ARCH: {activePlate.sysTag}</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>

            {/* Right Column: Metadata Grid, Mission, Milestones */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              {/* Structured Metadata Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#0f0f14] border border-white/10 p-4 rounded-xl">
                  <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
                    FOUNDER / LEADERSHIP
                  </span>
                  <span className="text-sm font-semibold text-white font-sans">
                    {activePlate.leadership}
                  </span>
                </div>

                <div className="bg-[#0f0f14] border border-white/10 p-4 rounded-xl">
                  <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
                    PRIMARY DOMAIN
                  </span>
                  <span className="text-sm font-semibold text-blue-300 font-sans">
                    {activePlate.domain}
                  </span>
                </div>

                <div className="bg-[#0f0f14] border border-white/10 p-4 rounded-xl">
                  <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
                    SUBSYSTEM ARCHITECTURE
                  </span>
                  <span className="text-sm font-semibold text-white font-sans">
                    {activePlate.subsystem}
                  </span>
                </div>

                <div className="bg-[#0f0f14] border border-white/10 p-4 rounded-xl">
                  <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
                    DEPLOYMENT STAGE
                  </span>
                  <span className="text-sm font-semibold text-emerald-400 font-sans">
                    {activePlate.status}
                  </span>
                </div>
              </div>

              {/* The Mission */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold flex items-center gap-2">
                  <Globe size={14} /> THE MISSION
                </span>
                <p className="text-base text-neutral-300 font-normal leading-relaxed pl-4 border-l-2 border-blue-500">
                  {activePlate.mission}
                </p>
              </div>

              {/* Monospace Milestones */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  KEY MILESTONE DATA POINTS
                </span>

                <div className="space-y-2 bg-[#07070a] border border-white/10 p-4 rounded-xl font-mono text-xs">
                  {activePlate.milestones.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold shrink-0">
                        [{m.date}]
                      </span>
                      <span className="text-neutral-300 leading-normal">
                        {m.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
