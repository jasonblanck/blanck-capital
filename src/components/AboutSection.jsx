import React from 'react';
import { ExternalLink, GraduationCap, Building2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#08080a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold block">
            ABOUT THE FIRM
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none">
            Blanck Capital.
          </h2>
          <p className="text-neutral-300 text-lg sm:text-xl font-normal leading-relaxed">
            Accredited Investor & Private Family Office investing across growth startups, defense technology, commercial space, equities, and real estate.
          </p>

          {/* CNBC Media Citation */}
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mt-6">
            As featured in{' '}
            <a
              href="https://www.cnbc.com/2026/06/11/spacex-billionaire-investing.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 inline-flex items-center gap-1"
            >
              CNBC <ExternalLink size={12} />
            </a>
            , private family offices are increasingly driving direct capital allocations into the commercial space economy—directly aligning with our core thesis in defense, aerospace, and hypersonic technologies.
          </div>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Jason K. Blanck */}
          <div className="bg-[#0e0e12] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-blue-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded">
                  FOUNDER & PRINCIPAL
                </span>
                <span className="text-xs font-mono text-neutral-500">EST. 2024</span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-white mb-2">
                Jason K. Blanck
              </h3>
              <div className="w-10 h-0.5 bg-blue-500 mb-6 rounded-full" />

              <p className="text-sm text-neutral-300 leading-relaxed font-normal mb-4">
                Jason is the Founder & Principal of Blanck Capital LLC, established in 2024. An award-winning entrepreneur, prolific stock trader, and strategic investor backing breakthrough technologies defining the future.
              </p>

              <p className="text-sm text-neutral-400 leading-relaxed font-normal mb-8">
                Jason earned his Bachelor's degree from <strong className="text-white">Cornell University</strong> and received his Master's degree with honors from the <strong className="text-white">S.I. Newhouse School of Public Communications at Syracuse University</strong>.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300">
                <GraduationCap size={14} className="text-blue-400" /> Cornell University
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300">
                <GraduationCap size={14} className="text-blue-400" /> Syracuse · Newhouse
              </span>
            </div>
          </div>

          {/* Elise Jacobs Blanck */}
          <div className="bg-[#0e0e12] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-blue-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded">
                  CO-FOUNDER
                </span>
                <span className="text-xs font-mono text-neutral-500">EST. 2024</span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-white mb-2">
                Elise Jacobs Blanck
              </h3>
              <div className="w-10 h-0.5 bg-blue-500 mb-6 rounded-full" />

              <p className="text-sm text-neutral-300 leading-relaxed font-normal mb-4">
                The Blanck Family Office was co-founded with the support of Jason's wife, Elise. She brings over a decade of executive experience building and scaling global CPG brands at industry leaders including <strong className="text-white">Unilever</strong> and <strong className="text-white">Godiva</strong>.
              </p>

              <p className="text-sm text-neutral-400 leading-relaxed font-normal mb-8">
                Elise is focused on accelerating growth and awareness for mission-driven consumer brands that improve daily life. She and Jason met while studying business and communications at <strong className="text-white">Cornell University</strong>.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300">
                <GraduationCap size={14} className="text-blue-400" /> Cornell University
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300">
                <Building2 size={14} className="text-blue-400" /> Unilever · Godiva
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
