import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/layouts/RootLayout';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import LoginWithPassword from './components/auth/LoginWithPassword';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import NotFoundPage from './pages/NotFoundPage';
import ErrorBoundaryPage from './pages/ErrorBoundaryPage';
import LoginLayout from './components/layouts/LoginLayout';
import LoginWithSms from './components/auth/LoginWithSms';

// Admin Pages
import AdminUsersPage from './pages/dashboard/AdminUsersPage';
import AdminPropertiesPage from './pages/dashboard/AdminPropertiesPage';
import AdminAgentsPage from './pages/dashboard/AdminAgentsPage';
import AdminReportsPage from './pages/dashboard/AdminReportsPage';

// Agent Pages
import AgentPropertiesPage from './pages/dashboard/AgentPropertiesPage';
import AgentCustomersPage from './pages/dashboard/AgentCustomersPage';
import AgentMessagesPage from './pages/dashboard/AgentMessagesPage';

// Customer Pages
import CustomerFavoritesPage from './pages/dashboard/CustomerFavoritesPage';
import CustomerSearchesPage from './pages/dashboard/CustomerSearchesPage';
import CustomerProfilePage from './pages/dashboard/CustomerProfilePage';

// Centralized routing configuration using React Router v6
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
            {
              path: 'dashboard',
              element: <DashboardPage />,
              children: [
                // Admin Routes
                { path: 'admin/users', element: <AdminUsersPage /> },
                { path: 'admin/properties', element: <AdminPropertiesPage /> },
                { path: 'admin/agents', element: <AdminAgentsPage /> },
                { path: 'admin/reports', element: <AdminReportsPage /> },
                // Agent Routes
                { path: 'agent/properties', element: <AgentPropertiesPage /> },
                { path: 'agent/customers', element: <AgentCustomersPage /> },
                { path: 'agent/messages', element: <AgentMessagesPage /> },
                // Customer Routes
                { path: 'customer/favorites', element: <CustomerFavoritesPage /> },
                { path: 'customer/searches', element: <CustomerSearchesPage /> },
                { path: 'customer/profile', element: <CustomerProfilePage /> },
              ],
            },
      {
        path: 'login',
        element: <LoginLayout />,
        children: [
          {
            index: true,
            element: <LoginWithPassword />,
          },
          {
            path: 'password',
            element: <LoginWithPassword />,
          },
             {
               path: 'sms',
               element: <LoginWithSms />,
             },
           ],
         },
         {
           path: 'forgot-password',
           element: <ForgotPasswordPage />,
         },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
