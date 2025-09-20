import React from 'react';
import SearchBox from './SearchBox';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          با یکتافی، خانه‌دار شدن رویا نیست
        </h2>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          ما شریک شما نیستیم؛ ما <span className="font-semibold text-cyan-300">همراه و مشاور</span> شما در مسیر خانه‌دار شدن هستیم.
        </p>
        <SearchBox />
      </div>
    </section>
  );
};

export default Hero;