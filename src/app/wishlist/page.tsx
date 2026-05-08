"use client";

import React from 'react';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const WishlistPage = () => {
  // Mock wishlist data
  const wishlist = [
    { id: '1', name: 'Air Max Pulse', brand: 'Nike', price: 150, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop' },
    { id: '2', name: 'Ultraboost Light', brand: 'Adidas', price: 190, image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=400&auto=format&fit=crop' },
  ];

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
          <Heart className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Your wishlist is empty</h1>
        <p className="text-gray-600 mb-8">Save your favorite shoes to view them later.</p>
        <Link href="/products">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12">
            Explore Collection
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <p className="text-gray-500">{wishlist.length} items saved</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <Card key={product.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all rounded-3xl group">
            <CardContent className="p-0">
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Button variant="destructive" size="icon" className="absolute top-4 right-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">{product.brand}</p>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-orange-600">${product.price}</span>
                  <Button size="sm" className="rounded-full bg-gray-900 hover:bg-gray-800 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add
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

export default WishlistPage;