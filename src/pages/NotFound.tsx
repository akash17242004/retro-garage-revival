
import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-retro-darkGray inline-block p-6 rounded-sm mb-6">
            <img src="/wrench-icon.png" alt="Wrench" className="w-24 h-24 mx-auto" />
          </div>
          
          <h1 className="font-bebas text-5xl tracking-wider text-retro-red mb-4">
            404
          </h1>
          <h2 className="font-bebas text-2xl tracking-wider text-retro-darkGray mb-4">
            PAGE NOT FOUND
          </h2>
          
          <p className="font-special text-retro-darkGray/70 mb-8">
            The page you're looking for seems to have taken a wrong turn. 
            Let's get you back on the road.
          </p>
          
          <Link to="/" className="retro-button inline-flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
