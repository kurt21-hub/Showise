"use client";

import React, { useState } from 'react';
import { Search, Plus, ArrowLeftRight, Tag, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Listing } from '@/types';
import Link from 'next/link';

const MOCK_LISTINGS: Listing[] = [
  { 
    id: 'l1', 
    name: 'Yeezy Boost 350 V2', 
    brand: 'Adidas', 
    price: 220, 
    image: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=400&auto=format&fit=crop', 
    category: 'lifestyle', 
    description: 'Worn once, too small for me.', 
    sizes: [9], 
    sellerId: 'u1', 
    sellerName: 'Mike R.', 
    condition: 'like-new', 
    listingType: 'both',
    tradePreferences: 'Looking for size 10 in similar condition'
  },
  { 
    id: 'l2', 
    name: 'Jordan 1 Retro High', 
    brand: 'Jordan', 
    price: 180, 
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=400&auto=format&fit=crop', 
    category: 'basketball', 
    description: 'Brand new in box.', 
    sizes: [10.5], 
    sellerId: 'u2', 
    sellerName: 'Sarah K.', 
    condition: 'new', 
    listingType: 'sell'
  },
  { 
    id: 'l3', 
    name: 'Metcon 8', 
    brand: 'Nike', 
    price: 0, 
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=400&auto=format&fit=crop', 
    category: 'lifestyle', 
    description: 'Trade only. Looking for running shoes.', 
    sizes: [11], 
    sellerId: 'u3', 
    sellerName: 'David L.', 
    condition: 'used', 
    listingType: 'trade',
    tradePreferences: 'Any Nike running shoes size 11'
  },
];

const MarketplacePage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredListings = MOCK_LISTINGS.filter(l => {
    if (activeTab === 'all') return true;
    if (activeTab === 'trade') return l.listingType === 'trade' || l.listingType === 'both';
    if (activeTab === 'sell') return l.listingType === 'sell' || l.listingType === 'both';
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
          <p className="text-gray-600">Buy, sell, or trade shoes with the community.</p>
        </div>
        
        <Link href="/sell">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">
            <Plus className="w-4 h-4 mr-2" />
            Post a Listing
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
          <TabsList className="bg-gray-100 p-1 rounded-full">
            <TabsTrigger value="all" className="rounded-full px-6">All Listings</TabsTrigger>
            <TabsTrigger value="trade" className="rounded-full px-6">Trade Only</TabsTrigger>
            <TabsTrigger value="sell" className="rounded-full px-6">For Sale</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search marketplace..." 
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredListings.map((listing) => (
          <Card key={listing.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all rounded-3xl group">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <img 
                  src={listing.image} 
                  alt={listing.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className="bg-white/90 backdrop-blur-sm text-gray-900 border-none px-3 py-1 rounded-full capitalize">
                    {listing.condition.replace('-', ' ')}
                  </Badge>
                  {listing.listingType === 'trade' && (
                    <Badge className="bg-blue-600 text-white border-none px-3 py-1 rounded-full">
                      Trade Only
                    </Badge>
                  )}
                  {listing.listingType === 'both' && (
                    <Badge className="bg-orange-600 text-white border-none px-3 py-1 rounded-full">
                      Sale & Trade
                    </Badge>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs">
                      {listing.sellerName.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{listing.sellerName}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <MapPin className="w-3 h-3 mr-1" />
                    New York, NY
                  </div>
                </div>
                
                <h3 className="font-bold text-xl mb-1">{listing.name}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{listing.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Price / Trade</p>
                    <p className="text-xl font-bold text-gray-900">
                      {listing.price > 0 ? `$${listing.price}` : 'Trade Only'}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {listing.listingType !== 'sell' && (
                      <Button variant="outline" size="sm" className="rounded-full border-orange-200 text-orange-600 hover:bg-orange-50">
                        <ArrowLeftRight className="w-4 h-4 mr-2" />
                        Trade
                      </Button>
                    )}
                    {listing.listingType !== 'trade' && (
                      <Button size="sm" className="rounded-full bg-gray-900 hover:bg-gray-800 text-white">
                        <Tag className="w-4 h-4 mr-2" />
                        Buy
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;