
import React from 'react';
import Layout from '../components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesList = [
    {
      title: 'Regular Maintenance',
      icon: '/service-maintenance.png',
      description: 'Keep your Maruti Suzuki running smoothly with our comprehensive maintenance services, including oil changes, filter replacements, and multi-point inspections.',
      items: [
        'Oil and filter change',
        'Air filter replacement',
        'Fluid level checks and top-ups',
        'Multi-point inspection',
        'Battery check and service'
      ]
    },
    {
      title: 'Engine Service',
      icon: '/service-engine.png',
      description: 'Our expert technicians diagnose and repair engine issues, ensuring optimal performance and fuel efficiency for your vehicle.',
      items: [
        'Engine diagnostics',
        'Tune-ups',
        'Timing belt replacement',
        'Carburetor cleaning',
        'Fuel injection service'
      ]
    },
    {
      title: 'Brake Service',
      icon: '/service-brake.png',
      description: 'Safety comes first with our complete brake service, from pad replacement to hydraulic system maintenance.',
      items: [
        'Brake pad replacement',
        'Disc and drum resurfacing',
        'Brake fluid flush',
        'ABS system diagnosis',
        'Handbrake adjustment'
      ]
    },
    {
      title: 'Electrical Repairs',
      icon: '/service-electrical.png',
      description: 'From basic wiring to complex electrical problems, our specialized tools diagnose and fix all electrical issues.',
      items: [
        'Battery service',
        'Starter and alternator repair',
        'Wiring diagnosis',
        'Light replacement',
        'Power window repair'
      ]
    },
    {
      title: 'AC Service',
      icon: '/service-ac.png',
      description: 'Stay cool with our AC maintenance and repair service, including refrigerant recharge and component replacement.',
      items: [
        'AC gas refill',
        'Cooling system check',
        'Filter cleaning',
        'Compressor diagnosis',
        'Leak detection and repair'
      ]
    },
    {
      title: 'Denting & Painting',
      icon: '/service-paint.png',
      description: 'Restore your car\'s appearance with our professional denting and painting services, matching factory finish quality.',
      items: [
        'Dent removal',
        'Scratch repair',
        'Panel replacement',
        'Color matching',
        'Polishing and finishing'
      ]
    },
    {
      title: 'Wheel Alignment',
      icon: '/service-wheel.png',
      description: 'Proper wheel alignment ensures better handling, even tire wear, and improved fuel economy.',
      items: [
        'Computer alignment',
        'Tire rotation',
        'Wheel balancing',
        'Suspension check',
        'Steering adjustment'
      ]
    },
    {
      title: 'Genuine Spare Parts',
      icon: '/service-parts.png',
      description: 'We use only authentic Maruti Suzuki spare parts to ensure reliability, warranty compliance, and optimal performance.',
      items: [
        'Engine components',
        'Body parts',
        'Electricals',
        'Filters and lubricants',
        'Accessories'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-retro-darkGray py-12 md:py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: "url('/blueprint.png')",
            backgroundRepeat: "repeat",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-bebas text-4xl md:text-5xl text-retro-cream tracking-wider mb-4 text-center">
            OUR SERVICES
          </h1>
          <p className="font-special text-retro-silver text-center max-w-2xl mx-auto">
            From routine maintenance to major repairs, our factory-trained technicians use genuine parts 
            and specialized tools to keep your Maruti Suzuki running like new.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="retro-card relative">
              <div className="absolute -top-4 -left-4 bg-retro-mustard w-16 h-16 rounded-sm flex items-center justify-center">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-8 h-8"
                />
              </div>
              <div className="pl-6 pt-6">
                <h2 className="font-bebas text-2xl tracking-wider text-retro-red mb-3 mt-4">
                  {service.title}
                </h2>
                <p className="font-special text-sm mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-retro-red mr-2">•</span>
                      <span className="font-special text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-retro-mustard py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bebas text-3xl tracking-wider text-retro-darkGray mb-4">
            READY TO SCHEDULE YOUR SERVICE?
          </h2>
          <p className="font-special text-retro-darkGray/80 max-w-2xl mx-auto mb-6">
            Don't wait until there's a problem. Regular maintenance helps prevent costly repairs 
            and keeps your car running efficiently for years to come.
          </p>
          <Link 
            to="/booking" 
            className="inline-flex items-center bg-retro-darkGray text-white font-bebas tracking-wider px-8 py-3 rounded-sm hover:bg-black transition"
          >
            Book Now
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
