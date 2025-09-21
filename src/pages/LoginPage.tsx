import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { useShowToast } from '../contexts/ToastContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login } = useAppContext();
  const showToast = useShowToast();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'password' | 'sms'>('password');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (activeTab === 'password') {
      const success = login(username, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('نام کاربری یا رمز عبور اشتباه است.');
      }
    } else {
      // SMS login logic would go here
      showToast('ورود با پیامک در حال حاضر فعال نیست.');
    }
  };

  const handlePlaceholderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast('این بخش هنوز توسعه داده نشده است.');
  };

  const TabButton: React.FC<{ tab: 'password' | 'sms'; label: string }> = ({ tab, label }) => (
    <button
      type="button"
      onClick={() => {
        setError('');
        setActiveTab(tab);
      }}
      className={`w-1/2 pb-3 font-semibold text-center transition-all duration-300 border-b-2 ${
        activeTab === tab
          ? 'text-cyan-400 border-cyan-400'
          : 'text-gray-400 border-gray-600 hover:border-gray-400'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('https://picsum.photos/seed/yektafy-bg/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="bg-black/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-6">
              <h1 
                className="text-4xl font-bold text-gray-100 tracking-wider cursor-pointer"
                onClick={() => navigate('/')}
              >
                یکتافی
              </h1>
              <p className="text-gray-400 mt-2">به پلتفرم هوشمند املاک خوش آمدید</p>
            </div>
            
            <div className="flex mb-6">
                <TabButton tab="password" label="ورود با رمز عبور" />
                <TabButton tab="sms" label="ورود با پیامک" />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 text-center p-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="min-h-[220px]">
              {activeTab === 'password' ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm" htmlFor="username">نام کاربری</label>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="مثال: admin"
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none"
                      required
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="block text-gray-300 text-sm" htmlFor="password">رمز عبور</label>
                        <a href="#" onClick={handlePlaceholderClick} className="text-xs text-cyan-500 hover:text-cyan-400 transition">فراموشی رمز عبور</a>
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="مثال: admin123"
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg py-3 px-4 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none"
                      required
                    />
                  </div>
                   <button 
                    type="submit"
                    className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    ورود به حساب کاربری
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                   <div>
                    <label className="block text-gray-300 mb-2 text-sm" htmlFor="phone">شماره موبایل</label>
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
                </div>
              )}
            </form>

            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm">یا</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            <button onClick={handlePlaceholderClick} className="w-full flex items-center justify-center bg-gray-700/20 hover:bg-gray-700/40 border border-gray-600 text-gray-200 font-semibold py-3 px-4 rounded-lg transition-all duration-300 gap-3">
                <svg className="w-5 h-5" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible"/></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
                <span>ورود با حساب گوگل</span>
            </button>
          </div>

          <div className="bg-black/20 py-4 text-center">
              <button 
                type="button"
                onClick={() => navigate('/')}
                className="text-gray-400 hover:text-cyan-500 text-sm transition"
              >
                &larr; بازگشت به صفحه اصلی
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;