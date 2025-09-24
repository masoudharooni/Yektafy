import type { MenuItem } from './types';
import { sampleProperties } from './data/properties';

export const ADMIN_MENU: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: 'Home',
    href: '/admin/dashboard'
  },
  {
    id: 'users',
    label: 'مدیریت کاربران',
    icon: 'Users',
    href: '/admin/users'
  },
  {
    id: 'properties',
    label: 'مدیریت املاک',
    icon: 'Shield',
    href: '/admin/properties'
  },
  {
    id: 'agents',
    label: 'مدیریت نمایندگان',
    icon: 'Briefcase',
    href: '/admin/agents'
  },
  {
    id: 'reports',
    label: 'گزارشات',
    icon: 'Clipboard',
    href: '/admin/reports'
  }
];

export const AGENT_MENU: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: 'Home',
    href: '/agent/dashboard'
  },
  {
    id: 'properties',
    label: 'آگهی‌های من',
    icon: 'Shield',
    href: '/agent/properties'
  },
  {
    id: 'customers',
    label: 'مشتریان',
    icon: 'Users',
    href: '/agent/customers'
  },
  {
    id: 'messages',
    label: 'پیام‌ها',
    icon: 'Mail',
    href: '/agent/messages'
  }
];

export const CUSTOMER_MENU: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: 'Home',
    href: '/customer/dashboard'
  },
  {
    id: 'favorites',
    label: 'علاقه‌مندی‌ها',
    icon: 'Heart',
    href: '/customer/favorites'
  },
  {
    id: 'searches',
    label: 'جستجوهای من',
    icon: 'Search',
    href: '/customer/searches'
  },
  {
    id: 'profile',
    label: 'پروفایل',
    icon: 'User',
    href: '/customer/profile'
  }
];

// Centralized navigation links for role-based sidebar with nested structure
export const SIDEBAR_LINKS = {
  ADMIN: [
    {
      id: 'dashboard',
      label: 'داشبورد',
      icon: 'Home',
      href: '/dashboard'
    },
    {
      id: 'user-management',
      label: 'مدیریت کاربران',
      icon: 'Users',
      children: [
        {
          id: 'admins',
          label: 'مدیران',
          icon: 'Shield',
          href: '/dashboard/admins'
        },
        {
          id: 'agents',
          label: 'مشاوران',
          icon: 'Briefcase',
          href: '/dashboard/agents'
        },
        {
          id: 'customers',
          label: 'مشتریان',
          icon: 'Profile2User',
          href: '/dashboard/customers'
        }
      ]
    },
    {
      id: 'listings',
      label: 'مدیریت آگهی‌ها',
      icon: 'Shield',
      href: '/dashboard/listings'
    },
    {
      id: 'settings',
      label: 'تنظیمات',
      icon: 'Clipboard',
      href: '/dashboard/settings'
    }
  ],
  AGENT: [
    {
      id: 'dashboard',
      label: 'داشبورد',
      icon: 'Home',
      href: '/dashboard'
    },
    {
      id: 'properties',
      label: 'آگهی‌های من',
      icon: 'Shield',
      href: '/dashboard/listings'
    },
    {
      id: 'customers',
      label: 'مشتریان',
      icon: 'Users',
      href: '/dashboard/customers'
    },
    {
      id: 'messages',
      label: 'پیام‌ها',
      icon: 'Mail',
      href: '/dashboard/messages'
    }
  ],
  CUSTOMER: [
    {
      id: 'dashboard',
      label: 'داشبورد',
      icon: 'Home',
      href: '/dashboard'
    },
    {
      id: 'favorites',
      label: 'علاقه‌مندی‌ها',
      icon: 'Heart',
      href: '/dashboard/favorites'
    },
    {
      id: 'searches',
      label: 'جستجوهای من',
      icon: 'Search',
      href: '/dashboard/searches'
    },
    {
      id: 'profile',
      label: 'پروفایل',
      icon: 'User',
      href: '/dashboard/profile'
    }
  ]
};

export const NAV_LINKS = [
  { name: 'خرید ملک', href: '#' },
  { name: 'فروش ملک', href: '#' },
  { name: 'رهن و اجاره', href: '#' },
  { name: 'پروژه‌های در حال ساخت', href: '#' },
  { name: 'مشاوره', href: '#' }
];

export const WHY_US_ITEMS = [
  {
    title: 'جستجوی هوشمند',
    description: 'با استفاده از هوش مصنوعی، بهترین گزینه‌های ملکی را برای شما پیدا می‌کنیم.',
    icon: 'Search'
  },
  {
    title: 'پرداخت امن',
    description: 'سیستم پرداخت امن و مطمئن برای انجام معاملات ملکی بدون دغدغه.',
    icon: 'CreditCard'
  },
  {
    title: 'مشاوران متخصص',
    description: 'تیم متخصص و باتجربه ما در تمام مراحل معامله همراه شما خواهند بود.',
    icon: 'Users'
  },
  {
    title: 'سرمایه‌گذاری پرسود',
    description: 'فرصت‌های سرمایه‌گذاری پرسود در بازار املاک با تحلیل‌های تخصصی.',
    icon: 'TrendingUp'
  }
];

// Filter properties for sale (high price range indicates sale)
export const FOR_SALE_PROPERTIES = sampleProperties
  .filter(property => property.price >= 5000000) // Properties with price >= 5M are considered for sale
  .slice(0, 15); // Limit to 15 items

// Filter properties for rent (lower price range indicates rent)
export const FOR_RENT_PROPERTIES = sampleProperties
  .filter(property => property.price < 5000000) // Properties with price < 5M are considered for rent
  .slice(0, 15); // Limit to 15 items

// Keep the old FEATURED_PROPERTIES for backward compatibility
export const FEATURED_PROPERTIES = [...FOR_SALE_PROPERTIES.slice(0, 3), ...FOR_RENT_PROPERTIES.slice(0, 3)];
