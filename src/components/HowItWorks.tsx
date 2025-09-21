import React from 'react';
import { motion } from 'framer-motion';
import { SearchNormal1, MessageText1, Home2 } from 'iconsax-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <SearchNormal1 size={48} className="text-cyan-400" />,
      title: 'جستجو کنید',
      description: 'با استفاده از نقشه هوشمند و فیلترهای پیشرفته، ملک مورد نظر خود را پیدا کنید'
    },
    {
      icon: <MessageText1 size={48} className="text-cyan-400" />,
      title: 'مشاوره بگیرید',
      description: 'با متخصصان ما تماس بگیرید و راهنمایی کاملی برای خرید یا اجاره دریافت کنید'
    },
    {
      icon: <Home2 size={48} className="text-cyan-400" />,
      title: 'ملک خود را بخرید',
      description: 'با اطمینان کامل و پشتیبانی تیم ما، ملک رویایی خود را خریداری کنید'
    }
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">چگونه کار می‌کند؟</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            فرآیند ساده و سریع ما برای پیدا کردن ملک مناسب شما
          </p>
          <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -start-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
