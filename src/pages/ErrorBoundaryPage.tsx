import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { AlertTriangle } from 'lucide-react';

interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
  stack?: string;
}

const ErrorBoundaryPage: React.FC = () => {
  const error = useRouteError() as RouteError;
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Error Icon */}
        <div className="mb-6">
          <AlertTriangle 
            className="h-20 w-20 mx-auto text-red-400"
          />
        </div>
        
        {/* Main error message */}
        <h1 className="text-4xl font-bold text-gray-100 mb-4">
          متأسفانه یک خطای غیرمنتظره رخ داده است
        </h1>
        
        <p className="text-gray-400 mb-8 leading-relaxed">
          لطفاً صفحه را مجدداً بارگذاری کنید یا در صورت ادامه مشکل، با پشتیبانی تماس بگیرید.
        </p>

        {/* Development error details */}
        {isDevelopment && error && (
          <div className="mb-8 p-6 bg-red-900/20 border border-red-500/30 rounded-lg text-start">
            <h3 className="text-lg font-semibold text-red-400 mb-4">جزئیات خطا (Development):</h3>
            
            {error.status && (
              <div className="mb-2">
                <span className="text-gray-300 font-medium">Status:</span>
                <span className="text-red-400 ml-2">{error.status}</span>
              </div>
            )}
            
            {error.statusText && (
              <div className="mb-2">
                <span className="text-gray-300 font-medium">Status Text:</span>
                <span className="text-red-400 ml-2">{error.statusText}</span>
              </div>
            )}
            
            {error.message && (
              <div className="mb-4">
                <span className="text-gray-300 font-medium">Message:</span>
                <span className="text-red-400 ml-2">{error.message}</span>
              </div>
            )}
            
            {error.stack && (
              <div>
                <span className="text-gray-300 font-medium">Stack Trace:</span>
                <pre className="mt-2 p-4 bg-gray-900/50 border border-gray-700 rounded text-xs text-gray-300 overflow-x-auto">
                  {error.stack}
                </pre>
              </div>
            )}
          </div>
        )}
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.location.reload()}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
          >
            بارگذاری مجدد صفحه
          </Button>
          
          <Link to="/">
            <Button 
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              بازگشت به صفحه اصلی
            </Button>
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundaryPage;
