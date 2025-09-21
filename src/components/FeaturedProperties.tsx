import React, { useState, useCallback } from 'react';
import { FEATURED_PROPERTIES } from '../constants';
import PropertyCard from './PropertyCard';
import { Button } from './ui/Button';
import { ArrowRight2, ArrowLeft2 } from 'iconsax-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';

const FeaturedProperties: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);
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
        
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="-ms-2 md:-ms-4">
              {FEATURED_PROPERTIES.map((property) => (
                <CarouselItem key={property.id} className="ps-2 md:ps-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <PropertyCard property={property} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Custom Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft2 size={16} />
              قبلی
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              بعدی
              <ArrowRight2 size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;