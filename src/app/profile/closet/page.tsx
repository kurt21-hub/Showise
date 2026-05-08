"use client";

import React from 'react';
import { LayoutGrid, List, Plus, TrendingUp, ArrowLeftRight, Tag, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const DigitalClosetPage = () => {
  const collection = [
    { id: 'c1', name: 'Air Max Pulse', brand: 'Nike', purchasePrice: 150, currentVal: 165, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop' },
    { id: 'c2', name: 'Ultraboost Light', brand: 'Adidas', purchasePrice: 190, currentVal: 175, image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=400&auto=format&fit=crop' },
    { id: 'c3', name: 'Jordan 1 Retro High', brand: 'Jordan', purchasePrice: 180, currentVal: 320, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=400&auto=format&fit=crop' },
  ];

  const totalValue = collection.reduce((acc, item) => acc + item.currentVal, 0);
  const totalGain = collection.reduce((acc, item) => acc + (item.currentVal - item.purchasePrice), 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Digital Closet</h1>
          <p className="text-gray-600">Manage your collection and track your sneaker equity.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-full">
            <TrendingUp className="w-4 h-4 mr-2" />
            Portfolio View
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">
            <Plus className="w-4 h-4 mr-2" />
            Add to Closet
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="border-none shadow-sm bg-gray-900 text-white rounded-3xl p-8">
          <p className="text-gray-400 text-xs font-bold uppercase mb-2">Total Collection Value</p>
          <h2 className="text-4xl font-black mb-2">${totalValue.toLocaleString()}</h2>
          <p className="text-green-400 text-sm font-bold flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            +${totalGain} Profit
          </p>
        </Card>
        <Card className="border-none shadow-sm bg-white rounded-3xl p-8">
          <p className="text-gray-500 text-xs font-bold uppercase mb-2">Total Pairs</p>
          <h2 className="text-4xl font-black mb-2">{collection.length}</h2>
          <p className="text-gray-400 text-sm">Across 3 brands</p>
        </Card>
        <Card className="border-none shadow-sm bg-orange-50 rounded-3xl p-8">
          <p className="text-orange-900 text-xs font-bold uppercase mb-2">Market Activity</p>
          <h2 className="text-4xl font-black text-orange-600 mb-2">High</h2>
          <p className="text-orange-800 text-sm">2 items trending up</p>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input placeholder="Search your closet..." className="pl-12 h-12 rounded-2xl border-gray-200" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-2xl h-12"><Filter className="w-4 h-4 mr-2" />Filter</Button>
          <div className="bg-gray-100 p-1 rounded-2xl flex">
            <Button variant="ghost" size="icon" className="rounded-xl bg-white shadow-sm"><LayoutGrid className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" className="rounded-xl"><List className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collection.map((item) => (
          <Card key={item.id} className="border-none shadow-sm hover:shadow-md transition-all rounded-[2.5rem] overflow-hidden bg-white group">
            <CardContent className="p-0">
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Badge className={cn(
                    "border-none px-3 py-1 rounded-full font-bold",
                    item.currentVal >= item.purchasePrice ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  )}>
                    {item.currentVal >= item.purchasePrice ? '+' : ''}{Math.round(((item.currentVal - item.purchasePrice) / item.purchasePrice) * 100)}%
                  </Badge>
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs text-gray-400 font-bold uppercase mb-1">{item.brand}</p>
                <h3 className="text-xl font-bold mb-6">{item.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Purchase</p>
                    <p className="font-bold">${item.purchasePrice}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Market Value</p>
                    <p className="font-bold text-orange-600">${item.currentVal}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 rounded-full h-10 text-xs font-bold">
                    <ArrowLeftRight className="w-3 h-3 mr-2" />
                    Trade
                  </Button>
                  <Button className="flex-1 bg-gray-900 text-white rounded-full h-10 text-xs font-bold">
                    <Tag className="w-3 h-3 mr-2" />
                    Sell
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';
export default DigitalClosetPage;