import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { tickerLogos } from '../data/portfolioData';

export default function HeroSection() {
  // Duplicate logos array for seamless loop
  const doubleLogos = [...tickerLogos, ...tickerLogos];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-6 overflow-hidden bg-[#070708]">
      {/* Ambient Blue Glowing Background Grid */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none animate-ambient-glow" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 my-auto">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
            NEW YORK · EST. 2024 · PRIVATE BALANCE SHEET
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 leading-[1.05] max-w-4xl mx-auto mb-8">
          Investing in<br />
          Tomorrow's World.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10 tracking-tight">
          Blanck Capital is a bespoke private family office backing the founders, technologies, and ideas defining the next century.
        </p>

        {/* Hero CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-base tracking-tight transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/25"
          >
            Explore Portfolio
            <ArrowRight size={18} />
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 font-mono text-xs uppercase tracking-wider transition-all backdrop-blur-sm"
          >
            OUR PHILOSOPHY
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
            SCROLL TO EXPLORE
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Infinite Rolling Ticker Strip */}
      <div className="relative z-10 w-full border-t border-b border-white/10 bg-neutral-950/60 backdrop-blur-md py-4 overflow-hidden mt-12">
        <div className="animate-ticker items-center gap-12 sm:gap-16">
          {doubleLogos.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity px-2 group cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-8 sm:h-10 w-auto object-contain filter brightness-0 invert opacity-85 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  // Fallback if local image path fails in preview
                  e.currentTarget.style.display = 'none';
                }}
              />
              {item.hasText && (
                <span className="text-sm font-semibold tracking-tight text-white whitespace-nowrap">
                  {item.name}
                </span>
              )}
              <span className="text-neutral-700 ml-6 text-xs font-mono">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
