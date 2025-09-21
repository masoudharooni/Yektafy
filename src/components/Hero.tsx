import React from 'react';
import SearchBox from './SearchBox';
import MapComponent from './MapComponent';
import type { MapPosition } from '../types';

const Hero: React.FC = () => {
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
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <MapComponent
          center={tehranCenter}
          zoom={11}
          markers={sampleMarkers}
          className="h-full"
        />
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

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
            <div className="relative z-30">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 start-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse z-30"></div>
      <div className="absolute bottom-20 end-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse z-30" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 start-1/4 w-16 h-16 bg-cyan-300/30 rounded-full blur-lg animate-pulse z-30" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;