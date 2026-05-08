"use client";

import React from 'react';
import { Users, ShoppingBag, ArrowLeftRight, TrendingUp, BarChart3, Package, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Users', value: '12,482', icon: <Users className="w-5 h-5" />, color: 'bg-blue-500' },
    { label: 'Total Sales', value: '$48,290', icon: <ShoppingBag className="w-5 h-5" />, color: 'bg-green-500' },
    { label: 'Active Trades', value: '842', icon: <ArrowLeftRight className="w-5 h-5" />, color: 'bg-orange-500' },
    { label: 'Foot Scans', value: '5,291', icon: <TrendingUp className="w-5 h-5" />, color: 'bg-purple-500' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button className="bg-gray-900 text-white rounded-full">Download Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm rounded-3xl">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className={`${stat.color} p-3 rounded-2xl text-white`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="p-8 pb-0">
            <CardTitle className="text-xl font-bold">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: '#SW-1001', user: 'Alex J.', product: 'Air Max Pulse', amount: '$150.00', status: 'Completed' },
                  { id: '#SW-1002', user: 'Sarah K.', product: 'Ultraboost Light', amount: '$190.00', status: 'Processing' },
                  { id: '#SW-1003', user: 'Mike R.', product: 'Cloudmonster', amount: '$170.00', status: 'Shipped' },
                  { id: '#SW-1004', user: 'David L.', product: 'Gel-Kayano 30', amount: '$160.00', status: 'Completed' },
                ].map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.id}</TableCell>
                    <TableCell>{row.user}</TableCell>
                    <TableCell>{row.product}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        row.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                        row.status === 'Processing' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {row.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="p-8 pb-0">
            <CardTitle className="text-xl font-bold">System Alerts</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            {[
              { title: 'New Trade Request', desc: 'User #829 requested a trade for Jordan 1s.', time: '10m ago' },
              { title: 'Scan Error Reported', desc: 'Multiple users reporting camera issues on iOS.', time: '1h ago' },
              { title: 'Inventory Low', desc: 'Nike Air Max Pulse is almost out of stock.', time: '3h ago' },
            ].map((alert, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="bg-red-50 p-2 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{alert.title}</h4>
                  <p className="text-xs text-gray-500 mb-1">{alert.desc}</p>
                  <span className="text-[10px] text-gray-400">{alert.time}</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full rounded-full mt-4">View All Alerts</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;