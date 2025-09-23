import React from 'react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, MoreHorizontal, Edit, Trash, Eye, MessageSquare } from 'lucide-react';

const CustomersPage: React.FC = () => {
  // Mock data for customers
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
      lastActivity: '۱۴۰۳/۰۱/۱۴'
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
      lastActivity: '۱۴۰۳/۰۱/۱۵'
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
      lastActivity: '۱۴۰۲/۱۲/۲۵'
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
      lastActivity: '۱۴۰۳/۰۱/۱۵'
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
      lastActivity: '۱۴۰۳/۰۱/۱۳'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-100">مدیریت مشتریان</CardTitle>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <Plus className="h-5 w-5 text-white ml-2" />
              افزودن مشتری جدید
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-gray-700">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700 hover:bg-gray-800/50">
                  <TableHead className="text-gray-300">نام</TableHead>
                  <TableHead className="text-gray-300">ایمیل</TableHead>
                  <TableHead className="text-gray-300">تلفن</TableHead>
                  <TableHead className="text-gray-300">استعلامات</TableHead>
                  <TableHead className="text-gray-300">علاقه‌مندی‌ها</TableHead>
                  <TableHead className="text-gray-300">وضعیت</TableHead>
                  <TableHead className="text-gray-300">آخرین فعالیت</TableHead>
                  <TableHead className="text-gray-300">عملیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id} className="border-gray-700 hover:bg-gray-800/50">
                    <TableCell className="text-gray-100 font-medium">{customer.name}</TableCell>
                    <TableCell className="text-gray-300">{customer.email}</TableCell>
                    <TableCell className="text-gray-300">{customer.phone}</TableCell>
                    <TableCell>
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                        {customer.inquiries}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs font-medium">
                        {customer.favorites}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        customer.status === 'فعال' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {customer.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-300">{customer.lastActivity}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4 text-gray-400" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MessageSquare className="h-4 w-4 text-gray-400" />
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

export default CustomersPage;
