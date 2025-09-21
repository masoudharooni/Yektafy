import React from "react";
import { toast } from 'sonner';
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {

  const handlePlaceholderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast.info('این بخش هنوز در دست توسعه است.');
  };

  const FooterLink: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => (
    <li>
      <a
        href="#"
        onClick={handlePlaceholderClick}
        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );

  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-end">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-100">یکتافی</h3>
            <p className="text-gray-400 mt-4 max-w-md mx-auto md:ms-0 leading-relaxed">
              پلتفرم هوشمند خرید، فروش و سرمایه‌گذاری ملکی. با یکتافی، خانه‌دار
              شدن رویا نیست.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              لینک‌های سریع
            </h4>
            <ul className="space-y-2">
              <FooterLink>خرید ملک</FooterLink>
              <FooterLink>فروش ملک</FooterLink>
              <FooterLink>پروژه‌های سرمایه‌گذاری</FooterLink>
              <FooterLink>مشاوره رایگان</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              ما را دنبال کنید
            </h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                onClick={handlePlaceholderClick}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <MdFacebook size={24} />
              </a>
              <a
                href="#"
                onClick={handlePlaceholderClick}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                onClick={handlePlaceholderClick}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} یکتافی. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
