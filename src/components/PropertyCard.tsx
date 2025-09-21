import React from 'react';
import { MdFavorite, MdLocationOn, MdBed, MdBathroom, MdSquareFoot } from 'react-icons/md';
import type { Property } from '../types';
import { Button } from './ui/Button';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { title, image, imageUrl, price, location, bedrooms, bathrooms, area, type } = property;
  const imageSrc = imageUrl || image;

  const InfoChip: React.FC<{ icon: React.ReactNode; text: string | number }> = ({ icon, text }) => (
    <div className="flex items-center gap-2 bg-gray-700 rounded-full px-3 py-1 text-sm text-gray-300">
      {icon}
      <span>{text}</span>
    </div>
  );

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 start-2 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">
          {type === 'sale' ? 'فروش' : 'اجاره'}
        </div>
        <button className="absolute top-2 end-2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-900 transition-colors">
          <MdFavorite size={16} color="#06b6d4" />
        </button>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-100 mb-2 truncate">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex items-center">
          <MdLocationOn size={16} className="ms-1" />
          {location}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <InfoChip icon={<MdBed size={16} />} text={`${bedrooms} خواب`} />
          <InfoChip icon={<MdBathroom size={16} />} text={`${bathrooms} حمام`} />
          <InfoChip icon={<MdSquareFoot size={16} />} text={`${area} متر`} />
        </div>
        <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-cyan-400">{price} تومان</p>
            <Button variant="outline" size="sm" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-white">
              مشاهده جزئیات
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
