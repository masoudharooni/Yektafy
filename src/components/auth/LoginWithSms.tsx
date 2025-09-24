import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowRight, Clock } from 'lucide-react';
import { loginSmsSchema, verifyOtpSchema, type LoginSmsFormData, type VerifyOtpFormData } from '../../schemas/auth';
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
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../custom';

const LoginWithSms: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const otpInputRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [isResending, setIsResending] = useState(false);
  
  // Get the redirect URL from query params
  const redirectTo = searchParams.get('to') || '/dashboard';

  const phoneForm = useForm<LoginSmsFormData>({
    resolver: zodResolver(loginSmsSchema),
    defaultValues: {
      phone: '',
    },
  });

  const otpForm = useForm<VerifyOtpFormData>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      otp: '',
    },
  });

  // Auto-focus the first input when component mounts or step changes
  useEffect(() => {
    if (step === 'phone' && phoneInputRef.current) {
      phoneInputRef.current.focus();
    } else if (step === 'otp' && otpInputRef.current) {
      // Focus the first OTP input
      const firstInput = otpInputRef.current.querySelector('input') as HTMLInputElement;
      if (firstInput) {
        firstInput.focus();
      }
    }
  }, [step]);

  // Countdown timer for resend button
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const onPhoneSubmit = (data: LoginSmsFormData) => {
    // Simulate sending OTP
    setPhoneNumber(data.phone);
    setStep('otp');
    setCountdown(60);
    toast.success(`کد تایید به شماره ${data.phone} ارسال شد`);
  };

  const onOtpSubmit = (data: VerifyOtpFormData) => {
    // Simulate OTP verification
    if (data.otp === '123456') {
      toast.success('ورود با موفقیت انجام شد');
      navigate(redirectTo);
    } else {
      toast.error('کد تایید اشتباه است');
    }
  };

  const handleResendOtp = async () => {
    setIsResending(true);
    // Simulate resending OTP
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCountdown(60);
    setIsResending(false);
    toast.success('کد تایید مجدداً ارسال شد');
  };

  if (step === 'otp') {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-2 text-center">تایید شماره موبایل</h2>
        <p className="text-gray-400 text-center mb-8">
          کد تایید ۶ رقمی ارسال شده به {phoneNumber} را وارد کنید
        </p>
        
        <Form {...otpForm}>
          <form onSubmit={otpForm.handleSubmit(onOtpSubmit)} className="space-y-8">
            <FormField
              control={otpForm.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300 text-center block">کد تایید</FormLabel>
                  <FormControl>
                    <div ref={otpInputRef} dir="ltr" className="flex justify-center">
                      <InputOTP
                        maxLength={6}
                        value={field.value}
                        onChange={field.onChange}
                        className="gap-2"
                      >
                        <InputOTPGroup className="gap-2">
                          <InputOTPSlot 
                            index={0} 
                            className="bg-gray-800/50 border-gray-600 text-gray-100 w-12 h-12 text-lg font-semibold rounded-lg"
                          />
                          <InputOTPSlot 
                            index={1} 
                            className="bg-gray-800/50 border-gray-600 text-gray-100 w-12 h-12 text-lg font-semibold rounded-lg"
                          />
                          <InputOTPSlot 
                            index={2} 
                            className="bg-gray-800/50 border-gray-600 text-gray-100 w-12 h-12 text-lg font-semibold rounded-lg"
                          />
                          <InputOTPSlot 
                            index={3} 
                            className="bg-gray-800/50 border-gray-600 text-gray-100 w-12 h-12 text-lg font-semibold rounded-lg"
                          />
                          <InputOTPSlot 
                            index={4} 
                            className="bg-gray-800/50 border-gray-600 text-gray-100 w-12 h-12 text-lg font-semibold rounded-lg"
                          />
                          <InputOTPSlot 
                            index={5} 
                            className="bg-gray-800/50 border-gray-600 text-gray-100 w-12 h-12 text-lg font-semibold rounded-lg"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            
            <div className="space-y-4">
              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                disabled={otpForm.formState.isSubmitting}
              >
                {otpForm.formState.isSubmitting ? 'در حال تایید...' : 'تایید و ورود'}
                <ArrowRight className="h-5 w-5 text-white" />
              </Button>

              <div className="text-center">
                {countdown > 0 ? (
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>ارسال مجدد کد در {countdown} ثانیه</span>
                  </div>
                ) : (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleResendOtp}
                    disabled={isResending}
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                  >
                    {isResending ? 'در حال ارسال...' : 'ارسال مجدد کد'}
                  </Button>
                )}
              </div>

              <div className="text-center">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setStep('phone')}
                  className="text-gray-400 hover:text-gray-300"
                >
                  تغییر شماره موبایل
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">ورود با شماره موبایل</h2>
      
      <Form {...phoneForm}>
        <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-6">
          <FormField
            control={phoneForm.control}
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
                    ref={(e) => {
                      field.ref(e);
                      phoneInputRef.current = e;
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            disabled={phoneForm.formState.isSubmitting}
          >
            {phoneForm.formState.isSubmitting ? 'در حال ارسال...' : 'ارسال کد تایید'}
            <ArrowRight className="h-5 w-5 text-white" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginWithSms;