"use client";

import React from 'react';
import { ArrowLeftRight, Clock, CheckCircle2, XCircle, ChevronRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

const TradeCenterPage = () => {
  const trades = [
    {
      id: 't1',
      type: 'incoming',
      status: 'pending',
      partner: 'Mike R.',
      myShoe: { name: 'Jordan 1 Retro', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=100&auto=format&fit=crop' },
      theirShoe: { name: 'Yeezy Boost 350', image: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=100&auto=format&fit=crop' },
      time: '2 hours ago'
    },
    {
      id: 't2',
      type: 'outgoing',
      status: 'accepted',
      partner: 'Sarah K.',
      myShoe: { name: 'Air Max Pulse', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=100&auto=format&fit=crop' },
      theirShoe: { name: 'Dunk Low Panda', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=100&auto=format&fit=crop' },
      time: '1 day ago'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">Trade Center</h1>
        <Badge className="bg-orange-100 text-orange-700 border-none px-4 py-1 rounded-full">
          {trades.length} Active Offers
        </Badge>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-gray-100 p-1 rounded-2xl mb-8">
          <TabsTrigger value="all" className="rounded-xl px-8">All Offers</TabsTrigger>
          <TabsTrigger value="incoming" className="rounded-xl px-8">Incoming</TabsTrigger>
          <TabsTrigger value="outgoing" className="rounded-xl px-8">Outgoing</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {trades.map((trade) => (
            <Card key={trade.id} className="border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center space-x-8 flex-1">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-50 rounded-2xl overflow-hidden mb-2 border border-gray-100">
                        <img src={trade.myShoe.image} alt={trade.myShoe.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[10px] font-bold uppercase text-gray-400">Your Item</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <ArrowLeftRight className="w-6 h-6 text-orange-600 mb-1" />
                      <Badge variant="outline" className="text-[10px] uppercase">{trade.type}</Badge>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-50 rounded-2xl overflow-hidden mb-2 border border-gray-100">
                        <img src={trade.theirShoe.image} alt={trade.theirShoe.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[10px] font-bold uppercase text-gray-400">Their Item</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">Trade with {trade.partner}</h3>
                      <span className="text-xs text-gray-400">{trade.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-6">
                      {trade.status === 'pending' ? (
                        <Badge className="bg-blue-100 text-blue-700 border-none"><Clock className="w-3 h-3 mr-1" /> Pending Response</Badge>
                      ) : (
                        <Badge className="bg-green-100 text-green-700 border-none"><CheckCircle2 className="w-3 h-3 mr-1" /> Accepted</Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      {trade.status === 'pending' && trade.type === 'incoming' ? (
                        <>
                          <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white rounded-full h-10 text-xs font-bold">Accept</Button>
                          <Button variant="outline" className="flex-1 rounded-full h-10 text-xs font-bold text-red-500 hover:bg-red-50">Decline</Button>
                        </>
                      ) : (
                        <Button variant="outline" className="w-full rounded-full h-10 text-xs font-bold">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message {trade.partner}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TradeCenterPage;