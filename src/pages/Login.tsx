
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, LogIn, ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    
    // Here you would typically authenticate the user against your backend
    // For this demo, we'll just show a success toast and simulate login
    
    console.log('Login attempt:', formData);
    
    // Simulate a successful login with a demo user
    login({
      id: '1',
      name: 'Demo User',
      email: formData.email,
      phone: '',
      about: 'I am a car enthusiast who loves classic Maruti vehicles.',
      profilePicture: '/placeholder.svg'
    });
    
    toast({
      title: "Login Successful!",
      description: "Welcome back to M.S Services.",
    });
    
    // Navigate to homepage after login
    navigate('/');
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    login({
      id: '2',
      name: 'Google User',
      email: 'googleuser@example.com',
      profilePicture: '/placeholder.svg'
    });
    
    toast({
      title: "Google Login Successful",
      description: "Welcome to M.S Services!",
    });
    
    // Navigate to homepage after login
    navigate('/');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="retro-card mb-6">
            <div className="text-center mb-6">
              <div className="inline-block bg-retro-mustard p-4 rounded-sm mb-4">
                <LogIn size={36} className="text-retro-darkGray" />
              </div>
              <h1 className="font-bebas text-3xl tracking-wider text-retro-red">
                CUSTOMER LOGIN
              </h1>
              <p className="font-special text-sm text-retro-darkGray/70">
                Access your service history and appointments
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label className="block font-special text-sm mb-1" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5">
                    <User size={18} className="text-retro-darkGray/50" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="retro-input w-full pl-10"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="relative">
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
                    className="retro-input w-full pl-10"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 border-retro-darkGray/30 rounded text-retro-mustard focus:ring-offset-0 focus:ring-retro-mustard/80"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block font-special text-sm">
                    Remember me
                  </label>
                </div>
                <a href="#forgot" className="font-special text-sm text-retro-red hover:text-retro-red/80">
                  Forgot password?
                </a>
              </div>
              
              <button type="submit" className="retro-button w-full py-2 flex items-center justify-center">
                <LogIn size={18} className="mr-2" />
                Login to Account
              </button>
            </form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-retro-darkGray/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white font-special text-retro-darkGray/60">
                  Or continue with
                </span>
              </div>
            </div>
            
            <button 
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-white border-2 border-retro-darkGray/20 py-2 px-4 rounded-sm font-special text-sm hover:bg-gray-50 transition flex items-center justify-center"
            >
              <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
          </div>
          
          <div className="text-center">
            <p className="font-special text-sm text-retro-darkGray/70">
              Don't have an account?{' '}
              <Link to="/signup" className="text-retro-red font-semibold hover:text-retro-red/80">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
