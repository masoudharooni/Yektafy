import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MapContextType {
  isMapMode: boolean;
  setIsMapMode: (value: boolean) => void;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
};

interface MapProviderProps {
  children: ReactNode;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [isMapMode, setIsMapMode] = useState(false);

  return (
    <MapContext.Provider value={{ isMapMode, setIsMapMode }}>
      {children}
    </MapContext.Provider>
  );
};
