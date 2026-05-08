"use client";

import React from 'react';
import { Bell, Package, ArrowLeftRight, Zap, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: 'match',
      title: 'New Size Match Found!',
      desc: 'A new pair of Nike Air Max Pulse just arrived in your scanned size 9.5.',
      time: '2 hours ago',
      icon: <Zap className="w-5 h-5 text-orange-600" />,
      bg: 'bg-orange-50',
      unread: true
    },
    {
      id: 2,
      type: 'trade',
      title: 'Trade Request Received',
      desc: 'Mike R. wants to trade his Yeezy Boosts for your Jordan 1s.',
      time: '5 hours ago',
      icon: <ArrowLeftRight className="w-5 h-5 text-blue-600" />,
      bg: 'bg-blue-50',
      unread: true
    },
    {
      id: 3,
      type: 'order',
      title: 'Order Shipped',
      desc: 'Your order #SW-9283 has been shipped and is on its way!',
      time: '1 day ago',
      icon: <Package className="w-5 h-5 text-green-600" />,
      bg: 'bg-green-50',
      unread: false
    },
    {
      id: 4,
      type: 'system',
      title: 'Scan Profile Updated',
      desc: 'Your foot scan profile has been successfully processed.',
      time: '2 days ago',
      icon: <Star className="w-5 h-5 text-purple-600" />,
      bg: 'bg-purple-50',
      unread: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-900 p-3 rounded-2xl text-white">
            <Bell className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold">Notifications</h1>
        </div>
        <Button variant="ghost" className="text-orange-600 font-bold">Mark all as read</Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={cn(
              "p-6 rounded-[2rem] border border-gray-100 flex items-start space-x-4 transition-all hover:shadow-md cursor-pointer",
              notif.unread ? "bg-white border-orange-100" : "bg-gray-50/50"
            )}
          >
            <div className={cn("p-3 rounded-2xl shrink-0", notif.bg)}>
              {notif.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-gray-900">{notif.title}</h3>
                <span className="text-xs text-gray-400">{notif.time}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{notif.desc}</p>
              {notif.unread && (
                <Badge className="bg-orange-600 text-white border-none px-2 py-0.5 rounded-full text-[10px]">New</Badge>
              )}
            </div>
            <ChevronRight className="w-5 h-5 text-gray-300 self-center" />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="rounded-full px-8">Load Older Notifications</Button>
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';
export default NotificationsPage;