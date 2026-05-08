"use client";

import React, { useState } from 'react';
import { Camera, Upload, X, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const SellPage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Listing posted successfully!");
      router.push('/marketplace');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Post a Listing</h1>
        <p className="text-gray-600">Sell or trade your shoes with the ShoeWise community.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Image Upload */}
        <div className="space-y-4">
          <Label className="text-lg font-bold">Photos</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:border-orange-400 transition-colors">
              <Camera className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-xs text-gray-500">Add Photo</span>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-2xl border border-gray-200" />
            ))}
          </div>
          <p className="text-xs text-gray-500">Add at least 3 photos showing the front, sides, and soles.</p>
        </div>

        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="title">Product Title</Label>
            <Input id="title" placeholder="e.g. Nike Air Jordan 1 Retro" required className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <Select required>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nike">Nike</SelectItem>
                <SelectItem value="adidas">Adidas</SelectItem>
                <SelectItem value="jordan">Jordan</SelectItem>
                <SelectItem value="new-balance">New Balance</SelectItem>
                <SelectItem value="asics">ASICS</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="size">Size (US Men's)</Label>
            <Input id="size" type="number" step="0.5" placeholder="e.g. 10.5" required className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="condition">Condition</Label>
            <Select required>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New / Deadstock</SelectItem>
                <SelectItem value="like-new">Like New / Worn Once</SelectItem>
                <SelectItem value="used">Used / Good Condition</SelectItem>
                <SelectItem value="heavily-used">Heavily Used</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Listing Type */}
        <div className="space-y-4 p-6 bg-orange-50 rounded-3xl border border-orange-100">
          <Label className="text-lg font-bold text-orange-900">Listing Type</Label>
          <RadioGroup defaultValue="sell" className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 bg-white p-4 rounded-2xl border border-orange-200">
              <RadioGroupItem value="sell" id="type-sell" />
              <Label htmlFor="type-sell" className="font-medium">Sell Only</Label>
            </div>
            <div className="flex items-center space-x-2 bg-white p-4 rounded-2xl border border-orange-200">
              <RadioGroupItem value="trade" id="type-trade" />
              <Label htmlFor="type-trade" className="font-medium">Trade Only</Label>
            </div>
            <div className="flex items-center space-x-2 bg-white p-4 rounded-2xl border border-orange-200">
              <RadioGroupItem value="both" id="type-both" />
              <Label htmlFor="type-both" className="font-medium">Both</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Price ($)</Label>
          <Input id="price" type="number" placeholder="0.00" className="rounded-xl" />
          <p className="text-xs text-gray-500">Leave as 0 if trade only.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea 
            id="description" 
            placeholder="Describe the condition, any flaws, and why you're selling/trading..." 
            className="rounded-xl min-h-[120px]"
            required
          />
        </div>

        <div className="pt-6">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-14 text-lg font-bold shadow-lg shadow-orange-200"
          >
            {isSubmitting ? "Posting..." : "Post Listing"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SellPage;