"use client";

import React from 'react';
import { Tag, Edit, Trash2, Eye, Plus, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const MyListingsPage = () => {
  // Mock user listings
  const listings = [
    { 
      id: 'l101', 
      name: 'Nike Dunk Low Panda', 
      price: 120, 
      views: 142, 
      likes: 12, 
      status: 'active', 
      image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400&auto=format&fit=crop' 
    },
    { 
      id: 'l102', 
      name: 'New Balance 550', 
      price: 110, 
      views: 89, 
      likes: 5, 
      status: 'sold', 
      image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=400&auto=format&fit=crop' 
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">My Listings</h1>
        </div>
        <Link href="/sell">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">
            <Plus className="w-4 h-4 mr-2" />
            New Listing
          </Button>
        </Link>
      </div>

      <div className="space-y-6">
        {listings.map((listing) => (
          <Card key={listing.id} className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                  <img src={listing.image} alt={listing.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{listing.name}</h3>
                    <Badge className={cn(
                      "w-fit mx-auto md:mx-0 rounded-full px-3 py-0.5 border-none",
                      listing.status === 'active' ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                    )}>
                      {listing.status.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold text-orange-600 mb-4">${listing.price}</p>
                  
                  <div className="flex items-center justify-center md:justify-start space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {listing.views} views
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {listing.likes} likes
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                    <Edit className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-12 w-12 text-red-500 hover:bg-red-50 hover:text-red-600">
                    <Trash2 className="w-5 h-5" />
                  </Button>
                  <Link href={`/marketplace/${listing.id}`}>
                    <Button className="bg-gray-900 text-white rounded-full h-12 px-6">
                      View Public
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

import { cn } from '@/lib/utils';
export default MyListingsPage;