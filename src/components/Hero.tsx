import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import SearchBox from './SearchBox';
import MapComponent from './MapComponent';
import type { MapPosition } from '../types';
import { Button } from './ui/Button';
import { useMapContext } from '../contexts/MapContext';

const Hero: React.FC = () => {
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(true);
  const { setIsMapMode } = useMapContext();

  // Update map mode when SearchBox visibility changes
  useEffect(() => {
    setIsMapMode(!isSearchBoxVisible);
  }, [isSearchBoxVisible, setIsMapMode]);
  
  // Isfahan coordinates as default
  const isfahanCenter: MapPosition = [32.6539, 51.6660];
  
  const sampleMarkers = [
    {
      position: [32.6539, 51.6660] as MapPosition,
      title: 'اصفهان - مرکز شهر',
      description: 'آپارتمان‌های لوکس در مرکز اصفهان',
      type: 'sale' as const
    },
    {
      position: [32.6639, 51.6760] as MapPosition,
      title: 'شیخ‌بهایی',
      description: 'ویلاها و آپارتمان‌های مدرن',
      type: 'rent' as const
    },
    {
      position: [32.6439, 51.6560] as MapPosition,
      title: 'چهارباغ',
      description: 'آپارتمان‌های مناسب قیمت',
      type: 'sale' as const
    },
    {
      position: [32.6739, 51.6860] as MapPosition,
      title: 'جلفا',
      description: 'آپارتمان‌های اجاره‌ای در جلفا',
      type: 'rent' as const
    },
    {
      position: [32.6339, 51.6460] as MapPosition,
      title: 'کوی امام',
      description: 'ویلاهای فروشی در کوی امام',
      type: 'sale' as const
    }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <MapComponent
          center={isfahanCenter}
          zoom={11}
          markers={sampleMarkers}
          className="h-full"
        />
      </div>

      {/* Semi-transparent overlay with animation - only when SearchBox is visible */}
      <AnimatePresence>
        {isSearchBoxVisible && (
          <motion.div 
            className="absolute inset-0 bg-black/80 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Content - only when SearchBox is visible */}
      <AnimatePresence>
        {isSearchBoxVisible && (
          <motion.div 
            className="relative z-20 min-h-screen flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Top section with text and search */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
                    با یکتافی، خانه‌دار شدن رویا نیست
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto drop-shadow-md leading-relaxed">
                    ما شریک شما نیستیم؛ ما <span className="font-semibold text-cyan-300">همراه و مشاور</span> شما در مسیر خانه‌دار شدن هستیم.
                  </p>
                </motion.div>
                
                {/* Search Box */}
                <div className="relative z-30">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <SearchBox onClose={() => setIsSearchBoxVisible(false)} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Show search button when hidden */}
      <AnimatePresence>
        {!isSearchBoxVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-20 end-6 z-[60]"
          >
            <Button
              onClick={() => setIsSearchBoxVisible(true)}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-2 rounded-lg shadow-lg border border-emerald-400/50 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
              size="sm"
            >
              <Search className="h-4 w-4 me-2" />
              <span className="text-sm font-medium">جستجو</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating elements for visual appeal - only when SearchBox is visible */}
      <AnimatePresence>
        {isSearchBoxVisible && (
          <>
            <motion.div 
              className="absolute top-20 start-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-20 end-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse z-30" 
              style={{animationDelay: '1s'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <motion.div 
              className="absolute top-1/2 start-1/4 w-16 h-16 bg-cyan-300/30 rounded-full blur-lg animate-pulse z-30" 
              style={{animationDelay: '2s'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;