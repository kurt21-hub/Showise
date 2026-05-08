"use client";

import React, { useState } from 'react';
import { Ruler, ArrowLeftRight, Info, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useShoeWise } from '@/context/ShoeWiseContext';

const SizeComparisonPage = () => {
  const { scanResult } = useShoeWise();
  const [baseBrand, setBaseBrand] = useState('nike');
  const [baseSize, setBaseSize] = useState('10');
  const [targetBrand, setTargetBrand] = useState('adidas');

  const brands = [
    { id: 'nike', name: 'Nike' },
    { id: 'adidas', name: 'Adidas' },
    { id: 'jordan', name: 'Jordan' },
    { id: 'new-balance', name: 'New Balance' },
    { id: 'asics', name: 'ASICS' },
    { id: 'yeezy', name: 'Yeezy' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl text-blue-600 mb-6">
          <ArrowLeftRight className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">Brand Size Converter</h1>
        <p className="text-gray-600">Find your equivalent size across different footwear brands.</p>
      </div>

      <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white mb-12">
        <CardContent className="p-10">
          <div className="grid md:grid-cols-3 gap-8 items-end">
            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-400 uppercase">I am a size...</label>
              <Select defaultValue={baseSize} onValueChange={setBaseSize}>
                <SelectTrigger className="h-14 rounded-2xl border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12].map(s => (
                    <SelectItem key={s} value={s.toString()}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-400 uppercase">In this brand...</label>
              <Select defaultValue={baseBrand} onValueChange={setBaseBrand}>
                <SelectTrigger className="h-14 rounded-2xl border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {brands.map(b => (
                    <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-400 uppercase">What am I in...</label>
              <Select defaultValue={targetBrand} onValueChange={setTargetBrand}>
                <SelectTrigger className="h-14 rounded-2xl border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {brands.map(b => (
                    <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-12 p-10 bg-gray-900 rounded-[2rem] text-white text-center">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">Your Estimated Size</p>
            <h2 className="text-6xl font-black mb-4">10.5 <span className="text-2xl font-normal text-gray-500">US</span></h2>
            <p className="text-gray-400">In {brands.find(b => b.id === targetBrand)?.name}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
          <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            Why the difference?
          </h3>
          <p className="text-orange-800 text-sm leading-relaxed">
            Brands like Yeezy often run small, requiring a half-size up, while brands like Converse can run large. Our converter uses historical fit data to give you the best estimate.
          </p>
        </div>

        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Get 100% Accuracy
          </h3>
          <p className="text-blue-800 text-sm leading-relaxed mb-4">
            Don't rely on estimates. Use our AI Foot Scan to get your exact measurements and brand-specific recommendations.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Start AI Scan</Button>
        </div>
      </div>
    </div>
  );
};

export default SizeComparisonPage;