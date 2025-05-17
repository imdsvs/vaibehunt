import React from 'react';
import { Toaster } from 'sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Toolstacks from './components/Toolstacks';
import TrendingProjects from './components/TrendingProjects';
import WhySection from './components/WhySection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Toaster position="top-center" />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Toolstacks />
        <TrendingProjects />
        <WhySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;