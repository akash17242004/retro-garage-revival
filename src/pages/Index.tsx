
import React from 'react';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import ServicesSection from '../components/Home/ServicesSection';
import BookingCTA from '../components/Home/BookingCTA';
import TestimonialsSection from '../components/Home/TestimonialsSection';

const Index = () => {
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
      <HeroSection />
      <AboutSection features={features} />
      <ServicesSection />
      <BookingCTA />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
