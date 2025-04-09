
import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img 
        src="/lovable-uploads/hero-maruti.jpg" 
        alt="Classic Maruti Car" 
        className="w-full h-[70vh] object-cover object-center"
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-white tracking-wider mb-2 drop-shadow-lg">
          M.S SERVICES
        </h1>
        <p className="font-special text-white text-xl md:text-2xl mb-6 max-w-3xl drop-shadow-lg">
          Trusted Since 1985
        </p>
        <h2 className="font-special text-retro-cream text-lg md:text-xl mb-8 max-w-xl">
          Vintage Care for Modern Cars
        </h2>
        <Link 
          to="/booking" 
          className="retro-button text-lg px-8 py-3 hover:scale-105 transition-transform"
        >
          Book a Service
        </Link>
      </div>
      
      {/* Contact Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-retro-darkGray/80 py-2 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-white mb-2 md:mb-0">
              <Phone size={16} className="mr-2" />
              <span className="font-special">+91 9326422822</span>
            </div>
            <p className="text-retro-mustard font-special text-center">
              Open Monday-Saturday: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
