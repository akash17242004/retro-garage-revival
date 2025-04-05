
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/AuthContext';
import { Edit, Mail, Phone, LogOut, User as UserIcon, ArrowLeft, BookOpen } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';

const UserProfile = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  if (!user) {
    return null; // Or a loading state
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link to="/" className="font-special text-retro-red hover:text-retro-red/80 inline-flex items-center">
              <ArrowLeft size={16} className="mr-1" />
              Back to Home
            </Link>
          </div>
          
          <div className="retro-card">
            <div className="text-center mb-8">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-white shadow-lg">
                <AvatarImage src={user.profilePicture || '/placeholder.svg'} alt={user.name} />
                <AvatarFallback className="bg-retro-mustard text-retro-darkGray text-xl font-bebas">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <h1 className="font-bebas text-3xl tracking-wider text-retro-red mt-2">
                {user.name}
              </h1>
              
              <Link 
                to="/edit-profile" 
                className="inline-flex items-center font-special text-sm text-retro-darkGray/70 hover:text-retro-red transition mt-2"
              >
                <Edit size={14} className="mr-1" />
                Edit Profile
              </Link>
            </div>
            
            <div className="border-t border-b border-retro-darkGray/10 py-6 px-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-retro-mustard p-2 rounded-sm mr-4">
                    <Mail size={18} className="text-retro-darkGray" />
                  </div>
                  <div>
                    <h3 className="font-bebas tracking-wide text-retro-darkGray">EMAIL</h3>
                    <p className="font-special">{user.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-retro-mustard p-2 rounded-sm mr-4">
                    <Phone size={18} className="text-retro-darkGray" />
                  </div>
                  <div>
                    <h3 className="font-bebas tracking-wide text-retro-darkGray">PHONE</h3>
                    <p className="font-special">{user.phone || 'Not provided'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <BookOpen size={18} className="text-retro-red mr-2" />
                <h3 className="font-bebas text-xl tracking-wide text-retro-darkGray">ABOUT ME</h3>
              </div>
              <p className="font-special text-retro-darkGray/80">
                {user.about || 'No information provided yet. Add some details about yourself in the edit profile section.'}
              </p>
            </div>
            
            <div className="text-center">
              <button 
                onClick={handleLogout}
                className="retro-button bg-retro-darkGray text-white hover:bg-retro-darkGray/80 inline-flex items-center"
              >
                <LogOut size={18} className="mr-2" />
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
