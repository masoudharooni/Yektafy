import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Button } from './ui/Button';
import { ChevronDown, ChevronUp, MapPin, Search } from 'lucide-react';
import ModalComponent from './custom/ModalComponent';
import MapComponent from './MapComponent';
import type { MapPosition } from '../types';

interface FilterSidebarProps {
  onCategoryChange: (category: string) => void;
  onNeighborhoodChange: (neighborhoods: string[]) => void;
  onMinPriceChange: (minPrice: number | null) => void;
  onMaxPriceChange: (maxPrice: number | null) => void;
  onStatusChange: (hasImage: boolean | null) => void;
  onVerifiedChange: (isVerified: boolean | null) => void;
  selectedCategory: string;
  selectedNeighborhoods: string[];
  selectedMinPrice: number | null;
  selectedMaxPrice: number | null;
  selectedStatus: boolean | null;
  selectedVerified: boolean | null;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onCategoryChange,
  onNeighborhoodChange,
  onMinPriceChange,
  onMaxPriceChange,
  onStatusChange, 
  onVerifiedChange,
  selectedCategory,
  selectedNeighborhoods,
  selectedMinPrice,
  selectedMaxPrice,
  selectedStatus,
  selectedVerified,
}) => {
  const [neighborhoodOpen, setNeighborhoodOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [verifiedOpen, setVerifiedOpen] = useState(false);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  // Default center for Isfahan
  const isfahanCenter: MapPosition = [32.6546, 51.668];

  const handleLocationSelect = () => {
    if (selectedLocation.trim()) {
      if (!selectedNeighborhoods.includes(selectedLocation)) {
        onNeighborhoodChange([...selectedNeighborhoods, selectedLocation]);
      }
      setMapModalOpen(false);
      setSelectedLocation("");
    }
  };

  const categories = [
    'آپارتمان',
    'خانه',
    'خانه ویلایی',
    'ویلا',
    'زمین',
    'مغازه',
    'دفتر',
    'اتاق',
    'انبار',
    'کارگاه',
  ];

  const neighborhoods = [
    'ملاصدرا',
    'شهرک ولیعصر',
    'خواجو',
    'چهارباغ',
    'دانشگاه',
    'جلفا',
    'فردوسی',
    'منطقه صنعتی',
    'نقش جهان',
    'شمال شهر',
    'سی‌وسه‌پل',
    'بازار',
    'کوهپایه',
    'زرین‌شهر',
  ];

  const priceOptions = [
    { label: 'همه قیمت‌ها', value: null },
    { label: 'تا 500 هزار تومان', value: 500000 },
    { label: 'تا 1 میلیون تومان', value: 1000000 },
    { label: 'تا 2 میلیون تومان', value: 2000000 },
    { label: 'تا 5 میلیون تومان', value: 5000000 },
    { label: 'تا 10 میلیون تومان', value: 10000000 },
    { label: 'بالای 10 میلیون تومان', value: 20000000 },
  ];

  return (
    <div className="w-80 bg-gray-800 border border-gray-700 rounded-lg p-4 h-fit">
      <h2 className="text-white text-lg font-bold mb-4">دسته‌ها</h2>
      
      {/* Map Search Button */}
      <div className="mb-6">
        <Button 
          variant="outline" 
          className="w-full justify-start gap-2 bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
          onClick={() => setMapModalOpen(true)}
        >
          <MapPin size={16} />
          جستجو بر اساس نقشه
        </Button>
      </div>
      
      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-white text-sm font-medium mb-3">نوع ملک</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-right py-2 px-3 rounded-md text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Neighborhood Filter */}
      <Collapsible open={neighborhoodOpen} onOpenChange={setNeighborhoodOpen} className="mb-4">
        <CollapsibleTrigger className="flex items-center justify-between w-full text-white text-sm font-medium mb-2">
          محله
          {neighborhoodOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1">
          <div className="max-h-48 overflow-y-auto space-y-1">
            {neighborhoods.map((neighborhood) => (
              <button
                key={neighborhood}
                onClick={() => {
                  if (selectedNeighborhoods.includes(neighborhood)) {
                    onNeighborhoodChange(selectedNeighborhoods.filter(n => n !== neighborhood));
                  } else {
                    onNeighborhoodChange([...selectedNeighborhoods, neighborhood]);
                  }
                }}
                className={`w-full text-right py-2 px-3 rounded-md text-sm transition-all duration-200 flex items-center justify-between ${
                  selectedNeighborhoods.includes(neighborhood)
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span>{neighborhood}</span>
                {selectedNeighborhoods.includes(neighborhood) && (
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
          {selectedNeighborhoods.length > 0 && (
            <div className="mt-2 pt-2 border-t border-gray-600">
              <button
                onClick={() => onNeighborhoodChange([])}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                پاک کردن همه ({selectedNeighborhoods.length})
              </button>
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>

      {/* Price Filter */}
      <Collapsible open={priceOpen} onOpenChange={setPriceOpen} className="mb-4">
        <CollapsibleTrigger className="flex items-center justify-between w-full text-white text-sm font-medium mb-2">
          قیمت
          {priceOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">از قیمت</label>
            <select
              value={selectedMinPrice || ''}
              onChange={(e) => onMinPriceChange(e.target.value ? Number(e.target.value) : null)}
              className="w-full bg-gray-700 text-white text-sm p-2 rounded-md border border-gray-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            >
              {priceOptions.map((option) => (
                <option key={option.label} value={option.value || ''}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">تا قیمت</label>
            <select
              value={selectedMaxPrice || ''}
              onChange={(e) => onMaxPriceChange(e.target.value ? Number(e.target.value) : null)}
              className="w-full bg-gray-700 text-white text-sm p-2 rounded-md border border-gray-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            >
              {priceOptions.map((option) => (
                <option key={option.label} value={option.value || ''}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </CollapsibleContent>
      </Collapsible>

          {/* Status Filter */}
          <Collapsible open={statusOpen} onOpenChange={setStatusOpen} className="mb-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-white text-sm font-medium mb-2">
              وضعیت آگهی
              {statusOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              <button
                onClick={() => onStatusChange(null)}
                className={`w-full text-right py-2 px-3 rounded-md text-sm transition-colors ${
                  selectedStatus === null
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                همه
              </button>
              <button
                onClick={() => onStatusChange(true)}
                className={`w-full text-right py-2 px-3 rounded-md text-sm transition-colors ${
                  selectedStatus === true
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                عکسدار
              </button>
              <button
                onClick={() => onStatusChange(false)}
                className={`w-full text-right py-2 px-3 rounded-md text-sm transition-colors ${
                  selectedStatus === false
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                بی‌عکس
              </button>
            </CollapsibleContent>
          </Collapsible>

          {/* Verified Filter */}
          <Collapsible open={verifiedOpen} onOpenChange={setVerifiedOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-white text-sm font-medium mb-2">
              تایید شده
              {verifiedOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              <button
                onClick={() => onVerifiedChange(null)}
                className={`w-full text-right py-2 px-3 rounded-md text-sm transition-colors ${
                  selectedVerified === null
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                همه
              </button>
              <button
                onClick={() => onVerifiedChange(true)}
                className={`w-full text-right py-2 px-3 rounded-md text-sm transition-colors ${
                  selectedVerified === true
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                تایید شده
              </button>
              <button
                onClick={() => onVerifiedChange(false)}
                className={`w-full text-right py-2 px-3 rounded-md text-sm transition-colors ${
                  selectedVerified === false
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                تایید نشده
              </button>
            </CollapsibleContent>
          </Collapsible>

      {/* Map Search Modal */}
      <ModalComponent
        open={mapModalOpen}
        onClose={() => {
          setMapModalOpen(false);
          setSelectedLocation("");
        }}
        header="جستجو بر اساس نقشه"
        maxWidth="lg"
      >
        <div className="space-y-6">
          {/* Instructions */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-white font-medium mb-2">راهنمای انتخاب محله</h3>
            <p className="text-gray-300 text-sm">
              روی نقشه کلیک کنید یا نام محله مورد نظر را در کادر زیر وارد کنید تا آن را به فیلترهای جستجو اضافه کنید.
            </p>
          </div>

          {/* Map Container */}
          <div className="relative w-full h-[50vh] rounded-lg overflow-hidden border border-gray-700">
            <MapComponent
              center={isfahanCenter}
              zoom={12}
              className="w-full h-full"
              showControls={true}
            />
          </div>

          {/* Location Input */}
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="نام محله یا منطقه را وارد کنید..."
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* Selected Neighborhoods */}
            {selectedNeighborhoods.length > 0 && (
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <h4 className="text-white font-medium mb-2">محله‌های انتخاب شده:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedNeighborhoods.map((neighborhood, index) => (
                    <span
                      key={index}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => {
                  setMapModalOpen(false);
                  setSelectedLocation("");
                }}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                لغو
              </Button>
              <Button
                onClick={handleLocationSelect}
                disabled={!selectedLocation.trim()}
                className="bg-cyan-500 hover:bg-cyan-600 text-white disabled:bg-gray-600 disabled:text-gray-400"
              >
                اضافه کردن به فیلتر
              </Button>
            </div>
          </div>
        </div>
      </ModalComponent>
    </div>
  );
};

export default FilterSidebar;
