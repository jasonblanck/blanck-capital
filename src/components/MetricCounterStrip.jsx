import React, { useState, useEffect, useRef } from 'react';

export default function MetricCounterStrip() {
  const [count, setCount] = useState(0);
  const [assetCount, setAssetCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1600;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeProgress * 30));
            setAssetCount(Math.floor(easeProgress * 7));

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };

          requestAnimationFrame(updateCounter);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: `${count}+`, label: 'PORTFOLIO HOLDINGS', sub: 'Flagship & Venture Investments' },
    { value: `${assetCount}`, label: 'ASSET CLASSES', sub: 'Tech, Space, Defense, Real Estate' },
    { value: '∞', label: 'TIME HORIZON', sub: 'Patient Private Capital' },
    { value: '1', label: 'STANDARD', sub: 'Excellence & High Conviction' }
  ];

  return (
    <section ref={containerRef} className="bg-neutral-950 py-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#0b0b0e] p-8 sm:p-10 text-center flex flex-col justify-center items-center group hover:bg-[#111116] transition-colors"
            >
              <span className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-2 font-sans group-hover:text-blue-400 transition-colors">
                {stat.value}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-neutral-500 font-sans tracking-tight">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
