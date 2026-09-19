import React, { useState } from 'react';
import { ExternalLink, ChevronDown, Search } from 'lucide-react';
import { secondaryHoldings, allHoldingsList } from '../data/portfolioData';

export default function SecondaryHoldingsGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showFullCatalog, setShowFullCatalog] = useState(false);

  const categories = ['ALL', 'Artificial Intelligence', 'Prediction Markets', 'Defense & Aerospace', 'Consumer & Brands', 'Healthcare & Longevity'];

  const filteredHoldings = secondaryHoldings.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-[#070708] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2 block">
              ADDITIONAL PORTFOLIO POSITIONS
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Broader Holdings.
            </h3>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
              <input
                type="text"
                placeholder="Search holdings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-neutral-900 border border-white/10 rounded-xl text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-mono text-[11px] uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                    selectedCategory === cat
                      ? 'bg-blue-600 border-blue-500 text-white font-bold'
                      : 'bg-neutral-900/60 border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Holdings Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredHoldings.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0e0e12] border border-white/10 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-950/20 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-white/10 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-blue-300 transition-colors flex items-center justify-between">
                  {item.name}
                  <ExternalLink size={16} className="text-neutral-500 group-hover:text-blue-400 transition-colors" />
                </h4>

                <p className="text-sm text-neutral-400 leading-relaxed font-normal mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-neutral-400">
                <span>PORTFOLIO ALLOCATION</span>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  VIEW SITE ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Expandable Full Catalog Button */}
        <div className="text-center">
          <button
            onClick={() => setShowFullCatalog(!showFullCatalog)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-xs font-mono uppercase tracking-widest text-neutral-200 hover:text-white transition-all cursor-pointer"
          >
            {showFullCatalog ? 'COLLAPSE FULL CATALOG' : 'VIEW ALL 30+ HOLDINGS'}
            <ChevronDown className={`transition-transform duration-300 ${showFullCatalog ? 'rotate-180' : ''}`} size={16} />
          </button>

          {/* Full List Grid Dropdown */}
          {showFullCatalog && (
            <div className="mt-8 bg-[#0b0b0e] border border-white/10 rounded-2xl p-8 text-left grid sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeIn">
              {allHoldingsList.map((h, i) => (
                <a
                  key={i}
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 border-b border-white/5 text-sm text-neutral-300 hover:text-blue-300 transition-colors font-sans"
                >
                  <span className="font-medium">{h.name}</span>
                  <ExternalLink size={12} className="text-neutral-500" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
