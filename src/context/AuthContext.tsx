
import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the User interface
interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  about?: string;
  profilePicture?: string;
}

// Define the AuthContext interface
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  updateUserProfile: (userData: Partial<User>) => void;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  updateUserProfile: () => {},
});

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Check if user is already logged in when component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('msservices_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  // Login function
  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('msservices_user', JSON.stringify(userData));
  };
  
  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('msservices_user');
  };
  
  // Update user profile
  const updateUserProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('msservices_user', JSON.stringify(updatedUser));
    }
  };
  
  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    updateUserProfile
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
