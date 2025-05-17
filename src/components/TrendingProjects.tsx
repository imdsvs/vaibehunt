import React from 'react';
import { ChevronUp, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const TrendingProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "DesignGPT",
      tagline: "Generate complete UI designs with a simple prompt",
      upvotes: 423,
      toolstack: ["Bolt", "ChatGPT", "Midjourney"],
      imageUrl: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "CodeCraft AI",
      tagline: "AI-powered code generator and optimizer",
      upvotes: 387,
      toolstack: ["Cursor", "Claude", "GitHub Copilot"],
      imageUrl: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "SonicSynth",
      tagline: "AI generated music based on your mood",
      upvotes: 256,
      toolstack: ["Replit", "Lovable", "Mubert API"],
      imageUrl: "https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "DataViz Pro",
      tagline: "Transform complex data into beautiful visualizations",
      upvotes: 189,
      toolstack: ["Windsurf", "ChatGPT", "D3.js"],
      imageUrl: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Projects</h2>
            <p className="text-gray-600 max-w-2xl">
              Check out what's hot in the AI-built project community right now.
            </p>
          </div>
          <a href="/home" className="text-purple-600 font-medium flex items-center gap-1 hover:underline">
            View all
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1 hover:text-purple-600 transition-colors cursor-pointer">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.tagline}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors">
                      <ChevronUp size={18} />
                      <span>{project.upvotes}</span>
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.toolstack.map((tool, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProjects;