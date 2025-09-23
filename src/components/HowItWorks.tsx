import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquare, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-14 w-14 text-cyan-500" />,
      title: 'جستجو کنید',
      description: 'با استفاده از نقشه هوشمند و فیلترهای پیشرفته، ملک مورد نظر خود را پیدا کنید'
    },
    {
      icon: <MessageSquare className="h-14 w-14 text-cyan-500" />,
      title: 'مشاوره بگیرید',
      description: 'با متخصصان ما تماس بگیرید و راهنمایی کاملی برای خرید یا اجاره دریافت کنید'
    },
    {
      icon: <Home className="h-14 w-14 text-cyan-500" />,
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
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full group">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -start-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-100 mb-3">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-400 leading-relaxed text-center">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
