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
