import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { 
  User, 
  Shield, 
  Globe, 
  Key, 
  Save,
  Bell,
  Lock,
  Settings,
  Mail,
  Phone,
  Camera,
  Eye,
  EyeOff,
  Moon,
  Clock,
  Languages,
  Smartphone,
  Monitor,
  Volume2,
  Download,
  Upload,
  Trash2,
  Edit,
  Star
} from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const tabs = [
    { id: 'profile', label: 'پروفایل', icon: User, color: 'blue' },
    { id: 'security', label: 'امنیت', icon: Shield, color: 'red' },
    { id: 'notifications', label: 'اعلان‌ها', icon: Bell, color: 'yellow' },
    { id: 'general', label: 'عمومی', icon: Globe, color: 'green' },
  ];

  const getTabColor = (color: string, isActive: boolean) => {
    if (!isActive) return 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50';
    
    switch (color) {
      case 'blue':
        return 'bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-500/10';
      case 'red':
        return 'bg-red-500/20 text-red-400 border border-red-500/30 shadow-lg shadow-red-500/10';
      case 'yellow':
        return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 shadow-lg shadow-yellow-500/10';
      case 'green':
        return 'bg-green-500/20 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/10';
      default:
        return 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/10';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">تنظیمات</h1>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">مدیریت تنظیمات حساب کاربری و سیستم</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
            <Settings className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tab Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-right rounded-xl transition-all duration-300 group ${
                        getTabColor(tab.color, isActive)
                      }`}
                    >
                      <div className={`transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="flex-1">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  {/* Profile Header */}
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-500/10 to-blue-600/5 rounded-xl border border-blue-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-100">اطلاعات پروفایل</h3>
                      <p className="text-blue-400 text-sm">مدیریت اطلاعات شخصی شما</p>
                    </div>
                  </div>

                  {/* Profile Picture Section */}
                  <Card className="bg-gray-800/50 border-gray-700/50">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                            <Camera className="h-8 w-8 text-gray-300" />
                          </div>
                          <Button size="sm" className="absolute -bottom-1 -right-1 w-6 h-6 p-0 bg-blue-500 hover:bg-blue-600 rounded-full">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-gray-100 font-medium mb-1">تصویر پروفایل</h4>
                          <p className="text-gray-400 text-sm mb-3">JPG, GIF یا PNG. حداکثر 2MB</p>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                              <Upload className="h-4 w-4 ml-1" />
                              آپلود تصویر
                            </Button>
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-gray-200">
                              <Trash2 className="h-4 w-4 ml-1" />
                              حذف
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Personal Information */}
                  <Card className="bg-gray-800/50 border-gray-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-100 flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-400" />
                        اطلاعات شخصی
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-gray-300 mb-2 block">نام</Label>
                          <div className="relative">
                            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="firstName"
                              defaultValue="احمد"
                              className="pr-10 bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                              placeholder="نام خود را وارد کنید"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-gray-300 mb-2 block">نام خانوادگی</Label>
                          <div className="relative">
                            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="lastName"
                              defaultValue="محمدی"
                              className="pr-10 bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                              placeholder="نام خانوادگی خود را وارد کنید"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-gray-300 mb-2 block">ایمیل</Label>
                          <div className="relative">
                            <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              defaultValue="ahmad@yektafy.com"
                              className="pr-10 bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                              placeholder="ایمیل خود را وارد کنید"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-300 mb-2 block">تلفن</Label>
                          <div className="relative">
                            <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              defaultValue="۰۹۱۲۳۴۵۶۷۸۹"
                              className="pr-10 bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                              placeholder="شماره تلفن خود را وارد کنید"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Save Button */}
                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                      <Save className="h-5 w-5 ml-2" />
                      ذخیره تغییرات
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  {/* Security Header */}
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-red-500/10 to-red-600/5 rounded-xl border border-red-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/25">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-100">تنظیمات امنیتی</h3>
                      <p className="text-red-400 text-sm">مدیریت امنیت حساب کاربری شما</p>
                    </div>
                  </div>

                  {/* Password Change Section */}
                  <Card className="bg-gray-800/50 border-gray-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-100 flex items-center gap-2">
                        <Lock className="h-5 w-5 text-red-400" />
                        تغییر رمز عبور
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword" className="text-gray-300 mb-2 block">رمز عبور فعلی</Label>
                        <div className="relative">
                          <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="currentPassword"
                            type={showPassword ? "text" : "password"}
                            className="pr-10 pl-10 bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20"
                            placeholder="رمز عبور فعلی خود را وارد کنید"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="newPassword" className="text-gray-300 mb-2 block">رمز عبور جدید</Label>
                        <div className="relative">
                          <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="newPassword"
                            type={showNewPassword ? "text" : "password"}
                            className="pr-10 pl-10 bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20"
                            placeholder="رمز عبور جدید خود را وارد کنید"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                          >
                            {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="confirmPassword" className="text-gray-300 mb-2 block">تأیید رمز عبور جدید</Label>
                        <div className="relative">
                          <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            className="pr-10 pl-10 bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20"
                            placeholder="رمز عبور جدید را مجدداً وارد کنید"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Two-Factor Authentication */}
                  <Card className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border-yellow-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/25">
                          <Key className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-yellow-400 font-semibold text-lg">احراز هویت دو مرحله‌ای</h4>
                            <div className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                              توصیه می‌شود
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm mb-4">
                            برای امنیت بیشتر، احراز هویت دو مرحله‌ای را فعال کنید. این ویژگی از حساب شما در برابر دسترسی غیرمجاز محافظت می‌کند.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg shadow-yellow-500/25">
                              <Key className="h-4 w-4 ml-2" />
                              فعال‌سازی 2FA
                            </Button>
                            <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10">
                              <Shield className="h-4 w-4 ml-2" />
                              راهنمای تنظیم
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Security Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-end">
                    <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:scale-105">
                      <Lock className="h-5 w-5 ml-2" />
                      تغییر رمز عبور
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  {/* Notifications Header */}
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 rounded-xl border border-yellow-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                      <Bell className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-100">تنظیمات اعلان‌ها</h3>
                      <p className="text-yellow-400 text-sm">مدیریت نحوه دریافت اعلان‌ها</p>
                    </div>
                  </div>

                  {/* Notification Types */}
                  <div className="grid grid-cols-1 gap-4">
                    {/* Email Notifications */}
                    <Card className="bg-gray-800/50 border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                              <Mail className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-gray-100 font-semibold text-lg">اعلان‌های ایمیل</h4>
                              <p className="text-gray-400 text-sm">دریافت اعلان‌ها از طریق ایمیل</p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                          </label>
                        </div>
                      </CardContent>
                    </Card>

                    {/* SMS Notifications */}
                    <Card className="bg-gray-800/50 border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25">
                              <Smartphone className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-gray-100 font-semibold text-lg">اعلان‌های پیامک</h4>
                              <p className="text-gray-400 text-sm">دریافت اعلان‌ها از طریق پیامک</p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                          </label>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Browser Notifications */}
                    <Card className="bg-gray-800/50 border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                              <Monitor className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-gray-100 font-semibold text-lg">اعلان‌های مرورگر</h4>
                              <p className="text-gray-400 text-sm">دریافت اعلان‌ها در مرورگر</p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                          </label>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Property Notifications */}
                    <Card className="bg-gray-800/50 border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                              <Star className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-gray-100 font-semibold text-lg">اعلان‌های آگهی‌های جدید</h4>
                              <p className="text-gray-400 text-sm">اطلاع‌رسانی آگهی‌های جدید مطابق با جستجوهای شما</p>
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                          </label>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Save Button */}
                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
                      <Bell className="h-5 w-5 ml-2" />
                      ذخیره تنظیمات
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === 'general' && (
                <div className="space-y-6">
                  {/* General Header */}
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-500/10 to-green-600/5 rounded-xl border border-green-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-100">تنظیمات عمومی</h3>
                      <p className="text-green-400 text-sm">مدیریت تنظیمات کلی سیستم</p>
                    </div>
                  </div>

                  {/* Language & Timezone Settings */}
                  <Card className="bg-gray-800/50 border-gray-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-100 flex items-center gap-2">
                        <Languages className="h-5 w-5 text-green-400" />
                        زبان و منطقه زمانی
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="language" className="text-gray-300 mb-3 block">زبان</Label>
                          <div className="relative">
                            <Languages className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <select 
                              id="language"
                              className="w-full pr-10 pl-10 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none appearance-none"
                            >
                              <option value="fa">فارسی</option>
                              <option value="en">English</option>
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="timezone" className="text-gray-300 mb-3 block">منطقه زمانی</Label>
                          <div className="relative">
                            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <select 
                              id="timezone"
                              className="w-full pr-10 pl-10 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none appearance-none"
                            >
                              <option value="Asia/Tehran">اصفهان (GMT+3:30)</option>
                              <option value="UTC">UTC (GMT+0)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Theme & Appearance Settings */}
                  <Card className="bg-gray-800/50 border-gray-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-100 flex items-center gap-2">
                        <Moon className="h-5 w-5 text-green-400" />
                        ظاهر و تم
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
                            <Moon className="h-6 w-6 text-gray-300" />
                          </div>
                          <div>
                            <h4 className="text-gray-100 font-semibold text-lg">حالت تاریک</h4>
                            <p className="text-gray-400 text-sm">استفاده از تم تاریک برای راحتی چشم</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                            <Volume2 className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-gray-100 font-semibold text-lg">صداهای سیستم</h4>
                            <p className="text-gray-400 text-sm">پخش صدا برای اعلان‌ها و رویدادها</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Data & Privacy */}
                  <Card className="bg-gray-800/50 border-gray-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-100 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-400" />
                        حریم خصوصی و داده‌ها
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <Download className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-gray-100 font-semibold text-lg">پشتیبان‌گیری خودکار</h4>
                            <p className="text-gray-400 text-sm">ذخیره خودکار تنظیمات و داده‌ها</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Save Button */}
                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105">
                      <Save className="h-5 w-5 ml-2" />
                      ذخیره تنظیمات
                    </Button>
                  </div>
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
