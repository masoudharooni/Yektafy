import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Plus, Search, MoreHorizontal, Edit, Trash, Eye, Crown, Shield, User, Calendar, Clock } from 'lucide-react';

const AdminsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  // Mock data for admins
  const admins = [
    {
      id: 1,
      name: 'احمد محمدی',
      email: 'ahmad@yektafy.com',
      role: 'مدیر کل',
      status: 'فعال',
      lastLogin: '۱۴۰۳/۰۱/۱۵',
      createdAt: '۱۴۰۲/۰۶/۱۰',
      avatar: 'AM',
      permissions: ['مدیریت کاربران', 'مدیریت محتوا', 'گزارش‌گیری'],
      phone: '۰۹۱۲۳۴۵۶۷۸۹'
    },
    {
      id: 2,
      name: 'فاطمه احمدی',
      email: 'fateme@yektafy.com',
      role: 'مدیر محتوا',
      status: 'فعال',
      lastLogin: '۱۴۰۳/۰۱/۱۴',
      createdAt: '۱۴۰۲/۰۸/۲۰',
      avatar: 'فا',
      permissions: ['مدیریت محتوا', 'گزارش‌گیری'],
      phone: '۰۹۱۲۳۴۵۶۷۸۰'
    },
    {
      id: 3,
      name: 'محمد رضایی',
      email: 'mohammad@yektafy.com',
      role: 'مدیر فنی',
      status: 'غیرفعال',
      lastLogin: '۱۴۰۳/۰۱/۱۰',
      createdAt: '۱۴۰۲/۰۵/۱۵',
      avatar: 'مح',
      permissions: ['مدیریت سیستم', 'مدیریت امنیت'],
      phone: '۰۹۱۲۳۴۵۶۷۷۷'
    },
    {
      id: 4,
      name: 'زهرا کریمی',
      email: 'zahra@yektafy.com',
      role: 'مدیر مالی',
      status: 'فعال',
      lastLogin: '۱۴۰۳/۰۱/۱۶',
      createdAt: '۱۴۰۲/۰۹/۰۵',
      avatar: 'زک',
      permissions: ['مدیریت مالی', 'گزارش‌گیری'],
      phone: '۰۹۱۲۳۴۵۶۷۶۶'
    },
    {
      id: 5,
      name: 'علی نوری',
      email: 'ali@yektafy.com',
      role: 'مدیر پشتیبانی',
      status: 'فعال',
      lastLogin: '۱۴۰۳/۰۱/۱۵',
      createdAt: '۱۴۰۲/۰۷/۱۲',
      avatar: 'عن',
      permissions: ['مدیریت پشتیبانی', 'مدیریت تیکت‌ها'],
      phone: '۰۹۱۲۳۴۵۶۷۵۵'
    }
  ];

  // Filter admins based on search and filters
  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || admin.status === statusFilter;
    const matchesRole = roleFilter === 'all' || admin.role === roleFilter;
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'مدیر کل':
        return <Crown className="h-5 w-5 text-yellow-400" />;
      case 'مدیر فنی':
        return <Shield className="h-5 w-5 text-blue-500" />;
      default:
        return <User className="h-5 w-5 text-green-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'فعال' 
      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
      : 'bg-red-500/20 text-red-400 border-red-500/30';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-100">مدیریت مدیران</h1>
          <p className="text-gray-400 mt-1">مدیریت و کنترل دسترسی مدیران سیستم</p>
        </div>
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          <Plus className="h-5 w-5 text-white ml-2" />
          افزودن مدیر جدید
        </Button>
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
                placeholder="جستجو در نام یا ایمیل..."
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
            
            {/* Role Filter */}
            <div className="lg:w-48">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-gray-100 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none"
              >
                <option value="all">همه نقش‌ها</option>
                <option value="مدیر کل">مدیر کل</option>
                <option value="مدیر محتوا">مدیر محتوا</option>
                <option value="مدیر فنی">مدیر فنی</option>
                <option value="مدیر مالی">مدیر مالی</option>
                <option value="مدیر پشتیبانی">مدیر پشتیبانی</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-400 text-sm font-medium">مدیران فعال</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">
                  {admins.filter(admin => admin.status === 'فعال').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-400 text-sm font-medium">کل مدیران</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">{admins.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Crown className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-400 text-sm font-medium">نقش‌های مختلف</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">
                  {new Set(admins.map(admin => admin.role)).size}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Admin Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAdmins.map((admin) => (
          <Card key={admin.id} className="bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {admin.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">{admin.name}</h3>
                    <p className="text-sm text-gray-400">{admin.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getRoleIcon(admin.role)}
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              </div>

              {/* Role & Status */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-300">{admin.role}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(admin.status)}`}>
                  {admin.status}
                </span>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>📱</span>
                  <span>{admin.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-3.5 w-3.5 text-gray-400" />
                  <span>آخرین ورود: {admin.lastLogin}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="h-3.5 w-3.5 text-gray-400" />
                  <span>عضو از: {admin.createdAt}</span>
                </div>
              </div>

              {/* Permissions */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">دسترسی‌ها:</p>
                <div className="flex flex-wrap gap-1">
                  {admin.permissions.map((permission, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md">
                      {permission}
                    </span>
                  ))}
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
                <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredAdmins.length === 0 && (
        <Card className="bg-gray-800/50 border-gray-700/50">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">هیچ مدیری یافت نشد</h3>
            <p className="text-gray-400">با فیلترهای فعلی هیچ مدیری پیدا نشد. لطفاً فیلترها را تغییر دهید.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdminsPage;
