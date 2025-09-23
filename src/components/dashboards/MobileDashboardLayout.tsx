import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { 
  Home, 
  Users, 
  Shield, 
  Briefcase, 
  User, 
  Clipboard, 
  MessageSquare, 
  Heart, 
  Search,
  Menu,
  Bell,
  Settings,
  Plus,
  BarChart3
} from 'lucide-react';
import { SIDEBAR_LINKS } from '../../constants';

// Mobile-optimized header component
const MobileHeader: React.FC<{ role: 'ADMIN' | 'AGENT' | 'CUSTOMER' }> = ({ role }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'داشبورد';
    if (path.includes('/admins')) return 'مدیران';
    if (path.includes('/agents')) return 'مشاوران';
    if (path.includes('/customers')) return 'مشتریان';
    if (path.includes('/listings')) return 'آگهی‌ها';
    if (path.includes('/settings')) return 'تنظیمات';
    if (path.includes('/favorites')) return 'علاقه‌مندی‌ها';
    if (path.includes('/searches')) return 'جستجوها';
    if (path.includes('/profile')) return 'پروفایل';
    if (path.includes('/messages')) return 'پیام‌ها';
    return 'داشبورد';
  };

  return (
    <motion.header 
      className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <span className="text-white font-bold text-lg">ی</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-100">یکتافی</h1>
              <p className="text-xs text-gray-400">{getPageTitle()}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-10 w-10 p-0 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-10 w-10 p-0 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

// Bottom navigation component
const BottomNavigation: React.FC<{ role: 'ADMIN' | 'AGENT' | 'CUSTOMER' }> = ({ role }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getNavigationItems = () => {
    const menuItems = SIDEBAR_LINKS[role];
    const mainItems = menuItems.filter(item => !item.children).slice(0, 4);
    
    // For admin role, add specific items
    if (role === 'ADMIN') {
      return [
        { id: 'dashboard', label: 'داشبورد', icon: Home, href: '/dashboard' },
        { id: 'users', label: 'کاربران', icon: Users, href: '/dashboard/admins' },
        { id: 'listings', label: 'آگهی‌ها', icon: Shield, href: '/dashboard/listings' },
        { id: 'reports', label: 'گزارشات', icon: BarChart3, href: '/dashboard/settings' }
      ];
    }
    
    // For agent role
    if (role === 'AGENT') {
      return [
        { id: 'dashboard', label: 'داشبورد', icon: Home, href: '/dashboard' },
        { id: 'listings', label: 'آگهی‌ها', icon: Shield, href: '/dashboard/listings' },
        { id: 'customers', label: 'مشتریان', icon: Users, href: '/dashboard/customers' },
        { id: 'messages', label: 'پیام‌ها', icon: MessageSquare, href: '/dashboard/messages' }
      ];
    }
    
    // For customer role
    if (role === 'CUSTOMER') {
      return [
        { id: 'dashboard', label: 'داشبورد', icon: Home, href: '/dashboard' },
        { id: 'favorites', label: 'علاقه‌ها', icon: Heart, href: '/dashboard/favorites' },
        { id: 'searches', label: 'جستجوها', icon: Search, href: '/dashboard/searches' },
        { id: 'profile', label: 'پروفایل', icon: User, href: '/dashboard/profile' }
      ];
    }
    
    return mainItems;
  };

  const navigationItems = getNavigationItems();

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.includes(href);
  };

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <div className="px-2 py-2">
        <div className="grid grid-cols-4 gap-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <motion.div
                key={item.id}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => navigate(item.href)}
                  className={`w-full flex flex-col items-center gap-1 py-3 px-2 h-auto rounded-xl transition-all duration-300 ${
                    active 
                      ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/10' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
                  }`}
                >
                  <div className={`transition-all duration-300 ${active ? 'scale-110' : 'scale-100'}`}>
                    <Icon className={`h-5 w-5 ${active ? 'text-cyan-400' : ''}`} />
                  </div>
                  <span className={`text-xs font-medium transition-all duration-300 ${
                    active ? 'text-cyan-400' : 'text-gray-400'
                  }`}>
                    {item.label}
                  </span>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

// Floating action button for adding new items
const FloatingActionButton: React.FC<{ role: 'ADMIN' | 'AGENT' | 'CUSTOMER' }> = ({ role }) => {
  const navigate = useNavigate();

  const getAction = () => {
    switch (role) {
      case 'ADMIN':
        return { href: '/dashboard/listings/add', label: 'آگهی جدید' };
      case 'AGENT':
        return { href: '/dashboard/listings/add', label: 'آگهی جدید' };
      case 'CUSTOMER':
        return { href: '/search', label: 'جستجوی جدید' };
      default:
        return { href: '/dashboard/listings/add', label: 'آگهی جدید' };
    }
  };

  const action = getAction();

  return (
    <motion.div
      className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
    >
      <Button
        onClick={() => navigate(action.href)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </motion.div>
  );
};

// Main layout component
interface MobileDashboardLayoutProps {
  role: 'ADMIN' | 'AGENT' | 'CUSTOMER';
}

const MobileDashboardLayout: React.FC<MobileDashboardLayoutProps> = ({ role }) => {
  return (
    <div className="min-h-screen bg-[#0D1117] flex flex-col">
      {/* Mobile Header */}
      <MobileHeader role={role} />
      
      {/* Main Content */}
      <main className="flex-1 pb-20 overflow-y-auto">
        <motion.div
          className="px-4 py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>
      
      {/* Floating Action Button */}
      <FloatingActionButton role={role} />
      
      {/* Bottom Navigation */}
      <BottomNavigation role={role} />
    </div>
  );
};

export default MobileDashboardLayout;
