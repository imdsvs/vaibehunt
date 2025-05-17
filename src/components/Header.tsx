import React, { useState, useEffect } from 'react';
import { Braces } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Braces 
                size={28} 
                className="text-purple-600 transform transition-transform group-hover:rotate-12 duration-300" 
              />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
              v(ai)be<span className="text-purple-600">hunt</span>
            </span>
          </a>

          <button 
            onClick={() => setIsWaitlistOpen(true)}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Join Waitlist
          </button>
        </div>
      </header>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
};

export default Header;