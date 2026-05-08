"use client";

import React from 'react';
import { Trophy, Star, Zap, Gift, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

const RewardsPage = () => {
  const tiers = [
    { name: 'Rookie', points: '0-500', active: true },
    { name: 'Pro', points: '500-2000', active: false },
    { name: 'All-Star', points: '2000-5000', active: false },
    { name: 'Hall of Fame', points: '5000+', active: false },
  ];

  const perks = [
    { icon: <Zap className="w-6 h-6 text-orange-600" />, title: "Early Access", desc: "Get 24-hour early access to limited drops." },
    { icon: <Star className="w-6 h-6 text-yellow-600" />, title: "Double Points", desc: "Earn 2x points on all marketplace trades." },
    { icon: <Gift className="w-6 h-6 text-purple-600" />, title: "Birthday Gift", desc: "A special discount code on your birthday." },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white mb-12 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-orange-600 p-2 rounded-xl">
              <Trophy className="w-6 h-6" />
            </div>
            <span className="font-bold uppercase tracking-widest text-sm">ShoeWise Rewards</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Level up your sneaker game.</h1>
          <p className="text-xl text-gray-400 mb-10">Earn points for every scan, purchase, and trade. Unlock exclusive perks and early access to drops.</p>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase mb-1">Current Balance</p>
                <p className="text-4xl font-black">350 <span className="text-lg font-normal text-gray-400">Points</span></p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 font-bold uppercase mb-1">Next Tier</p>
                <p className="text-xl font-bold">Pro <span className="text-sm font-normal text-gray-400">at 500</span></p>
              </div>
            </div>
            <Progress value={70} className="h-3 bg-white/10" />
          </div>
        </div>

        <Trophy className="absolute -bottom-20 -right-20 w-96 h-96 text-white/5 rotate-12" />
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {tiers.map((tier, i) => (
          <Card key={i} className={cn(
            "border-none shadow-sm rounded-3xl p-6 text-center transition-all",
            tier.active ? "bg-orange-50 ring-2 ring-orange-600" : "bg-white"
          )}>
            <h3 className={cn("text-xl font-bold mb-1", tier.active ? "text-orange-600" : "text-gray-900")}>{tier.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{tier.points} pts</p>
            {tier.active ? (
              <Badge className="bg-orange-600 text-white border-none rounded-full px-4">Current Tier</Badge>
            ) : (
              <Badge variant="outline" className="rounded-full px-4">Locked</Badge>
            )}
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-8">Your Active Perks</h2>
          <div className="space-y-6">
            {perks.map((perk, i) => (
              <div key={i} className="flex items-start space-x-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="p-3 bg-gray-50 rounded-2xl shrink-0">
                  {perk.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{perk.title}</h4>
                  <p className="text-gray-500 text-sm">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-orange-600 rounded-[2.5rem] p-10 text-white">
          <h3 className="text-2xl font-bold mb-6">How to earn points</h3>
          <div className="space-y-6">
            {[
              { action: "Complete a Foot Scan", pts: "+50 pts" },
              { action: "Make a Purchase", pts: "1 pt per $1" },
              { action: "Successful Trade", pts: "+100 pts" },
              { action: "Write a Review", pts: "+25 pts" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-white/10 last:border-0">
                <span className="font-medium">{item.action}</span>
                <span className="font-bold bg-white/20 px-3 py-1 rounded-full text-sm">{item.pts}</span>
              </div>
            ))}
          </div>
          <Button className="w-full mt-10 bg-white text-orange-600 hover:bg-orange-50 rounded-full h-14 font-bold text-lg">
            Start Earning
          </Button>
        </div>
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';
export default RewardsPage;