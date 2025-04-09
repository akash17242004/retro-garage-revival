import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Calendar as CalendarIcon, Clock, Check, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { bookingService, BookingFormData } from '../services/bookingService';

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carModel: '',
    registrationNumber: '',
    serviceType: '',
    additionalInfo: ''
  });

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const serviceTypes = [
    'Regular Maintenance', 'Oil Change', 'Brake Service',
    'Engine Diagnostics', 'AC Service', 'Wheel Alignment',
    'Denting & Painting', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please select both a date and time for your appointment.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const bookingData: BookingFormData = {
        ...formData,
        appointmentDate: format(date, 'yyyy-MM-dd'),
        appointmentTime: timeSlot
      };
      
      const response = await bookingService.submitBooking(bookingData);
      
      if (response.success) {
        toast({
          title: "Booking Successful!",
          description: `Your service has been scheduled for ${format(date, 'PP')} at ${timeSlot}. We'll contact you to confirm.`,
        });
        
        // Reset form
        setDate(undefined);
        setTimeSlot(undefined);
        setFormData({
          name: '',
          phone: '',
          email: '',
          carModel: '',
          registrationNumber: '',
          serviceType: '',
          additionalInfo: ''
        });
      } else {
        toast({
          title: "Booking Failed",
          description: response.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast({
        title: "Booking Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-retro-red py-10 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: "url('/gears-pattern.png')",
            backgroundRepeat: "repeat",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-bebas text-4xl md:text-5xl text-white tracking-wider mb-2 text-center">
            BOOK YOUR SERVICE
          </h1>
          <p className="font-special text-white/80 text-center max-w-2xl mx-auto">
            Schedule an appointment for your Maruti Suzuki service. Our team will confirm your booking within 24 hours.
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="retro-card mb-8">
            <h2 className="font-bebas text-2xl tracking-wider text-retro-red mb-6">
              SERVICE BOOKING FORM
            </h2>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div>
                <h3 className="font-bebas text-xl tracking-wider mb-4 text-retro-darkGray">
                  PERSONAL INFORMATION
                </h3>
                
                <div className="space-y-4">
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
                    <label className="block font-special text-sm mb-1" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="retro-input w-full"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                    />
                    <p className="text-xs font-special text-retro-darkGray/70 mt-1">
                      Format: 10 digits without spaces or dashes
                    </p>
                  </div>
                  
                  <div>
                    <label className="block font-special text-sm mb-1" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="retro-input w-full"
                    />
                  </div>
                </div>
              </div>
              
              {/* Vehicle Information */}
              <div>
                <h3 className="font-bebas text-xl tracking-wider mb-4 text-retro-darkGray">
                  VEHICLE INFORMATION
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block font-special text-sm mb-1" htmlFor="carModel">
                      Car Model *
                    </label>
                    <input
                      type="text"
                      id="carModel"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Swift, Alto, Dzire"
                      className="retro-input w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-special text-sm mb-1" htmlFor="registrationNumber">
                      Registration Number *
                    </label>
                    <input
                      type="text"
                      id="registrationNumber"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleInputChange}
                      required
                      className="retro-input w-full uppercase"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-special text-sm mb-1" htmlFor="serviceType">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="retro-input w-full"
                    >
                      <option value="">Select a service...</option>
                      {serviceTypes.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Date & Time Selection */}
              <div className="md:col-span-2">
                <h3 className="font-bebas text-xl tracking-wider mb-4 text-retro-darkGray">
                  PREFERRED DATE & TIME
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-special text-sm mb-1">
                      Select Date *
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full border-2 border-retro-darkGray px-4 py-2 h-auto rounded-sm font-special justify-start text-left ${!date && 'text-muted-foreground'}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, 'PPP') : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => {
                            const today = new Date();
                            const nextMonth = new Date();
                            nextMonth.setMonth(today.getMonth() + 1);
                            
                            // Disable dates in the past, Sundays, and dates more than a month away
                            return (
                              date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                              date > nextMonth ||
                              date.getDay() === 0 // Sunday
                            );
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <label className="block font-special text-sm mb-1">
                      Select Time *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`border-2 py-2 rounded-sm font-special text-sm transition-all 
                            ${timeSlot === slot 
                              ? 'bg-retro-mustard border-amber-700 text-retro-darkGray' 
                              : 'border-retro-darkGray/30 hover:border-retro-darkGray/60'
                            }`}
                          onClick={() => setTimeSlot(slot)}
                        >
                          <Clock size={14} className="inline-block mr-1" />
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Information */}
              <div className="md:col-span-2">
                <div>
                  <label className="block font-special text-sm mb-1" htmlFor="additionalInfo">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={3}
                    className="retro-input w-full"
                    placeholder="Please share any specific issues or requests..."
                  ></textarea>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="retro-button w-full md:w-auto py-3 px-8 text-lg flex items-center justify-center disabled:opacity-70"
                  disabled={!date || !timeSlot || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    'Book Appointment'
                  )}
                </button>
                <p className="font-special text-xs text-retro-darkGray/70 mt-2">
                  * Required fields
                </p>
              </div>
            </form>
          </div>
          
          {/* Booking Information */}
          <div className="bg-retro-darkGray text-white p-6 rounded-sm border border-retro-silver/30">
            <h3 className="font-bebas text-xl tracking-wider mb-4 text-retro-mustard">
              BOOKING INFORMATION
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check size={16} className="text-retro-mustard mr-2 mt-1 flex-shrink-0" />
                <p className="font-special text-sm">
                  Your booking will be confirmed by our team via phone call within 24 hours.
                </p>
              </div>
              <div className="flex items-start">
                <Check size={16} className="text-retro-mustard mr-2 mt-1 flex-shrink-0" />
                <p className="font-special text-sm">
                  Please arrive 15 minutes before your scheduled appointment.
                </p>
              </div>
              <div className="flex items-start">
                <Check size={16} className="text-retro-mustard mr-2 mt-1 flex-shrink-0" />
                <p className="font-special text-sm">
                  Bring your vehicle registration documents and service history (if available).
                </p>
              </div>
              <div className="flex items-start">
                <Check size={16} className="text-retro-mustard mr-2 mt-1 flex-shrink-0" />
                <p className="font-special text-sm">
                  Free pick-up and drop service is available within Nagpur city limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
