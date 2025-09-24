import React from 'react';

interface PropertyCardProps {
  id: string;
  title: string;
  rooms: number;
  maxOccupancy: number;
  price: number;
  location: string;
  image?: string;
  isPromoted?: boolean;
  category?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  rooms,
  maxOccupancy,
  price,
  location,
  image,
  isPromoted = false,
}) => {
  const formatPrice = (price: number): string => {
    return price?.toLocaleString('fa-IR');
  };

  const DefaultIcon = () => (
    <div className="w-full h-32 bg-gray-700 flex items-center justify-center rounded-t-lg">
      <svg
        className="w-12 h-12 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    </div>
  );

  return (
    <div className="bg-gray-800 border border-gray-700 hover:bg-gray-750 hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden group rounded-lg">
      {image ? (
        <div className="w-full h-32 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      ) : (
        <DefaultIcon />
      )}
      
      <div className="p-3">
        <h3 className="text-white font-medium text-sm mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="text-gray-300 text-xs mb-2">
          {rooms} اتاق تا {maxOccupancy} نفر
        </div>
        
        <div className="text-white font-bold text-sm mb-2">
          {formatPrice(price)} تومان
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">
            {location}
          </span>
          {isPromoted && (
            <span className="text-red-500 text-xs font-medium bg-red-500/10 px-2 py-1 rounded-md">
              نردبان شده
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;