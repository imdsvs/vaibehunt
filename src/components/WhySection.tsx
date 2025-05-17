import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhySection: React.FC = () => {
  const benefits = [
    "Exclusively showcases AI-built projects",
    "Community of AI enthusiasts and creators",
    "Discovery of cutting-edge AI tools and techniques",
    "Recognition for innovative AI-powered solutions"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why v(ai)behunt?</h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center">
            v(ai)behunt is the first dedicated platform that celebrates and showcases projects built using AI tools. 
            Our community brings together creators, developers, and AI enthusiasts who are pushing the boundaries 
            of what's possible with AI-assisted development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 italic">
            "v(ai)behunt is where innovation meets community. Join us in celebrating the future of AI-assisted creation."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;