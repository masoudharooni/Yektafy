import React from "react";
import { Location, Home, TickCircle, Eye, Ruler } from "iconsax-react";
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
    area,
    type,
    isVerified,
  } = property;
  const imageSrc = imageUrl || image;

  // Helper function to get property type in Persian
  const getPropertyType = (type: string) => {
    switch (type) {
      case "sale":
        return "فروش";
      case "rent":
        return "اجاره";
      default:
        return type;
    }
  };

  // Helper function to get property category based on bedrooms
  const getPropertyCategory = (bedrooms: number) => {
    if (bedrooms === 1) return "استودیو";
    if (bedrooms === 2) return "آپارتمان";
    if (bedrooms === 3) return "آپارتمان";
    if (bedrooms >= 4) return "ویلا";
    return "آپارتمان";
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-visible shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col group">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Property Type Badge */}
        <div className="absolute top-3 start-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
          {getPropertyType(type)}
        </div>

        {/* Verified Badge */}
        {isVerified && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-3 end-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors duration-200">
                  <TickCircle size={16} color="#ffffff" variant="Bold" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="z-50">
                <p>این آگهی توسط تیم یکتافی احراز هویت شده است.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Property Title */}
        <h3 className="text-lg font-semibold text-gray-100 mb-3 line-clamp-2 leading-relaxed">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4 text-gray-400">
          <Location size={16} color="#9ca3af" />
          <span className="text-sm truncate">{location}</span>
        </div>

        {/* Property Information - New Structure */}
        <div className="space-y-3 mb-6 flex-grow">
          {/* Line 1: Price */}
          <div className="text-xl font-bold text-cyan-400">{price} تومانء</div>

          {/* Line 2: Specs (Bedrooms + Property Type) */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Home size={16} color="#9ca3af" />
            <span>{bedrooms} خوابه</span>
            <span className="text-gray-500">•</span>
            <span>{getPropertyCategory(bedrooms)}</span>
          </div>

          {/* Line 3: Area */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Ruler size={16} color="#9ca3af" />
            <span>{area} متر مربع</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-gray-700/50">
          <Button
            variant="secondary"
            size="sm"
            className="w-full bg-gray-800/50 hover:bg-gray-700 text-gray-200 hover:text-white border border-gray-600 hover:border-gray-500 flex items-center justify-center gap-2 transition-all duration-200 group/btn"
          >
            <Eye size={16} color="#9ca3af" />
            <span>مشاهده جزئیات</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
