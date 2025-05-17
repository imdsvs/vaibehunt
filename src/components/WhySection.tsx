import React from 'react';
import { FaqSection } from './ui/faq-section';

const WhySection: React.FC = () => {
  const faqs = [
    {
      question: "What makes v(ai)behunt unique?",
      answer: "v(ai)behunt is the first dedicated platform that exclusively showcases AI-built projects. We provide a curated space where creators can share their AI-powered innovations, get recognized by the community, and inspire others in the field of AI-assisted development.",
    },
    {
      question: "How do I submit my AI-built project?",
      answer: "Currently, v(ai)behunt is in its early stages. Join our waitlist to be among the first creators to showcase your AI-built projects when we launch. Once live, you'll be able to submit your projects directly through our platform.",
    },
    {
      question: "What types of projects can be submitted?",
      answer: "We welcome any project that has been built using AI tools such as Bolt, ChatGPT, GitHub Copilot, or other AI-assisted development platforms. This includes web applications, mobile apps, design projects, and other innovative solutions created with AI assistance.",
    },
    {
      question: "How does the community engagement work?",
      answer: "Our platform will feature upvoting, commenting, and sharing capabilities. Community members can discover projects, provide feedback, and connect with creators. We're building a vibrant ecosystem where AI enthusiasts can learn from and inspire each other.",
    },
  ];

  return (
    <FaqSection
      title="Frequently Asked Questions"
      description="Everything you need to know about v(ai)behunt"
      items={faqs}
      contactInfo={{
        title: "Still have questions?",
        description: "Join our waitlist to stay updated and get early access",
        buttonText: "Join Waitlist",
        onContact: () => {
          // This will be handled by the parent component
          const waitlistButton = document.querySelector('button[onclick*="setIsWaitlistOpen"]');
          if (waitlistButton) {
            (waitlistButton as HTMLButtonElement).click();
          }
        },
      }}
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-50"
    />
  );
};

export default WhySection;