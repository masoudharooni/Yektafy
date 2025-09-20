import React from 'react';
import { FEATURED_PROPERTIES } from '../constants';
import PropertyCard from './PropertyCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const FeaturedProperties: React.FC = () => {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">آگهی‌های ویژه</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            گلچینی از بهترین ملک‌های ثبت شده در یکتافی
          </p>
          <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {FEATURED_PROPERTIES.map((property) => (
                <CarouselItem key={property.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <PropertyCard property={property} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -right-12" />
            <CarouselNext className="hidden md:flex -left-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;