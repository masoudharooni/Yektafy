import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

interface UserLocationMarkerProps {
  position: [number, number];
}

const UserLocationMarker: React.FC<UserLocationMarkerProps> = ({ position }) => {
  // Create custom icon with pulsating animation
  const createCustomIcon = () => {
    const iconHtml = `
      <div style="position: relative; width: 20px; height: 20px;">
        <div style="
          position: absolute;
          top: -10px;
          left: -10px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #3b82f6;
          opacity: 0.3;
          animation: pulse 2s infinite;
        "></div>
        <div style="
          position: absolute;
          top: -5px;
          left: -5px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #3b82f6;
          opacity: 0.5;
          animation: pulse 2s infinite;
          animation-delay: 0.5s;
        "></div>
        <div style="
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #2563eb;
          border: 2px solid white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        "></div>
      </div>
      <style>
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.2);
          }
        }
      </style>
    `;
    
    return L.divIcon({
      html: iconHtml,
      className: 'custom-user-location-marker',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  };

  return (
    <Marker position={position} icon={createCustomIcon()}>
      <Popup>
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-1">موقعیت شما</h3>
          <p className="text-sm text-gray-600">
            عرض: {position[0].toFixed(6)}<br />
            طول: {position[1].toFixed(6)}
          </p>
        </div>
      </Popup>
    </Marker>
  );
};

export default UserLocationMarker;
