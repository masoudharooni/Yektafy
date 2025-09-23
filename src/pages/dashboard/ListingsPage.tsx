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
  Building, 
  MapPin, 
  Calendar, 
  Clock, 
  Download,
  Heart,
  Share2,
  Home,
  Building2,
  Key,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ListingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  // Enhanced mock data for listings
  const listings = [
    {
      id: 1,
      title: 'آپارتمان ۳ خوابه در ونک',
      type: 'فروش',
      price: 15000000000,
      area: 150,
      bedrooms: 3,
      bathrooms: 2,
      location: 'ونک، اصفهان',
      agent: 'علی رضایی',
      status: 'فعال',
      views: 245,
      favorites: 12,
      inquiries: 8,
      publishDate: '۱۴۰۳/۰۱/۱۰',
      lastUpdate: '۱۴۰۳/۰۱/۱۵',
      images: ['/api/placeholder/400/300'],
      description: 'آپارتمان زیبا و مدرن در منطقه ونک با دسترسی عالی به مراکز خرید و حمل و نقل عمومی',
      features: ['پارکینگ', 'انباری', 'آسانسور', 'بالکن'],
      propertyType: 'آپارتمان',
      floor: 8,
      totalFloors: 12,
      yearBuilt: 1395,
      parking: true,
      elevator: true,
      balcony: true,
      storage: true
    },
    {
      id: 2,
      title: 'ویلا ۴ خوابه در شمال',
      type: 'فروش',
      price: 25000000000,
      area: 280,
      bedrooms: 4,
      bathrooms: 3,
      location: 'شمال اصفهان',
      agent: 'زهرا محمدی',
      status: 'فعال',
      views: 189,
      favorites: 23,
      inquiries: 15,
      publishDate: '۱۴۰۳/۰۱/۱۲',
      lastUpdate: '۱۴۰۳/۰۱/۱۶',
      images: ['/api/placeholder/400/300'],
      description: 'ویلا لوکس با باغ زیبا و استخر در منطقه شمال اصفهان',
      features: ['استخر', 'باغ', 'پارکینگ', 'انباری'],
      propertyType: 'ویلا',
      floor: 0,
      totalFloors: 2,
      yearBuilt: 1390,
      parking: true,
      elevator: false,
      balcony: true,
      storage: true
    },
    {
      id: 3,
      title: 'آپارتمان ۲ خوابه اجاره‌ای',
      type: 'اجاره',
      price: 25000000,
      area: 120,
      bedrooms: 2,
      bathrooms: 1,
      location: 'پاسداران، اصفهان',
      agent: 'حسن احمدی',
      status: 'منقضی شده',
      views: 156,
      favorites: 5,
      inquiries: 3,
      publishDate: '۱۴۰۲/۱۲/۲۰',
      lastUpdate: '۱۴۰۲/۱۲/۲۵',
      images: ['/api/placeholder/400/300'],
      description: 'آپارتمان مناسب برای اجاره در منطقه پاسداران',
      features: ['پارکینگ', 'آسانسور'],
      propertyType: 'آپارتمان',
      floor: 5,
      totalFloors: 8,
      yearBuilt: 1385,
      parking: true,
      elevator: true,
      balcony: false,
      storage: false
    },
    {
      id: 4,
      title: 'پنت‌هاوس لوکس در مرکز شهر',
      type: 'فروش',
      price: 35000000000,
      area: 320,
      bedrooms: 4,
      bathrooms: 3,
      location: 'مرکز اصفهان',
      agent: 'مریم حسینی',
      status: 'فعال',
      views: 312,
      favorites: 45,
      inquiries: 28,
      publishDate: '۱۴۰۳/۰۱/۰۸',
      lastUpdate: '۱۴۰۳/۰۱/۱۷',
      images: ['/api/placeholder/400/300'],
      description: 'پنت‌هاوس فوق‌العاده با تراس بزرگ و نمای ۳۶۰ درجه',
      features: ['تراس', 'پارکینگ', 'انباری', 'آسانسور'],
      propertyType: 'پنت‌هاوس',
      floor: 20,
      totalFloors: 20,
      yearBuilt: 1400,
      parking: true,
      elevator: true,
      balcony: true,
      storage: true
    },
    {
      id: 5,
      title: 'آپارتمان ۱ خوابه استودیو',
      type: 'اجاره',
      price: 18000000,
      area: 75,
      bedrooms: 1,
      bathrooms: 1,
      location: 'تجریش، اصفهان',
      agent: 'علی رضایی',
      status: 'فعال',
      views: 98,
      favorites: 7,
      inquiries: 4,
      publishDate: '۱۴۰۳/۰۱/۱۴',
      lastUpdate: '۱۴۰۳/۰۱/۱۸',
      images: ['/api/placeholder/400/300'],
      description: 'استودیو مدرن و مناسب برای افراد مجرد',
      features: ['پارکینگ', 'آسانسور'],
      propertyType: 'استودیو',
      floor: 3,
      totalFloors: 6,
      yearBuilt: 1398,
      parking: true,
      elevator: true,
      balcony: false,
      storage: false
    },
    {
      id: 6,
      title: 'زمین ۵۰۰ متری در کرج',
      type: 'فروش',
      price: 8500000000,
      area: 500,
      bedrooms: 0,
      bathrooms: 0,
      location: 'کرج',
      agent: 'محمد کریمی',
      status: 'فعال',
      views: 134,
      favorites: 8,
      inquiries: 6,
      publishDate: '۱۴۰۳/۰۱/۱۱',
      lastUpdate: '۱۴۰۳/۰۱/۱۹',
      images: ['/api/placeholder/400/300'],
      description: 'زمین مسکونی مناسب برای ساخت و ساز',
      features: ['دسترسی آسان', 'آب و برق'],
      propertyType: 'زمین',
      floor: 0,
      totalFloors: 0,
      yearBuilt: 0,
      parking: false,
      elevator: false,
      balcony: false,
      storage: false
    }
  ];

  // Filter listings based on search and filters
  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.propertyType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || listing.status === statusFilter;
    const matchesType = typeFilter === 'all' || listing.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'فعال':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'منقضی شده':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'در انتظار':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'فروش' 
      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
      : 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  };

  const formatPrice = (price: number, type: string) => {
    if (type === 'اجاره') {
      return `${price.toLocaleString()} تومان`;
    } else {
      return `${price.toLocaleString()} تومان`;
    }
  };

  const getPropertyIcon = (propertyType: string) => {
    switch (propertyType) {
      case 'آپارتمان':
        return <Building className="h-4 w-4 text-blue-400" />;
      case 'ویلا':
        return <Home className="h-4 w-4 text-green-400" />;
      case 'پنت‌هاوس':
        return <Building2 className="h-4 w-4 text-purple-400" />;
      case 'استودیو':
        return <Key className="h-4 w-4 text-orange-400" />;
      case 'زمین':
        return <MapPin className="h-4 w-4 text-yellow-400" />;
      default:
        return <Building className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">مدیریت آگهی‌ها</h1>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">آگهی‌های خود را مدیریت کنید و عملکرد آن‌ها را بررسی کنید</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Button className="bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all duration-300 flex-1 sm:flex-none">
            <Download className="h-4 w-4 ml-2" />
            گزارش
          </Button>
          <Button 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex-1 sm:flex-none"
            onClick={() => navigate('/dashboard/listings/add')}
          >
            <Plus className="h-5 w-5 text-white ml-2" />
            افزودن آگهی جدید
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
                placeholder="جستجو در عنوان، مکان یا نوع ملک..."
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
                <option value="منقضی شده">منقضی شده</option>
                <option value="در انتظار">در انتظار</option>
              </select>
            </div>
            
            {/* Type Filter */}
            <div className="lg:w-48">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-gray-100 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none"
              >
                <option value="all">همه انواع</option>
                <option value="فروش">فروش</option>
                <option value="اجاره">اجاره</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-400 text-sm font-medium">آگهی‌های فعال</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">
                  {listings.filter(listing => listing.status === 'فعال').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-400 text-sm font-medium">کل آگهی‌ها</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">{listings.length}</p>
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
                <p className="text-purple-400 text-sm font-medium">کل بازدیدها</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">
                  {listings.reduce((sum, listing) => sum + listing.views, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Eye className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-400 text-sm font-medium">کل علاقه‌مندی‌ها</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">
                  {listings.reduce((sum, listing) => sum + listing.favorites, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredListings.map((listing) => (
          <Card key={listing.id} className="bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group h-fit">
            <CardContent className="p-0">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(listing.type)}`}>
                    {listing.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(listing.status)}`}>
                    {listing.status}
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 text-white">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">{listing.favorites}</span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">{listing.views}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Property Type */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-100 mb-1 line-clamp-2">{listing.title}</h3>
                    <div className="flex items-center gap-2">
                      {getPropertyIcon(listing.propertyType)}
                      <span className="text-sm text-gray-400">{listing.propertyType}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <p className="text-2xl font-bold text-cyan-400">{formatPrice(listing.price, listing.type)}</p>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">متراژ:</span>
                    <span className="text-gray-100 font-medium">{listing.area} متر</span>
                  </div>
                  {listing.bedrooms > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">اتاق خواب:</span>
                      <span className="text-gray-100 font-medium">{listing.bedrooms}</span>
                    </div>
                  )}
                  {listing.bathrooms > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">حمام:</span>
                      <span className="text-gray-100 font-medium">{listing.bathrooms}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">مشاور:</span>
                    <span className="text-gray-100 font-medium">{listing.agent}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{listing.location}</span>
                  </div>
                </div>

                {/* Features */}
                {listing.features.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {listing.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md">
                          {feature}
                        </span>
                      ))}
                      {listing.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                          +{listing.features.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Dates */}
                <div className="space-y-2 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>انتشار: {listing.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    <span>آخرین بروزرسانی: {listing.lastUpdate}</span>
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
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredListings.length === 0 && (
        <Card className="bg-gray-800/50 border-gray-700/50">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">هیچ آگهی یافت نشد</h3>
            <p className="text-gray-400">با فیلترهای فعلی هیچ آگهی پیدا نشد. لطفاً فیلترها را تغییر دهید.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ListingsPage;
