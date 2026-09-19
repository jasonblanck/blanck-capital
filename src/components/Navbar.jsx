import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Approach', href: '#approach' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'h-16 glass-nav border-b border-white/10 shadow-2xl'
            : 'h-20 bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between relative">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
            <span className="tracking-tight font-sans">Blanck Capital</span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 border border-neutral-800 px-1.5 py-0.5 rounded ml-1 hidden sm:inline-block">
              FO // NYC
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-blue-400 hover:text-blue-300 border border-blue-500/30 hover:border-blue-500/60 bg-blue-950/20 hover:bg-blue-900/40 px-4 py-2 rounded-full transition-all"
            >
              INQUIRE <ArrowUpRight size={14} />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-neutral-300 hover:text-white p-2 rounded-lg border border-white/10 bg-white/5"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-semibold tracking-tight text-neutral-200 hover:text-blue-400 border-b border-white/10 pb-4 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-mono tracking-wider text-black bg-white hover:bg-neutral-200 py-3 rounded-full font-medium transition-colors"
            >
              INQUIRE <ArrowUpRight size={16} />
            </a>
            <p className="text-xs font-mono text-neutral-500 text-center">
              BLANCK CAPITAL LLC · PRIVATE FAMILY OFFICE
            </p>
          </div>
        </div>
      )}
    </>
  );
}
