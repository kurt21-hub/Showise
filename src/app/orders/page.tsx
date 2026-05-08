"use client";

import React from 'react';
import { Package, Search, ChevronRight, ExternalLink, Truck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const OrdersPage = () => {
  const orders = [
    {
      id: 'SW-9283',
      date: 'Oct 24, 2023',
      total: 165.00,
      status: 'Processing',
      items: [
        { name: 'Air Max Pulse', brand: 'Nike', size: 9.5, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=100&auto=format&fit=crop' }
      ]
    },
    {
      id: 'SW-8172',
      date: 'Sep 12, 2023',
      total: 190.00,
      status: 'Delivered',
      items: [
        { name: 'Ultraboost Light', brand: 'Adidas', size: 10, image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=100&auto=format&fit=crop' }
      ]
    },
    {
      id: 'TR-1029',
      date: 'Aug 28, 2023',
      total: 0,
      type: 'Trade',
      status: 'Completed',
      items: [
        { name: 'Jordan 1 Retro', brand: 'Jordan', size: 10.5, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=100&auto=format&fit=crop' }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <h1 className="text-3xl font-bold">Order History</h1>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search orders..." className="pl-10 rounded-xl bg-white" />
        </div>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id} className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="p-6 border-b border-gray-50 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Order ID</p>
                    <p className="font-bold text-gray-900">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Date</p>
                    <p className="font-bold text-gray-900">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Total</p>
                    <p className="font-bold text-gray-900">{order.total > 0 ? `$${order.total.toFixed(2)}` : 'Trade'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={cn(
                    "rounded-full px-4 py-1 border-none",
                    order.status === 'Delivered' || order.status === 'Completed' ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                  )}>
                    {order.status}
                  </Badge>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-xs text-orange-600 font-bold uppercase">{item.brand}</p>
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <p className="text-xs text-gray-500">Size: {item.size}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="rounded-full">View Product</Button>
                      {order.status === 'Delivered' && (
                        <Button size="sm" className="bg-gray-900 text-white rounded-full">Write Review</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {order.status === 'Processing' && (
                <div className="px-6 pb-6">
                  <div className="bg-orange-50 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Truck className="w-5 h-5 text-orange-600" />
                      <span className="text-sm font-medium text-orange-900">Estimated delivery: Oct 28, 2023</span>
                    </div>
                    <Button variant="link" className="text-orange-600 font-bold p-0 h-auto">Track Package</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';
export default OrdersPage;