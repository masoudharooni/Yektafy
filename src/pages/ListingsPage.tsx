import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';
import FilterSidebar from '../components/FilterSidebar';
import { sampleProperties } from '../data/properties';
import { Button } from '../components/ui/Button';
import { Search, MapPin, Menu } from 'lucide-react';

const ListingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('آپارتمان');
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState<number | null>(null);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<boolean | null>(null);

  const filteredProperties = useMemo(() => {
    return sampleProperties.filter((property) => {
      // Category filter
      if (property.category !== selectedCategory) return false;

      // Neighborhood filter
      if (selectedNeighborhoods.length > 0 && !selectedNeighborhoods.includes(property.neighborhood)) return false;

      // Price range filter
      if (selectedMinPrice !== null && property.price < selectedMinPrice) return false;
      if (selectedMaxPrice !== null && property.price > selectedMaxPrice) return false;

      // Status filter
      if (selectedStatus !== null && property.hasImage !== selectedStatus) return false;

      return true;
    });
  }, [selectedCategory, selectedNeighborhoods, selectedMinPrice, selectedMaxPrice, selectedStatus]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleNeighborhoodChange = (neighborhoods: string[]) => {
    setSelectedNeighborhoods(neighborhoods);
  };

  const handleMinPriceChange = (minPrice: number | null) => {
    setSelectedMinPrice(minPrice);
  };

  const handleMaxPriceChange = (maxPrice: number | null) => {
    setSelectedMaxPrice(maxPrice);
  };

  const handleStatusChange = (hasImage: boolean | null) => {
    setSelectedStatus(hasImage);
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      {/* Main Header Section */}
      <div className="pt-20 pb-8 bg-gray-900">
        <div className="container mx-auto px-6">
          {/* Top Bar with Register Ad Button */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => navigate('/login?to=/dashboard/listings/add')}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg shadow-red-600/20 transition-all duration-300 transform hover:scale-105"
              >
                ثبت آگهی
              </Button>
              <button className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                پشتیبانی
              </button>
              <button className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                چت و تماس
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} />
                <span className="text-sm">اصفهان</span>
              </div>
              <button className="text-gray-300 hover:text-white transition-colors duration-200">
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="جستجو در همه آگهی‌ها"
                  className="w-full bg-gray-700 text-white placeholder-gray-400 py-3 pr-12 pl-4 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>
              <select className="bg-gray-700 text-white py-3 px-4 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none">
                <option>دسته‌ها</option>
                <option>املاک</option>
                <option>وسایل نقلیه</option>
                <option>کالای دیجیتال</option>
              </select>
            </div>
          </div>

          {/* Page Title */}
          <h1 className="text-2xl font-bold text-white mb-2">
            انواع آگهی‌ها و نیازمندی‌های اصفهان
          </h1>
          <p className="text-gray-400 text-sm">
            {filteredProperties.length} آگهی یافت شد
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-8">
        <div className="flex gap-6">
          {/* Filter Sidebar - Fixed */}
          <div className="flex-shrink-0 sticky top-4 h-fit">
            <FilterSidebar
              onCategoryChange={handleCategoryChange}
              onNeighborhoodChange={handleNeighborhoodChange}
              onMinPriceChange={handleMinPriceChange}
              onMaxPriceChange={handleMaxPriceChange}
              onStatusChange={handleStatusChange}
              selectedCategory={selectedCategory}
              selectedNeighborhoods={selectedNeighborhoods}
              selectedMinPrice={selectedMinPrice}
              selectedMaxPrice={selectedMaxPrice}
              selectedStatus={selectedStatus}
            />
          </div>

          {/* Properties Grid */}
          <div className="flex-1">
            {filteredProperties.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <PropertyCard
                      id={property.id}
                      title={property.title}
                      rooms={property.rooms}
                      maxOccupancy={property.maxOccupancy}
                      price={property.price}
                      location={property.location}
                      image={property.image}
                      isPromoted={property.isPromoted}
                      category={property.category}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-gray-400 text-lg mb-4">
                  آگهی‌ای با این فیلترها یافت نشد
                </div>
                <Button
                  onClick={() => {
                    setSelectedCategory('آپارتمان');
                    setSelectedNeighborhoods([]);
                    setSelectedMinPrice(null);
                    setSelectedMaxPrice(null);
                    setSelectedStatus(null);
                  }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  پاک کردن فیلترها
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingsPage;
