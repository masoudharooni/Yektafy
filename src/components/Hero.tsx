import React, { useState } from 'react';
import SearchBox from './SearchBox';
import MapComponent from './MapComponent';
import type { MapPosition } from '../types';

const Hero: React.FC = () => {
  const [showMap, setShowMap] = useState(false);
  
  // Tehran coordinates as default
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

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Top section with text and search */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
              با یکتافی، خانه‌دار شدن رویا نیست
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto drop-shadow-md leading-relaxed">
              ما شریک شما نیستیم؛ ما <span className="font-semibold text-cyan-300">همراه و مشاور</span> شما در مسیر خانه‌دار شدن هستیم.
            </p>
            
            {/* Search Box */}
            <div className="mb-8">
              <SearchBox />
            </div>

            {/* Map Toggle Button */}
            <button
              onClick={() => setShowMap(!showMap)}
              className="inline-flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 font-semibold py-3 px-6 rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {showMap ? 'مخفی کردن نقشه' : 'مشاهده نقشه تهران'}
            </button>
          </div>
        </div>

        {/* Map Section */}
        {showMap && (
          <div className="h-96 md:h-[500px] px-4 sm:px-6 lg:px-8 pb-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <MapComponent
                  center={tehranCenter}
                  zoom={11}
                  markers={sampleMarkers}
                  className="h-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 start-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 end-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 start-1/4 w-16 h-16 bg-cyan-300/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;