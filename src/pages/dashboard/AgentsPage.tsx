import React from 'react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Add, RowHorizontal, Edit, Trash, Eye } from 'iconsax-react';

const AgentsPage: React.FC = () => {
  // Mock data for agents
  const agents = [
    {
      id: 1,
      name: 'علی رضایی',
      email: 'ali@yektafy.com',
      phone: '۰۹۱۲۳۴۵۶۷۸۹',
      listings: 15,
      status: 'فعال',
      rating: 4.8,
      joinDate: '۱۴۰۲/۰۳/۱۵'
    },
    {
      id: 2,
      name: 'زهرا محمدی',
      email: 'zahra@yektafy.com',
      phone: '۰۹۱۸۷۶۵۴۳۲۱',
      listings: 23,
      status: 'فعال',
      rating: 4.9,
      joinDate: '۱۴۰۲/۰۵/۲۰'
    },
    {
      id: 3,
      name: 'حسن احمدی',
      email: 'hasan@yektafy.com',
      phone: '۰۹۱۵۵۵۵۵۵۵۵',
      listings: 8,
      status: 'غیرفعال',
      rating: 4.2,
      joinDate: '۱۴۰۲/۰۷/۱۰'
    },
    {
      id: 4,
      name: 'مریم حسینی',
      email: 'maryam@yektafy.com',
      phone: '۰۹۱۹۹۹۹۹۹۹۹',
      listings: 31,
      status: 'فعال',
      rating: 4.7,
      joinDate: '۱۴۰۲/۰۲/۰۵'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-100">مدیریت مشاوران</CardTitle>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <Add size={20} color="#ffffff" className="ml-2" />
              افزودن مشاور جدید
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
                  <TableHead className="text-gray-300">تعداد آگهی</TableHead>
                  <TableHead className="text-gray-300">امتیاز</TableHead>
                  <TableHead className="text-gray-300">وضعیت</TableHead>
                  <TableHead className="text-gray-300">تاریخ عضویت</TableHead>
                  <TableHead className="text-gray-300">عملیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agents.map((agent) => (
                  <TableRow key={agent.id} className="border-gray-700 hover:bg-gray-800/50">
                    <TableCell className="text-gray-100 font-medium">{agent.name}</TableCell>
                    <TableCell className="text-gray-300">{agent.email}</TableCell>
                    <TableCell className="text-gray-300">{agent.phone}</TableCell>
                    <TableCell className="text-gray-300">{agent.listings}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-gray-300">{agent.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        agent.status === 'فعال' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {agent.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-300">{agent.joinDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye size={16} color="#9ca3af" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit size={16} color="#9ca3af" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-400 hover:text-red-300">
                          <Trash size={16} color="#f87171" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <RowHorizontal size={16} color="#9ca3af" />
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

export default AgentsPage;
