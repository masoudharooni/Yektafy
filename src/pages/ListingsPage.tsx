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
  const [selectedVerified, setSelectedVerified] = useState<boolean | null>(null);

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

      // Verified filter
      if (selectedVerified !== null && property.isVerified !== selectedVerified) return false;

      return true;
    });
  }, [selectedCategory, selectedNeighborhoods, selectedMinPrice, selectedMaxPrice, selectedStatus, selectedVerified]);

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

  const handleVerifiedChange = (isVerified: boolean | null) => {
    setSelectedVerified(isVerified);
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
                  placeholder="جستجو در آگهی‌های املاک"
                  className="w-full bg-gray-700 text-white placeholder-gray-400 py-3 pr-12 pl-4 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>
              <select className="bg-gray-700 text-white py-3 px-4 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none">
                <option>همه دسته‌ها</option>
                <option>آپارتمان</option>
                <option>خانه</option>
                <option>خانه ویلایی</option>
                <option>ویلا</option>
                <option>زمین</option>
                <option>مغازه</option>
                <option>دفتر</option>
                <option>اتاق</option>
                <option>انبار</option>
                <option>کارگاه</option>
              </select>
            </div>
          </div>

          {/* Page Title */}
          <h1 className="text-2xl font-bold text-white mb-2">
            آگهی‌های املاک و مستغلات اصفهان
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
              onVerifiedChange={handleVerifiedChange}
              selectedCategory={selectedCategory}
              selectedNeighborhoods={selectedNeighborhoods}
              selectedMinPrice={selectedMinPrice}
              selectedMaxPrice={selectedMaxPrice}
              selectedStatus={selectedStatus}
              selectedVerified={selectedVerified}
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
                          isVerified={property.isVerified}
                        />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                      <svg 
                        className="w-12 h-12 text-gray-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      آگهی‌ای یافت نشد
                    </h3>
                    <p className="text-gray-400 text-lg max-w-md">
                      متأسفانه با فیلترهای انتخاب شده آگهی‌ای پیدا نشد. 
                      لطفاً فیلترها را تغییر دهید یا پاک کنید.
                    </p>
                  </div>

                  {/* Suggestions */}
                  <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full border border-gray-700">
                    <h4 className="text-white font-semibold mb-3 text-right">
                      پیشنهادات:
                    </h4>
                    <ul className="space-y-2 text-right text-gray-300 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        محدوده قیمت را گسترده‌تر کنید
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        محله‌های بیشتری انتخاب کنید
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        فیلتر "تایید شده" را بردارید
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        دسته‌بندی دیگری انتخاب کنید
                      </li>
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => {
                      setSelectedCategory('آپارتمان');
                      setSelectedNeighborhoods([]);
                      setSelectedMinPrice(null);
                      setSelectedMaxPrice(null);
                      setSelectedStatus(null);
                      setSelectedVerified(null);
                    }}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                  >
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    پاک کردن همه فیلترها
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingsPage;
