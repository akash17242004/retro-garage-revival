
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '../../context/AuthContext';

const SocialSignup: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

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
    <>
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
    </>
  );
};

export default SocialSignup;
