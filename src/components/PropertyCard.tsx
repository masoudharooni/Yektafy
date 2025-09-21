import React from "react";
import { Location, Home, Wifi, Ruler, TickCircle, Eye } from "iconsax-react";
import type { Property } from "../types";
import { Button } from "./ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    title,
    image,
    imageUrl,
    price,
    location,
    bedrooms,
    bathrooms,
    area,
    type,
    isVerified,
  } = property;
  const imageSrc = imageUrl || image;

  const InfoChip: React.FC<{
    icon: React.ReactNode;
    text: string | number;
  }> = ({ icon, text }) => (
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
          {type === "sale" ? "فروش" : "اجاره"}
        </div>
        {isVerified && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-2 end-2 p-2 bg-blue-600 rounded-full">
                  <TickCircle size={16} color="#ffffff" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>این آگهی احراز هویت شده و توسط تیم یکتافی تایید می‌شود.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-100 mb-2 truncate">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex items-center">
          <Location size={16} color="#9ca3af" className="ms-1" />
          {location}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <InfoChip
            icon={<Home size={16} color="#d1d5db" />}
            text={`${bedrooms} خواب`}
          />
          <InfoChip
            icon={<Wifi size={16} color="#d1d5db" />}
            text={`${bathrooms} حمام`}
          />
          <InfoChip
            icon={<Ruler size={16} color="#d1d5db" />}
            text={`${area} متر`}
          />
        </div>
        <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-cyan-400">{price} تومان</p>
            <Button
              variant="secondary"
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-gray-200 hover:text-white border-gray-600 hover:border-gray-500 flex items-center gap-2 transition-all duration-200"
            >
              <Eye size={16} color="#d1d5db" />
              مشاهده جزئیات
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
