import React from 'react';
import DashboardLayout from '../components/dashboards/DashboardLayout';

const DashboardPage: React.FC = () => {
  // Default to ADMIN role for demo purposes
  const role = 'ADMIN' as const;

  return <DashboardLayout role={role} />;
};

export default DashboardPage;
