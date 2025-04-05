
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/AuthContext';
import AuthHeader from '../components/auth/AuthHeader';
import SignupForm from '../components/auth/SignupForm';
import SocialSignup from '../components/auth/SocialSignup';

const Signup = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // If already logged in, redirect to home
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="retro-card mb-6">
            <AuthHeader />
            <SignupForm />
            <SocialSignup />
          </div>
          
          <div className="text-center">
            <p className="font-special text-sm text-retro-darkGray/70">
              Already have an account?{' '}
              <Link to="/login" className="text-retro-red font-semibold hover:text-retro-red/80">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
