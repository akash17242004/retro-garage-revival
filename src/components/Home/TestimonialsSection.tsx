
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "I've been bringing my Maruti to M.S Services for over 10 years. Their attention to detail and honest service keeps me coming back.",
      name: "RAJESH KUMAR",
      title: "Maruti Swift Owner"
    },
    {
      quote: "The team at M.S Services treated my old Maruti 800 like it was a luxury car. Amazing service at reasonable prices.",
      name: "PRIYA SHARMA",
      title: "Maruti 800 Owner"
    },
    {
      quote: "Quick service, fair prices, and they always explain what needs to be done. Best Maruti service center in Nagpur!",
      name: "AMIT PATEL",
      title: "Maruti Dzire Owner"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mx-auto text-center">CUSTOMER TESTIMONIALS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
