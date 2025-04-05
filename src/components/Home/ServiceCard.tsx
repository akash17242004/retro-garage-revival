
import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description }) => {
  return (
    <div className="bg-white bg-opacity-5 p-6 rounded-sm hover:bg-opacity-10 transition-all border border-retro-silver/30 group">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bebas text-xl tracking-wider text-retro-mustard text-center mb-3">
        {title}
      </h3>
      <p className="font-special text-sm text-retro-cream/80 text-center">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
