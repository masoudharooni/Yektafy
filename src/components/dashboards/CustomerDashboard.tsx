import React from 'react';

const CustomerDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        داشبورد مشتری
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            علاقه‌مندی‌ها
          </h3>
          <p className="text-3xl font-bold text-blue-600">15</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            جستجوهای اخیر
          </h3>
          <p className="text-3xl font-bold text-green-600">8</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            قرارهای ملاقات
          </h3>
          <p className="text-3xl font-bold text-purple-600">2</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            املاک پیشنهادی
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            این بخش در حال توسعه است...
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            آخرین فعالیت‌ها
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            این بخش در حال توسعه است...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
