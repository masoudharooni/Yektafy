import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { ArrowLeft } from 'lucide-react';
import PropertyCard from './PropertyCard';

interface PropertiesSectionProps {
  title: string;
  subtitle?: string;
  properties: any[];
  viewMoreLink: string;
  maxItems?: number;
}

const PropertiesSection: React.FC<PropertiesSectionProps> = ({
  title,
  subtitle,
  properties,
  viewMoreLink,
  maxItems = 15
}) => {
  // Display only the first maxItems properties
  const displayedProperties = properties.slice(0, maxItems);

  return (
    <section className="bg-gray-800 py-16 overflow-visible">
      <div className="container mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
              {subtitle}
            </p>
          )}
          <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedProperties.map((property) => (
            <PropertyCard 
              key={property.id}
              id={property.id}
              title={property.title}
              rooms={property.rooms}
              maxOccupancy={property.maxOccupancy}
              price={property.price}
              location={property.location}
              image={property.image}
              isPromoted={property.isPromoted}
              category={property.category}
              isVerified={property.isVerified}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link to={viewMoreLink}>
            <Button 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/50 text-cyan-300 font-semibold py-3 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20 group"
            >
              <span>مشاهده همه آگهی‌ها</span>
              <ArrowLeft 
                className="h-5 w-5 text-cyan-500 group-hover:translate-x-1 transition-transform duration-200"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
