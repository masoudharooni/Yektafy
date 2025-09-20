import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import type { MenuItem } from '../../types';

interface DashboardLayoutProps {
  children: React.ReactNode;
  menuItems: MenuItem[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, menuItems }) => {
  const { user, logout } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <h1 
                className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
                onClick={() => navigate('/')}
              >
                یکتافی
              </h1>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                پلتفرم هوشمند املاک
              </span>
            </div>
            
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user?.role === 'admin' ? 'مدیر' : 
                   user?.role === 'agent' ? 'نماینده' : 'مشتری'}
                </p>
              </div>
              <button
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                خروج
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700 min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path || '#'}
                    className="flex items-center space-x-3 space-x-reverse px-3 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
