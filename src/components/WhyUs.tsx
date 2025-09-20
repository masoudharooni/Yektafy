import React from 'react';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: '🏠',
      title: 'املاک معتبر',
      description: 'تمام املاک ما توسط کارشناسان بررسی شده و معتبر هستند'
    },
    {
      icon: '🔍',
      title: 'جستجوی هوشمند',
      description: 'با فیلترهای پیشرفته، دقیقاً همان چیزی که می‌خواهید پیدا کنید'
    },
    {
      icon: '👥',
      title: 'نمایندگان متخصص',
      description: 'تیم ما از بهترین نمایندگان املاک تشکیل شده است'
    },
    {
      icon: '📱',
      title: 'پلتفرم مدرن',
      description: 'تجربه کاربری فوق‌العاده با تکنولوژی روز'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            چرا یکتافی؟
          </h2>
          <p className="text-gray-600">
            ما بهترین خدمات املاک را ارائه می‌دهیم
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
