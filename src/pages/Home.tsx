import React from 'react';
import HeroSection from '../components/HeroSection';
import PrizesSection from '../components/PrizesSection';
import FeaturesSection from '../components/FeaturesSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PrizesSection />
      <FeaturesSection />
    </div>
  );
}