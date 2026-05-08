"use client";

import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useShoeWise } from '@/context/ShoeWiseContext';
import { cn } from '@/lib/utils';
import { Product } from '@/types';
import { toast } from 'sonner';

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Air Max Pulse', brand: 'Nike', price: 150, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop', category: 'lifestyle', description: 'Modern comfort meets classic style.', sizes: [8, 9, 9.5, 10, 11], fitScore: 98 },
  { id: '2', name: 'Ultraboost Light', brand: 'Adidas', price: 190, image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=400&auto=format&fit=crop', category: 'running', description: 'The lightest Ultraboost ever.', sizes: [7, 8, 9, 10, 11], fitScore: 92 },
  { id: '3', name: 'Cloudmonster', brand: 'On', price: 170, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=400&auto=format&fit=crop', category: 'running', description: 'Maximum cushioning for long runs.', sizes: [8, 9, 10, 11, 12], fitScore: 85 },
  { id: '4', name: 'Gel-Kayano 30', brand: 'ASICS', price: 160, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop', category: 'running', description: 'Stable and supportive.', sizes: [8, 9, 9.5, 10, 11], fitScore: 95 },
  { id: '5', name: 'Forum Low', brand: 'Adidas', price: 110, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=400&auto=format&fit=crop', category: 'lifestyle', description: 'Classic basketball-inspired style.', sizes: [7, 8, 9, 10, 11], fitScore: 88 },
  { id: '6', name: 'Dunk Low Retro', brand: 'Nike', price: 115, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400&auto=format&fit=crop', category: 'lifestyle', description: 'The icon of street style.', sizes: [8, 9, 10, 11, 12], fitScore: 91 },
  { id: '7', name: 'Fresh Foam 1080', brand: 'New Balance', price: 165, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=400&auto=format&fit=crop', category: 'running', description: 'Premium cushioning for every day.', sizes: [8, 9, 10, 11, 12], fitScore: 97 },
  { id: '8', name: 'Chuck 70', brand: 'Converse', price: 90, image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=400&auto=format&fit=crop', category: 'lifestyle', description: 'Timeless canvas high-top.', sizes: [6, 7, 8, 9, 10, 11, 12], fitScore: 82 },
];

const ProductsPage = () => {
  const { addToCart, scanResult } = useShoeWise();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Browse Shoes</h1>
          <p className="text-gray-600">
            {scanResult
              ? `Showing recommendations for your size ${scanResult.recommendedSize}`
              : "Find your next favorite pair."}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search brands, models..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="rounded-full">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {['all', 'running', 'lifestyle', 'basketball', 'formal'].map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? 'default' : 'outline'}
            className={cn(
              "rounded-full capitalize whitespace-nowrap",
              selectedCategory === cat ? "bg-orange-600 hover:bg-orange-700" : ""
            )}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all rounded-3xl group">
            <CardContent className="p-0">
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {scanResult && product.fitScore && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-600 text-white border-none px-3 py-1 rounded-full">
                      {product.fitScore}% Match
                    </Badge>
                  </div>
                )}
                <Button variant="secondary" size="icon" className="absolute top-4 right-4 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Star className="w-4 h-4" />
                </Button>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{product.brand}</p>
                  {scanResult && (
                    <p className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                      Size {scanResult.recommendedSize} Recommended
                    </p>
                  )}
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <Button
                    size="sm"
                    className="rounded-full bg-gray-900 hover:bg-gray-800 text-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No shoes found</h3>
          <p className="text-gray-500">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;