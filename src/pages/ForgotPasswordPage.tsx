import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '../schemas/auth';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef<HTMLInputElement>(null);
  
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  // Auto-focus the email input when component mounts
  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const onSubmit = (data: ForgotPasswordFormData) => {
    // Mock implementation - replace with actual API call
    console.log('Password reset requested for:', data.email);
    toast.success('لینک بازیابی رمز عبور به ایمیل شما ارسال شد.');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('https://picsum.photos/seed/yektafy-bg/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="bg-black/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-gray-100 tracking-wider mb-2">
                یکتافی
              </h1>
              <h2 className="text-2xl font-bold text-gray-100 mb-2">فراموشی رمز عبور</h2>
              <p className="text-gray-400 text-sm">
                ایمیل خود را وارد کنید تا لینک بازیابی رمز عبور برای شما ارسال شود
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">ایمیل</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@email.com"
                          className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                          {...field}
                          ref={(e) => {
                            field.ref(e);
                            emailInputRef.current = e;
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'در حال ارسال...' : 'ارسال لینک بازیابی'}
                </Button>
              </form>
            </Form>

            {/* Back to Login */}
            <div className="mt-6 text-center">
              <Link 
                to="/login" 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                بازگشت به صفحه ورود
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
