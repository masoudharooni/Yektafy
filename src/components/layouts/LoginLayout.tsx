import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Shield, Profile2User, SearchNormal1, Building } from 'iconsax-react';

const LoginLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'password' | 'sms'>(
    location.pathname.includes('password') ? 'password' : 'sms'
  );

  const handleTabChange = (tab: 'password' | 'sms') => {
    setActiveTab(tab);
    navigate(`/login/${tab}`);
  };

  const TabButton: React.FC<{ tab: 'password' | 'sms'; label: string }> = ({ tab, label }) => (
    <button
      type="button"
      onClick={() => handleTabChange(tab)}
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('https://picsum.photos/seed/yektafy-bg/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="bg-black/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden md:flex">
          {/* Left Column - Enhanced Branding Panel */}
          <div 
            className="hidden md:flex md:w-1/2 relative overflow-hidden"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            
            {/* Gradient overlay for better visual appeal */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center">
              {/* Company Logo */}
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl">
                  <Building size={48} color="#ffffff" />
                </div>
                <h1 className="text-6xl font-bold text-white mb-4 tracking-wider">یکتافی</h1>
                <p className="text-2xl text-gray-200 mb-6 font-medium">پلتفرم هوشمند املاک</p>
                <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-lg"></div>
              </div>
              
              {/* Value Propositions */}
              <div className="space-y-6 w-full max-w-md">
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield size={24} color="#06b6d4" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-semibold text-white">املاک تایید شده</h3>
                    <p className="text-sm text-gray-300">تمام املاک با کیفیت و اصالت تضمین می‌شوند</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Profile2User size={24} color="#3b82f6" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-semibold text-white">مشاوره تخصصی</h3>
                    <p className="text-sm text-gray-300">تیم متخصص ما در تمام مراحل همراه شماست</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <SearchNormal1 size={24} color="#10b981" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-semibold text-white">جستجوی هوشمند</h3>
                    <p className="text-sm text-gray-300">هزاران ملک متنوع با فیلترهای پیشرفته</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="w-full md:w-1/2 p-8">
            {/* Mobile Header */}
            <div className="md:hidden text-center mb-6">
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

            <div className="min-h-[220px]">
              <Outlet />
            </div>

            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm">یا</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            <button 
              onClick={() => {
                // This will be handled by individual login components
              }} 
              className="w-full flex items-center justify-center bg-gray-700/20 hover:bg-gray-700/40 border border-gray-600 text-gray-200 font-semibold py-3 px-4 rounded-lg transition-all duration-300 gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible"/></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
              <span>ورود با حساب گوگل</span>
            </button>

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
    </div>
  );
};

export default LoginLayout;