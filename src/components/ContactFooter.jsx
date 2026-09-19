import React from 'react';
import { Mail, MapPin, Building, Calendar, ArrowUpRight } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#050507] pt-24 pb-12 border-t border-white/10 text-white relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-3 block">
          INQUIRIES & CONSULTING
        </span>

        <h2 className="text-4xl sm:text-7xl font-bold tracking-tight text-white mb-6">
          Let's Talk.
        </h2>

        <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto mb-10 font-normal leading-relaxed">
          We welcome conversations with visionary founders, co-investors, and strategic partners who share our patient, long-term balance sheet orientation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="mailto:jason@blanckcapital.com"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-base tracking-tight transition-all transform hover:scale-[1.02] shadow-xl"
          >
            <Mail size={18} />
            Get In Touch
          </a>

          <a
            href="https://blanckcapital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/15 text-xs font-mono uppercase tracking-wider transition-all"
          >
            VISIT MAIN SITE <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Structure & Location Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16 text-left">
          <div className="bg-[#0c0c10] border border-white/10 p-6 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                PRIMARY LOCATION
              </span>
              <span className="text-sm font-bold text-white">New York, NY</span>
            </div>
          </div>

          <div className="bg-[#0c0c10] border border-white/10 p-6 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Building size={20} />
            </div>
            <div>
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                ENTITY STRUCTURE
              </span>
              <span className="text-sm font-bold text-white">Private Family Office</span>
            </div>
          </div>

          <div className="bg-[#0c0c10] border border-white/10 p-6 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Calendar size={20} />
            </div>
            <div>
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                FOUNDED
              </span>
              <span className="text-sm font-bold text-white">Established 2024</span>
            </div>
          </div>
        </div>

        {/* Navigation & Footer Meta */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-400 font-mono">
          <span>Copyright © 2024–2026 Blanck Capital LLC. All rights reserved.</span>

          <div className="flex items-center gap-6">
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#approach" className="hover:text-white transition-colors">Approach</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <p className="mt-8 pt-6 border-t border-white/5 text-[11px] text-neutral-500 font-sans max-w-3xl mx-auto leading-relaxed">
          Blanck Capital LLC is a private family office. Nothing on this website constitutes investment advice, financial recommendation, an endorsement, a solicitation, or an offer to buy or sell any security, fund, or financial asset. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
