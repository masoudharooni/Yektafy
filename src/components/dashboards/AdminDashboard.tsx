import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        داشبورد مدیر
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            کل کاربران
          </h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            املاک فعال
          </h3>
          <p className="text-3xl font-bold text-green-600">567</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            نمایندگان
          </h3>
          <p className="text-3xl font-bold text-purple-600">89</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            فروش ماهانه
          </h3>
          <p className="text-3xl font-bold text-orange-600">12</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          آمار اخیر
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          این بخش در حال توسعه است...
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
