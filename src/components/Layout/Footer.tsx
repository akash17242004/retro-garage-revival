
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-retro-darkGray text-retro-cream border-t-4 border-retro-red mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="M.S Services Logo" 
                className="h-12 w-auto mr-2" 
              />
              <div>
                <h3 className="font-bebas text-2xl tracking-widest text-retro-cream">M.S SERVICES</h3>
                <p className="text-xs font-special text-retro-silver -mt-1">Authorized Maruti Suzuki Service</p>
              </div>
            </div>
            <p className="font-special text-sm mb-4">Providing vintage care for modern cars since establishment.</p>
            <div className="flex items-center mt-6">
              <img 
                src="/maruti-suzuki-badge.png" 
                alt="Official Maruti Suzuki Authorized" 
                className="h-16 w-auto" 
              />
            </div>
          </div>
          
          <div>
            <h3 className="font-bebas text-xl tracking-wider text-retro-mustard mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 font-special text-sm">
              <li>
                <Link to="/" className="hover:text-retro-mustard transition">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-retro-mustard transition">Our Services</Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-retro-mustard transition">Book a Service</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-retro-mustard transition">Contact Us</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-retro-mustard transition">Customer Login</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bebas text-xl tracking-wider text-retro-mustard mb-4">CONTACT US</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={16} className="mr-2 mt-1 text-retro-silver" />
                <p className="font-special text-sm">+91 9326422822</p>
              </div>
              <div className="flex items-start">
                <Mail size={16} className="mr-2 mt-1 text-retro-silver" />
                <p className="font-special text-sm">msservicesngp@gmail.com</p>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-retro-silver" />
                <p className="font-special text-sm">Plot 14, Hill Rd, Gandhi Nagar, Nagpur, Maharashtra 440010</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-retro-silver/30 mt-8 pt-4">
          <p className="text-center font-special text-xs text-retro-silver">
            © {new Date().getFullYear()} M.S SERVICES - Authorized Maruti Suzuki Service Station. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
