import React from 'react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, MoreHorizontal, Edit, Trash, Eye, Building, MapPin } from 'lucide-react';

const ListingsPage: React.FC = () => {
  // Mock data for listings
  const listings = [
    {
      id: 1,
      title: 'آپارتمان ۳ خوابه در ونک',
      type: 'فروش',
      price: '۱۵,۰۰۰,۰۰۰,۰۰۰',
      area: '۱۵۰',
      bedrooms: 3,
      bathrooms: 2,
      location: 'ونک، تهران',
      agent: 'علی رضایی',
      status: 'فعال',
      views: 245,
      publishDate: '۱۴۰۳/۰۱/۱۰'
    },
    {
      id: 2,
      title: 'ویلا ۴ خوابه در شمال',
      type: 'فروش',
      price: '۲۵,۰۰۰,۰۰۰,۰۰۰',
      area: '۲۸۰',
      bedrooms: 4,
      bathrooms: 3,
      location: 'شمال تهران',
      agent: 'زهرا محمدی',
      status: 'فعال',
      views: 189,
      publishDate: '۱۴۰۳/۰۱/۱۲'
    },
    {
      id: 3,
      title: 'آپارتمان ۲ خوابه اجاره‌ای',
      type: 'اجاره',
      price: '۲۵,۰۰۰,۰۰۰',
      area: '۱۲۰',
      bedrooms: 2,
      bathrooms: 1,
      location: 'پاسداران، تهران',
      agent: 'حسن احمدی',
      status: 'منقضی شده',
      views: 156,
      publishDate: '۱۴۰۲/۱۲/۲۰'
    },
    {
      id: 4,
      title: 'پنت‌هاوس لوکس در مرکز شهر',
      type: 'فروش',
      price: '۳۵,۰۰۰,۰۰۰,۰۰۰',
      area: '۳۲۰',
      bedrooms: 4,
      bathrooms: 3,
      location: 'مرکز تهران',
      agent: 'مریم حسینی',
      status: 'فعال',
      views: 312,
      publishDate: '۱۴۰۳/۰۱/۰۸'
    },
    {
      id: 5,
      title: 'آپارتمان ۱ خوابه استودیو',
      type: 'اجاره',
      price: '۱۸,۰۰۰,۰۰۰',
      area: '۷۵',
      bedrooms: 1,
      bathrooms: 1,
      location: 'تجریش، تهران',
      agent: 'علی رضایی',
      status: 'فعال',
      views: 98,
      publishDate: '۱۴۰۳/۰۱/۱۴'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-100">مدیریت آگهی‌ها</CardTitle>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <Plus className="h-5 w-5 text-white ml-2" />
              افزودن آگهی جدید
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-gray-700">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700 hover:bg-gray-800/50">
                  <TableHead className="text-gray-300">عنوان آگهی</TableHead>
                  <TableHead className="text-gray-300">نوع</TableHead>
                  <TableHead className="text-gray-300">قیمت</TableHead>
                  <TableHead className="text-gray-300">متراژ</TableHead>
                  <TableHead className="text-gray-300">موقعیت</TableHead>
                  <TableHead className="text-gray-300">مشاور</TableHead>
                  <TableHead className="text-gray-300">وضعیت</TableHead>
                  <TableHead className="text-gray-300">بازدید</TableHead>
                  <TableHead className="text-gray-300">عملیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listings.map((listing) => (
                  <TableRow key={listing.id} className="border-gray-700 hover:bg-gray-800/50">
                    <TableCell className="text-gray-100 font-medium max-w-xs">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-gray-400" />
                        <span className="truncate">{listing.title}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        listing.type === 'فروش' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {listing.type}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-300 font-medium">{listing.price} تومان</TableCell>
                    <TableCell className="text-gray-300">{listing.area} متر</TableCell>
                    <TableCell className="text-gray-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-gray-400" />
                        {listing.location}
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-300">{listing.agent}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        listing.status === 'فعال' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {listing.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-300">{listing.views}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4 text-gray-400" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4 text-gray-400" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-400 hover:text-red-300">
                          <Trash className="h-4 w-4 text-red-400" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4 text-gray-400" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListingsPage;
