import React from 'react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Add, RowHorizontal, Edit, Trash } from 'iconsax-react';

const AdminsPage: React.FC = () => {
  // Mock data for admins
  const admins = [
    {
      id: 1,
      name: 'احمد محمدی',
      email: 'ahmad@yektafy.com',
      role: 'مدیر کل',
      status: 'فعال',
      lastLogin: '۱۴۰۳/۰۱/۱۵',
      createdAt: '۱۴۰۲/۰۶/۱۰'
    },
    {
      id: 2,
      name: 'فاطمه احمدی',
      email: 'fateme@yektafy.com',
      role: 'مدیر محتوا',
      status: 'فعال',
      lastLogin: '۱۴۰۳/۰۱/۱۴',
      createdAt: '۱۴۰۲/۰۸/۲۰'
    },
    {
      id: 3,
      name: 'محمد رضایی',
      email: 'mohammad@yektafy.com',
      role: 'مدیر فنی',
      status: 'غیرفعال',
      lastLogin: '۱۴۰۳/۰۱/۱۰',
      createdAt: '۱۴۰۲/۰۵/۱۵'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-100">مدیریت مدیران</CardTitle>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <Add size={20} color="#ffffff" className="ml-2" />
              افزودن مدیر جدید
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
                  <TableHead className="text-gray-300">نقش</TableHead>
                  <TableHead className="text-gray-300">وضعیت</TableHead>
                  <TableHead className="text-gray-300">آخرین ورود</TableHead>
                  <TableHead className="text-gray-300">تاریخ عضویت</TableHead>
                  <TableHead className="text-gray-300">عملیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {admins.map((admin) => (
                  <TableRow key={admin.id} className="border-gray-700 hover:bg-gray-800/50">
                    <TableCell className="text-gray-100 font-medium">{admin.name}</TableCell>
                    <TableCell className="text-gray-300">{admin.email}</TableCell>
                    <TableCell className="text-gray-300">{admin.role}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        admin.status === 'فعال' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {admin.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-300">{admin.lastLogin}</TableCell>
                    <TableCell className="text-gray-300">{admin.createdAt}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
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

export default AdminsPage;
