import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authService } from '../../services/auth';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { loginPasswordSchema, type LoginPasswordFormData } from '../../schemas/auth';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/Button';

const LoginWithPassword: React.FC = () => {
  const navigate = useNavigate();
  const usernameInputRef = useRef<HTMLInputElement>(null);
  
  const form = useForm<LoginPasswordFormData>({
    resolver: zodResolver(loginPasswordSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // Auto-focus the username input when component mounts
  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, []);

  const onSubmit = (data: LoginPasswordFormData) => {
    const success = authService.login(data.username, data.password);
    if (success) {
      toast.success('ورود موفقیت‌آمیز بود!');
      navigate('/dashboard');
    } else {
      toast.error('نام کاربری یا رمز عبور اشتباه است.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">ورود به حساب کاربری</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">نام کاربری</FormLabel>
                <FormControl>
                  <Input
                    placeholder="مثال: admin"
                    className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    {...field}
                    ref={(e) => {
                      field.ref(e);
                      usernameInputRef.current = e;
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel className="text-gray-300">رمز عبور</FormLabel>
                  <Link 
                    to="/forgot-password" 
                    className="text-xs text-cyan-500 hover:text-cyan-400 transition"
                  >
                    فراموشی رمز عبور
                  </Link>
                </div>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="مثال: admin123"
                    className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'در حال ورود...' : 'ورود به حساب کاربری'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginWithPassword;