import React from 'react';

const AgentDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        داشبورد نماینده
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            املاک من
          </h3>
          <p className="text-3xl font-bold text-blue-600">23</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            مشتریان فعال
          </h3>
          <p className="text-3xl font-bold text-green-600">45</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            قرارهای امروز
          </h3>
          <p className="text-3xl font-bold text-purple-600">3</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            قرارهای آتی
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            این بخش در حال توسعه است...
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            پیام‌های جدید
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            این بخش در حال توسعه است...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
