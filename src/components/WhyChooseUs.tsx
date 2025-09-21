import React from 'react';
import { motion } from 'framer-motion';
import { User, ShieldTick, Headphone, Speedometer } from 'iconsax-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <User size={48} color="#06b6d4" />,
      title: 'مشاوران متخصص',
      description: 'تیم ما از بهترین متخصصان املاک تشکیل شده که سال‌ها تجربه دارند'
    },
    {
      icon: <ShieldTick size={48} color="#06b6d4" />,
      title: 'امنیت کامل',
      description: 'تمام معاملات با بالاترین استانداردهای امنیتی و قانونی انجام می‌شود'
    },
    {
      icon: <Headphone size={48} color="#06b6d4" />,
      title: 'پشتیبانی ۲۴/۷',
      description: 'در هر ساعت از شبانه‌روز، تیم پشتیبانی ما آماده کمک به شماست'
    },
    {
      icon: <Speedometer size={48} color="#06b6d4" />,
      title: 'سرعت بالا',
      description: 'با تکنولوژی پیشرفته، سریع‌ترین راه برای پیدا کردن ملک مناسب'
    }
  ];

  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">چرا یکتافی را انتخاب کنیم؟</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            مزایای منحصر به فرد ما که تجربه‌ای بی‌نظیر برای شما فراهم می‌کند
          </p>
          <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-100 mb-3">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-400 leading-relaxed text-center">
                    {benefit.description}
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

export default WhyChooseUs;
