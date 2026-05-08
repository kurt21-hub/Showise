"use client";

import React, { useState } from 'react';
import { Camera, Upload, Info, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const RemoteAuthPage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Authentication request submitted!");
      router.push('/profile');
    }, 2000);
  };

  const photoSteps = [
    { label: "Side Profile", desc: "Full view of the outer side" },
    { label: "Size Tag", desc: "Clear shot of the internal label" },
    { label: "Insole Stitching", desc: "Remove insole and snap the footbed" },
    { label: "Box Label", desc: "All text and barcodes must be visible" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl text-blue-600 mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">Remote Legit Check</h1>
        <p className="text-gray-600">Get a professional authentication report from our experts within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardContent className="p-10">
            <h3 className="text-xl font-bold mb-8">1. Product Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="shoeName">Shoe Name</Label>
                <Input id="shoeName" placeholder="e.g. Jordan 1 Retro High OG" required className="rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sku">SKU / Style Code</Label>
                <Input id="sku" placeholder="e.g. 555088-101" required className="rounded-xl h-12" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <h3 className="text-xl font-bold px-4">2. Required Photos</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photoSteps.map((step, i) => (
              <div key={i} className="space-y-3">
                <div className="aspect-square border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center bg-gray-50 hover:border-orange-400 transition-colors cursor-pointer group">
                  <Camera className="w-8 h-8 text-gray-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase text-gray-500">Upload Photo</span>
                </div>
                <div className="px-2">
                  <p className="font-bold text-sm">{step.label}</p>
                  <p className="text-[10px] text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="border-none shadow-sm rounded-[2.5rem] bg-orange-50 p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-600 p-3 rounded-2xl text-white shrink-0">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-orange-900 mb-1">Service Fee: $15.00</h4>
                <p className="text-orange-800 text-sm">Includes a digital certificate of authenticity and a detailed breakdown of our findings.</p>
              </div>
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-10 h-14 font-bold text-lg shadow-xl"
            >
              {isSubmitting ? "Processing..." : "Submit for Review"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default RemoteAuthPage;