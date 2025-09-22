import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { 
  User, 
  Shield, 
  Global, 
  Key, 
  Save2,
  Notification,
  Lock
} from 'iconsax-react';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'پروفایل', icon: User },
    { id: 'security', label: 'امنیت', icon: Shield },
    { id: 'notifications', label: 'اعلان‌ها', icon: Notification },
    { id: 'general', label: 'عمومی', icon: Global },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-100">تنظیمات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Tab Navigation */}
            <div className="md:w-64 flex-shrink-0">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-right rounded-lg transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                      }`}
                    >
                      <Icon size={20} color="currentColor" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="flex-1">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">اطلاعات پروفایل</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-300">نام</Label>
                      <Input
                        id="firstName"
                        defaultValue="احمد"
                        className="mt-1 bg-gray-800 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-300">نام خانوادگی</Label>
                      <Input
                        id="lastName"
                        defaultValue="محمدی"
                        className="mt-1 bg-gray-800 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">ایمیل</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="ahmad@yektafy.com"
                        className="mt-1 bg-gray-800 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-300">تلفن</Label>
                      <Input
                        id="phone"
                        defaultValue="۰۹۱۲۳۴۵۶۷۸۹"
                        className="mt-1 bg-gray-800 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>
                  
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    <Save2 size={20} color="#ffffff" className="ml-2" />
                    ذخیره تغییرات
                  </Button>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">تنظیمات امنیتی</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword" className="text-gray-300">رمز عبور فعلی</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        className="mt-1 bg-gray-800 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div>
                      <Label htmlFor="newPassword" className="text-gray-300">رمز عبور جدید</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        className="mt-1 bg-gray-800 border-gray-600 text-gray-100"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword" className="text-gray-300">تأیید رمز عبور</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        className="mt-1 bg-gray-800 border-gray-600 text-gray-100"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield size={20} color="#f59e0b" />
                      <h4 className="text-yellow-400 font-medium">احراز هویت دو مرحله‌ای</h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">
                      برای امنیت بیشتر، احراز هویت دو مرحله‌ای را فعال کنید.
                    </p>
                    <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10">
                      <Key size={16} color="#f59e0b" className="ml-2" />
                      فعال‌سازی
                    </Button>
                  </div>
                  
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    <Lock size={20} color="#ffffff" className="ml-2" />
                    تغییر رمز عبور
                  </Button>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">تنظیمات اعلان‌ها</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                      <div>
                        <h4 className="text-gray-100 font-medium">اعلان‌های ایمیل</h4>
                        <p className="text-gray-400 text-sm">دریافت اعلان‌ها از طریق ایمیل</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                      <div>
                        <h4 className="text-gray-100 font-medium">اعلان‌های پیامک</h4>
                        <p className="text-gray-400 text-sm">دریافت اعلان‌ها از طریق پیامک</p>
                      </div>
                      <input type="checkbox" className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                      <div>
                        <h4 className="text-gray-100 font-medium">اعلان‌های مرورگر</h4>
                        <p className="text-gray-400 text-sm">دریافت اعلان‌ها در مرورگر</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                      <div>
                        <h4 className="text-gray-100 font-medium">اعلان‌های آگهی‌های جدید</h4>
                        <p className="text-gray-400 text-sm">اطلاع‌رسانی آگهی‌های جدید مطابق با جستجوهای شما</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500" />
                    </div>
                  </div>
                  
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    <Notification size={20} color="#ffffff" className="ml-2" />
                    ذخیره تنظیمات
                  </Button>
                </div>
              )}

              {activeTab === 'general' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">تنظیمات عمومی</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="language" className="text-gray-300">زبان</Label>
                      <select 
                        id="language"
                        className="mt-1 w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      >
                        <option value="fa">فارسی</option>
                        <option value="en">English</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="timezone" className="text-gray-300">منطقه زمانی</Label>
                      <select 
                        id="timezone"
                        className="mt-1 w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      >
                        <option value="Asia/Tehran">تهران (GMT+3:30)</option>
                        <option value="UTC">UTC (GMT+0)</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                      <div>
                        <h4 className="text-gray-100 font-medium">حالت تاریک</h4>
                        <p className="text-gray-400 text-sm">استفاده از تم تاریک</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500" />
                    </div>
                  </div>
                  
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    <Save2 size={20} color="#ffffff" className="ml-2" />
                    ذخیره تنظیمات
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
