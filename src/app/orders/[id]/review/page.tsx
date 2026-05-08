"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Star, Camera, Info, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ReviewSubmissionPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    toast.success("Review submitted! Thank you for your feedback.");
    router.push('/orders');
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Write a Review</h1>
        <p className="text-gray-600">Share your experience with Order {id}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
          <Label className="text-lg font-bold">How was the fit?</Label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="transition-transform hover:scale-110"
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(star)}
              >
                <Star 
                  className={cn(
                    "w-10 h-10",
                    (hover || rating) >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
                  )} 
                />
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            {rating === 5 ? "Perfect Fit!" : rating === 4 ? "Great Fit" : rating === 3 ? "Okay" : rating === 2 ? "A bit off" : rating === 1 ? "Poor Fit" : "Select a rating"}
          </p>
        </div>

        <div className="space-y-4">
          <Label htmlFor="comment" className="text-lg font-bold">Your Feedback</Label>
          <Textarea 
            id="comment" 
            placeholder="Tell us about the comfort, style, and how the AI recommendation worked for you..." 
            className="rounded-2xl min-h-[150px] p-6"
            required
          />
        </div>

        <div className="space-y-4">
          <Label className="text-lg font-bold">Add Photos (Optional)</Label>
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:border-orange-400 transition-colors">
              <Camera className="w-6 h-6 text-gray-400 mb-2" />
              <span className="text-[10px] text-gray-500">Add Photo</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100 flex items-start space-x-4">
          <Info className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
          <p className="text-sm text-orange-800">
            Your review helps other sneakerheads find their perfect fit and improves our AI recommendation engine.
          </p>
        </div>

        <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-14 text-lg font-bold shadow-lg shadow-orange-200">
          <Send className="w-5 h-5 mr-2" />
          Submit Review
        </Button>
      </form>
    </div>
  );
};

export default ReviewSubmissionPage;