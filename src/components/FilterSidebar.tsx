import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Button } from './ui/Button';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import MapSearchModal from './MapSearchModal';

interface FilterSidebarProps {
  onCategoryChange: (category: string) => void;
  onNeighborhoodChange: (neighborhoods: string[]) => void;
  onMinPriceChange: (minPrice: number | null) => void;
  onMaxPriceChange: (maxPrice: number | null) => void;
  onStatusChange: (hasImage: boolean | null) => void;
  selectedCategory: string;
  selectedNeighborhoods: string[];
  selectedMinPrice: number | null;
  selectedMaxPrice: number | null;
  selectedStatus: boolean | null;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onCategoryChange,
  onNeighborhoodChange,
  onMinPriceChange,
  onMaxPriceChange,
  onStatusChange,
  selectedCategory,
  selectedNeighborhoods,
  selectedMinPrice,
  selectedMaxPrice,
  selectedStatus,
}) => {
  const [neighborhoodOpen, setNeighborhoodOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [mapModalOpen, setMapModalOpen] = useState(false);

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
              <label key={neighborhood} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedNeighborhoods.includes(neighborhood)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onNeighborhoodChange([...selectedNeighborhoods, neighborhood]);
                    } else {
                      onNeighborhoodChange(selectedNeighborhoods.filter(n => n !== neighborhood));
                    }
                  }}
                  className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-gray-300 text-sm">{neighborhood}</span>
              </label>
            ))}
          </div>
          {selectedNeighborhoods.length > 0 && (
            <div className="mt-2 pt-2 border-t border-gray-600">
              <button
                onClick={() => onNeighborhoodChange([])}
                className="text-xs text-cyan-400 hover:text-cyan-300"
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
      <Collapsible open={statusOpen} onOpenChange={setStatusOpen}>
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

      {/* Map Search Modal */}
      <MapSearchModal
        open={mapModalOpen}
        onClose={() => setMapModalOpen(false)}
        onLocationSelect={(location) => {
          if (!selectedNeighborhoods.includes(location)) {
            onNeighborhoodChange([...selectedNeighborhoods, location]);
          }
          setMapModalOpen(false);
        }}
      />
    </div>
  );
};

export default FilterSidebar;
