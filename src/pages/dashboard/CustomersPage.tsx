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
  MessageSquare, 
  Calendar, 
  Clock, 
  Phone, 
  MapPin, 
  ShoppingCart, 
  Users, 
  Building, 
  Download,
  Star,
  Award,
  UserCheck,
  Crown
} from 'lucide-react';

const CustomersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [segmentFilter, setSegmentFilter] = useState('all');
  const [activityFilter, setActivityFilter] = useState('all');

  // Enhanced mock data for customers
  const customers = [
    {
      id: 1,
      name: 'رضا کریمی',
      email: 'reza@email.com',
      phone: '۰۹۱۲۳۴۵۶۷۸۹',
      inquiries: 5,
      favorites: 12,
      status: 'فعال',
      registerDate: '۱۴۰۲/۰۶/۱۵',
      lastActivity: '۱۴۰۳/۰۱/۱۴',
      avatar: 'رک',
      location: 'اصفهان',
      segment: 'VIP',
      budget: 2500000000,
      preferredType: 'آپارتمان',
      preferredLocation: 'شمال اصفهان',
      purchaseHistory: 2,
      totalSpent: 1800000000,
      satisfaction: 4.8,
      responseRate: 95,
      engagement: 'بالا',
      source: 'تبلیغات آنلاین',
      agent: 'علی رضایی',
      notes: 'مشتری پرطرفدار، علاقه به آپارتمان‌های لوکس',
      tags: ['VIP', 'خریدار جدی', 'آپارتمان'],
      lastInquiry: '۱۴۰۳/۰۱/۱۴',
      nextFollowUp: '۱۴۰۳/۰۱/۲۰'
    },
    {
      id: 2,
      name: 'نرگس احمدی',
      email: 'narges@email.com',
      phone: '۰۹۱۸۷۶۵۴۳۲۱',
      inquiries: 8,
      favorites: 23,
      status: 'فعال',
      registerDate: '۱۴۰۲/۰۸/۲۰',
      lastActivity: '۱۴۰۳/۰۱/۱۵',
      avatar: 'نا',
      location: 'اصفهان',
      segment: 'Premium',
      budget: 1800000000,
      preferredType: 'ویلا',
      preferredLocation: 'اصفهان',
      purchaseHistory: 1,
      totalSpent: 1200000000,
      satisfaction: 4.6,
      responseRate: 88,
      engagement: 'بالا',
      source: 'معرفی دوستان',
      agent: 'زهرا محمدی',
      notes: 'علاقه به ویلاهای باغی، بودجه مناسب',
      tags: ['Premium', 'ویلا', 'باغ'],
      lastInquiry: '۱۴۰۳/۰۱/۱۵',
      nextFollowUp: '۱۴۰۳/۰۱/۱۸'
    },
    {
      id: 3,
      name: 'امیر حسینی',
      email: 'amir@email.com',
      phone: '۰۹۱۵۵۵۵۵۵۵۵',
      inquiries: 2,
      favorites: 3,
      status: 'غیرفعال',
      registerDate: '۱۴۰۲/۰۹/۱۰',
      lastActivity: '۱۴۰۲/۱۲/۲۵',
      avatar: 'اح',
      location: 'مشهد',
      segment: 'Standard',
      budget: 800000000,
      preferredType: 'زمین',
      preferredLocation: 'مشهد',
      purchaseHistory: 0,
      totalSpent: 0,
      satisfaction: 3.2,
      responseRate: 45,
      engagement: 'پایین',
      source: 'موتور جستجو',
      agent: 'حسن احمدی',
      notes: 'فعالیت کم، نیاز به پیگیری بیشتر',
      tags: ['Standard', 'زمین', 'نیاز به پیگیری'],
      lastInquiry: '۱۴۰۲/۱۲/۲۵',
      nextFollowUp: '۱۴۰۳/۰۱/۲۵'
    },
    {
      id: 4,
      name: 'سارا محمدی',
      email: 'sara@email.com',
      phone: '۰۹۱۹۹۹۹۹۹۹۹',
      inquiries: 15,
      favorites: 45,
      status: 'فعال',
      registerDate: '۱۴۰۲/۰۳/۰۵',
      lastActivity: '۱۴۰۳/۰۱/۱۵',
      avatar: 'سم',
      location: 'شیراز',
      segment: 'VIP',
      budget: 3200000000,
      preferredType: 'مغازه',
      preferredLocation: 'مرکز شهر',
      purchaseHistory: 3,
      totalSpent: 2800000000,
      satisfaction: 4.9,
      responseRate: 98,
      engagement: 'خیلی بالا',
      source: 'تبلیغات تلویزیونی',
      agent: 'مریم حسینی',
      notes: 'مشتری طلایی، خریدار تجاری',
      tags: ['VIP', 'مغازه', 'تجاری', 'طلایی'],
      lastInquiry: '۱۴۰۳/۰۱/۱۵',
      nextFollowUp: '۱۴۰۳/۰۱/۱۷'
    },
    {
      id: 5,
      name: 'محمد رضایی',
      email: 'mohammad@email.com',
      phone: '۰۹۱۱۱۱۱۱۱۱۱',
      inquiries: 3,
      favorites: 7,
      status: 'فعال',
      registerDate: '۱۴۰۲/۱۱/۱۲',
      lastActivity: '۱۴۰۳/۰۱/۱۳',
      avatar: 'مر',
      location: 'تبریز',
      segment: 'Standard',
      budget: 1200000000,
      preferredType: 'آپارتمان',
      preferredLocation: 'تبریز',
      purchaseHistory: 0,
      totalSpent: 0,
      satisfaction: 4.1,
      responseRate: 72,
      engagement: 'متوسط',
      source: 'شبکه‌های اجتماعی',
      agent: 'محمد کریمی',
      notes: 'مشتری جدید، در حال بررسی گزینه‌ها',
      tags: ['Standard', 'آپارتمان', 'جدید'],
      lastInquiry: '۱۴۰۳/۰۱/۱۳',
      nextFollowUp: '۱۴۰۳/۰۱/۱۹'
    },
    {
      id: 6,
      name: 'فاطمه نوری',
      email: 'fateme@email.com',
      phone: '۰۹۱۶۶۶۶۶۶۶۶',
      inquiries: 6,
      favorites: 18,
      status: 'فعال',
      registerDate: '۱۴۰۲/۱۰/۰۸',
      lastActivity: '۱۴۰۳/۰۱/۱۴',
      avatar: 'فن',
      location: 'کرج',
      segment: 'Premium',
      budget: 1500000000,
      preferredType: 'ویلا',
      preferredLocation: 'کرج',
      purchaseHistory: 1,
      totalSpent: 950000000,
      satisfaction: 4.5,
      responseRate: 82,
      engagement: 'بالا',
      source: 'معرفی مشاور',
      agent: 'فاطمه نوری',
      notes: 'علاقه به ویلاهای مدرن',
      tags: ['Premium', 'ویلا', 'مدرن'],
      lastInquiry: '۱۴۰۳/۰۱/۱۴',
      nextFollowUp: '۱۴۰۳/۰۱/۱۶'
    }
  ];

  // Filter customers based on search and filters
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
    const matchesSegment = segmentFilter === 'all' || customer.segment === segmentFilter;
    const matchesActivity = activityFilter === 'all' || customer.engagement === activityFilter;
    
    return matchesSearch && matchesStatus && matchesSegment && matchesActivity;
  });

  const getSegmentColor = (segment: string) => {
    switch (segment) {
      case 'VIP':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Premium':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Standard':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'فعال' 
      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
      : 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  const getEngagementColor = (engagement: string) => {
    switch (engagement) {
      case 'خیلی بالا':
        return 'bg-emerald-500/20 text-emerald-400';
      case 'بالا':
        return 'bg-green-500/20 text-green-400';
      case 'متوسط':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'پایین':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSegmentIcon = (segment: string) => {
    switch (segment) {
      case 'VIP':
        return <Crown className="h-4 w-4 text-yellow-400" />;
      case 'Premium':
        return <Award className="h-4 w-4 text-purple-400" />;
      case 'Standard':
        return <UserCheck className="h-4 w-4 text-blue-400" />;
      default:
        return <Users className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-100">مدیریت مشتریان</h1>
          <p className="text-gray-400 mt-1">مدیریت و تحلیل رفتار مشتریان و رضایت آن‌ها</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all duration-300">
            <Download className="h-4 w-4 ml-2" />
            گزارش
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
            <Plus className="h-5 w-5 text-white ml-2" />
            افزودن مشتری جدید
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
            
            {/* Segment Filter */}
            <div className="lg:w-48">
              <select
                value={segmentFilter}
                onChange={(e) => setSegmentFilter(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-gray-100 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none"
              >
                <option value="all">همه بخش‌ها</option>
                <option value="VIP">VIP</option>
                <option value="Premium">Premium</option>
                <option value="Standard">Standard</option>
              </select>
            </div>

            {/* Activity Filter */}
            <div className="lg:w-48">
              <select
                value={activityFilter}
                onChange={(e) => setActivityFilter(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-gray-100 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none"
              >
                <option value="all">همه فعالیت‌ها</option>
                <option value="خیلی بالا">خیلی بالا</option>
                <option value="بالا">بالا</option>
                <option value="متوسط">متوسط</option>
                <option value="پایین">پایین</option>
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
                <p className="text-emerald-400 text-sm font-medium">مشتریان فعال</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">
                  {customers.filter(customer => customer.status === 'فعال').length}
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
                <p className="text-blue-400 text-sm font-medium">کل مشتریان</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">{customers.length}</p>
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
                <p className="text-purple-400 text-sm font-medium">کل خریدها</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">
                  {customers.reduce((sum, customer) => sum + customer.purchaseHistory, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-400 text-sm font-medium">میانگین رضایت</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">
                  {(customers.reduce((sum, customer) => sum + customer.satisfaction, 0) / customers.length).toFixed(1)}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {customer.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">{customer.name}</h3>
                    <p className="text-sm text-gray-400">{customer.email}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {customer.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">{customer.satisfaction}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              </div>

              {/* Status & Segment */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(customer.status)}`}>
                  {customer.status}
                </span>
                <div className="flex items-center gap-2">
                  {getSegmentIcon(customer.segment)}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSegmentColor(customer.segment)}`}>
                    {customer.segment}
                  </span>
                </div>
              </div>

              {/* Engagement */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">سطح تعامل:</p>
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getEngagementColor(customer.engagement)}`}>
                  {customer.engagement}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                  <p className="text-2xl font-bold text-gray-100">{customer.inquiries}</p>
                  <p className="text-xs text-gray-400">استعلامات</p>
                </div>
                <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                  <p className="text-2xl font-bold text-gray-100">{customer.favorites}</p>
                  <p className="text-xs text-gray-400">علاقه‌مندی</p>
                </div>
              </div>

              {/* Customer Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">بودجه:</span>
                  <span className="text-gray-100 font-medium">{customer.budget.toLocaleString()} تومان</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">نوع مورد نظر:</span>
                  <span className="text-gray-100 font-medium">{customer.preferredType}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">خریدهای انجام شده:</span>
                  <span className="text-gray-100 font-medium">{customer.purchaseHistory}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">کل هزینه:</span>
                  <span className="text-gray-100 font-medium">{customer.totalSpent.toLocaleString()} تومان</span>
                </div>
              </div>

              {/* Agent & Source */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">مشاور:</span>
                  <span className="text-gray-100 font-medium">{customer.agent}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">منبع:</span>
                  <span className="text-gray-100 font-medium">{customer.source}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">برچسب‌ها:</p>
                <div className="flex flex-wrap gap-1">
                  {customer.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                  {customer.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                      +{customer.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" />
                  <span>آخرین فعالیت: {customer.lastActivity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>عضو از: {customer.registerDate}</span>
                </div>
              </div>

              {/* Follow-up Info */}
              <div className="mb-4 p-3 bg-gray-700/30 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">پیگیری بعدی:</span>
                  <span className="text-gray-100 font-medium">{customer.nextFollowUp}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-gray-400">نرخ پاسخ:</span>
                  <span className="text-gray-100 font-medium">{customer.responseRate}%</span>
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
      {filteredCustomers.length === 0 && (
        <Card className="bg-gray-800/50 border-gray-700/50">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">هیچ مشتری یافت نشد</h3>
            <p className="text-gray-400">با فیلترهای فعلی هیچ مشتری پیدا نشد. لطفاً فیلترها را تغییر دهید.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CustomersPage;
