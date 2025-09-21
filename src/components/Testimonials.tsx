import React from 'react';
import { motion } from 'framer-motion';
import { Star1, QuoteUp } from 'iconsax-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'علی احمدی',
      role: 'خریدار آپارتمان',
      location: 'اصفهان، شیخ‌بهایی',
      content: 'با کمک یکتافی، آپارتمان رویایی‌ام را در بهترین منطقه اصفهان پیدا کردم. تیم مشاوره‌شان واقعاً حرفه‌ای بودند.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'فاطمه محمدی',
      role: 'اجاره‌کننده ویلا',
      location: 'اصفهان، چهارباغ',
      content: 'خدمات یکتافی فوق‌العاده است. در کمتر از یک هفته ویلا مناسب برای اجاره پیدا کردم. حتماً به دوستانم توصیه می‌کنم.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'محمد رضایی',
      role: 'فروشنده ملک',
      location: 'اصفهان، مرکز شهر',
      content: 'ملکم را با کمک یکتافی در مدت کوتاهی فروختم. قیمت‌گذاری و بازاریابی‌شان عالی بود. تجربه‌ای بی‌نظیر.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">نظرات مشتریان</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            تجربیات واقعی مشتریان ما از خدمات یکتافی
          </p>
          <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-300 relative"
            >
              <QuoteUp size={24} className="text-cyan-400 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star1 key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-100">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-cyan-400">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
