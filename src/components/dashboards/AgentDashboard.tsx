import React from 'react';
import { toast } from 'sonner';

const AgentActionCard: React.FC<{ title: string; description: string; buttonText: string }> = ({ title, description, buttonText }) => {
    const handleClick = () => {
        toast.info('این بخش هنوز در دست توسعه است.');
    };
    return (
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-bold text-gray-100">{title}</h3>
                <p className="text-gray-400 mt-2">{description}</p>
            </div>
            <button onClick={handleClick} className="mt-6 bg-cyan-400/10 text-cyan-400 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 self-start">
                {buttonText}
            </button>
        </div>
    );
};

const AgentDashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-100 mb-8">پنل کاربری مشاور</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AgentActionCard 
          title="آگهی‌های من"
          description="آگهی‌های فعال خود را مشاهده و ویرایش کنید."
          buttonText="مدیریت آگهی‌ها"
        />
        <AgentActionCard 
          title="مشتریان جدید"
          description="لیست مشتریانی که به آگهی‌های شما علاقه نشان داده‌اند."
          buttonText="مشاهده مشتریان"
        />
        <AgentActionCard 
          title="صندوق پیام"
          description="شما ۳ پیام خوانده نشده دارید."
          buttonText="ورود به صندوق پیام"
        />
      </div>
    </div>
  );
};

export default AgentDashboard;