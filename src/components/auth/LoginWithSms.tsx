import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { loginSmsSchema, type LoginSmsFormData } from '../../schemas/auth';
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

const LoginWithSms: React.FC = () => {
  const form = useForm<LoginSmsFormData>({
    resolver: zodResolver(loginSmsSchema),
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = (_data: LoginSmsFormData) => {
    toast.info('ورود با پیامک در حال حاضر فعال نیست.');
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">ورود با پیامک</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">شماره موبایل</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                    className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-start"
                    dir="ltr"
                    {...field}
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
            {form.formState.isSubmitting ? 'در حال ارسال...' : 'ارسال کد تایید'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginWithSms;