import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import LoginWithPassword from "./components/auth/LoginWithPassword";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorBoundaryPage from "./pages/ErrorBoundaryPage";
import LoginLayout from "./components/layouts/LoginLayout";
import LoginWithSms from "./components/auth/LoginWithSms";

// Dashboard Pages
import DashboardHome from "./pages/dashboard/DashboardHome";
import AdminsPage from "./pages/dashboard/AdminsPage";
import AgentsPage from "./pages/dashboard/AgentsPage";
import CustomersPage from "./pages/dashboard/CustomersPage";
import DashboardListingsPage from "./pages/dashboard/ListingsPage";
import AddListingPage from "./pages/dashboard/AddListingPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import ListingsPage from "./pages/ListingsPage";
import ListingDetailsPage from "./pages/ListingDetailsPage";

// Centralized routing configuration using React Router v6
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "admins",
            element: <AdminsPage />,
          },
          {
            path: "agents",
            element: <AgentsPage />,
          },
          {
            path: "customers",
            element: <CustomersPage />,
          },
          {
            path: "listings",
            element: <DashboardListingsPage />,
          },
          {
            path: "listings/add",
            element: <AddListingPage />,
          },
          {
            path: "settings",
            element: <SettingsPage />,
          },
        ],
      },
      {
        path: "login",
        element: <LoginLayout />,
        children: [
          {
            index: true,
            element: <LoginWithSms />,
          },
          {
            path: "password",
            element: <LoginWithPassword />,
          },
          {
            path: "sms",
            element: <LoginWithSms />,
          },
        ],
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "listings",
        element: <ListingsPage />,
      },
      {
        path: "listings/details/:id",
        element: <ListingDetailsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
