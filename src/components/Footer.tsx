import React from "react";
import { Link } from "react-router-dom";
import { toast } from 'sonner';
import { 
  Home2, 
  User, 
  InfoCircle, 
  Call, 
  Message, 
  Location,
  Instagram,
  Send2,
  UserSquare
} from 'iconsax-react';

const Footer: React.FC = () => {
  const handlePlaceholderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast.info('این بخش هنوز در دست توسعه است.');
  };

  const FooterLink: React.FC<{ children: React.ReactNode; href?: string; onClick?: () => void }> = ({
    children,
    href = "#",
    onClick
  }) => (
    <li>
      <a
        href={href}
        onClick={onClick || handlePlaceholderClick}
        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
      >
        <span className="w-1 h-1 bg-gray-400 group-hover:bg-cyan-400 rounded-full transition-colors duration-200"></span>
        {children}
      </a>
    </li>
  );

  const SocialIcon: React.FC<{ icon: React.ReactNode; href: string; label: string }> = ({ icon, href, label }) => (
    <a
      href={href}
      onClick={handlePlaceholderClick}
      className="w-10 h-10 bg-gray-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
      aria-label={label}
    >
      {icon}
    </a>
  );

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors duration-300">
                یکتافی
              </h3>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              پلتفرم هوشمند خرید، فروش و سرمایه‌گذاری ملکی. با یکتافی، خانه‌دار شدن رویا نیست.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <SocialIcon 
                icon={<Instagram size={20} className="text-current" />} 
                href="#" 
                label="اینستاگرام" 
              />
              <SocialIcon 
                icon={<Send2 size={20} className="text-current" />} 
                href="#" 
                label="تلگرام" 
              />
              <SocialIcon 
                icon={<UserSquare size={20} className="text-current" />} 
                href="#" 
                label="لینکدین" 
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Home2 size={20} className="text-cyan-400" />
              لینک‌های سریع
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/">
                <Home2 size={16} />
                صفحه اصلی
              </FooterLink>
              <FooterLink onClick={() => toast.info('داشبورد در دست توسعه است.')}>
                <User size={16} />
                داشبورد
              </FooterLink>
              <FooterLink>
                <InfoCircle size={16} />
                درباره ما
              </FooterLink>
              <FooterLink>
                <Home2 size={16} />
                خرید ملک
              </FooterLink>
              <FooterLink>
                <Home2 size={16} />
                فروش ملک
              </FooterLink>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <User size={20} className="text-cyan-400" />
              خدمات
            </h4>
            <ul className="space-y-3">
              <FooterLink>
                <Home2 size={16} />
                مشاوره رایگان
              </FooterLink>
              <FooterLink>
                <Home2 size={16} />
                ارزیابی ملک
              </FooterLink>
              <FooterLink>
                <Home2 size={16} />
                پروژه‌های سرمایه‌گذاری
              </FooterLink>
              <FooterLink>
                <Home2 size={16} />
                اجاره کوتاه مدت
              </FooterLink>
              <FooterLink>
                <Home2 size={16} />
                مدیریت ملک
              </FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Call size={20} className="text-cyan-400" />
              تماس با ما
            </h4>
            <ul className="space-y-3">
              <FooterLink>
                <Location size={16} />
                تهران، خیابان ولیعصر
              </FooterLink>
              <FooterLink>
                <Call size={16} />
                ۰۲۱-۱۲۳۴۵۶۷۸
              </FooterLink>
              <FooterLink>
                <Message size={16} />
                info@yektafy.com
              </FooterLink>
              <FooterLink>
                <Send2 size={16} />
                @yektafy_support
              </FooterLink>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} یکتافی. تمام حقوق محفوظ است.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="#" 
                onClick={handlePlaceholderClick}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                حریم خصوصی
              </a>
              <a 
                href="#" 
                onClick={handlePlaceholderClick}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                شرایط استفاده
              </a>
              <a 
                href="#" 
                onClick={handlePlaceholderClick}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                کوکی‌ها
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;