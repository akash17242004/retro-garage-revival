
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-retro-mustard border-b-4 border-retro-red relative z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="M.S Services Logo" 
              className="h-12 w-auto mr-2" 
            />
            <div>
              <h1 className="font-bebas text-2xl tracking-widest text-black">M.S SERVICES</h1>
              <p className="text-xs font-special text-retro-darkGray -mt-1">Authorized Maruti Suzuki Service</p>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="font-bebas text-lg tracking-wider text-black hover:text-retro-red transition">HOME</Link>
            <Link to="/services" className="font-bebas text-lg tracking-wider text-black hover:text-retro-red transition">SERVICES</Link>
            <Link to="/booking" className="font-bebas text-lg tracking-wider text-black hover:text-retro-red transition">BOOK SERVICE</Link>
            <Link to="/contact" className="font-bebas text-lg tracking-wider text-black hover:text-retro-red transition">CONTACT</Link>
            <Link to="/login" className="flex items-center bg-retro-red px-4 py-1 rounded-sm text-white font-bebas tracking-wider">
              <User size={18} className="mr-1" />
              LOGIN
            </Link>
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
            <Link to="/login" className="flex items-center bg-retro-red px-4 py-1 rounded-sm text-white font-bebas tracking-wider w-max" onClick={toggleMenu}>
              <User size={18} className="mr-1" />
              LOGIN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
