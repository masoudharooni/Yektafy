import React from 'react';
import { useShowToast } from '../../contexts/ToastContext';

const CustomerInfoCard: React.FC<{ title: string; description: string; linkText: string; }> = ({ title, description, linkText }) => {
    const showToast = useShowToast();
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        showToast('این بخش هنوز توسعه داده نشده است.');
    };
    return (
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-100">{title}</h3>
            <p className="text-gray-400 mt-2 mb-4">{description}</p>
            <a href="#" onClick={handleClick} className="font-semibold text-cyan-400 hover:text-cyan-300 transition">
                {linkText} &rarr;
            </a>
        </div>
    );
};

const CustomerDashboard: React.FC = () => {
  return (
    <div>
        <h2 className="text-4xl font-bold text-gray-100 mb-8">حساب کاربری من</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CustomerInfoCard 
                title="ملک‌های ذخیره شده"
                description="لیست ملک‌هایی که به عنوان مورد علاقه نشان کرده‌اید."
                linkText="مشاهده لیست"
            />
            <CustomerInfoCard 
                title="جستجوهای اخیر"
                description="آخرین جستجوهای خود را مشاهده و مجددا اجرا کنید."
                linkText="مشاهده جستجوها"
            />
             <CustomerInfoCard 
                title="پروفایل کاربری"
                description="اطلاعات تماس و مشخصات خود را ویرایش کنید."
                linkText="ویرایش پروفایل"
            />
        </div>
    </div>
  );
};

export default CustomerDashboard;