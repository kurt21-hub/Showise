"use client";

import React from 'react';
import { TrendingUp, DollarSign, PieChart, ArrowUpRight, ArrowDownRight, Info, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '@/lib/utils';

const SneakerPortfolioPage = () => {
  const historyData = [
    { month: 'Jan', value: 1200 },
    { month: 'Feb', value: 1350 },
    { month: 'Mar', value: 1300 },
    { month: 'Apr', value: 1500 },
    { month: 'May', value: 1800 },
    { month: 'Jun', value: 1750 },
    { month: 'Jul', value: 2100 },
  ];

  const brandData = [
    { name: 'Nike', value: 45, color: '#f97316' },
    { name: 'Adidas', value: 25, color: '#3b82f6' },
    { name: 'Jordan', value: 20, color: '#ef4444' },
    { name: 'Other', value: 10, color: '#94a3b8' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Sneaker Portfolio</h1>
          <p className="text-gray-600">Financial analytics and market performance of your collection.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-full">Export CSV</Button>
          <Button className="bg-gray-900 text-white rounded-full px-6">Add Asset</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Portfolio Value', value: '$2,100', change: '+12.5%', up: true, icon: <DollarSign className="w-5 h-5" /> },
          { label: 'Total Profit', value: '$450', change: '+$85 today', up: true, icon: <TrendingUp className="w-5 h-5" /> },
          { label: 'Avg. ROI', value: '24%', change: '+2% MoM', up: true, icon: <ArrowUpRight className="w-5 h-5" /> },
          { label: 'Market Health', value: 'Bullish', change: 'High Demand', up: true, icon: <PieChart className="w-5 h-5" /> },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-50 rounded-xl text-gray-600">{stat.icon}</div>
              <span className={cn("text-xs font-bold px-2 py-1 rounded-full", stat.up ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600")}>
                {stat.change}
              </span>
            </div>
            <p className="text-xs text-gray-400 font-bold uppercase mb-1">{stat.label}</p>
            <p className="text-2xl font-black">{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <Card className="lg:col-span-2 border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-0">
            <CardTitle className="text-xl font-bold">Value Over Time</CardTitle>
          </CardHeader>
          <CardContent className="p-8 h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={historyData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(v) => `$${v}`} />
                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-[2.5rem] bg-white p-8">
          <h3 className="text-xl font-bold mb-8">Brand Allocation</h3>
          <div className="h-[200px] mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie data={brandData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {brandData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {brandData.map((brand, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: brand.color }} />
                  <span className="text-sm font-medium text-gray-600">{brand.name}</span>
                </div>
                <span className="text-sm font-bold">{brand.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="border-none shadow-sm rounded-[2.5rem] bg-orange-50 p-8">
        <div className="flex items-start space-x-4">
          <div className="bg-orange-600 p-3 rounded-2xl text-white">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-900 mb-2">Portfolio Insight</h3>
            <p className="text-orange-800 leading-relaxed">
              Your Jordan collection has outperformed the market by 15% this quarter. We recommend holding your 'Chicago' 1s as demand is projected to peak in December.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SneakerPortfolioPage;