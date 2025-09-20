import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface ToastContextType {
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useShowToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useShowToast must be used within a ToastProvider');
  }
  return context.showToast;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const showToast = (message: string, _type: 'success' | 'error' | 'info' = 'info') => {
    // Simple alert for now - replace with proper toast component
    alert(message);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
};
