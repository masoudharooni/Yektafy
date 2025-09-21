import React, { useState } from 'react';
import { useMap } from 'react-leaflet';
import { Add, Minus, Location } from 'iconsax-react';

const MapControls: React.FC = () => {
  const map = useMap();
  const [isLocating, setIsLocating] = useState(false);

  const handleZoomIn = () => {
    map.zoomIn();
  };

  const handleZoomOut = () => {
    map.zoomOut();
  };

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      alert('موقعیت جغرافیایی در این مرورگر پشتیبانی نمی‌شود');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const location: [number, number] = [latitude, longitude];
        map.flyTo(location, 15, { duration: 2 });
        setIsLocating(false);
      },
      (error) => {
        console.error('خطا در دریافت موقعیت:', error);
        setIsLocating(false);
        alert('خطا در دریافت موقعیت جغرافیایی');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  return (
    <div className="absolute bottom-4 right-4 z-[1000] flex flex-col gap-2">
      {/* Zoom In Button */}
      <button
        onClick={handleZoomIn}
        className="w-10 h-10 bg-white hover:bg-gray-100 border border-gray-300 rounded-lg shadow-lg flex items-center justify-center transition-colors duration-200"
        title="بزرگنمایی"
      >
        <Add size={20} className="text-gray-700" />
      </button>

      {/* Zoom Out Button */}
      <button
        onClick={handleZoomOut}
        className="w-10 h-10 bg-white hover:bg-gray-100 border border-gray-300 rounded-lg shadow-lg flex items-center justify-center transition-colors duration-200"
        title="کوچکنمایی"
      >
        <Minus size={20} className="text-gray-700" />
      </button>

      {/* My Location Button */}
      <button
        onClick={handleMyLocation}
        disabled={isLocating}
        className="w-10 h-10 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 border border-blue-600 rounded-lg shadow-lg flex items-center justify-center transition-colors duration-200"
        title="موقعیت من"
      >
        <Location 
          size={20} 
          className={`text-white ${isLocating ? 'animate-spin' : ''}`} 
        />
      </button>
    </div>
  );
};

export default MapControls;
