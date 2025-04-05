
import React from 'react';
import Layout from '../components/Layout/Layout';
import { Phone, Wrench, Calendar, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      title: 'Engine Service',
      icon: <Wrench size={32} className="text-retro-red" />,
      description: 'Complete engine overhaul, tune-ups, and diagnostics.'
    },
    {
      title: 'Oil Change',
      icon: <img src="/service-oil.png" alt="Oil Change" className="w-8 h-8" />,
      description: 'Regular and synthetic oil changes with filter replacement.'
    },
    {
      title: 'Brake Service',
      icon: <img src="/service-brake.png" alt="Brake Service" className="w-8 h-8" />,
      description: 'Brake pad replacement, fluid check and disc restoration.'
    },
    {
      title: 'Denting & Painting',
      icon: <img src="/service-paint.png" alt="Denting & Painting" className="w-8 h-8" />,
      description: 'Collision repair, scratch removal and fresh paint jobs.'
    }
  ];

  const features = [
    'Authorized Maruti Suzuki Service Center',
    'Experienced technicians',
    'Genuine spare parts',
    'Modern diagnostic equipment',
    'Comfortable waiting lounge',
    'Free pick-up and drop service',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/hero-maruti.jpg" 
          alt="Classic Maruti Car" 
          className="w-full h-[60vh] object-cover object-center"
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
            className="retro-button text-lg px-8 py-3"
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

      {/* About Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="section-title">ABOUT M.S SERVICES</h2>
              <p className="font-special mb-4">
                Since 1985, M.S Services has been providing quality car care to Maruti Suzuki owners in Nagpur. As an authorized service center, we combine old-school dedication with modern technology to keep your vehicle running smoothly.
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

      {/* Services Preview */}
      <section className="py-12 bg-retro-darkGray text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-retro-cream mx-auto text-center">OUR SERVICES</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-5 p-6 rounded-sm hover:bg-opacity-10 transition-all border border-retro-silver/30 group"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bebas text-xl tracking-wider text-retro-mustard text-center mb-3">
                  {service.title}
                </h3>
                <p className="font-special text-sm text-retro-cream/80 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services" className="retro-button inline-flex items-center">
              View All Services
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
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

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mx-auto text-center">CUSTOMER TESTIMONIALS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="retro-card">
              <div className="flex flex-col h-full">
                <p className="font-special mb-4 flex-grow">
                  "I've been bringing my Maruti to M.S Services for over 10 years. Their attention to detail and honest service keeps me coming back."
                </p>
                <div className="border-t border-retro-darkGray/20 pt-4">
                  <p className="font-bebas text-lg tracking-wider text-retro-red">RAJESH KUMAR</p>
                  <p className="font-special text-xs text-retro-darkGray/70">Maruti Swift Owner</p>
                </div>
              </div>
            </div>
            
            <div className="retro-card">
              <div className="flex flex-col h-full">
                <p className="font-special mb-4 flex-grow">
                  "The team at M.S Services treated my old Maruti 800 like it was a luxury car. Amazing service at reasonable prices."
                </p>
                <div className="border-t border-retro-darkGray/20 pt-4">
                  <p className="font-bebas text-lg tracking-wider text-retro-red">PRIYA SHARMA</p>
                  <p className="font-special text-xs text-retro-darkGray/70">Maruti 800 Owner</p>
                </div>
              </div>
            </div>
            
            <div className="retro-card">
              <div className="flex flex-col h-full">
                <p className="font-special mb-4 flex-grow">
                  "Quick service, fair prices, and they always explain what needs to be done. Best Maruti service center in Nagpur!"
                </p>
                <div className="border-t border-retro-darkGray/20 pt-4">
                  <p className="font-bebas text-lg tracking-wider text-retro-red">AMIT PATEL</p>
                  <p className="font-special text-xs text-retro-darkGray/70">Maruti Dzire Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
