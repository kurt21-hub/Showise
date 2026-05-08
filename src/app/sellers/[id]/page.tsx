"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { Star, MapPin, Calendar, ShieldCheck, MessageCircle, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const SellerProfilePage = () => {
  const { id } = useParams();

  // Mock seller data
  const seller = {
    id,
    name: 'Mike R.',
    avatar: null,
    location: 'New York, NY',
    joinedDate: 'January 2023',
    rating: 4.9,
    reviewCount: 42,
    bio: 'Sneaker enthusiast and collector for over 10 years. I mostly deal with Yeezys and Jordans. All my items are 100% authentic.',
    isVerified: true,
    listings: [
      { id: 'l1', name: 'Yeezy Boost 350 V2', brand: 'Adidas', price: 220, image: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=400&auto=format&fit=crop', condition: 'like-new' },
      { id: 'l4', name: 'Air Jordan 4 Red Cement', brand: 'Jordan', price: 280, image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=400&auto=format&fit=crop', condition: 'new' },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-4 gap-12">
        {/* Seller Info Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-4xl font-bold mb-4 border-4 border-white shadow-lg">
              {seller.name.charAt(0)}
            </div>
            <div className="flex items-center space-x-2 mb-1">
              <h2 className="text-2xl font-bold">{seller.name}</h2>
              {seller.isVerified && <ShieldCheck className="w-5 h-5 text-blue-500" />}
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              {seller.location}
            </div>
            
            <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-bold text-yellow-700">{seller.rating}</span>
              <span className="text-yellow-600 text-xs">({seller.reviewCount} reviews)</span>
            </div>

            <div className="w-full space-y-3">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message Seller
              </Button>
              <Button variant="outline" className="w-full rounded-full">Follow</Button>
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-gray-100">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{seller.bio}</p>
            <div className="flex items-center text-xs text-gray-400">
              <Calendar className="w-3 h-3 mr-2" />
              Joined {seller.joinedDate}
            </div>
          </div>
        </div>

        {/* Seller Listings */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Active Listings</h3>
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              {seller.listings.length} Items
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seller.listings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all rounded-3xl group">
                <CardContent className="p-0">
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    <img 
                      src={listing.image} 
                      alt={listing.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 backdrop-blur-sm text-gray-900 border-none px-3 py-1 rounded-full capitalize text-xs font-bold">
                        {listing.condition.replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">{listing.brand}</p>
                    <h3 className="font-bold text-lg mb-2 line-clamp-1">{listing.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">${listing.price}</span>
                      <Link href={`/marketplace/${listing.id}`}>
                        <Button size="sm" variant="ghost" className="text-orange-600 font-bold">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfilePage;