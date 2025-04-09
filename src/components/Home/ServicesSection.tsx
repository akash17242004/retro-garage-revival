
import React from 'react';
import { Wrench, DropletIcon, Car, PaintBucket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Engine Service',
      icon: <Wrench size={32} className="text-retro-red" />,
      description: 'Complete engine overhaul, tune-ups, and diagnostics.',
      imagePath: '/lovable-uploads/e71b0582-176d-491d-9132-73e7ff874848.png'
    },
    {
      title: 'Oil Change',
      icon: <DropletIcon size={32} className="text-retro-red" />,
      description: 'Regular and synthetic oil changes with filter replacement.',
      imagePath: '/service-oil.png'
    },
    {
      title: 'Brake Service',
      icon: <Car size={32} className="text-retro-red" />,
      description: 'Brake pad replacement, fluid check and disc restoration.',
      imagePath: '/lovable-uploads/8fff7284-da08-4575-898c-4540738c95aa.png'
    },
    {
      title: 'Denting & Painting',
      icon: <PaintBucket size={32} className="text-retro-red" />,
      description: 'Collision repair, scratch removal and fresh paint jobs.',
      imagePath: '/service-paint.png'
    }
  ];

  return (
    <section className="py-12 bg-retro-darkGray text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-retro-cream mx-auto text-center">OUR SERVICES</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              imagePath={service.imagePath}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/services" className="retro-button inline-flex items-center hover:scale-105 transition-transform">
            View All Services
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
