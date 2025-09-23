import React from 'react';
import { 
  Building, 
  Users, 
  UserPlus, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Eye,
  MessageSquare,
  Clock,
  Star,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart,
  Activity,
  Settings,
  Bell,
  Download,
  Plus,
  Shield,
  UserCheck,
  FileText,
  Target,
  RefreshCw
} from 'lucide-react';
import { toast } from 'sonner';

type UserRole = 'admin' | 'agent' | 'customer';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
  color?: string;
}

interface ChartCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  data: Array<{ label: string; value: number; color: string }>;
}

interface ActivityItemProps {
  type: 'user' | 'property' | 'message' | 'system';
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
}

interface QuickActionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  trend: number;
  trendLabel: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, changeType = 'neutral', color = 'cyan' }) => {
  const getChangeIcon = () => {
    switch (changeType) {
      case 'increase':
        return <TrendingUp className="h-4 w-4 text-green-400" />;
      case 'decrease':
        return <TrendingDown className="h-4 w-4 text-red-400" />;
      default:
        return <Activity className="h-4 w-4 text-gray-400" />;
    }
  };

  const getChangeColor = () => {
    switch (changeType) {
      case 'increase':
        return 'text-green-400';
      case 'decrease':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-100 mb-2">{value}</p>
          {change && (
            <div className="flex items-center gap-1">
              {getChangeIcon()}
              <span className={`text-sm font-medium ${getChangeColor()}`}>
                {change}
              </span>
            </div>
          )}
        </div>
        <div className={`bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center text-${color}-400 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

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

const ChartCard: React.FC<ChartCardProps> = ({ title, description, icon, data }) => (
  <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center text-cyan-400">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-100">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full bg-${item.color}-400`}></div>
            <span className="text-gray-300 text-sm">{item.label}</span>
          </div>
          <span className="text-gray-100 font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const ActivityItem: React.FC<ActivityItemProps> = ({ type, title, description, time, icon }) => {
  const getTypeColor = () => {
    switch (type) {
      case 'user':
        return 'text-blue-400';
      case 'property':
        return 'text-green-400';
      case 'message':
        return 'text-purple-400';
      case 'system':
        return 'text-orange-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors">
      <div className={`bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center ${getTypeColor()}`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-gray-100 font-medium text-sm">{title}</h4>
        <p className="text-gray-400 text-xs mt-1">{description}</p>
        <p className="text-gray-500 text-xs mt-1">{time}</p>
      </div>
    </div>
  );
};

const QuickAction: React.FC<QuickActionProps> = ({ title, description, icon, color, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      toast.info('این بخش هنوز در دست توسعه است.');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`bg-gray-800 border border-gray-700 p-4 rounded-xl hover:border-${color}-500/50 transition-all duration-300 group text-left w-full`}
    >
      <div className="flex items-center gap-3">
        <div className={`bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center text-${color}-400 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div>
          <h3 className="text-gray-100 font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </button>
  );
};

const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtitle, icon, trend, trendLabel, color }) => (
  <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className={`bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center text-${color}-400`}>
        {icon}
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-gray-100">{value}</p>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <h3 className="text-gray-100 font-semibold">{title}</h3>
      <div className="flex items-center gap-1">
        {trend > 0 ? (
          <TrendingUp className="h-4 w-4 text-green-400" />
        ) : (
          <TrendingDown className="h-4 w-4 text-red-400" />
        )}
        <span className={`text-sm font-medium ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
          {trendLabel}
        </span>
      </div>
    </div>
  </div>
);

interface ConsolidatedDashboardProps {
  role: UserRole;
}

const ConsolidatedDashboard: React.FC<ConsolidatedDashboardProps> = ({ role }) => {
  const renderAdminDashboard = () => (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold text-gray-100 mb-2">داشبورد ادمین</h2>
          <p className="text-gray-400">خوش آمدید! اینجا می‌توانید تمام جنبه‌های سیستم را مدیریت کنید.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            بروزرسانی
          </button>
          <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300 flex items-center gap-2">
            <Settings className="h-4 w-4" />
            تنظیمات
          </button>
        </div>
      </div>

      {/* Main Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="کل آگهی‌ها" 
          value="۱,۲۵۰" 
          icon={<Building className="h-6 w-6" />}
          change="+۱۲%"
          changeType="increase"
          color="cyan"
        />
        <StatCard 
          title="مشاوران فعال" 
          value="۷۸" 
          icon={<Users className="h-6 w-6" />}
          change="+۵%"
          changeType="increase"
          color="blue"
        />
        <StatCard 
          title="کاربران جدید" 
          value="۲۴۰" 
          icon={<UserPlus className="h-6 w-6" />}
          change="+۱۸%"
          changeType="increase"
          color="green"
        />
        <StatCard 
          title="درآمد ماهانه" 
          value="۱۲.۵M" 
          icon={<DollarSign className="h-6 w-6" />}
          change="+۸%"
          changeType="increase"
          color="purple"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="بازدید روزانه"
          value="۳,۴۵۶"
          subtitle="بازدیدکننده"
          icon={<Eye className="h-6 w-6" />}
          trend={12}
          trendLabel="+۱۲%"
          color="orange"
        />
        <MetricCard
          title="پیام‌های جدید"
          value="۸۹"
          subtitle="پیام"
          icon={<MessageSquare className="h-6 w-6" />}
          trend={-3}
          trendLabel="-۳%"
          color="red"
        />
        <MetricCard
          title="نرخ تبدیل"
          value="۲.۴%"
          subtitle="تبدیل"
          icon={<Target className="h-6 w-6" />}
          trend={5}
          trendLabel="+۵%"
          color="yellow"
        />
        <MetricCard
          title="رضایت مشتری"
          value="۴.۸"
          subtitle="از ۵"
          icon={<Star className="h-6 w-6" />}
          trend={2}
          trendLabel="+۲%"
          color="pink"
        />
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="توزیع آگهی‌ها"
          description="بر اساس نوع ملک"
          icon={<PieChart className="h-5 w-5" />}
          data={[
            { label: 'آپارتمان', value: 450, color: 'blue' },
            { label: 'ویلا', value: 320, color: 'green' },
            { label: 'زمین', value: 280, color: 'yellow' },
            { label: 'مغازه', value: 200, color: 'purple' }
          ]}
        />
        <ChartCard
          title="فعالیت ماهانه"
          description="آمار فعالیت‌ها"
          icon={<BarChart3 className="h-5 w-5" />}
          data={[
            { label: 'آگهی جدید', value: 156, color: 'cyan' },
            { label: 'کاربر جدید', value: 89, color: 'green' },
            { label: 'مشاور جدید', value: 23, color: 'blue' },
            { label: 'پیام جدید', value: 445, color: 'purple' }
          ]}
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-2xl font-bold text-gray-100 mb-6">عملیات سریع</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickAction
            title="افزودن آگهی"
            description="آگهی جدید اضافه کنید"
            icon={<Plus className="h-5 w-5" />}
            color="green"
          />
          <QuickAction
            title="مدیریت کاربران"
            description="کاربران را مدیریت کنید"
            icon={<UserCheck className="h-5 w-5" />}
            color="blue"
          />
          <QuickAction
            title="گزارش‌گیری"
            description="گزارش‌های سیستم"
            icon={<FileText className="h-5 w-5" />}
            color="purple"
          />
          <QuickAction
            title="پشتیبان‌گیری"
            description="پشتیبان از داده‌ها"
            icon={<Download className="h-5 w-5" />}
            color="orange"
          />
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center text-cyan-400">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-100">فعالیت‌های اخیر</h3>
              <p className="text-gray-400 text-sm">آخرین فعالیت‌های سیستم</p>
            </div>
          </div>
          <div className="space-y-2">
            <ActivityItem
              type="user"
              title="کاربر جدید ثبت شد"
              description="احمد محمدی در سیستم ثبت نام کرد"
              time="۵ دقیقه پیش"
              icon={<UserPlus className="h-4 w-4" />}
            />
            <ActivityItem
              type="property"
              title="آگهی جدید اضافه شد"
              description="آپارتمان ۳ خوابه در تهران"
              time="۱۲ دقیقه پیش"
              icon={<Building className="h-4 w-4" />}
            />
            <ActivityItem
              type="message"
              title="پیام جدید دریافت شد"
              description="پیام از مشاور علی احمدی"
              time="۱۸ دقیقه پیش"
              icon={<MessageSquare className="h-4 w-4" />}
            />
            <ActivityItem
              type="system"
              title="پشتیبان‌گیری انجام شد"
              description="پشتیبان روزانه سیستم"
              time="۱ ساعت پیش"
              icon={<Shield className="h-4 w-4" />}
            />
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center text-orange-400">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-100">اعلان‌ها</h3>
              <p className="text-gray-400 text-sm">اعلان‌های مهم سیستم</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
              <div>
                <h4 className="text-red-400 font-medium text-sm">هشدار امنیتی</h4>
                <p className="text-gray-400 text-xs mt-1">تلاش ورود غیرمجاز شناسایی شد</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-400 mt-0.5" />
              <div>
                <h4 className="text-yellow-400 font-medium text-sm">نگهداری برنامه‌ریزی شده</h4>
                <p className="text-gray-400 text-xs mt-1">سیستم فردا از ساعت ۲ تا ۴ صبح در دسترس نخواهد بود</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
              <div>
                <h4 className="text-green-400 font-medium text-sm">بروزرسانی موفق</h4>
                <p className="text-gray-400 text-xs mt-1">نسخه جدید سیستم با موفقیت نصب شد</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center text-green-400">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-100">وضعیت سیستم</h3>
            <p className="text-gray-400 text-sm">وضعیت کلی سیستم و سرویس‌ها</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <div>
              <h4 className="text-green-400 font-medium text-sm">سرور اصلی</h4>
              <p className="text-gray-400 text-xs">آنلاین</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <div>
              <h4 className="text-green-400 font-medium text-sm">پایگاه داده</h4>
              <p className="text-gray-400 text-xs">آنلاین</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <Clock className="h-5 w-5 text-yellow-400" />
            <div>
              <h4 className="text-yellow-400 font-medium text-sm">سرویس ایمیل</h4>
              <p className="text-gray-400 text-xs">تأخیر کم</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <div>
              <h4 className="text-green-400 font-medium text-sm">فایل سرور</h4>
              <p className="text-gray-400 text-xs">آنلاین</p>
            </div>
          </div>
        </div>
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
