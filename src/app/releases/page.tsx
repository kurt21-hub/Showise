"use client";

import React from 'react';
import { Calendar as CalendarIcon, Bell, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ReleaseCalendarPage = () => {
  const releases = [
    {
      date: "Oct 28",
      name: "Jordan 1 High 'Royal Reimagined'",
      brand: "Jordan",
      price: 180,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=400&auto=format&fit=crop",
      status: "Upcoming"
    },
    {
      date: "Nov 02",
      name: "Yeezy Boost 350 V2 'Onyx'",
      brand: "Adidas",
      price: 230,
      image: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=400&auto=format&fit=crop",
      status: "Raffle Open"
    },
    {
      date: "Nov 10",
      name: "Nike Dunk Low 'Reverse Panda'",
      brand: "Nike",
      price: 110,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400&auto=format&fit=crop",
      status: "Upcoming"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <div className="flex items-center space-x-2 text-orange-600 font-bold mb-2">
            <CalendarIcon className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm">Release Calendar</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-2">Upcoming Drops</h1>
          <p className="text-gray-600">Never miss a release. Set alerts for your favorite pairs.</p>
        </div>
        <Button variant="outline" className="rounded-full">
          <Bell className="w-4 h-4 mr-2" />
          Manage Alerts
        </Button>
      </div>

      <div className="grid gap-6">
        {releases.map((release, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all rounded-[2rem] overflow-hidden bg-white group">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-48 h-48 bg-gray-100 shrink-0 overflow-hidden">
                  <img src={release.image} alt={release.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                      <span className="text-2xl font-black text-gray-900">{release.date}</span>
                      <Badge className={cn(
                        "rounded-full px-3 py-0.5 border-none",
                        release.status === 'Raffle Open' ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                      )}>
                        {release.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-orange-600 font-bold uppercase tracking-widest">{release.brand}</p>
                    <h3 className="text-xl font-bold text-gray-900">{release.name}</h3>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right hidden md:block">
                      <p className="text-xs text-gray-400 uppercase font-bold">Retail Price</p>
                      <p className="text-xl font-bold">${release.price}</p>
                    </div>
                    <Button className="bg-gray-900 text-white rounded-full px-8 h-12 font-bold">
                      Set Reminder
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-start space-x-4">
        <Info className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-blue-900">AI Fit Prediction</h4>
          <p className="text-blue-800 text-sm mt-1">
            We've already analyzed the internal dimensions of these upcoming models. Once they drop, your personalized "Fit Match" score will be available instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';
export default ReleaseCalendarPage;