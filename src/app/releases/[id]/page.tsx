"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { Bell, Calendar, Share2, Info, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const ReleaseDetailPage = () => {
  const { id } = useParams();

  const release = {
    id,
    name: "Jordan 1 High 'Royal Reimagined'",
    brand: "Jordan",
    price: 180,
    date: "Oct 28, 2023",
    time: "10:00 AM EST",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    description: "The Air Jordan 1 'Royal Reimagined' brings a fresh twist to the classic 1985 colorway. Swapping traditional leather for premium suede, this release offers a luxurious feel while maintaining the iconic silhouette that started it all.",
    status: "Upcoming",
    raffleStatus: "Open",
    fitMatch: 95
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-[2.5rem] overflow-hidden border border-gray-100">
            <img src={release.image} alt={release.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-blue-100 text-blue-700 border-none px-4 py-1 rounded-full uppercase tracking-widest text-xs font-bold">
                {release.status}
              </Badge>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full"><Share2 className="w-4 h-4" /></Button>
                <Button variant="outline" size="icon" className="rounded-full"><Bell className="w-4 h-4" /></Button>
              </div>
            </div>
            <p className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-1">{release.brand}</p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{release.name}</h1>
            
            <div className="flex items-center space-x-6 mb-8">
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Release Date</p>
                <p className="font-bold text-lg">{release.date}</p>
              </div>
              <div className="w-px h-8 bg-gray-100" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Retail Price</p>
                <p className="font-bold text-lg">${release.price}</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">{release.description}</p>
          </div>

          <Card className="mb-8 border-none bg-orange-50 rounded-3xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-orange-600" />
                  <div>
                    <h4 className="font-bold text-orange-900">AI Fit Match</h4>
                    <p className="text-orange-800 text-sm">Predicted {release.fitMatch}% match for your profile.</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-orange-600 font-bold">View Details</Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full h-14 text-lg font-bold">
              Enter Raffle
            </Button>
            <Button variant="outline" className="w-full rounded-full h-14 text-lg font-bold border-2">
              Set Release Reminder
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseDetailPage;