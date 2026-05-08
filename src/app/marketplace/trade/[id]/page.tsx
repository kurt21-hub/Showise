"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeftRight, CheckCircle2, Info, ChevronRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const TradeRequestPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Mock listing data
  const listing = {
    id,
    name: 'Yeezy Boost 350 V2',
    brand: 'Adidas',
    image: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?q=80&w=400&auto=format&fit=crop',
    sellerName: 'Mike R.',
    size: 9,
    tradePreferences: 'Looking for size 10 in similar condition'
  };

  const handleSendRequest = () => {
    toast.success("Trade request sent to " + listing.sellerName);
    router.push('/marketplace');
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">Initiate Trade</h1>
        <div className="flex items-center space-x-2">
          {[1, 2].map(i => (
            <div key={i} className={cn("w-8 h-2 rounded-full transition-all", step >= i ? "bg-orange-600" : "bg-gray-200")} />
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: The Item You Want */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center">
            <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm mr-3">1</span>
            Item You Want
          </h2>
          <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-100">
                <img src={listing.image} alt={listing.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs text-orange-600 font-bold uppercase mb-1">{listing.brand}</p>
                <h3 className="text-xl font-bold mb-2">{listing.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Size: {listing.size}</span>
                  <span>Seller: {listing.sellerName}</span>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-xs text-blue-800 font-bold uppercase mb-1">Seller's Preference</p>
                  <p className="text-sm text-blue-700">{listing.tradePreferences}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Your Offer */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center">
            <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-sm text-orange-600 mr-3">2</span>
            Your Offer
          </h2>
          
          {step === 1 ? (
            <div className="space-y-6">
              <div className="p-8 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center bg-gray-50 hover:border-orange-400 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-gray-400" />
                </div>
                <p className="font-bold text-gray-900">Upload Your Shoe</p>
                <p className="text-sm text-gray-500 text-center mt-2">Take photos of the shoe you want to offer for trade.</p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Select from your listings</Label>
                  <div className="p-4 border border-gray-100 rounded-2xl flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Nike Dunk Low</p>
                        <p className="text-xs text-gray-500">Size 10 • Like New</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <Button className="w-full bg-gray-900 text-white rounded-full h-12" onClick={() => setStep(2)}>
                  Continue to Message
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-2">
                <Label htmlFor="message">Message to {listing.sellerName}</Label>
                <Textarea 
                  id="message" 
                  placeholder="Explain why this is a good trade..." 
                  className="rounded-2xl min-h-[150px]"
                />
              </div>
              <div className="p-4 bg-orange-50 rounded-2xl flex items-start space-x-3">
                <Info className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <p className="text-xs text-orange-800">
                  ShoeWise protects both parties. We'll verify both shoes before the final exchange to ensure authenticity and condition.
                </p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1 rounded-full h-12" onClick={() => setStep(1)}>Back</Button>
                <Button className="flex-[2] bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12 font-bold" onClick={handleSendRequest}>
                  Send Trade Request
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import { cn } from '@/lib/utils';
export default TradeRequestPage;