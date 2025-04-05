
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/AuthContext';
import { Save, ArrowLeft, User as UserIcon, Mail, Phone, BookOpen } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';

const EditProfile = () => {
  const { user, isAuthenticated, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    about: '',
    profilePicture: ''
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        about: user.about || '',
        profilePicture: user.profilePicture || ''
      });
    }
  }, [isAuthenticated, navigate, user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          setFormData({
            ...formData,
            profilePicture: event.target.result.toString()
          });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    updateUserProfile({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      about: formData.about,
      profilePicture: formData.profilePicture
    });
    
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
    
    navigate('/profile');
  };

  if (!user) {
    return null; // Or a loading state
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link to="/profile" className="font-special text-retro-red hover:text-retro-red/80 inline-flex items-center">
              <ArrowLeft size={16} className="mr-1" />
              Back to Profile
            </Link>
          </div>
          
          <div className="retro-card">
            <h1 className="font-bebas text-2xl md:text-3xl tracking-wider text-retro-red mb-6 text-center">
              EDIT PROFILE
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Profile Picture */}
              <div className="text-center mb-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-white shadow-lg">
                  <AvatarImage src={formData.profilePicture || '/placeholder.svg'} alt={formData.name} />
                  <AvatarFallback className="bg-retro-mustard text-retro-darkGray text-xl font-bebas">
                    {formData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                <label htmlFor="profile-upload" className="retro-button cursor-pointer inline-block">
                  Change Picture
                </label>
                <input 
                  type="file"
                  id="profile-upload"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  className="hidden"
                />
              </div>
              
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <label className="block font-special text-sm mb-1" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5">
                      <UserIcon size={18} className="text-retro-darkGray/50" />
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
                      className="retro-input w-full pl-10"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                    />
                  </div>
                  <p className="text-xs font-special text-retro-darkGray/70 mt-1">
                    Format: 10 digits without spaces or dashes
                  </p>
                </div>
              </div>
              
              {/* About Me */}
              <div>
                <label className="block font-special text-sm mb-1 flex items-center" htmlFor="about">
                  <BookOpen size={16} className="mr-1" />
                  About Me
                </label>
                <Textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  rows={4}
                  className="retro-input w-full resize-none"
                  placeholder="Share a bit about yourself..."
                />
                <p className="text-xs font-special text-retro-darkGray/70 mt-1">
                  Tell us about your vehicle interests and experience with Maruti cars.
                </p>
              </div>
              
              {/* Submit Button */}
              <div className="text-center pt-4">
                <button 
                  type="submit"
                  className="retro-button inline-flex items-center px-8"
                >
                  <Save size={18} className="mr-2" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
