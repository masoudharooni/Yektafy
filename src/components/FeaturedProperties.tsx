import React from 'react';

const FeaturedProperties: React.FC = () => {
  const properties = [
    {
      id: 1,
      title: 'ویلا مدرن در شمال تهران',
      price: '15,000,000,000',
      location: 'شمال تهران',
      image: 'https://picsum.photos/400/300?random=1',
      bedrooms: 4,
      bathrooms: 3,
      area: '250'
    },
    {
      id: 2,
      title: 'آپارتمان لوکس در مرکز شهر',
      price: '8,500,000,000',
      location: 'مرکز تهران',
      image: 'https://picsum.photos/400/300?random=2',
      bedrooms: 3,
      bathrooms: 2,
      area: '180'
    },
    {
      id: 3,
      title: 'خانه ویلایی با باغ',
      price: '12,000,000,000',
      location: 'کرج',
      image: 'https://picsum.photos/400/300?random=3',
      bedrooms: 5,
      bathrooms: 4,
      area: '300'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            املاک ویژه
          </h2>
          <p className="text-gray-600">
            بهترین انتخاب‌های ما برای شما
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  {property.price} تومان
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{property.bedrooms} خواب</span>
                  <span>{property.bathrooms} حمام</span>
                  <span>{property.area} متر</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
