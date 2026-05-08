"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { Star, ShoppingCart, Heart, MessageCircle, ArrowLeftRight, ShieldCheck, Info, CheckCircle2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useShoeWise } from '@/context/ShoeWiseContext';
import { toast } from 'sonner';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, scanResult } = useShoeWise();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  // Mock product data
  const product = {
    id: id as string,
    name: 'Air Max Pulse',
    brand: 'Nike',
    price: 150,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    category: 'lifestyle',
    description: 'The Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line. Its point-loaded Air cushioning—revamped from the incredibly plush Air Max 270—delivers better bounce, helping you push past your limits.',
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    fitScore: 98,
    widthProfile: 'standard',
    reviews: [
      { id: 1, user: 'Sarah J.', rating: 5, comment: 'The AI scan was spot on! I usually struggle with Nike sizing but the recommended 9.5 fits perfectly.', date: '2 weeks ago' },
      { id: 2, user: 'Mark T.', rating: 4, comment: 'Great bounce and style. A bit narrow at first but they break in nicely.', date: '1 month ago' }
    ]
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size first");
      return;
    }
    addToCart(product as any);
    toast.success(`${product.name} (Size ${selectedSize}) added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-[2.5rem] overflow-hidden border border-gray-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <img src={product.image} alt={`${product.name} view ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <p className="text-orange-600 font-bold uppercase tracking-widest text-sm">{product.brand}</p>
              <div className="flex items-center space-x-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-bold text-gray-900">4.9 (120 reviews)</span>
              </div>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-gray-900 mb-6">${product.price}</p>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Smart Fit Section */}
          {scanResult && (
            <Card className="mb-8 border-none bg-orange-50 rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 p-3 rounded-2xl text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-orange-900 mb-1">Perfect Fit Recommendation</h3>
                    <p className="text-orange-800 text-sm mb-4">
                      Based on your AI scan, we recommend size <span className="font-bold">{scanResult.recommendedSize}</span> for this model.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/50 px-3 py-1 rounded-full text-xs font-bold text-orange-700">
                        Fit Confidence: {product.fitScore}%
                      </div>
                      <div className="bg-white/50 px-3 py-1 rounded-full text-xs font-bold text-orange-700">
                        Width: {scanResult.widthCategory}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Select Size (US Men's)</h3>
              <button className="text-sm text-orange-600 font-medium hover:underline">Size Guide</button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "h-12 rounded-xl border-2 font-bold transition-all",
                    selectedSize === size 
                      ? "border-orange-600 bg-orange-600 text-white" 
                      : "border-gray-100 hover:border-orange-200 text-gray-600",
                    scanResult?.recommendedSize === size && selectedSize !== size ? "bg-orange-50 border-orange-200" : ""
                  )}
                >
                  {size}
                  {scanResult?.recommendedSize === size && (
                    <div className="text-[8px] uppercase mt-[-2px]">Best Fit</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              onClick={handleAddToCart}
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-full h-14 text-lg font-bold"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-2">
              <Heart className="w-6 h-6" />
            </Button>
          </div>

          {/* Marketplace Options */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="rounded-2xl h-12 border-dashed border-orange-200 text-orange-600 hover:bg-orange-50">
              <ArrowLeftRight className="w-4 h-4 mr-2" />
              Trade This Shoe
            </Button>
            <Button variant="outline" className="rounded-2xl h-12 border-dashed border-blue-200 text-blue-600 hover:bg-blue-50">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with Seller
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
        <div className="space-y-8">
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.user}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("w-4 h-4", i < review.rating ? "fill-current" : "text-gray-200")} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
        <Button variant="outline" className="mt-8 rounded-full px-8">Write a Review</Button>
      </div>
    </div>
  );
};

export default ProductDetails;