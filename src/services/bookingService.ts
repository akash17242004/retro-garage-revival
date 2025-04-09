
import { supabase } from "@/integrations/supabase/client";

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
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData.session?.user.id;
      
      // Use "from" with a type assertion to work with any table
      const { data, error } = await supabase
        .from('bookings' as any)
        .insert({
          user_id: userId || null,
          name: bookingData.name,
          phone: bookingData.phone,
          email: bookingData.email || null,
          car_model: bookingData.carModel,
          registration_number: bookingData.registrationNumber,
          service_type: bookingData.serviceType,
          appointment_date: bookingData.appointmentDate,
          appointment_time: bookingData.appointmentTime,
          additional_info: bookingData.additionalInfo || null,
          status: 'pending'
        } as any);
      
      if (error) {
        console.error('Booking error:', error);
        return {
          success: false,
          message: 'There was an error submitting your booking. Please try again later.'
        };
      }
      
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
  getBookingsByPhone: async (phone: string): Promise<Array<any>> => {
    try {
      const { data, error } = await supabase
        .from('bookings' as any)
        .select('*' as any)
        .eq('phone', phone);
        
      if (error) {
        console.error('Error fetching bookings:', error);
        return [];
      }
      
      return data || [];
    } catch (error) {
      console.error('Error fetching bookings:', error);
      return [];
    }
  },
  
  // Get bookings for the authenticated user
  getUserBookings: async (): Promise<Array<any>> => {
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData.session?.user.id;
      
      if (!userId) {
        return [];
      }
      
      const { data, error } = await supabase
        .from('bookings' as any)
        .select('*' as any)
        .eq('user_id', userId);
        
      if (error) {
        console.error('Error fetching user bookings:', error);
        return [];
      }
      
      return data || [];
    } catch (error) {
      console.error('Error fetching user bookings:', error);
      return [];
    }
  },
  
  // Get all bookings (admin function)
  getAllBookings: async (): Promise<Array<any>> => {
    try {
      const { data, error } = await supabase
        .from('bookings' as any)
        .select('*' as any)
        .order('created_at', { ascending: false } as any);
        
      if (error) {
        console.error('Error fetching all bookings:', error);
        return [];
      }
      
      return data || [];
    } catch (error) {
      console.error('Error fetching all bookings:', error);
      return [];
    }
  },

  // Update booking status
  updateBookingStatus: async (bookingId: string, status: 'confirmed' | 'cancelled'): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from('bookings' as any)
        .update({ status } as any)
        .eq('id', bookingId);
      
      if (error) {
        console.error('Error updating booking status:', error);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Error updating booking status:', error);
      return false;
    }
  }
};
