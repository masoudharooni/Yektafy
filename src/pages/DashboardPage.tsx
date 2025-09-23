import React from 'react';
import ResponsiveDashboardLayout from '../components/dashboards/ResponsiveDashboardLayout';

const DashboardPage: React.FC = () => {
  // Default to ADMIN role for demo purposes
  const role = 'ADMIN' as const;

  return <ResponsiveDashboardLayout role={role} />;
};

export default DashboardPage;
