import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { investmentQuotes } from '../data/portfolioData';

export default function QuotesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % investmentQuotes.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + investmentQuotes.length) % investmentQuotes.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % investmentQuotes.length);
  };

  const currentQuote = investmentQuotes[currentIndex];

  return (
    <section className="py-28 bg-[#040405] relative border-b border-white/10 overflow-hidden">
      {/* Background Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] font-bold text-white/[0.015] font-sans pointer-events-none select-none tracking-tighter whitespace-nowrap">
        WISDOM & CONVICTION
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
          <Quote size={20} />
        </div>

        <span className="block text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-6">
          WORDS TO INVEST BY
        </span>

        {/* Quote Text Container */}
        <div className="min-h-[160px] flex flex-col items-center justify-center mb-8">
          <p className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-snug font-sans transition-all duration-500 max-w-3xl">
            “{currentQuote.quote}”
          </p>
          <span className="text-sm font-mono text-neutral-400 mt-4 block uppercase tracking-wider">
            — {currentQuote.author}
          </span>
        </div>

        {/* Slider Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Quote"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {investmentQuotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-blue-500' : 'w-1.5 bg-neutral-800'
                }`}
                aria-label={`Go to quote ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Quote"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
