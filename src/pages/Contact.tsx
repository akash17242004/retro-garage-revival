
import React from 'react';
import Layout from '../components/Layout/Layout';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend or Google Sheet
    // For this demo, we'll just show a success toast
    
    console.log('Contact form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-retro-darkGray py-10 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: "url('/blueprint.png')",
            backgroundRepeat: "repeat",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-bebas text-4xl md:text-5xl text-retro-cream tracking-wider mb-2 text-center">
            CONTACT US
          </h1>
          <p className="font-special text-retro-silver text-center max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our friendly team at M.S Services.
          </p>
        </div>
      </div>

      {/* Contact Information & Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="section-title mb-8">GET IN TOUCH</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-retro-darkGray rounded-sm p-3 mr-4">
                  <Phone size={24} className="text-retro-mustard" />
                </div>
                <div>
                  <h3 className="font-bebas text-xl tracking-wider text-retro-red">PHONE</h3>
                  <p className="font-special text-lg">+91 9326422822</p>
                  <p className="font-special text-sm text-retro-darkGray/70">
                    Call us Monday-Saturday, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-retro-darkGray rounded-sm p-3 mr-4">
                  <Mail size={24} className="text-retro-mustard" />
                </div>
                <div>
                  <h3 className="font-bebas text-xl tracking-wider text-retro-red">EMAIL</h3>
                  <p className="font-special">msservicesngp@gmail.com</p>
                  <p className="font-special text-sm text-retro-darkGray/70">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-retro-darkGray rounded-sm p-3 mr-4">
                  <MapPin size={24} className="text-retro-mustard" />
                </div>
                <div>
                  <h3 className="font-bebas text-xl tracking-wider text-retro-red">LOCATION</h3>
                  <p className="font-special">
                    Plot 14, Hill Road, Gandhi Nagar,<br />
                    Nagpur, Maharashtra 440010
                  </p>
                  <p className="font-special text-sm text-retro-darkGray/70">
                    Near Gandhi Nagar Market
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-retro-darkGray rounded-sm p-3 mr-4">
                  <Clock size={24} className="text-retro-mustard" />
                </div>
                <div>
                  <h3 className="font-bebas text-xl tracking-wider text-retro-red">BUSINESS HOURS</h3>
                  <table className="font-special text-sm">
                    <tbody>
                      <tr>
                        <td className="pr-6 py-1">Monday - Friday:</td>
                        <td>9:00 AM - 6:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pr-6 py-1">Saturday:</td>
                        <td>9:00 AM - 4:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pr-6 py-1">Sunday:</td>
                        <td>Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="retro-card">
              <h2 className="font-bebas text-2xl tracking-wider text-retro-red mb-6">
                SEND US A MESSAGE
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-special text-sm mb-1" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="retro-input w-full"
                  />
                </div>
                
                <div>
                  <label className="block font-special text-sm mb-1" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="retro-input w-full"
                  />
                </div>
                
                <div>
                  <label className="block font-special text-sm mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="retro-input w-full"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                  />
                </div>
                
                <div>
                  <label className="block font-special text-sm mb-1" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="retro-input w-full"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button type="submit" className="retro-button w-full py-2 mt-4">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="mt-8 bg-retro-mustard/20 p-4 rounded-sm border border-retro-mustard/30">
              <h3 className="font-bebas text-xl tracking-wider mb-2">WHY CHOOSE US?</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Check size={16} className="text-retro-red mr-2 mt-1 flex-shrink-0" />
                  <p className="font-special text-sm">
                    Official Maruti Suzuki Authorized Service Center
                  </p>
                </div>
                <div className="flex items-start">
                  <Check size={16} className="text-retro-red mr-2 mt-1 flex-shrink-0" />
                  <p className="font-special text-sm">
                    Factory-trained technicians with years of experience
                  </p>
                </div>
                <div className="flex items-start">
                  <Check size={16} className="text-retro-red mr-2 mt-1 flex-shrink-0" />
                  <p className="font-special text-sm">
                    100% genuine Maruti Suzuki spare parts
                  </p>
                </div>
                <div className="flex items-start">
                  <Check size={16} className="text-retro-red mr-2 mt-1 flex-shrink-0" />
                  <p className="font-special text-sm">
                    Free pick-up and drop service in Nagpur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12 relative">
        <div className="absolute top-0 left-0 right-0 bg-retro-darkGray h-20 z-10"></div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0736449627025!2d79.0768079!3d21.152635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c6e2a8989d45%3A0x815cee8a310fe2be!2sPlot%2014%2C%20Hill%20Rd%2C%20Gandhi%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440010!5e0!3m2!1sen!2sin!4v1595901234567!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          allowFullScreen 
          loading="lazy" 
          title="M.S Services Location"
          className="border-0"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;
