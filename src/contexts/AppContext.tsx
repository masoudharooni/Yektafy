import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types';

interface AppContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string): boolean => {
    // Mock login logic - replace with actual authentication
    if (username === 'admin' && password === 'admin123') {
      setUser({
        id: '1',
        username: 'admin',
        role: 'admin',
        name: 'مدیر سیستم',
        email: 'admin@yektafy.com'
      });
      return true;
    } else if (username === 'agent' && password === 'agent123') {
      setUser({
        id: '2',
        username: 'agent',
        role: 'agent',
        name: 'نماینده فروش',
        email: 'agent@yektafy.com'
      });
      return true;
    } else if (username === 'customer' && password === 'customer123') {
      setUser({
        id: '3',
        username: 'customer',
        role: 'customer',
        name: 'مشتری',
        email: 'customer@yektafy.com'
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{
      user,
      login,
      logout
    }}>
      {children}
    </AppContext.Provider>
  );
};
