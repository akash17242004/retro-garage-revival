
// Types for booking service
export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  carModel: string;
  registrationNumber: string;
  serviceType: string;
  appointmentDate: string;
  appointmentTime: string;
  additionalInfo?: string;
}

// Service to handle booking operations
export const bookingService = {
  // Submit a booking
  submitBooking: async (bookingData: BookingFormData): Promise<{ success: boolean; message: string }> => {
    try {
      // In a real app, this would be an API call to your backend
      // For now, we'll store it in localStorage as a placeholder
      
      const bookings = JSON.parse(localStorage.getItem('msServicesBookings') || '[]');
      const newBooking = {
        ...bookingData,
        id: Date.now().toString(),
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      
      bookings.push(newBooking);
      localStorage.setItem('msServicesBookings', JSON.stringify(bookings));
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return {
        success: true,
        message: 'Your booking has been submitted successfully. We will contact you shortly to confirm.'
      };
    } catch (error) {
      console.error('Booking error:', error);
      return {
        success: false,
        message: 'There was an error submitting your booking. Please try again later.'
      };
    }
  },

  // Get all bookings for a specific phone number
  getBookingsByPhone: (phone: string): Array<any> => {
    try {
      const bookings = JSON.parse(localStorage.getItem('msServicesBookings') || '[]');
      return bookings.filter((booking: any) => booking.phone === phone);
    } catch {
      return [];
    }
  },
  
  // Get all bookings (admin function)
  getAllBookings: (): Array<any> => {
    try {
      return JSON.parse(localStorage.getItem('msServicesBookings') || '[]');
    } catch {
      return [];
    }
  }
};
