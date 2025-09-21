import { z } from 'zod';

export const loginPasswordSchema = z.object({
  username: z.string()
    .min(1, 'نام کاربری الزامی است')
    .min(3, 'نام کاربری باید حداقل ۳ کاراکتر باشد'),
  password: z.string()
    .min(1, 'رمز عبور الزامی است')
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
});

export const loginSmsSchema = z.object({
  phone: z.string()
    .min(1, 'شماره موبایل الزامی است')
    .regex(/^09\d{9}$/, 'شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد'),
});

export const forgotPasswordSchema = z.object({
  email: z.string()
    .min(1, 'ایمیل الزامی است')
    .email('فرمت ایمیل صحیح نیست'),
});

export type LoginPasswordFormData = z.infer<typeof loginPasswordSchema>;
export type LoginSmsFormData = z.infer<typeof loginSmsSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
