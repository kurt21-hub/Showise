"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { ShieldCheck, Search, Ruler, Camera, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const VerificationTrackingPage = () => {
  const { id } = useParams();

  const steps = [
    { title: 'Received at Center', time: 'Oct 25, 09:00 AM', status: 'completed', icon: <CheckCircle2 className="w-5 h-5" /> },
    { title: 'Initial Inspection', time: 'Oct 25, 11:30 AM', status: 'completed', icon: <Search className="w-5 h-5" /> },
    { title: 'Material & Label Analysis', time: 'Oct 25, 02:15 PM', status: 'current', icon: <Camera className="w-5 h-5" /> },
    { title: 'Size & Fit Verification', time: 'Pending', status: 'upcoming', icon: <Ruler className="w-5 h-5" /> },
    { title: 'Final Authentication', time: 'Pending', status: 'upcoming', icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-green-600 font-bold mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm">Live Verification</span>
          </div>
          <h1 className="text-3xl font-bold">Tracking ID: {id}</h1>
          <p className="text-gray-500">Nike Air Max Pulse • Size 9.5</p>
        </div>
        <Badge className="bg-orange-100 text-orange-700 border-none px-4 py-1.5 rounded-full text-sm font-bold">
          In Progress
        </Badge>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-sm rounded-3xl bg-white p-8">
            <h3 className="text-xl font-bold mb-8">Verification Timeline</h3>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start space-x-4 relative">
                  {i !== steps.length - 1 && (
                    <div className={cn(
                      "absolute left-4 top-8 w-0.5 h-8",
                      step.status === 'completed' ? "bg-green-500" : "bg-gray-100"
                    )} />
                  )}
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10",
                    step.status === 'completed' ? "bg-green-500 text-white" : 
                    step.status === 'current' ? "bg-orange-100 text-orange-600 border-2 border-orange-600" : "bg-gray-100 text-gray-400"
                  )}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <p className={cn("font-bold", step.status === 'current' ? "text-orange-600" : "text-gray-900")}>
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-500">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-start space-x-4">
            <Info className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-blue-900">What happens next?</h4>
              <p className="text-blue-800 text-sm mt-1">
                Once authentication is complete, we'll issue a digital certificate and ship the item to the buyer within 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
            <div className="aspect-square bg-gray-100">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Item Details</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Seller</span>
                  <span className="font-medium">Mike R.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Condition</span>
                  <span className="font-medium">Like New</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Box</span>
                  <span className="font-medium">Original Included</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VerificationTrackingPage;