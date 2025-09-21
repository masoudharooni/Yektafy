import type { User } from '../types';

// Simple static auth service to replace React Context
class AuthService {
  private user: User | null = null;

  login(username: string, password: string): boolean {
    // Mock login logic - replace with actual authentication
    if (username === 'admin' && password === 'admin123') {
      this.user = {
        id: '1',
        username: 'admin',
        role: 'admin',
        name: 'مدیر سیستم',
        email: 'admin@yektafy.com'
      };
      return true;
    } else if (username === 'agent' && password === 'agent123') {
      this.user = {
        id: '2',
        username: 'agent',
        role: 'agent',
        name: 'نماینده فروش',
        email: 'agent@yektafy.com'
      };
      return true;
    } else if (username === 'customer' && password === 'customer123') {
      this.user = {
        id: '3',
        username: 'customer',
        role: 'customer',
        name: 'مشتری',
        email: 'customer@yektafy.com'
      };
      return true;
    }
    return false;
  }

  logout(): void {
    this.user = null;
  }

  getCurrentUser(): User | null {
    return this.user;
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }
}

// Export singleton instance
export const authService = new AuthService();
