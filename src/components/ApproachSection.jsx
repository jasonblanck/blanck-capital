import React from 'react';
import { Search, ShieldAlert, Award } from 'lucide-react';

export default function ApproachSection() {
  const steps = [
    {
      step: '01 · IDENTIFY',
      title: 'Thesis-Driven Discovery',
      desc: 'We build early conviction around generational macro themes—AI autonomy, neurotech, hypersonic defense, commercial space—then partner with category-defining founders.',
      icon: Search
    },
    {
      step: '02 · EVALUATE',
      title: 'Rigorous Due Diligence',
      desc: 'Every allocation earns its place on our balance sheet through technical validation, founder alignment, unit economics, and defensible moats.',
      icon: ShieldAlert
    },
    {
      step: '03 · COMMIT',
      title: 'Patient Balance Sheet',
      desc: 'When conviction is high, we back platforms with scale. We hold through public volatility, private market cycles, and short-term macro noise.',
      icon: Award
    }
  ];

  return (
    <section id="approach" className="py-24 sm:py-32 bg-[#08080a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-3 block">
            INVESTMENT FRAMEWORK
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Our Approach.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-normal leading-relaxed">
            A disciplined, long-term framework designed to identify and support world-changing platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0f0f14] border border-white/10 hover:border-blue-500/40 p-8 sm:p-10 rounded-2xl transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded">
                      {item.step}
                    </span>
                    <IconComp size={24} className="text-neutral-500 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>STAGE {idx + 1} OF 3</span>
                  <span className="text-blue-400">DISCIPLINED EXECUTION</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
