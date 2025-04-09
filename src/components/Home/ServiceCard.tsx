
import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  imagePath?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, imagePath }) => {
  return (
    <div className="bg-white border-2 border-retro-red/20 rounded-sm overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
      {imagePath && (
        <div className="h-40 bg-retro-cream overflow-hidden flex items-center justify-center">
          <img 
            src={imagePath} 
            alt={title} 
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/placeholder.svg';
            }}
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3">
            {icon}
          </div>
          <h3 className="font-bebas text-xl text-retro-darkGray tracking-wider">{title}</h3>
        </div>
        <p className="text-retro-darkGray/80 font-special text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
