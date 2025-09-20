import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 
              className="text-3xl font-bold text-gray-900 cursor-pointer"
              onClick={() => navigate('/')}
            >
              یکتافی
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              خانه
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              املاک
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              درباره ما
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              تماس با ما
            </a>
          </nav>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              ورود / ثبت نام
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
