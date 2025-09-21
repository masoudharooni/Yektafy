import React, { useState } from 'react';
import { toast } from 'sonner';

const LoginWithSms: React.FC = () => {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info('ورود با پیامک در حال حاضر فعال نیست.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-300 mb-2 text-sm" htmlFor="phone">
          شماره موبایل
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
          className="w-full bg-gray-800/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-start"
          dir="ltr"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
      >
        ارسال کد تایید
      </button>
    </form>
  );
};

export default LoginWithSms;
