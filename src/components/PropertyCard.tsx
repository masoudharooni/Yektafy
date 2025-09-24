import { BadgeCheck } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface PropertyCardProps {
  id: string;
  title: string;
  rooms?: number;
  maxOccupancy?: number;
  price: number | string;
  location: string;
  image?: string;
  isPromoted?: boolean;
  category?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  type?: string;
  featured?: boolean;
  isVerified?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  rooms,
  maxOccupancy,
  price,
  location,
  image,
  isPromoted = false,
  bedrooms,
  bathrooms,
  isVerified = false,
}) => {
  const navigate = useNavigate();
  const formatPrice = (price: number | string): string => {
    if (typeof price === "string") {
      return price;
    }
    return price?.toLocaleString("fa-IR");
  };

  // Generate a default real estate image if no image is provided
  const getDefaultImage = () => {
    const realEstateImages = [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop",
    ];
    return realEstateImages[
      Math.floor(Math.random() * realEstateImages.length)
    ];
  };

  const handleCardClick = () => {
    navigate(`/listings/details/${id}`);
  };

  return (
    <div 
      className="bg-gray-800 border relative border-gray-700 hover:bg-gray-750 hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden group rounded-lg"
      onClick={handleCardClick}
    >
      <div className="w-full h-32 overflow-hidden">
        <img
          src={image || getDefaultImage()}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = getDefaultImage();
          }}
        />
      </div>

      <div className="p-3">
        <h3 className="text-white font-medium text-sm mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="text-gray-300 text-xs mb-2">
          {rooms && maxOccupancy
            ? `${rooms} اتاق تا ${maxOccupancy} نفر`
            : bedrooms && bathrooms
              ? `${bedrooms} خوابه، ${bathrooms} حمام`
              : "اطلاعات کامل موجود نیست"}
        </div>

        <div className="text-white font-bold text-sm mb-2">
          {formatPrice(price)} تومان
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">{location}</span>
          <div className="flex gap-1">
            {isVerified && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="absolute top-2 right-2 z-10">
                      <div className="relative group">
                        <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 border-2 border-white/20 backdrop-blur-sm">
                          <BadgeCheck className="w-4 h-4 text-white" />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 w-7 h-7 bg-blue-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="bg-gray-900 border-gray-700 text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">مورد تایید یکتافی</span>
                    </div>
                    <p className="text-xs text-gray-300 mt-1">این آگهی توسط تیم ما بررسی شده است</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {isPromoted && (
              <span className="text-red-500 text-xs font-medium bg-red-500/10 px-2 py-1 rounded-md">
                نردبان شده
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
