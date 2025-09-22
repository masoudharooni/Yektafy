import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900/80 backdrop-blur-lg border-b border-gray-700 flex-shrink-0 h-[73px]">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-100 tracking-wider cursor-pointer" onClick={() => navigate('/')}>
          یکتافی
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-200">کاربر نمایشی</span>
        </div>
      </div>
    </header>
  );
};

interface DashboardLayoutProps {
  role: 'ADMIN' | 'AGENT' | 'CUSTOMER';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ role }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <motion.div
      className="min-h-screen bg-[#0D1117] flex flex-row overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Sidebar
        role={role}
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      {/* Main content area that adapts to sidebar width */}
      <div className="flex-1 flex flex-col transition-all duration-300 min-w-0">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <motion.div
            className="container mx-auto px-6 py-12 max-w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </motion.div>
  )
}

export default DashboardLayout;