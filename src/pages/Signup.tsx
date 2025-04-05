
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock, UserPlus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // If already logged in, redirect to home
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.agreeTerms) {
      toast({
        title: "Error",
        description: "Please agree to the terms and conditions",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically register the user with your backend
    // For this demo, we'll just show a success toast and simulate signup
    
    console.log('Registration data:', formData);
    
    // Create a new user
    login({
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      about: '',
      profilePicture: '/placeholder.svg'
    });
    
    toast({
      title: "Registration Successful!",
      description: "Your account has been created. Welcome to M.S Services!",
    });
    
    // Navigate to homepage after signup
    navigate('/');
  };

  const handleGoogleSignup = () => {
    // Simulate Google signup
    login({
      id: Date.now().toString(),
      name: 'Google User',
      email: 'googleuser@example.com',
      profilePicture: '/placeholder.svg'
    });
    
    toast({
      title: "Google Signup Successful",
      description: "Welcome to M.S Services!",
    });
    
    // Navigate to homepage after signup
    navigate('/');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="retro-card mb-6">
            <div className="text-center mb-6">
              <div className="inline-block bg-retro-red p-4 rounded-sm mb-4">
                <UserPlus size={36} className="text-white" />
              </div>
              <h1 className="font-bebas text-3xl tracking-wider text-retro-red">
                CREATE ACCOUNT
              </h1>
              <p className="font-special text-sm text-retro-darkGray/70">
                Join M.S Services to track your vehicle maintenance
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-special text-sm mb-1" htmlFor="name">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">
                    <User size={18} className="text-retro-darkGray/50" />
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="retro-input w-full pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-special text-sm mb-1" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">
                    <Mail size={18} className="text-retro-darkGray/50" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="retro-input w-full pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-special text-sm mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">
                    <Phone size={18} className="text-retro-darkGray/50" />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="retro-input w-full pl-10"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                  />
                </div>
                <p className="text-xs font-special text-retro-darkGray/70 mt-1">
                  Format: 10 digits without spaces or dashes
                </p>
              </div>
              
              <div>
                <label className="block font-special text-sm mb-1" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">
                    <Lock size={18} className="text-retro-darkGray/50" />
                  </span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength={8}
                    className="retro-input w-full pl-10"
                  />
                </div>
                <p className="text-xs font-special text-retro-darkGray/70 mt-1">
                  Must be at least 8 characters
                </p>
              </div>
              
              <div>
                <label className="block font-special text-sm mb-1" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">
                    <Lock size={18} className="text-retro-darkGray/50" />
                  </span>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="retro-input w-full pl-10"
                  />
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    required
                    className="h-4 w-4 border-retro-darkGray/30 rounded text-retro-mustard focus:ring-offset-0 focus:ring-retro-mustard/80"
                  />
                </div>
                <label htmlFor="agreeTerms" className="ml-2 block font-special text-xs">
                  I agree to the 
                  <a href="#terms" className="text-retro-red hover:text-retro-red/80 ml-1">
                    Terms and Conditions
                  </a>
                  {' '}and{' '}
                  <a href="#privacy" className="text-retro-red hover:text-retro-red/80">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <button type="submit" className="retro-button w-full py-2 flex items-center justify-center">
                <UserPlus size={18} className="mr-2" />
                Create Account
              </button>
            </form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-retro-darkGray/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white font-special text-retro-darkGray/60">
                  Or sign up with
                </span>
              </div>
            </div>
            
            <button 
              type="button"
              onClick={handleGoogleSignup}
              className="w-full bg-white border-2 border-retro-darkGray/20 py-2 px-4 rounded-sm font-special text-sm hover:bg-gray-50 transition flex items-center justify-center"
            >
              <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
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
