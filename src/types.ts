export interface User {
  id: string;
  username: string;
  role: 'admin' | 'agent' | 'customer';
  name: string;
  email?: string;
  phone?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  path?: string;
  children?: MenuItem[];
}

export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  imageUrl?: string; // for backward compatibility
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: 'sale' | 'rent';
  featured?: boolean;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
  icon: string;
}
