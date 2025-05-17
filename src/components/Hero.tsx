import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const Hero: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-800 font-medium text-sm mb-6">
              <Sparkles size={16} />
              <span>The first AI-built project showcase</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900">
              The launchpad for AI-built projects, crafted with nothing but vibe code
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              A curated space for AI-built projects — shipped fast, and dripping with vibe. Join the waitlist to be first in.
            </p>

            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all transform hover:-translate-y-1 font-medium"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
};

export default Hero;