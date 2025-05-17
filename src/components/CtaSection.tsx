import React, { useState } from 'react';
import WaitlistModal from './WaitlistModal';

const CtaSection: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be the first to join v(ai)behunt
            </h2>
            
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
              Join our waitlist to get early access to the premier platform for AI-built projects.
              Don't miss out on being part of this innovative community.
            </p>
            
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors transform hover:-translate-y-1"
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

export default CtaSection;