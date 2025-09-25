import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import type { MapPosition, MapMarker } from '../types';
import MapControls from './MapControls';
import UserLocationMarker from './UserLocationMarker';

// Fix for default markers in react-leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom colored markers
const createColoredIcon = (color: string) => {
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 0C5.596 0 0 5.596 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.596 19.404 0 12.5 0z" fill="${color}" stroke="#fff" stroke-width="2"/>
        <circle cx="12.5" cy="12.5" r="6" fill="#fff"/>
      </svg>
    `)}`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
  });
};

const saleIcon = createColoredIcon('#3b82f6'); // Blue for sale
const rentIcon = createColoredIcon('#ef4444'); // Red for rent

interface MapComponentProps {
  center: MapPosition;
  zoom?: number;
  markers?: MapMarker[];
  className?: string;
  showControls?: boolean;
}

const MapComponent: React.FC<MapComponentProps> = ({
  center,
  zoom = 13,
  markers = [],
  className = "",
  showControls = true
}) => {
  const [userLocation] = useState<[number, number] | null>(null);

  return (
    <div className={`w-full h-full ${className}`}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker 
            key={index} 
            position={marker.position}
            icon={marker.type === 'sale' ? saleIcon : rentIcon}
          >
            <Popup>
              <div className="text-center min-w-[200px]">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${marker.type === 'sale' ? 'bg-blue-500' : 'bg-red-500'}`}></div>
                  <span className="text-xs font-medium text-gray-600">
                    {marker.type === 'sale' ? 'فروش' : 'اجاره'}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">{marker.title}</h3>
                {marker.description && (
                  <p className="text-xs text-gray-600 mt-1">{marker.description}</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
        
        {/* User Location Marker */}
        {userLocation && (
          <UserLocationMarker position={userLocation} />
        )}
        
        {/* Map Controls */}
        {showControls && <MapControls />}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
