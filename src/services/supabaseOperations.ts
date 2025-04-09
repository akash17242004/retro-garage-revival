
import { supabase } from "@/integrations/supabase/client";

/**
 * This is a fallback implementation to handle cases where the database
 * functions aren't yet set up in Supabase. It will directly use the
 * tables through type assertions.
 */

// Direct table operations with type assertions
export const directTableOperations = {
  // Insert a booking
  insertBooking: async (bookingData: any) => {
    return supabase
      .from('bookings' as never)
      .insert(bookingData as never);
  },
  
  // Get bookings by phone
  getBookingsByPhone: async (phone: string) => {
    return supabase
      .from('bookings' as never)
      .select('*' as never)
      .eq('phone', phone);
  },
  
  // Get user bookings
  getUserBookings: async (userId: string) => {
    return supabase
      .from('bookings' as never)
      .select('*' as never)
      .eq('user_id', userId);
  },
  
  // Get all bookings
  getAllBookings: async () => {
    return supabase
      .from('bookings' as never)
      .select('*' as never)
      .order('created_at', { ascending: false } as never);
  },
  
  // Update booking status
  updateBookingStatus: async (bookingId: string, status: string) => {
    return supabase
      .from('bookings' as never)
      .update({ status } as never)
      .eq('id', bookingId);
  }
};

// Hook up the RPC endpoints or fall back to direct table access
export const supabaseOperations = {
  // Try to use the RPC or fall back to direct table operations
  insert_booking: async (bookingData: any) => {
    try {
      // First try the proper RPC function
      const { data, error } = await supabase.rpc('insert_booking', bookingData);
      
      // If it doesn't exist, use the direct operation
      if (error && error.message.includes('does not exist')) {
        return directTableOperations.insertBooking(bookingData);
      }
      
      return { data, error };
    } catch (e) {
      return directTableOperations.insertBooking(bookingData);
    }
  },
  
  get_bookings_by_phone: async (params: { phone_param: string }) => {
    try {
      const { data, error } = await supabase.rpc('get_bookings_by_phone', params);
      
      if (error && error.message.includes('does not exist')) {
        return directTableOperations.getBookingsByPhone(params.phone_param);
      }
      
      return { data, error };
    } catch (e) {
      return directTableOperations.getBookingsByPhone(params.phone_param);
    }
  },
  
  get_user_bookings: async (params: { user_id_param: string }) => {
    try {
      const { data, error } = await supabase.rpc('get_user_bookings', params);
      
      if (error && error.message.includes('does not exist')) {
        return directTableOperations.getUserBookings(params.user_id_param);
      }
      
      return { data, error };
    } catch (e) {
      return directTableOperations.getUserBookings(params.user_id_param);
    }
  },
  
  get_all_bookings: async () => {
    try {
      const { data, error } = await supabase.rpc('get_all_bookings');
      
      if (error && error.message.includes('does not exist')) {
        return directTableOperations.getAllBookings();
      }
      
      return { data, error };
    } catch (e) {
      return directTableOperations.getAllBookings();
    }
  },
  
  update_booking_status: async (params: { booking_id_param: string, status_param: string }) => {
    try {
      const { data, error } = await supabase.rpc('update_booking_status', params);
      
      if (error && error.message.includes('does not exist')) {
        return directTableOperations.updateBookingStatus(params.booking_id_param, params.status_param);
      }
      
      return { data, error };
    } catch (e) {
      return directTableOperations.updateBookingStatus(params.booking_id_param, params.status_param);
    }
  }
};

// Extend the supabase client with our operations
Object.assign(supabase.rpc, supabaseOperations);
