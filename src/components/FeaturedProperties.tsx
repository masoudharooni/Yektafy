import React from 'react';
import { FEATURED_PROPERTIES } from '../constants';
import PropertyCard from './PropertyCard';

const FeaturedProperties: React.FC = () => {
  return (
    <section className="bg-gray-800 py-20 overflow-hidden">
      <div className="container mx-auto max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">آگهی‌های ویژه</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            گلچینی از بهترین ملک‌های ثبت شده در یکتافی
          </p>
          <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-6 w-max px-4">
              {FEATURED_PROPERTIES.map((property) => (
                <div 
                  key={property.id} 
                  className="flex-shrink-0 w-80 md:w-96"
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-gray-800 to-transparent rounded-full flex items-center justify-center opacity-60 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-l from-gray-800 to-transparent rounded-full flex items-center justify-center opacity-60 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 font-semibold py-3 px-6 rounded-lg transition-all duration-300 backdrop-blur-sm">
            <span>مشاهده همه آگهی‌ها</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;