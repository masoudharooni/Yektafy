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
  path?: string;
  children?: MenuItem[];
}
