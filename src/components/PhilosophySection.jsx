import React from 'react';
import { ShieldCheck, Compass, Target, UserCheck } from 'lucide-react';

export default function PhilosophySection() {
  const cards = [
    {
      num: '01',
      title: 'Long-Term Thinking',
      desc: 'Decades, not quarters. Time is our greatest edge over institutional capital constrained by short redemption cycles.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Deep Research',
      desc: 'Every position is earned through rigorous technical analysis, domain immersion, and first-principles understanding.',
      icon: ShieldCheck
    },
    {
      num: '03',
      title: 'Concentrated Bets',
      desc: 'We bet big when conviction is high. Wide diversification dilutes excellence into mediocrity.',
      icon: Target
    },
    {
      num: '04',
      title: 'Founder-First',
      desc: 'We back world-class founders building generational platforms before products mature. Exceptional visionaries forge unprecedented paths.',
      icon: UserCheck
    }
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#070708] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                PHILOSOPHY & THESIS
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none">
              Capital with<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-neutral-400">
                Conviction.
              </span>
            </h2>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-normal">
              We don't diversify into mediocrity. We concentrate into excellence—backing founders and breakthrough technological architectures that reshape industries and endure for generations.
            </p>

            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-normal">
              As a private family office, our sole mandate is long-term value creation. Free from committee consensus, quarterly pressure, or rigid fund lifecycles, we operate with speed, agility, and patient balance sheet strength.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center gap-6">
              <div>
                <span className="block text-xs font-mono text-neutral-500 uppercase">MANDATE</span>
                <span className="text-sm font-semibold text-white">Direct Family Allocation</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="block text-xs font-mono text-neutral-500 uppercase">FLEXIBILITY</span>
                <span className="text-sm font-semibold text-white">Permanent Balance Sheet</span>
              </div>
            </div>
          </div>

          {/* Right Column Cards Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {cards.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.num}
                  className="bg-[#0f0f13] border border-white/10 hover:border-blue-500/40 p-8 rounded-2xl transition-all duration-300 group hover:translate-y-[-4px] hover:shadow-xl hover:shadow-blue-900/10 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                      SYS // {card.num}
                    </span>
                    <IconComp className="text-neutral-500 group-hover:text-blue-400 transition-colors" size={22} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
