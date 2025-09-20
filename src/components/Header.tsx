import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import { useShowToast } from '../contexts/ToastContext';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Button } from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAppContext();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const showToast = useShowToast();

  const handlePlaceholderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast('این بخش هنوز توسعه داده نشده است.');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setIsDropdownOpen(false);
    logout();
    navigate('/');
  };

  const handleDashboardClick = () => {
    setIsDropdownOpen(false);
    navigate('/dashboard');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-700' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8 space-x-reverse">
             <h1 className="text-3xl font-bold text-gray-100 tracking-wider cursor-pointer" onClick={() => navigate('/')}>
              یکتافی
            </h1>
            <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handlePlaceholderClick}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 space-x-reverse text-gray-200 hover:text-cyan-400 transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  <span>{user.name}</span>
                  <MdKeyboardArrowDown 
                    size={16} 
                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1 z-50">
                    <button
                      onClick={handleDashboardClick}
                      className="w-full text-right block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                    >
                      داشبورد
                    </button>
                    <a href="#" onClick={handlePlaceholderClick} className="block w-full text-right px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200">
                      پروفایل
                    </a>
                    <div className="my-1 border-t border-gray-700"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-right block px-4 py-2 text-sm text-red-500 hover:bg-gray-700 hover:text-red-400 transition-colors duration-200"
                    >
                      خروج از سیستم
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button 
                onClick={() => navigate('/login')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
              >
                ورود / ثبت نام
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;