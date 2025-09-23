import type { MenuItem, Property } from './types';

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

// Mock data for for-sale properties
export const FOR_SALE_PROPERTIES: Property[] = [
  {
    id: 'sale-1',
    title: 'ویلا مدرن در شمال تهران',
    price: '15,000,000,000',
    location: 'شمال تهران',
    image: 'https://picsum.photos/400/300?random=1',
    bedrooms: 4,
    bathrooms: 3,
    area: '250',
    type: 'sale',
    featured: true,
    isVerified: false
  },
  {
    id: 'sale-2',
    title: 'آپارتمان لوکس در مرکز شهر',
    price: '8,500,000,000',
    location: 'مرکز تهران',
    image: 'https://picsum.photos/400/300?random=2',
    bedrooms: 3,
    bathrooms: 2,
    area: '180',
    type: 'sale',
    featured: true,
    isVerified: true
  },
  {
    id: 'sale-3',
    title: 'خانه ویلایی با باغ',
    price: '12,000,000,000',
    location: 'کرج',
    image: 'https://picsum.photos/400/300?random=3',
    bedrooms: 5,
    bathrooms: 4,
    area: '300',
    type: 'sale',
    featured: true,
    isVerified: false
  },
  {
    id: 'sale-4',
    title: 'پنت‌هاوس با نمای شهر',
    price: '22,000,000,000',
    location: 'ولنجک',
    image: 'https://picsum.photos/400/300?random=5',
    bedrooms: 4,
    bathrooms: 3,
    area: '280',
    type: 'sale',
    featured: true,
    isVerified: true
  },
  {
    id: 'sale-5',
    title: 'آپارتمان نوساز در ونک',
    price: '18,000,000,000',
    location: 'ونک',
    image: 'https://picsum.photos/400/300?random=6',
    bedrooms: 3,
    bathrooms: 2,
    area: '200',
    type: 'sale',
    featured: true,
    isVerified: false
  },
  {
    id: 'sale-6',
    title: 'ویلا کلاسیک در شیان',
    price: '28,000,000,000',
    location: 'شیان',
    image: 'https://picsum.photos/400/300?random=7',
    bedrooms: 6,
    bathrooms: 5,
    area: '400',
    type: 'sale',
    featured: true,
    isVerified: true
  }
];

// Mock data for for-rent properties
export const FOR_RENT_PROPERTIES: Property[] = [
  {
    id: 'rent-1',
    title: 'آپارتمان اجاره‌ای در پاسداران',
    price: '25,000,000',
    location: 'پاسداران',
    image: 'https://picsum.photos/400/300?random=4',
    bedrooms: 2,
    bathrooms: 1,
    area: '120',
    type: 'rent',
    featured: true,
    isVerified: false
  },
  {
    id: 'rent-2',
    title: 'آپارتمان مبله در تجریش',
    price: '35,000,000',
    location: 'تجریش',
    image: 'https://picsum.photos/400/300?random=8',
    bedrooms: 3,
    bathrooms: 2,
    area: '150',
    type: 'rent',
    featured: true,
    isVerified: true
  },
  {
    id: 'rent-3',
    title: 'خانه ویلایی اجاره‌ای در کرج',
    price: '45,000,000',
    location: 'کرج',
    image: 'https://picsum.photos/400/300?random=9',
    bedrooms: 4,
    bathrooms: 3,
    area: '220',
    type: 'rent',
    featured: true,
    isVerified: false
  },
  {
    id: 'rent-4',
    title: 'آپارتمان استودیو در نیاوران',
    price: '18,000,000',
    location: 'نیاوران',
    image: 'https://picsum.photos/400/300?random=10',
    bedrooms: 1,
    bathrooms: 1,
    area: '80',
    type: 'rent',
    featured: true,
    isVerified: true
  },
  {
    id: 'rent-5',
    title: 'پنت‌هاوس اجاره‌ای در قیطریه',
    price: '65,000,000',
    location: 'قیطریه',
    image: 'https://picsum.photos/400/300?random=11',
    bedrooms: 5,
    bathrooms: 4,
    area: '320',
    type: 'rent',
    featured: true,
    isVerified: true
  },
  {
    id: 'rent-6',
    title: 'آپارتمان دوبلکس در زعفرانیه',
    price: '55,000,000',
    location: 'زعفرانیه',
    image: 'https://picsum.photos/400/300?random=12',
    bedrooms: 4,
    bathrooms: 3,
    area: '280',
    type: 'rent',
    featured: true,
    isVerified: true
  }
];

// Keep the old FEATURED_PROPERTIES for backward compatibility
export const FEATURED_PROPERTIES: Property[] = [...FOR_SALE_PROPERTIES.slice(0, 3), ...FOR_RENT_PROPERTIES.slice(0, 3)];
