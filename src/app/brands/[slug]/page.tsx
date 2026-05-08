"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { Search, Filter, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useShoeWise } from '@/context/ShoeWiseContext';
import Link from 'next/link';

const BrandPage = () => {
  const { slug } = useParams();
  const { scanResult } = useShoeWise();
  
  const brandName = (slug as string).charAt(0).toUpperCase() + (slug as string).slice(1);

  // Mock products for this brand
  const products = [
    { id: '1', name: 'Air Max Pulse', brand: 'Nike', price: 150, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop', fitScore: 98 },
    { id: '6', name: 'Dunk Low Retro', brand: 'Nike', price: 115, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400&auto=format&fit=crop', fitScore: 91 },
    { id: '9', name: 'Air Force 1', brand: 'Nike', price: 110, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop', fitScore: 85 },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-5xl font-extrabold mb-4">{brandName}</h1>
          <p className="text-gray-600 max-w-xl">
            Explore the latest from {brandName}. {scanResult ? `We've highlighted the best matches for your size ${scanResult.recommendedSize}.` : "Scan your foot to see which models fit you best."}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="rounded-full">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" className="rounded-full">Sort By: Popular</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all rounded-3xl group">
            <CardContent className="p-0">
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {scanResult && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-600 text-white border-none px-3 py-1 rounded-full">
                      {product.fitScore}% Match
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <Link href={`/products/${product.id}`}>
                    <Button size="sm" className="rounded-full bg-gray-900 hover:bg-gray-800 text-white">
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;