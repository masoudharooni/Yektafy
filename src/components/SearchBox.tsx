import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { MdSearch, MdLocationOn } from 'react-icons/md';
import { Button } from './ui/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import MapComponent from './MapComponent';
import type { MapPosition } from '../types';

const SearchBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');

  // Tehran coordinates for map modal
  const tehranCenter: MapPosition = [35.6892, 51.3890];
  
  const sampleMarkers = [
    {
      position: [35.6892, 51.3890] as MapPosition,
      title: 'تهران - مرکز شهر',
      description: 'آپارتمان‌های لوکس در مرکز تهران'
    },
    {
      position: [35.7448, 51.3753] as MapPosition,
      title: 'شمال تهران',
      description: 'ویلاها و آپارتمان‌های مدرن'
    },
    {
      position: [35.7153, 51.4168] as MapPosition,
      title: 'غرب تهران',
      description: 'آپارتمان‌های مناسب قیمت'
    }
  ];

  const handleSearchClick = () => {
    toast.info('این بخش هنوز در دست توسعه است.');
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

  const tabContent = {
    buy: (
      <motion.div
        key="buy"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="relative col-span-1 md:col-span-2">
          <input
            type="text"
            placeholder="شهر، منطقه یا محله مورد نظر را وارد کنید..."
            className="w-full bg-gray-800/50 border border-gray-600 rounded-lg py-3 px-4 ps-12 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none"
          />
          <MdLocationOn size={24} className="absolute end-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex gap-2 col-span-1">
          <Button 
            onClick={handleSearchClick} 
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <MdSearch size={20} />
            <span>جستجو</span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[600px] bg-gray-900 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-white text-center">نقشه تهران - انتخاب موقعیت</DialogTitle>
              </DialogHeader>
              <div className="flex-1 rounded-lg overflow-hidden">
                <MapComponent
                  center={tehranCenter}
                  zoom={11}
                  markers={sampleMarkers}
                  className="h-full"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    ),
    rent: (
      <motion.div
        key="rent"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="relative col-span-1 md:col-span-2">
          <input
            type="text"
            placeholder="محله مورد نظر برای اجاره را وارد کنید..."
            className="w-full bg-gray-800/50 border border-gray-600 rounded-lg py-3 px-4 ps-12 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none"
          />
          <MdLocationOn size={24} className="absolute end-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex gap-2 col-span-1">
          <Button 
            onClick={handleSearchClick} 
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <MdSearch size={20} />
            <span>جستجو</span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[600px] bg-gray-900 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-white text-center">نقشه تهران - انتخاب موقعیت</DialogTitle>
              </DialogHeader>
              <div className="flex-1 rounded-lg overflow-hidden">
                <MapComponent
                  center={tehranCenter}
                  zoom={11}
                  markers={sampleMarkers}
                  className="h-full"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    )
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
      <div className="flex">
        <TabButton tab="buy" label="خرید" />
        <TabButton tab="rent" label="رهن و اجاره" />
      </div>
      <div className="p-6 md:p-8 bg-gray-700/60">
        <AnimatePresence mode="wait">
          {tabContent[activeTab]}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchBox;
