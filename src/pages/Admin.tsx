
import React from 'react';
import Layout from '../components/Layout/Layout';
import BookingsList from '../components/Admin/BookingsList';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const { isAuthenticated, user } = useAuth();
  
  // Simple admin check - in a real app, you'd use roles
  const isAdmin = isAuthenticated && user?.email === "admin@msservices.com";
  
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
          <BookingsList />
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
