"use client";

import React, { useState } from 'react';
import { ArrowLeftRight, Plus, X, Star, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useShoeWise } from '@/context/ShoeWiseContext';

const ComparePage = () => {
  const { scanResult } = useShoeWise();
  
  const shoeA = {
    name: 'Air Max Pulse',
    brand: 'Nike',
    price: 150,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop',
    fitScore: 98,
    category: 'Lifestyle',
    cushioning: 'High',
    weight: '320g'
  };

  const shoeB = {
    name: 'Ultraboost Light',
    brand: 'Adidas',
    price: 190,
    image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=400&auto=format&fit=crop',
    fitScore: 92,
    category: 'Running',
    cushioning: 'Maximum',
    weight: '290g'
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Compare Shoes</h1>
        <p className="text-gray-600">Side-by-side analysis to help you choose the perfect pair.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center border border-gray-100">
          <ArrowLeftRight className="w-6 h-6 text-orange-600" />
        </div>

        {/* Shoe A */}
        <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white">
          <CardContent className="p-0">
            <div className="aspect-video bg-gray-100 relative">
              <img src={shoeA.image} alt={shoeA.name} className="w-full h-full object-cover" />
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 rounded-full bg-white/80 backdrop-blur-sm">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-8">
              <p className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-1">{shoeA.brand}</p>
              <h3 className="text-2xl font-bold mb-6">{shoeA.name}</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Price</span>
                  <span className="font-bold text-lg">${shoeA.price}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Fit Match</span>
                  <Badge className="bg-green-100 text-green-700 border-none rounded-full px-3">
                    {shoeA.fitScore}% Match
                  </Badge>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Category</span>
                  <span className="font-bold">{shoeA.category}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Cushioning</span>
                  <span className="font-bold">{shoeA.cushioning}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Weight</span>
                  <span className="font-bold">{shoeA.weight}</span>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-gray-900 text-white rounded-full h-12 font-bold">
                View Product
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Shoe B */}
        <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white">
          <CardContent className="p-0">
            <div className="aspect-video bg-gray-100 relative">
              <img src={shoeB.image} alt={shoeB.name} className="w-full h-full object-cover" />
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 rounded-full bg-white/80 backdrop-blur-sm">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-8">
              <p className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-1">{shoeB.brand}</p>
              <h3 className="text-2xl font-bold mb-6">{shoeB.name}</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Price</span>
                  <span className="font-bold text-lg">${shoeB.price}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Fit Match</span>
                  <Badge className="bg-green-100 text-green-700 border-none rounded-full px-3">
                    {shoeB.fitScore}% Match
                  </Badge>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Category</span>
                  <span className="font-bold">{shoeB.category}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Cushioning</span>
                  <span className="font-bold">{shoeB.cushioning}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Weight</span>
                  <span className="font-bold">{shoeB.weight}</span>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-gray-900 text-white rounded-full h-12 font-bold">
                View Product
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-8 bg-orange-50 rounded-[2.5rem] border border-orange-100">
        <div className="flex items-start space-x-4">
          <div className="bg-orange-600 p-3 rounded-2xl text-white">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-900 mb-2">AI Recommendation</h3>
            <p className="text-orange-800 leading-relaxed">
              While the {shoeB.name} is lighter and offers more cushioning, the {shoeA.name} has a higher fit score for your specific foot profile. If you prioritize comfort and a secure fit for daily wear, the {shoeA.name} is your best choice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;