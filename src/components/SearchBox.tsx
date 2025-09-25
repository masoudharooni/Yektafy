import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Search, MapPin, Map, X } from "lucide-react";
import { Button } from "./ui/Button";
import { Command, CommandList, CommandItem } from "./ui/command";
import { ModalComponent } from "./custom";
import MapComponent from "./MapComponent";
import type { MapPosition } from "../types";
import { useDebounce } from "../hooks/useDebounce";
import {
  searchLocations,
  type Location as LocationData,
} from "../data/locations";

interface SearchBoxProps {
  onClose?: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<LocationData[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(
    null
  );
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebounce(searchQuery, 300);

  // Isfahan coordinates for map modal
  const isfahanCenter: MapPosition = [32.6539, 51.666];

  const sampleMarkers = [
    {
      position: [32.6539, 51.666] as MapPosition,
      title: "اصفهان - مرکز شهر",
      description: "آپارتمان‌های لوکس در مرکز اصفهان",
      type: "sale" as const,
    },
    {
      position: [32.6639, 51.676] as MapPosition,
      title: "شیخ‌بهایی",
      description: "ویلاها و آپارتمان‌های مدرن",
      type: "rent" as const,
    },
    {
      position: [32.6439, 51.656] as MapPosition,
      title: "چهارباغ",
      description: "آپارتمان‌های مناسب قیمت",
      type: "sale" as const,
    },
  ];

  // Search logic
  useEffect(() => {
    if (debouncedQuery.length > 1) {
      const results = searchLocations(debouncedQuery);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [debouncedQuery]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocationSelect = (location: LocationData) => {
    setSelectedLocation(location);
    setSearchQuery(location.name);
    setShowResults(false);
    toast.success(`موقعیت انتخاب شده: ${location.name}`);
  };

  const handleSearchClick = () => {
    if (selectedLocation) {
      toast.success(`جستجو در ${selectedLocation.name} انجام شد.`);
    } else {
      toast.info("این بخش هنوز در دست توسعه است.");
    }
  };

  const TabButton: React.FC<{ tab: "buy" | "rent"; label: string }> = ({
    tab,
    label,
  }) => (
    <Button
      variant="ghost"
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 rounded-t-lg ${
        activeTab === tab
          ? "bg-gray-700/60 text-cyan-400"
          : "bg-transparent text-gray-400 hover:bg-gray-700/40"
      }`}
    >
      {label}
    </Button>
  );

  const tabContent = {
    buy: (
      <motion.div
        key="buy"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="relative col-span-1 md:col-span-2" ref={searchRef}>
          <input
            type="text"
            placeholder="شهر، منطقه یا محله مورد نظر را وارد کنید..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.length > 1 && setShowResults(true)}
            className="w-full bg-gray-800/50 border border-gray-600 rounded-lg py-3 px-4 ps-12 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none"
          />
          <MapPin className="h-6 w-6 text-gray-400 absolute end-4 top-1/2 -translate-y-1/2" />

          {/* Live Search Results - Floating */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-card border rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
              <Command className="bg-transparent">
                <CommandList>
                  {searchResults.map((location) => (
                    <CommandItem
                      key={location.id}
                      onSelect={() => handleLocationSelect(location)}
                      className="flex items-center gap-4 px-4 py-4 hover:bg-gray-800/50 cursor-pointer transition-all duration-200"
                    >
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Map size={20} color="#06b6d4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-100 font-semibold text-base truncate">
                          {location.name}
                        </div>
                        <div className="text-gray-400 text-sm truncate mt-1">
                          {location.district}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1.5 rounded-full border border-gray-700">
                        {location.type === "city"
                          ? "شهر"
                          : location.type === "district"
                          ? "منطقه"
                          : "محله"}
                      </span>
                    </CommandItem>
                  ))}
                </CommandList>
              </Command>
            </div>
          )}
        </div>
        <div className="flex gap-2 col-span-1">
          <Button
            onClick={handleSearchClick}
            className="flex-1 bg-cyan-500 h-full hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Search className="h-5 w-5 text-white" />
            <span>جستجو</span>
          </Button>
          <Button
            onClick={() => setIsMapModalOpen(true)}
            variant="outline"
            className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-3 h-full"
          >
            <MapPin className="h-5 w-5 text-gray-300" />
          </Button>
        </div>
      </motion.div>
    ),
    rent: (
      <motion.div
        key="rent"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="relative col-span-1 md:col-span-2" ref={searchRef}>
          <input
            type="text"
            placeholder="محله مورد نظر برای اجاره را وارد کنید..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.length > 1 && setShowResults(true)}
            className="w-full bg-gray-800/50 border border-gray-600 rounded-lg py-3 px-4 ps-12 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none"
          />
          <MapPin className="h-6 w-6 text-gray-400 absolute end-4 top-1/2 -translate-y-1/2" />

          {/* Live Search Results - Floating */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-card border rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
              <Command className="bg-transparent">
                <CommandList>
                  {searchResults.map((location) => (
                    <CommandItem
                      key={location.id}
                      onSelect={() => handleLocationSelect(location)}
                      className="flex items-center gap-4 px-4 py-4 hover:bg-gray-800/50 cursor-pointer transition-all duration-200"
                    >
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Map size={20} color="#06b6d4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-100 font-semibold text-base truncate">
                          {location.name}
                        </div>
                        <div className="text-gray-400 text-sm truncate mt-1">
                          {location.district}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1.5 rounded-full border border-gray-700">
                        {location.type === "city"
                          ? "شهر"
                          : location.type === "district"
                          ? "منطقه"
                          : "محله"}
                      </span>
                    </CommandItem>
                  ))}
                </CommandList>
              </Command>
            </div>
          )}
        </div>
        <div className="flex gap-2 col-span-1">
          <Button
            onClick={handleSearchClick}
            className="flex-1 bg-cyan-500 h-full hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Search className="h-5 w-5 text-white" />
            <span>جستجو</span>
          </Button>
          <Button
            onClick={() => setIsMapModalOpen(true)}
            variant="outline"
            className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-3 h-full"
          >
            <MapPin className="h-5 w-5 text-gray-300" />
          </Button>
        </div>
      </motion.div>
    ),
  };

  return (
    <>
      <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden relative">
        {/* Close button */}
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-0 end-3 z-50 bg-gray-800/90 hover:bg-gray-700/90 text-white rounded-full shadow-lg border border-gray-600 transition-all duration-200 hover:scale-110"
            aria-label="بستن جستجو"
          >
            <X size={14} className="h-4 w-4" />
          </Button>
        )}
        
        <div className="flex">
          <TabButton tab="buy" label="خرید" />
          <TabButton tab="rent" label="رهن و اجاره" />
        </div>
        <div className="p-6 md:p-8 bg-gray-700/60">
          <AnimatePresence mode="wait">{tabContent[activeTab]}</AnimatePresence>
        </div>
      </div>

      {/* Map Modal */}
      <ModalComponent
        open={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        header="نقشه اصفهان - انتخاب موقعیت"
        maxWidth="4xl"
      >
        <div className="space-y-6">
          {/* Map Container */}
          <div className="relative w-full h-[60vh] rounded-lg overflow-hidden border border-gray-700">
            <MapComponent
              center={isfahanCenter}
              zoom={11}
              markers={sampleMarkers}
              className="w-full h-full"
            />
          </div>

          {/* Instructions */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-white font-medium mb-2">
              راهنمای استفاده از نقشه
            </h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• روی نقشه کلیک کنید تا موقعیت مورد نظر را انتخاب کنید</li>
              <li>
                • از دکمه‌های + و - برای بزرگ‌نمایی و کوچک‌نمایی استفاده کنید
              </li>
              <li>• نقاط آبی نشان‌دهنده مناطق محبوب هستند</li>
              <li>• پس از انتخاب موقعیت، روی دکمه "تأیید" کلیک کنید</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end">
            <Button
              onClick={() => setIsMapModalOpen(false)}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              لغو
            </Button>
            <Button
              onClick={() => {
                setIsMapModalOpen(false);
                toast.success("موقعیت از نقشه انتخاب شد");
              }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
            >
              تأیید موقعیت
            </Button>
          </div>
        </div>
      </ModalComponent>
    </>
  );
};

export default SearchBox;
