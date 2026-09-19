import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MetricCounterStrip from './components/MetricCounterStrip';
import PhilosophySection from './components/PhilosophySection';
import PlatesPortfolioShowcase from './components/PlatesPortfolioShowcase';
import SecondaryHoldingsGrid from './components/SecondaryHoldingsGrid';
import QuotesSection from './components/QuotesSection';
import ApproachSection from './components/ApproachSection';
import CoverageUniverse from './components/CoverageUniverse';
import AboutSection from './components/AboutSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <MetricCounterStrip />
        <PhilosophySection />
        <PlatesPortfolioShowcase />
        <SecondaryHoldingsGrid />
        <QuotesSection />
        <ApproachSection />
        <CoverageUniverse />
        <AboutSection />
      </main>
      <ContactFooter />
    </div>
  );
}
