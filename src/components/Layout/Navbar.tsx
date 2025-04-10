
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-retro-mustard border-b-4 border-retro-red relative z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/7f4dcd3f-6c10-4808-b510-357deea721f3.png" 
              alt="M.S Services Logo" 
              className="h-16 w-auto mr-2"
            />
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="font-bebas text-lg tracking-wider text-black hover:text-retro-red transition">HOME</Link>
            <Link to="/services" className="font-bebas text-lg tracking-wider text-black hover:text-retro-red transition">SERVICES</Link>
            <Link to="/booking" className="font-bebas text-lg tracking-wider text-black hover:text-retro-red transition">BOOK SERVICE</Link>
            <Link to="/contact" className="font-bebas text-lg tracking-wider text-black hover:text-retro-red transition">CONTACT</Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center">
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarImage src={user?.profilePicture || '/placeholder.svg'} alt={user?.name} />
                    <AvatarFallback className="bg-retro-red text-white text-xs">
                      {user?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-special ml-2 text-black hover:text-retro-red">{user?.name?.split(' ')[0]}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center text-black hover:text-retro-red transition"
                >
                  <LogOut size={18} className="mr-1" />
                  <span className="font-bebas tracking-wider">LOGOUT</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center bg-retro-red px-4 py-1 rounded-sm text-white font-bebas tracking-wider">
                <User size={18} className="mr-1" />
                LOGIN
              </Link>
            )}
          </div>
          
          <button 
            className="md:hidden text-black" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-retro-cream border-t-4 border-retro-red absolute w-full left-0 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link to="/" className="font-bebas text-xl tracking-wider text-black hover:text-retro-red transition px-2 py-1" onClick={toggleMenu}>HOME</Link>
            <Link to="/services" className="font-bebas text-xl tracking-wider text-black hover:text-retro-red transition px-2 py-1" onClick={toggleMenu}>SERVICES</Link>
            <Link to="/booking" className="font-bebas text-xl tracking-wider text-black hover:text-retro-red transition px-2 py-1" onClick={toggleMenu}>BOOK SERVICE</Link>
            <Link to="/contact" className="font-bebas text-xl tracking-wider text-black hover:text-retro-red transition px-2 py-1" onClick={toggleMenu}>CONTACT</Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="flex items-center px-2 py-1" onClick={toggleMenu}>
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src={user?.profilePicture || '/placeholder.svg'} alt={user?.name} />
                    <AvatarFallback className="bg-retro-red text-white text-xs">
                      {user?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-bebas tracking-wider text-black hover:text-retro-red">MY PROFILE</span>
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="flex items-center px-2 py-1 font-bebas tracking-wider text-black hover:text-retro-red"
                >
                  <LogOut size={18} className="mr-2" />
                  LOGOUT
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center bg-retro-red px-4 py-1 rounded-sm text-white font-bebas tracking-wider w-max" onClick={toggleMenu}>
                <User size={18} className="mr-1" />
                LOGIN
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
