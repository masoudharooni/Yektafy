import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/Button";
import MapComponent from "./MapComponent";
import type { MapPosition } from "../types";

interface MapSearchModalProps {
  open: boolean;
  onClose: () => void;
  onLocationSelect: (location: string) => void;
}

const MapSearchModal: React.FC<MapSearchModalProps> = ({
  open,
  onClose,
  onLocationSelect,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleLocationSelect = () => {
    if (selectedLocation) {
      onLocationSelect(selectedLocation);
      onClose();
    }
  };

  // Default center for Isfahan
  const isfahanCenter: MapPosition = [32.6546, 51.668];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xs w-full h-[70vh] p-0 bg-gray-900 border-gray-700">
        <DialogHeader className="p-4 border-b border-gray-700">
          <DialogTitle className="text-lg font-bold text-white text-center">
            جستجو بر اساس نقشه
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col h-full">
          {/* Map Container */}
          <div className="flex-1 p-4">
            <div className="h-full rounded-lg overflow-hidden border border-gray-700">
              <MapComponent
                center={isfahanCenter}
                zoom={12}
                className="h-full"
                showControls={true}
              />
            </div>
          </div>

          {/* Input Section */}
          <div className="p-4 border-t border-gray-700">
            <div className="space-y-3">
              <input
                type="text"
                placeholder="نام محله یا منطقه را وارد کنید..."
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm"
              />
              <div className="flex gap-2">
                <Button
                  onClick={handleLocationSelect}
                  disabled={!selectedLocation.trim()}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white disabled:bg-gray-600 disabled:text-gray-400 text-sm py-2"
                >
                  انتخاب
                </Button>
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white text-sm py-2"
                >
                  لغو
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapSearchModal;
