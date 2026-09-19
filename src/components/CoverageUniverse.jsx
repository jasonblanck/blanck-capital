import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function CoverageUniverse() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sectors = [
    { num: '01', title: 'Artificial Intelligence', sub: 'Foundation models · Autonomous Agents · Compute Infrastructure', details: 'Core holdings in frontier labs (Anthropic, Neuralink, Perplexity) and hardware infrastructure.' },
    { num: '02', title: 'Defense & Aerospace', sub: 'Hypersonics · AI Autonomy · Commercial Space', details: 'Focused allocations in uncrewed combat autonomy (Shield AI), hypersonics (Hermeus), and space stations (Starlab).' },
    { num: '03', title: 'Public Equities & ETFs', sub: 'Long-only · Thematic Megatrends · Dividend Compounders', details: 'Disciplined public portfolio concentrating on technology leaders, semiconductor supply chain, and cash-flow compounders.' },
    { num: '04', title: 'Real Estate', sub: 'Student Housing · Multifamily · Commercial Assets', details: 'Direct property ownership and university student housing developments (L3 Campus, Miramar).' },
    { num: '05', title: 'Alternative Assets', sub: 'Private Equity · Prediction Markets · Structured Yield', details: 'Unique liquidity and probability positions via regulated prediction markets (Kalshi, Polymarket).' },
    { num: '06', title: 'Consumer & Brands', sub: 'Category Disruptors · Functional Nutrition · Lifestyle', details: 'Backing category-defining CPG brands (Cob, Drumroll, Liquid Death, Ghia, Spring & Mulberry).' },
    { num: '07', title: 'Pre-IPO & Venture', sub: 'Late-Stage Growth · Special Situations · Secondaries', details: 'Accessing high-growth tech platforms prior to public liquidity events.' }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#060608] border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-3 block">
            COVERAGE UNIVERSE
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Where We Invest.
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {sectors.map((sec, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={sec.num}
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="py-6 sm:py-8 group cursor-pointer transition-colors hover:bg-white/[0.02] px-4 rounded-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-neutral-400 font-semibold w-6">
                      {sec.num}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                      {sec.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline-block text-xs font-mono text-neutral-400">
                      {sec.sub}
                    </span>
                    <ChevronRight
                      size={20}
                      className={`text-neutral-500 group-hover:text-blue-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-90 text-blue-400' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Details Subtext */}
                {isExpanded && (
                  <div className="mt-4 pl-12 pt-3 border-t border-white/5 text-sm text-neutral-400 font-normal leading-relaxed animate-fadeIn">
                    <p className="mb-1 text-neutral-300 font-mono text-xs">{sec.sub}</p>
                    <p>{sec.details}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
