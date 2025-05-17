import React from 'react';

const Toolstacks: React.FC = () => {
  const tools = [
    "Bolt",
    "Lovable",
    "Replit",
    "Windsurf",
    "Cursor",
    "GitHub Copilot",
    "Claude",
    "ChatGPT"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Toolstacks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projects built with these AI-powered development tools are taking creativity to the next level.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <span 
              key={index} 
              className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-800 font-medium hover:bg-purple-50 hover:border-purple-200 transition-colors cursor-pointer"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolstacks;