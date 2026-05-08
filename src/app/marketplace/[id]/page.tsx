"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowLeftRight, Tag, MessageCircle, ShieldCheck, MapPin, Calendar, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const MarketplaceListingDetail = () => {
  const { id } = useParams();
  const router = useRouter();

  // Mock listing data
  const listing = {
    id: id as string,
    name: 'Yeezy Boost 350 V2',
    brand: 'Adidas',
    price: 220,
    image: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=800&auto=format&fit=crop',
    category: 'lifestyle',
    description: 'Worn once for a photoshoot. They are in pristine condition, basically deadstock. I realized I need a half size up for the perfect fit. Comes with original box and tags.',
    sizes: [9],
    sellerId: 'u1',
    sellerName: 'Mike R.',
    condition: 'like-new',
    listingType: 'both',
    tradePreferences: 'Looking for size 9.5 or 10 in similar condition. Open to Jordan 1s or other Yeezys.',
    location: 'New York, NY',
    postedDate: '2 days ago'
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={() => router.back()}
        className="flex items-center text-gray-500 hover:text-orange-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Marketplace
      </button>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-[2.5rem] overflow-hidden border border-gray-100 relative">
            <img src={listing.image} alt={listing.name} className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <Badge className="bg-white/90 backdrop-blur-sm text-gray-900 border-none px-4 py-1.5 rounded-full capitalize text-sm font-bold">
                {listing.condition.replace('-', ' ')}
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <img src={listing.image} alt={`${listing.name} view ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Listing Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                  {listing.sellerName.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{listing.sellerName}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    {listing.location} • <Calendar className="w-3 h-3 mx-1" /> {listing.postedDate}
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="rounded-full border-orange-200 text-orange-600 bg-orange-50">
                Verified Seller
              </Badge>
            </div>

            <p className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-1">{listing.brand}</p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{listing.name}</h1>
            
            <div className="flex items-baseline space-x-4 mb-6">
              <p className="text-3xl font-bold text-gray-900">
                {listing.price > 0 ? `$${listing.price}` : 'Trade Only'}
              </p>
              {listing.listingType === 'both' && (
                <span className="text-gray-400 text-sm font-medium">or Trade</span>
              )}
            </div>

            <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 mb-8">
              <h3 className="font-bold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{listing.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center space-x-6">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Size</p>
                  <p className="font-bold">US Men's {listing.sizes[0]}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Category</p>
                  <p className="font-bold capitalize">{listing.category}</p>
                </div>
              </div>
            </div>

            {listing.listingType !== 'sell' && (
              <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 mb-8">
                <div className="flex items-center space-x-2 mb-2">
                  <ArrowLeftRight className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-blue-900">Trade Preferences</h3>
                </div>
                <p className="text-blue-800 text-sm">{listing.tradePreferences}</p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex gap-4">
              {listing.listingType !== 'trade' && (
                <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-full h-14 text-lg font-bold">
                  <Tag className="w-5 h-5 mr-2" />
                  Buy Now
                </Button>
              )}
              {listing.listingType !== 'sell' && (
                <Link href={`/marketplace/trade/${listing.id}`} className="flex-1">
                  <Button variant="outline" className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 rounded-full h-14 text-lg font-bold">
                    <ArrowLeftRight className="w-5 h-5 mr-2" />
                    Offer Trade
                  </Button>
                </Link>
              )}
            </div>
            <Button variant="secondary" className="w-full rounded-full h-12 font-bold">
              <MessageCircle className="w-5 h-5 mr-2" />
              Message Seller
            </Button>
          </div>

          {/* Trust & Safety */}
          <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100 flex items-start space-x-4">
            <ShieldCheck className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-orange-900 text-sm">ShoeWise Protection</h4>
              <p className="text-orange-800 text-xs mt-1">
                We verify every marketplace transaction. For trades, both items are inspected by our experts before the exchange is finalized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceListingDetail;