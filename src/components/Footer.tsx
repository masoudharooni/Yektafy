import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">یکتافی</h3>
            <p className="text-gray-400">
              پلتفرم هوشمند املاک برای پیدا کردن خانه رویایی‌تان
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">لینک‌های مفید</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">درباره ما</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">تماس با ما</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">قوانین و مقررات</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">خدمات</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">خرید ملک</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">فروش ملک</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">اجاره ملک</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">تماس با ما</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">تلفن: 021-12345678</li>
              <li className="text-gray-400">ایمیل: info@yektafy.com</li>
              <li className="text-gray-400">آدرس: تهران، ایران</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © ۱۴۰۳ یکتافی. تمام حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
