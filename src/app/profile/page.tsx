"use client";

import React from 'react';
import { User, Settings, Package, Scan, Heart, LogOut, ChevronRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useShoeWise } from '@/context/ShoeWiseContext';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const ProfilePage = () => {
  const { user, scanResult } = useShoeWise();

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-4 gap-12">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-4xl font-bold mb-4 border-4 border-white shadow-lg">
              {user.name.charAt(0)}
            </div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <Button variant="outline" size="sm" className="mt-4 rounded-full">Edit Profile</Button>
          </div>

          <nav className="space-y-2">
            {[
              { icon: <Package className="w-5 h-5" />, label: "My Orders" },
              { icon: <Scan className="w-5 h-5" />, label: "Scan History", active: true },
              { icon: <Heart className="w-5 h-5" />, label: "Wishlist" },
              { icon: <Settings className="w-5 h-5" />, label: "Settings" },
            ].map((item, i) => (
              <button 
                key={i}
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-2xl transition-colors",
                  item.active ? "bg-orange-50 text-orange-600" : "hover:bg-gray-50 text-gray-600"
                )}
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
            <button className="w-full flex items-center space-x-3 p-4 rounded-2xl text-red-500 hover:bg-red-50 transition-colors mt-8">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Scan Profile Card */}
          <Card className="border-none shadow-sm bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Your Foot Profile</h3>
                  <p className="text-orange-100 mb-6">Last scanned: {scanResult ? new Date(scanResult.timestamp).toLocaleDateString() : 'No scan yet'}</p>
                  
                  {scanResult ? (
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 min-w-[120px]">
                        <p className="text-xs text-orange-100 uppercase font-bold mb-1">Size (US)</p>
                        <p className="text-2xl font-bold">{scanResult.recommendedSize}</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 min-w-[120px]">
                        <p className="text-xs text-orange-100 uppercase font-bold mb-1">Width</p>
                        <p className="text-2xl font-bold capitalize">{scanResult.widthCategory}</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 min-w-[120px]">
                        <p className="text-xs text-orange-100 uppercase font-bold mb-1">Length</p>
                        <p className="text-2xl font-bold">{scanResult.lengthCm}cm</p>
                      </div>
                    </div>
                  ) : (
                    <Link href="/scan">
                      <Button className="bg-white text-orange-600 hover:bg-orange-50 rounded-full px-8">
                        Scan Now
                      </Button>
                    </Link>
                  )}
                </div>
                <div className="hidden md:block">
                  <Scan className="w-32 h-32 text-white/20" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <div>
            <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { type: 'order', title: 'Order #SW-9283 placed', date: '2 days ago', status: 'Processing' },
                { type: 'scan', title: 'New foot scan completed', date: '5 days ago', status: 'Success' },
                { type: 'listing', title: 'Nike Air Max listed for trade', date: '1 week ago', status: 'Active' },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">{activity.title}</h4>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="rounded-full px-3 py-1">{activity.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;