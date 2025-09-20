import React from 'react';
import { MdBusiness, MdPeople, MdPersonAdd } from 'react-icons/md';

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-gray-400 text-sm">{title}</p>
                <p className="text-3xl font-bold text-gray-100 mt-1">{value}</p>
            </div>
            <div className="bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center text-cyan-400">
                {icon}
            </div>
        </div>
    </div>
);

const AdminDashboard: React.FC = () => {
  return (
    <div>
        <h2 className="text-4xl font-bold text-gray-100 mb-8">داشبورد ادمین</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard 
                title="کل آگهی‌ها" 
                value="۱,۲۵۰" 
                icon={<MdBusiness size={24} />} 
            />
            <StatCard 
                title="مشاوران فعال" 
                value="۷۸" 
                icon={<MdPeople size={24} />}
            />
            <StatCard 
                title="کاربران جدید (این ماه)" 
                value="۲۴۰" 
                icon={<MdPersonAdd size={24} />}
            />
        </div>
        {/* Further admin components can be added here */}
    </div>
  );
};

export default AdminDashboard;