import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const LoginWithPassword: React.FC = () => {
  const { login } = useAppContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = login(username, password);
    if (success) {
      toast.success('ورود موفقیت‌آمیز بود!');
      navigate('/dashboard');
    } else {
      setError('نام کاربری یا رمز عبور اشتباه است.');
    }
  };

  const handlePlaceholderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info('این بخش هنوز در دست توسعه است.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-300 mb-2 text-sm" htmlFor="username">
          نام کاربری
        </label>
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
          <label className="block text-gray-300 text-sm" htmlFor="password">
            رمز عبور
          </label>
          <a 
            href="#" 
            onClick={handlePlaceholderClick} 
            className="text-xs text-cyan-500 hover:text-cyan-400 transition"
          >
            فراموشی رمز عبور
          </a>
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

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 text-center p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <button 
        type="submit"
        className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
      >
        ورود به حساب کاربری
      </button>
    </form>
  );
};

export default LoginWithPassword;
