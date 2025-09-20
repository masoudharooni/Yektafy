import type { MenuItem } from './types';

export const ADMIN_MENU: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: 'Home',
    path: '/admin/dashboard'
  },
  {
    id: 'users',
    label: 'مدیریت کاربران',
    icon: 'Users',
    path: '/admin/users'
  },
  {
    id: 'properties',
    label: 'مدیریت املاک',
    icon: 'Building',
    path: '/admin/properties'
  },
  {
    id: 'agents',
    label: 'مدیریت نمایندگان',
    icon: 'UserCheck',
    path: '/admin/agents'
  },
  {
    id: 'reports',
    label: 'گزارشات',
    icon: 'BarChart',
    path: '/admin/reports'
  }
];

export const AGENT_MENU: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: 'Home',
    path: '/agent/dashboard'
  },
  {
    id: 'properties',
    label: 'املاک من',
    icon: 'Building',
    path: '/agent/properties'
  },
  {
    id: 'customers',
    label: 'مشتریان',
    icon: 'Users',
    path: '/agent/customers'
  },
  {
    id: 'appointments',
    label: 'قرارهای ملاقات',
    icon: 'Calendar',
    path: '/agent/appointments'
  }
];

export const CUSTOMER_MENU: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: 'Home',
    path: '/customer/dashboard'
  },
  {
    id: 'favorites',
    label: 'علاقه‌مندی‌ها',
    icon: 'Heart',
    path: '/customer/favorites'
  },
  {
    id: 'searches',
    label: 'جستجوهای من',
    icon: 'Search',
    path: '/customer/searches'
  },
  {
    id: 'appointments',
    label: 'قرارهای ملاقات',
    icon: 'Calendar',
    path: '/customer/appointments'
  }
];
