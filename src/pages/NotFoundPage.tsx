import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { DocumentText1 } from 'iconsax-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Large 404 heading */}
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          404
        </h1>

        {/* Icon */}
        <div className="mb-6">
          <DocumentText1
            size={80}
            className="mx-auto text-gray-400"
            variant="Outline"
          />
        </div>

        {/* User-friendly message */}
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          صفحه‌ای که به دنبال آن بودید پیدا نشد
        </h2>

        <p className="text-gray-400 mb-8 leading-relaxed">
          متأسفانه صفحه‌ای که درخواست کرده‌اید وجود ندارد یا ممکن است منتقل شده باشد.
        </p>

        {/* Navigation button */}
        <Link to="/">
          <Button
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
          >
            بازگشت به صفحه اصلی
          </Button>
        </Link>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
