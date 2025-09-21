import React from 'react';
import { WHY_US_ITEMS } from '../constants';
import { SearchNormal1, Card, People, TrendUp } from 'iconsax-react';

const ICONS: { [key: string]: React.ReactNode } = {
  Search: <SearchNormal1 size={40} color="#06b6d4" />,
  CreditCard: <Card size={40} color="#06b6d4" />,
  Users: <People size={40} color="#06b6d4" />,
  TrendingUp: <TrendUp size={40} color="#06b6d4" />
};

const WhyUs: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">چرا یکتافی؟</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            خدمات متمایز ما برای تجربه‌ای بی‌نظیر در معاملات ملکی
          </p>
          <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_ITEMS.map((item) => (
            <div key={item.title} className="bg-gray-800 border border-gray-700 p-8 rounded-xl text-center hover:border-cyan-500/50 hover:bg-gray-700 transition-all duration-300 group">
              <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 bg-gray-900 rounded-full group-hover:bg-gray-800 transition-colors duration-300">
                {ICONS[item.icon]}
              </div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;