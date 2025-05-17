import React from 'react';
import { Code, Upload, ThumbsUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Code className="w-10 h-10 text-purple-600" />,
      title: "Build using AI tools",
      description: "Create amazing projects using AI tools like Bolt, Lovable, Replit, Windsurf, and Cursor.",
    },
    {
      icon: <Upload className="w-10 h-10 text-purple-600" />,
      title: "Submit your project",
      description: "Share your creation with our community of AI enthusiasts and developers.",
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-purple-600" />,
      title: "Get upvoted and reviewed",
      description: "Receive feedback, upvotes, and recognition from the community.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the community of AI creators and showcase your projects in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-4 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;