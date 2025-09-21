import React, { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import type { MenuItem } from '../../types';
import { authService } from '../../services/auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

const DashboardHeader: React.FC = () => {
    const user = authService.getCurrentUser();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const handleLogout = () => {
      setIsDropdownOpen(false);
      authService.logout();
      navigate('/');
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const handleProfileClick = (e: React.MouseEvent) => {
      e.preventDefault();
      toast.info('این بخش هنوز در دست توسعه است.');
    }
  
    return (
      <header className="bg-gray-900/80 backdrop-blur-lg border-b border-gray-700 flex-shrink-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
             <h1 className="text-3xl font-bold text-gray-100 tracking-wider cursor-pointer" onClick={() => navigate('/')}>
                یکتافی
              </h1>
              <div className="flex items-center gap-4">
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 text-gray-200 hover:text-cyan-400 transition-colors duration-200"
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                  >
                    <span>{user?.name}</span>
                    <MdKeyboardArrowDown 
                        size={16} 
                        className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute start-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1 z-50">
                      <a href="#" onClick={handleProfileClick} className="block w-full text-end px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200">
                        پروفایل
                      </a>
                      <div className="my-1 border-t border-gray-700"></div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-end block px-4 py-2 text-sm text-red-500 hover:bg-gray-700 hover:text-red-400 transition-colors duration-200"
                      >
                        خروج از سیستم
                      </button>
                    </div>
                  )}
                </div>
              </div>
          </div>
        </div>
      </header>
    );
  };

interface DashboardLayoutProps {
    menuItems: MenuItem[];
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ menuItems, children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-[#0D1117] flex flex-row overflow-hidden">
            <Sidebar 
              menuItems={menuItems} 
              isCollapsed={isSidebarCollapsed} 
              toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />
            {/* Main content area that adapts to sidebar width */}
            <div className="flex-1 flex flex-col transition-all duration-300 min-w-0">
                <DashboardHeader />
                <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    <div className="container mx-auto px-6 py-12 max-w-full">
                         {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;