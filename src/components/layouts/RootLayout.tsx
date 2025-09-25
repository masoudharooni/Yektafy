import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { MapProvider } from '../../contexts/MapContext';

const RootLayout: React.FC = () => {
  return (
    <MapProvider>
      <Outlet />
      {/* Global toast notifications */}
      <Toaster 
        position="top-center" 
        richColors 
        expand={false}
        toastOptions={{
          style: {
            background: '#1f2937',
            border: '1px solid #374151',
            color: '#f9fafb',
          },
        }}
      />
    </MapProvider>
  );
};

export default RootLayout;
