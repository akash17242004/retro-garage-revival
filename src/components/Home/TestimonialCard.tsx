
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title }) => {
  return (
    <div className="retro-card">
      <div className="flex flex-col h-full">
        <p className="font-special mb-4 flex-grow">
          {quote}
        </p>
        <div className="border-t border-retro-darkGray/20 pt-4">
          <p className="font-bebas text-lg tracking-wider text-retro-red">{name}</p>
          <p className="font-special text-xs text-retro-darkGray/70">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
