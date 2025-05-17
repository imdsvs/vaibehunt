import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {currentYear} v(ai)behunt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;