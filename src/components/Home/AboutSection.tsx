
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AboutSectionProps {
  features: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ features }) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="section-title">ABOUT M.S SERVICES</h2>
            <p className="font-special mb-4">
              Since 1999, M.S Services has been providing quality car care to Maruti Suzuki owners in Nagpur. As an authorized service center, we combine old-school dedication with modern technology to keep your vehicle running smoothly.
            </p>
            <p className="font-special mb-6">
              Our experienced technicians are factory-trained and use genuine Maruti Suzuki parts for all repairs and services, ensuring your car receives the best care possible.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check size={16} className="text-retro-red mr-2 mt-1 flex-shrink-0" />
                  <p className="font-special text-sm">{feature}</p>
                </div>
              ))}
            </div>
            
            <Link to="/services" className="retro-button inline-flex items-center">
              Our Services
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="retro-card transform rotate-1 max-w-md mx-auto">
              <img 
                src="/workshop.jpg" 
                alt="M.S Services Workshop" 
                className="w-full h-auto border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-retro-mustard px-4 py-1 font-bebas tracking-wider text-black rotate-[-2deg]">
                SINCE 1985
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
