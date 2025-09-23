import React, { useState } from 'react';
import { useMap } from 'react-leaflet';
import { toast } from 'sonner';
import { Plus, Minus, MapPin } from 'lucide-react';

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
      toast.error('موقعیت جغرافیایی در این مرورگر پشتیبانی نمی‌شود');
      return;
    }

    setIsLocating(true);

    // Step 1: Fast attempt with low accuracy
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const location: [number, number] = [latitude, longitude];
        map.flyTo(location, 15, { duration: 2 });
        setIsLocating(false);
        toast.success('موقعیت شما با موفقیت پیدا شد');
      },
      (error) => {
        console.warn('Fast geolocation attempt failed:', error);
        
        // Step 2: Accurate attempt with high accuracy
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const location: [number, number] = [latitude, longitude];
            map.flyTo(location, 15, { duration: 2 });
            setIsLocating(false);
            toast.success('موقعیت دقیق شما پیدا شد');
          },
          (error) => {
            console.error('Accurate geolocation attempt failed:', error);
            setIsLocating(false);
            
            // User-friendly error messages based on error codes
            switch (error.code) {
              case error.PERMISSION_DENIED:
                toast.error('دسترسی به موقعیت جغرافیایی رد شد. لطفاً در تنظیمات مرورگر اجازه دسترسی را فعال کنید');
                break;
              case error.POSITION_UNAVAILABLE:
                toast.error('موقعیت جغرافیایی در دسترس نیست. لطفاً اتصال اینترنت خود را بررسی کنید');
                break;
              case error.TIMEOUT:
                toast.error('دریافت موقعیت جغرافیایی زمان زیادی طول کشید. لطفاً دوباره تلاش کنید');
                break;
              default:
                toast.error('خطا در دریافت موقعیت جغرافیایی. لطفاً دوباره تلاش کنید');
                break;
            }
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0,
          }
        );
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 300000,
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
        <Plus className="h-5 w-5 text-gray-700" />
      </button>

      {/* Zoom Out Button */}
      <button
        onClick={handleZoomOut}
        className="w-10 h-10 bg-white hover:bg-gray-100 border border-gray-300 rounded-lg shadow-lg flex items-center justify-center transition-colors duration-200"
        title="کوچکنمایی"
      >
        <Minus className="h-5 w-5 text-gray-700" />
      </button>

      {/* My Location Button */}
      <button
        onClick={handleMyLocation}
        disabled={isLocating}
        className="w-10 h-10 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 border border-blue-600 rounded-lg shadow-lg flex items-center justify-center transition-colors duration-200"
        title="موقعیت من"
      >
        <MapPin 
          className={`h-5 w-5 text-white ${isLocating ? 'animate-spin' : ''}`} 
        />
      </button>
    </div>
  );
};

export default MapControls;
