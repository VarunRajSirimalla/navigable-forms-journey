
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('forumhub_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      // Normally this would be a real API call
      // Simulating a successful login for demo purposes
      if (email && password) {
        const mockUser = {
          id: '1',
          email,
          username: email.split('@')[0],
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email,
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('forumhub_user', JSON.stringify(mockUser));
        toast.success('Welcome back!');
        return Promise.resolve();
      } else {
        toast.error('Invalid credentials');
        return Promise.reject('Invalid credentials');
      }
    } catch (error) {
      toast.error('Login failed');
      return Promise.reject(error);
    }
  };

  const signup = async (email: string, password: string, username: string): Promise<void> => {
    try {
      // Normally this would be a real API call
      if (email && password) {
        const mockUser = {
          id: '1',
          email,
          username: username || email.split('@')[0],
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email,
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('forumhub_user', JSON.stringify(mockUser));
        toast.success('Account created successfully!');
        return Promise.resolve();
      } else {
        toast.error('Invalid information');
        return Promise.reject('Invalid information');
      }
    } catch (error) {
      toast.error('Signup failed');
      return Promise.reject(error);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('forumhub_user');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
