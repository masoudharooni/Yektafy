import React from 'react';
import { Building, People, UserAdd } from 'iconsax-react';
import { toast } from 'sonner';

type UserRole = 'admin' | 'agent' | 'customer';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => (
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

interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({ title, description, buttonText, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      toast.info('این بخش هنوز در دست توسعه است.');
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
      <button 
        onClick={handleClick} 
        className="mt-6 bg-cyan-400/10 text-cyan-400 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 self-start"
      >
        {buttonText}
      </button>
    </div>
  );
};

interface InfoCardProps {
  title: string;
  description: string;
  linkText: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, linkText }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info('این بخش هنوز در دست توسعه است.');
  };

  return (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      <p className="text-gray-400 mt-2 mb-4">{description}</p>
      <a 
        href="#" 
        onClick={handleClick} 
        className="font-semibold text-cyan-400 hover:text-cyan-300 transition"
      >
        {linkText} &rarr;
      </a>
    </div>
  );
};

interface ConsolidatedDashboardProps {
  role: UserRole;
}

const ConsolidatedDashboard: React.FC<ConsolidatedDashboardProps> = ({ role }) => {
  const renderAdminDashboard = () => (
    <div>
      <h2 className="text-4xl font-bold text-gray-100 mb-8">داشبورد ادمین</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          title="کل آگهی‌ها" 
          value="۱,۲۵۰" 
          icon={<Building size={24} color="#9ca3af" />} 
        />
        <StatCard 
          title="مشاوران فعال" 
          value="۷۸" 
          icon={<People size={24} color="#9ca3af" />}
        />
        <StatCard 
          title="کاربران جدید (این ماه)" 
          value="۲۴۰" 
          icon={<UserAdd size={24} color="#9ca3af" />}
        />
      </div>
    </div>
  );

  const renderAgentDashboard = () => (
    <div>
      <h2 className="text-4xl font-bold text-gray-100 mb-8">پنل کاربری مشاور</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ActionCard 
          title="آگهی‌های من"
          description="آگهی‌های فعال خود را مشاهده و ویرایش کنید."
          buttonText="مدیریت آگهی‌ها"
        />
        <ActionCard 
          title="مشتریان جدید"
          description="لیست مشتریانی که به آگهی‌های شما علاقه نشان داده‌اند."
          buttonText="مشاهده مشتریان"
        />
        <ActionCard 
          title="صندوق پیام"
          description="شما ۳ پیام خوانده نشده دارید."
          buttonText="ورود به صندوق پیام"
        />
      </div>
    </div>
  );

  const renderCustomerDashboard = () => (
    <div>
      <h2 className="text-4xl font-bold text-gray-100 mb-8">حساب کاربری من</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard 
          title="ملک‌های ذخیره شده"
          description="لیست ملک‌هایی که به عنوان مورد علاقه نشان کرده‌اید."
          linkText="مشاهده لیست"
        />
        <InfoCard 
          title="جستجوهای اخیر"
          description="آخرین جستجوهای خود را مشاهده و مجددا اجرا کنید."
          linkText="مشاهده جستجوها"
        />
        <InfoCard 
          title="پروفایل کاربری"
          description="اطلاعات تماس و مشخصات خود را ویرایش کنید."
          linkText="ویرایش پروفایل"
        />
      </div>
    </div>
  );

  switch (role) {
    case 'admin':
      return renderAdminDashboard();
    case 'agent':
      return renderAgentDashboard();
    case 'customer':
      return renderCustomerDashboard();
    default:
      return (
        <div className="text-center p-8">
          <p className="text-gray-400">نقش کاربری نامعتبر است.</p>
        </div>
      );
  }
};

export default ConsolidatedDashboard;
