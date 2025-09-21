import React, { useState } from 'react';
import { useShowToast } from '../contexts/ToastContext';
import { MdSearch, MdLocationOn } from 'react-icons/md';
import { Button } from './ui/Button';

const SearchBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');
  const showToast = useShowToast();

  const handleSearchClick = () => {
    showToast('این بخش هنوز توسعه داده نشده است.');
  };

  const TabButton: React.FC<{ tab: 'buy' | 'rent'; label: string }> = ({ tab, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 rounded-t-lg ${
        activeTab === tab
          ? 'bg-gray-700/60 text-cyan-400'
          : 'bg-transparent text-gray-400 hover:bg-gray-700/40'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
      <div className="flex">
        <TabButton tab="buy" label="خرید" />
        <TabButton tab="rent" label="رهن و اجاره" />
      </div>
      <div className="p-6 md:p-8 bg-gray-700/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="شهر، منطقه یا محله مورد نظر را وارد کنید..."
              className="w-full bg-gray-800/50 border border-gray-600 rounded-lg py-3 px-4 ps-12 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none"
            />
            <MdLocationOn size={24} className="absolute end-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <Button 
            onClick={handleSearchClick} 
            className="w-full col-span-1 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <MdSearch size={24} />
            <span>جستجو</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
