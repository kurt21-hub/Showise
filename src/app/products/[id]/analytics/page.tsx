"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { TrendingUp, TrendingDown, ArrowLeft, Info, Calendar, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import Link from 'next/link';

const PriceAnalyticsPage = () => {
  const { id } = useParams();

  const data = [
    { date: 'Jan', price: 180 },
    { date: 'Feb', price: 195 },
    { date: 'Mar', price: 190 },
    { date: 'Apr', price: 210 },
    { date: 'May', price: 240 },
    { date: 'Jun', price: 225 },
    { date: 'Jul', price: 260 },
    { date: 'Aug', price: 285 },
    { date: 'Sep', price: 270 },
    { date: 'Oct', price: 310 },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Link href={`/products/${id}`} className="flex items-center text-gray-500 hover:text-orange-600 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Product
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Market Analytics</h1>
          <p className="text-gray-600">Nike Air Max Pulse • Real-time market data and price history.</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-6">
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold">Current Market</p>
            <p className="text-2xl font-black text-orange-600">$310</p>
          </div>
          <div className="w-px h-10 bg-gray-100" />
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold">12M Change</p>
            <p className="text-2xl font-black text-green-500">+72%</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <Card className="lg:col-span-2 border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-0 flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold">Price History (12 Months)</CardTitle>
            <div className="flex gap-2">
              {['1M', '3M', '6M', '1Y', 'ALL'].map(t => (
                <Button key={t} variant="ghost" size="sm" className={cn("rounded-lg text-xs", t === '1Y' ? "bg-orange-50 text-orange-600" : "text-gray-400")}>
                  {t}
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="p-8 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [`$${value}`, 'Price']}
                />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#f97316" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorPrice)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="border-none shadow-sm rounded-3xl bg-gray-900 text-white p-8">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <Info className="w-5 h-5 mr-2 text-orange-500" />
              Market Insights
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-bold text-sm">High Demand</p>
                  <p className="text-xs text-gray-400">Search volume for this model is up 24% this week.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-sm">Upcoming Restock</p>
                  <p className="text-xs text-gray-400">Rumored restock in Nov might affect resale value.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-bold text-sm">Volatility: Low</p>
                  <p className="text-xs text-gray-400">Price has stabilized over the last 30 days.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-none shadow-sm rounded-3xl bg-white p-8">
            <h3 className="text-lg font-bold mb-6">Recent Sales</h3>
            <div className="space-y-4">
              {[
                { size: '10.5', price: 315, time: '2h ago' },
                { size: '9', price: 305, time: '5h ago' },
                { size: '11', price: 320, time: '1d ago' },
              ].map((sale, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <span className="text-sm font-medium text-gray-600">Size {sale.size}</span>
                  <div className="text-right">
                    <p className="font-bold text-sm">${sale.price}</p>
                    <p className="text-[10px] text-gray-400">{sale.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';
export default PriceAnalyticsPage;