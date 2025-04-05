
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingCTA: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-retro-mustard opacity-10 z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-5" 
        style={{
          backgroundImage: 'url("/blueprint.png")',
          backgroundRepeat: 'repeat',
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Calendar size={48} className="mx-auto text-retro-red mb-4" />
          <h2 className="font-bebas text-3xl md:text-4xl tracking-wider text-retro-darkGray mb-4">
            SCHEDULE YOUR SERVICE TODAY
          </h2>
          <p className="font-special mb-8 text-retro-darkGray/80">
            Keep your Maruti Suzuki performing at its best. Our factory-trained technicians use 
            genuine parts and advanced diagnostic tools to ensure quality service every time.
          </p>
          <Link 
            to="/booking" 
            className="retro-button text-lg px-10 py-3 inline-flex items-center"
          >
            Book Appointment
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
