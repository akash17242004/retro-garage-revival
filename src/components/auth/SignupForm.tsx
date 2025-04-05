
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock, UserPlus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '../../context/AuthContext';

interface SignupFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const navigate = useNavigate();
  const { login } = useAuth();

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

  return (
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
  );
};

export default SignupForm;
