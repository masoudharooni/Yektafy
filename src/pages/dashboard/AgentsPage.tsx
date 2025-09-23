import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Edit, 
  Trash, 
  Eye, 
  Star, 
  TrendingUp, 
  Calendar, 
  Clock, 
  Phone, 
  MapPin, 
  Award, 
  Target, 
  Users, 
  Building, 
  MessageSquare,
  Activity,
  Download,
  BarChart3
} from 'lucide-react';

const AgentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [performanceFilter, setPerformanceFilter] = useState('all');

  // Enhanced mock data for agents
  const agents = [
    {
      id: 1,
      name: 'علی رضایی',
      email: 'ali@yektafy.com',
      phone: '۰۹۱۲۳۴۵۶۷۸۹',
      listings: 15,
      activeListings: 12,
      soldListings: 8,
      status: 'فعال',
      rating: 4.8,
      joinDate: '۱۴۰۲/۰۳/۱۵',
      lastLogin: '۱۴۰۳/۰۱/۱۵',
      avatar: 'عر',
      specialization: 'آپارتمان',
      location: 'اصفهان',
      commission: 12500000,
      monthlyTarget: 15000000,
      performance: 'عالی',
      customers: 45,
      responseTime: '۲ ساعت',
      languages: ['فارسی', 'انگلیسی'],
      certifications: ['مشاور املاک', 'کارشناس ارزیابی'],
      achievements: ['مشاور برتر ماه', 'فروشنده نمونه']
    },
    {
      id: 2,
      name: 'زهرا محمدی',
      email: 'zahra@yektafy.com',
      phone: '۰۹۱۸۷۶۵۴۳۲۱',
      listings: 23,
      activeListings: 18,
      soldListings: 15,
      status: 'فعال',
      rating: 4.9,
      joinDate: '۱۴۰۲/۰۵/۲۰',
      lastLogin: '۱۴۰۳/۰۱/۱۶',
      avatar: 'زم',
      specialization: 'ویلا',
      location: 'اصفهان',
      commission: 18750000,
      monthlyTarget: 20000000,
      performance: 'عالی',
      customers: 67,
      responseTime: '۱ ساعت',
      languages: ['فارسی', 'عربی'],
      certifications: ['مشاور املاک', 'کارشناس ارزیابی', 'مدیریت فروش'],
      achievements: ['مشاور برتر سال', 'فروشنده نمونه', 'رضایت مشتری بالا']
    },
    {
      id: 3,
      name: 'حسن احمدی',
      email: 'hasan@yektafy.com',
      phone: '۰۹۱۵۵۵۵۵۵۵۵',
      listings: 8,
      activeListings: 5,
      soldListings: 3,
      status: 'غیرفعال',
      rating: 4.2,
      joinDate: '۱۴۰۲/۰۷/۱۰',
      lastLogin: '۱۴۰۳/۰۱/۱۰',
      avatar: 'حا',
      specialization: 'زمین',
      location: 'مشهد',
      commission: 4500000,
      monthlyTarget: 8000000,
      performance: 'متوسط',
      customers: 12,
      responseTime: '۴ ساعت',
      languages: ['فارسی'],
      certifications: ['مشاور املاک'],
      achievements: []
    },
    {
      id: 4,
      name: 'مریم حسینی',
      email: 'maryam@yektafy.com',
      phone: '۰۹۱۹۹۹۹۹۹۹۹',
      listings: 31,
      activeListings: 25,
      soldListings: 22,
      status: 'فعال',
      rating: 4.7,
      joinDate: '۱۴۰۲/۰۲/۰۵',
      lastLogin: '۱۴۰۳/۰۱/۱۶',
      avatar: 'مح',
      specialization: 'مغازه',
      location: 'شیراز',
      commission: 22000000,
      monthlyTarget: 25000000,
      performance: 'عالی',
      customers: 89,
      responseTime: '۱.۵ ساعت',
      languages: ['فارسی', 'انگلیسی', 'فرانسوی'],
      certifications: ['مشاور املاک', 'کارشناس ارزیابی', 'مدیریت فروش', 'بازاریابی دیجیتال'],
      achievements: ['مشاور برتر ماه', 'فروشنده نمونه', 'رضایت مشتری بالا', 'تیم‌لیدر']
    },
    {
      id: 5,
      name: 'محمد کریمی',
      email: 'mohammad@yektafy.com',
      phone: '۰۹۱۷۷۷۷۷۷۷۷',
      listings: 19,
      activeListings: 16,
      soldListings: 11,
      status: 'فعال',
      rating: 4.5,
      joinDate: '۱۴۰۲/۰۸/۱۲',
      lastLogin: '۱۴۰۳/۰۱/۱۵',
      avatar: 'مک',
      specialization: 'آپارتمان',
      location: 'تبریز',
      commission: 14200000,
      monthlyTarget: 18000000,
      performance: 'خوب',
      customers: 34,
      responseTime: '۲.۵ ساعت',
      languages: ['فارسی', 'ترکی'],
      certifications: ['مشاور املاک', 'کارشناس ارزیابی'],
      achievements: ['مشاور برتر ماه']
    },
    {
      id: 6,
      name: 'فاطمه نوری',
      email: 'fateme@yektafy.com',
      phone: '۰۹۱۶۶۶۶۶۶۶۶',
      listings: 12,
      activeListings: 9,
      soldListings: 6,
      status: 'فعال',
      rating: 4.3,
      joinDate: '۱۴۰۲/۱۰/۰۸',
      lastLogin: '۱۴۰۳/۰۱/۱۴',
      avatar: 'فن',
      specialization: 'ویلا',
      location: 'کرج',
      commission: 8900000,
      monthlyTarget: 12000000,
      performance: 'خوب',
      customers: 23,
      responseTime: '۳ ساعت',
      languages: ['فارسی'],
      certifications: ['مشاور املاک'],
      achievements: []
    }
  ];

  // Filter agents based on search and filters
  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || agent.status === statusFilter;
    const matchesRating = ratingFilter === 'all' || 
      (ratingFilter === 'high' && agent.rating >= 4.5) ||
      (ratingFilter === 'medium' && agent.rating >= 4.0 && agent.rating < 4.5) ||
      (ratingFilter === 'low' && agent.rating < 4.0);
    const matchesPerformance = performanceFilter === 'all' || agent.performance === performanceFilter;
    
    return matchesSearch && matchesStatus && matchesRating && matchesPerformance;
  });

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'عالی':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'خوب':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'متوسط':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'فعال' 
      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
      : 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  const getPerformanceIcon = (performance: string) => {
    switch (performance) {
      case 'عالی':
        return <Award className="h-4 w-4 text-emerald-400" />;
      case 'خوب':
        return <TrendingUp className="h-4 w-4 text-blue-400" />;
      case 'متوسط':
        return <Target className="h-4 w-4 text-yellow-400" />;
      default:
        return <Activity className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-100">مدیریت مشاوران</h1>
          <p className="text-gray-400 mt-1">مدیریت و نظارت بر عملکرد مشاوران املاک</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all duration-300">
            <Download className="h-4 w-4 ml-2" />
            گزارش
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
            <Plus className="h-5 w-5 text-white ml-2" />
            افزودن مشاور جدید
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search 
                className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
              />
              <Input
                type="text"
                placeholder="جستجو در نام، ایمیل یا شهر..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
              />
            </div>
            
            {/* Status Filter */}
            <div className="lg:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-gray-100 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none"
              >
                <option value="all">همه وضعیت‌ها</option>
                <option value="فعال">فعال</option>
                <option value="غیرفعال">غیرفعال</option>
              </select>
            </div>
            
            {/* Rating Filter */}
            <div className="lg:w-48">
              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-gray-100 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none"
              >
                <option value="all">همه امتیازها</option>
                <option value="high">عالی (۴.۵+)</option>
                <option value="medium">خوب (۴.۰-۴.۵)</option>
                <option value="low">متوسط (زیر ۴.۰)</option>
              </select>
            </div>

            {/* Performance Filter */}
            <div className="lg:w-48">
              <select
                value={performanceFilter}
                onChange={(e) => setPerformanceFilter(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-gray-100 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none"
              >
                <option value="all">همه عملکردها</option>
                <option value="عالی">عالی</option>
                <option value="خوب">خوب</option>
                <option value="متوسط">متوسط</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-400 text-sm font-medium">مشاوران فعال</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">
                  {agents.filter(agent => agent.status === 'فعال').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-400 text-sm font-medium">کل مشاوران</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">{agents.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Building className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-400 text-sm font-medium">کل آگهی‌ها</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">
                  {agents.reduce((sum, agent) => sum + agent.listings, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-400 text-sm font-medium">میانگین امتیاز</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">
                  {(agents.reduce((sum, agent) => sum + agent.rating, 0) / agents.length).toFixed(1)}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agent Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <Card key={agent.id} className="bg-gray-800/50 h-fit border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {agent.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">{agent.name}</h3>
                    <p className="text-sm text-gray-400">{agent.email}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {agent.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">{agent.rating}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              </div>

              {/* Status & Performance */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(agent.status)}`}>
                  {agent.status}
                </span>
                <div className="flex items-center gap-2">
                  {getPerformanceIcon(agent.performance)}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPerformanceColor(agent.performance)}`}>
                    {agent.performance}
                  </span>
                </div>
              </div>

              {/* Specialization */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">تخصص:</p>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-md">
                  {agent.specialization}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                  <p className="text-2xl font-bold text-gray-100">{agent.listings}</p>
                  <p className="text-xs text-gray-400">کل آگهی‌ها</p>
                </div>
                <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                  <p className="text-2xl font-bold text-gray-100">{agent.customers}</p>
                  <p className="text-xs text-gray-400">مشتریان</p>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">کمیسیون ماهانه:</span>
                  <span className="text-gray-100 font-medium">{agent.commission.toLocaleString()} تومان</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">هدف ماهانه:</span>
                  <span className="text-gray-100 font-medium">{agent.monthlyTarget.toLocaleString()} تومان</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">زمان پاسخ:</span>
                  <span className="text-gray-100 font-medium">{agent.responseTime}</span>
                </div>
              </div>

              {/* Languages & Certifications */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">زبان‌ها:</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {agent.languages.map((lang, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md">
                      {lang}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mb-2">گواهینامه‌ها:</p>
                <div className="flex flex-wrap gap-1">
                  {agent.certifications.slice(0, 2).map((cert, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-md">
                      {cert}
                    </span>
                  ))}
                  {agent.certifications.length > 2 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                      +{agent.certifications.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Achievements */}
              {agent.achievements.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">دستاوردها:</p>
                  <div className="flex flex-wrap gap-1">
                    {agent.achievements.slice(0, 2).map((achievement, index) => (
                      <span key={index} className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-md">
                        {achievement}
                      </span>
                    ))}
                    {agent.achievements.length > 2 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                        +{agent.achievements.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Contact Info */}
              <div className="space-y-2 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" />
                  <span>آخرین ورود: {agent.lastLogin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>عضو از: {agent.joinDate}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-700/50">
                <Button variant="ghost" size="sm" className="flex-1 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50">
                  <Eye className="h-4 w-4 ml-1" />
                  مشاهده
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10">
                  <Edit className="h-4 w-4 ml-1" />
                  ویرایش
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10">
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredAgents.length === 0 && (
        <Card className="bg-gray-800/50 border-gray-700/50">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">هیچ مشاوری یافت نشد</h3>
            <p className="text-gray-400">با فیلترهای فعلی هیچ مشاوری پیدا نشد. لطفاً فیلترها را تغییر دهید.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AgentsPage;
