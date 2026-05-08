"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useShoeWise } from '@/context/ShoeWiseContext';
import Link from 'next/link';

const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const { scanResult } = useShoeWise();

  // Mock search results
  const results = [
    { id: '1', name: 'Air Max Pulse', brand: 'Nike', price: 150, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop', fitScore: 98 },
    { id: '6', name: 'Dunk Low Retro', brand: 'Nike', price: 115, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400&auto=format&fit=crop', fitScore: 91 },
  ].filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) || 
    item.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600">
          {results.length} results found for <span className="font-bold text-gray-900">"{query}"</span>
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((product) => (
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
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">{product.brand}</p>
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
      ) : (
        <div className="text-center py-20">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No results found</h3>
          <p className="text-gray-500">Try searching for something else or browse our collection.</p>
          <Link href="/products">
            <Button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">
              Browse All Shoes
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

const SearchPage = () => {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center">Loading results...</div>}>
      <SearchContent />
    </Suspense>
  );
};

export default SearchPage;