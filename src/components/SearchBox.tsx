import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { SearchNormal1, Location, Map } from "iconsax-react";
import { Button } from "./ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Command, CommandList, CommandItem } from "./ui/command";
import MapComponent from "./MapComponent";
import type { MapPosition } from "../types";
import { useDebounce } from "../hooks/useDebounce";
import {
  searchLocations,
  type Location as LocationData,
} from "../data/locations";

const SearchBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<LocationData[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(
    null
  );
  const searchRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebounce(searchQuery, 300);

  // Isfahan coordinates for map modal
  const isfahanCenter: MapPosition = [32.6539, 51.666];

  const sampleMarkers = [
    {
      position: [32.6539, 51.666] as MapPosition,
      title: "اصفهان - مرکز شهر",
      description: "آپارتمان‌های لوکس در مرکز اصفهان",
    },
    {
      position: [32.6639, 51.676] as MapPosition,
      title: "شیخ‌بهایی",
      description: "ویلاها و آپارتمان‌های مدرن",
    },
    {
      position: [32.6439, 51.656] as MapPosition,
      title: "چهارباغ",
      description: "آپارتمان‌های مناسب قیمت",
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
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 rounded-t-lg ${activeTab === tab
          ? "bg-gray-700/60 text-cyan-400"
          : "bg-transparent text-gray-400 hover:bg-gray-700/40"
        }`}
    >
      {label}
    </button>
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
          <Location
            size={24}
            color="#9ca3af"
            className="absolute end-4 top-1/2 -translate-y-1/2"
          />

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
            <SearchNormal1 size={20} color="#ffffff" />
            <span>جستجو</span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-3 h-full"
              >
                <Location size={20} color="#d1d5db" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-full h-[80vh] max-h-[80vh] p-0 bg-gray-900 border-gray-700">
              <div className="relative w-full h-full">
                <MapComponent
                  center={isfahanCenter}
                  zoom={11}
                  markers={sampleMarkers}
                  className="w-full h-full"
                />
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
                  نقشه اصفهان - انتخاب موقعیت
                </div>
              </div>
            </DialogContent>
          </Dialog>
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
          <Location
            size={24}
            color="#9ca3af"
            className="absolute end-4 top-1/2 -translate-y-1/2"
          />

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
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <SearchNormal1 size={20} color="#ffffff" />
            <span>جستجو</span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-3"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-full h-[80vh] max-h-[80vh] p-0 bg-gray-900 border-gray-700">
              <div className="relative w-full h-full">
                <MapComponent
                  center={isfahanCenter}
                  zoom={11}
                  markers={sampleMarkers}
                  className="w-full h-full"
                />
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
                  نقشه اصفهان - انتخاب موقعیت
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    ),
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
      <div className="flex">
        <TabButton tab="buy" label="خرید" />
        <TabButton tab="rent" label="رهن و اجاره" />
      </div>
      <div className="p-6 md:p-8 bg-gray-700/60">
        <AnimatePresence mode="wait">{tabContent[activeTab]}</AnimatePresence>
      </div>
    </div>
  );
};

export default SearchBox;
