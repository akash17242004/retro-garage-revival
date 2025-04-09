
import React from 'react';
import Layout from '../components/Layout/Layout';
import BookingsList from '../components/Admin/BookingsList';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const { isAuthenticated, user } = useAuth();
  
  // Admin emails array - added the second admin email
  const adminEmails = ["admin@msservices.com", "msservicesngp@gmail.com"];
  
  // Check if user is admin
  const isAdmin = isAuthenticated && user?.email && adminEmails.includes(user.email);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (!isAdmin) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="font-bebas text-3xl text-retro-red mb-4">Access Denied</h1>
          <p className="font-special">You do not have permission to view this page.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-bebas text-3xl text-retro-red mb-6">Admin Dashboard</h1>
        
        <div className="bg-white shadow-md rounded-sm p-6 mb-8">
          <h2 className="font-bebas text-2xl mb-4 text-retro-darkGray">Booking Management</h2>
          <div className="mb-6 p-4 bg-retro-cream border-l-4 border-retro-mustard">
            <p className="font-special text-sm">
              <strong>Admin access:</strong> You are logged in as {user?.email}. 
              You have full access to manage all service bookings.
            </p>
          </div>
          <BookingsList />
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
