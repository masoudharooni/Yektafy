import React, { useEffect } from 'react';
import { authService } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from '../components/dashboards/AdminDashboard';
import AgentDashboard from '../components/dashboards/AgentDashboard';
import CustomerDashboard from '../components/dashboards/CustomerDashboard';
import DashboardLayout from '../components/dashboards/DashboardLayout';
import { ADMIN_MENU, AGENT_MENU, CUSTOMER_MENU } from '../constants';
import type { MenuItem } from '../types';

const DashboardPage: React.FC = () => {
  const user = authService.getCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to landing if no user is logged in
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) {
    // Render nothing while redirecting
    return null;
  }

  const renderDashboardByRole = () => {
    switch (user.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'agent':
        return <AgentDashboard />;
      case 'customer':
        return <CustomerDashboard />;
      default:
        return <div className="text-center p-8">نقش کاربری نامعتبر است.</div>;
    }
  };

  const getMenuItems = (): MenuItem[] => {
      switch (user.role) {
          case 'admin':
              return ADMIN_MENU;
          case 'agent':
              return AGENT_MENU;
          case 'customer':
              return CUSTOMER_MENU;
          default:
              return [];
      }
  }

  return (
    <DashboardLayout menuItems={getMenuItems()}>
        {renderDashboardByRole()}
    </DashboardLayout>
  );
};

export default DashboardPage;
