
import React, { useEffect, useState } from 'react';
import { bookingService } from '../../services/bookingService';
import { format } from 'date-fns';
import { Check, X, Phone } from 'lucide-react';

const BookingsList = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load bookings
    const loadBookings = () => {
      const allBookings = bookingService.getAllBookings();
      // Sort by date (newest first)
      allBookings.sort((a: any, b: any) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setBookings(allBookings);
      setIsLoading(false);
    };
    
    loadBookings();
  }, []);

  if (isLoading) {
    return <div className="text-center py-8">Loading bookings...</div>;
  }

  if (bookings.length === 0) {
    return <div className="text-center py-8 font-special">No bookings found.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-retro-darkGray text-white">
            <th className="py-3 px-4 text-left font-bebas tracking-wider">Date/Time</th>
            <th className="py-3 px-4 text-left font-bebas tracking-wider">Customer</th>
            <th className="py-3 px-4 text-left font-bebas tracking-wider">Car Details</th>
            <th className="py-3 px-4 text-left font-bebas tracking-wider">Service</th>
            <th className="py-3 px-4 text-left font-bebas tracking-wider">Status</th>
            <th className="py-3 px-4 text-left font-bebas tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {bookings.map((booking) => (
            <tr key={booking.id} className="hover:bg-gray-50">
              <td className="py-3 px-4 font-special text-sm">
                <div>{booking.appointmentDate}</div>
                <div className="text-retro-darkGray/70">{booking.appointmentTime}</div>
              </td>
              <td className="py-3 px-4">
                <div className="font-special text-sm">{booking.name}</div>
                <div className="flex items-center text-xs text-retro-darkGray/70 mt-1">
                  <Phone size={12} className="mr-1" />
                  {booking.phone}
                </div>
              </td>
              <td className="py-3 px-4 font-special text-sm">
                <div>{booking.carModel}</div>
                <div className="text-xs text-retro-darkGray/70">{booking.registrationNumber}</div>
              </td>
              <td className="py-3 px-4 font-special text-sm">
                {booking.serviceType}
              </td>
              <td className="py-3 px-4">
                <span className={`px-2 py-1 rounded-sm text-xs font-bebas
                  ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                   booking.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                   'bg-yellow-100 text-yellow-800'}`}>
                  {booking.status.toUpperCase()}
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  <button 
                    className="p-1 bg-green-500 text-white rounded-sm" 
                    title="Confirm"
                  >
                    <Check size={16} />
                  </button>
                  <button 
                    className="p-1 bg-red-500 text-white rounded-sm"
                    title="Cancel"
                  >
                    <X size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsList;
