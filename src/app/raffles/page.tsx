"use client";

import React from 'react';
import { Ticket, Clock, CheckCircle2, AlertCircle, ArrowRight, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const RafflesPage = () => {
  const raffles = [
    {
      id: 'r1',
      name: "Jordan 1 High 'Royal Reimagined'",
      brand: "Jordan",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=400&auto=format&fit=crop",
      endsIn: "2h 45m",
      status: "Open",
      entries: 12482,
      myEntry: true
    },
    {
      id: 'r2',
      name: "Yeezy Boost 350 V2 'Onyx'",
      brand: "Adidas",
      image: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=400&auto=format&fit=crop",
      endsIn: "1d 12h",
      status: "Open",
      entries: 8291,
      myEntry: false
    },
    {
      id: 'r3',
      name: "Nike Dunk Low 'Reverse Panda'",
      brand: "Nike",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400&auto=format&fit=crop",
      endsIn: "Closed",
      status: "Closed",
      entries: 25000,
      myEntry: true,
      result: 'Lost'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <div className="flex items-center space-x-2 text-orange-600 font-bold mb-2">
            <Ticket className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm">Exclusive Drops</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-2">Raffle Dashboard</h1>
          <p className="text-gray-600">Enter for a chance to buy limited releases at retail price.</p>
        </div>
        <Button variant="outline" className="rounded-full">
          <Bell className="w-4 h-4 mr-2" />
          Raffle Alerts
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Active Raffles */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold mb-6">Active Raffles</h3>
          {raffles.filter(r => r.status === 'Open').map((raffle) => (
            <Card key={raffle.id} className="border-none shadow-sm rounded-[2rem] overflow-hidden bg-white group">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-48 h-48 bg-gray-100 shrink-0 overflow-hidden">
                    <img src={raffle.image} alt={raffle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                        <Badge className="bg-green-100 text-green-700 border-none rounded-full px-3 py-0.5">
                          <Clock className="w-3 h-3 mr-1" />
                          Ends in {raffle.endsIn}
                        </Badge>
                        {raffle.myEntry && (
                          <Badge className="bg-blue-100 text-blue-700 border-none rounded-full px-3 py-0.5">
                            Entered
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-orange-600 font-bold uppercase tracking-widest">{raffle.brand}</p>
                      <h3 className="text-xl font-bold text-gray-900">{raffle.name}</h3>
                      <p className="text-xs text-gray-400 mt-1">{raffle.entries.toLocaleString()} entries so far</p>
                    </div>
                    <Button className={cn(
                      "rounded-full px-8 h-12 font-bold",
                      raffle.myEntry ? "bg-gray-100 text-gray-400" : "bg-orange-600 hover:bg-orange-700 text-white"
                    )} disabled={raffle.myEntry}>
                      {raffle.myEntry ? "Already Entered" : "Enter Raffle"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* My Raffle History */}
        <div className="space-y-8">
          <Card className="border-none shadow-sm rounded-3xl bg-gray-900 text-white p-8">
            <h3 className="text-lg font-bold mb-6">My Stats</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Win Rate</span>
                  <span className="font-bold">12%</span>
                </div>
                <Progress value={12} className="h-2 bg-white/10" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Entered</p>
                  <p className="text-xl font-bold">24</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Wins</p>
                  <p className="text-xl font-bold text-orange-500">3</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-none shadow-sm rounded-3xl bg-white p-8">
            <h3 className="text-lg font-bold mb-6">Recent Results</h3>
            <div className="space-y-6">
              {raffles.filter(r => r.status === 'Closed').map((raffle) => (
                <div key={raffle.id} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                    <img src={raffle.image} alt={raffle.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-900 truncate">{raffle.name}</p>
                    <p className={cn(
                      "text-[10px] font-bold uppercase",
                      raffle.result === 'Won' ? "text-green-600" : "text-red-500"
                    )}>
                      {raffle.result}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full"><ArrowRight className="w-4 h-4" /></Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';
export default RafflesPage;