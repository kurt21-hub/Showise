"use client";

import React from 'react';
import { useShoeWise } from '@/context/ShoeWiseContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Info, ArrowRight, Star, Footprints } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const RecommendationsPage = () => {
  const { scanResult } = useShoeWise();

  const recommendations = [
    {
      id: '1',
      name: 'Air Max Pulse',
      brand: 'Nike',
      price: 150,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop',
      matchReason: 'Best for Standard Width',
      fitScore: 98,
      tags: ['Daily Wear', 'Cushioned']
    },
    {
      id: '7',
      name: 'Fresh Foam 1080',
      brand: 'New Balance',
      price: 165,
      image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=400&auto=format&fit=crop',
      matchReason: 'Great for Arch Support',
      fitScore: 97,
      tags: ['Running', 'Premium']
    },
    {
      id: '4',
      name: 'Gel-Kayano 30',
      brand: 'ASICS',
      price: 160,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop',
      matchReason: 'Stability Specialist',
      fitScore: 95,
      tags: ['Stability', 'Long Distance']
    }
  ];

  if (!scanResult) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
          <Footprints className="w-12 h-12 text-orange-600" />
        </div>
        <h1 className="text-3xl font-bold mb-4">No Scan Data Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">Scan your foot to unlock personalized recommendations tailored to your unique profile.</p>
        <Link href="/scan">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12">
            Start AI Scan
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <div className="flex items-center space-x-2 text-orange-600 font-bold mb-2">
            <Zap className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm">AI-Powered Picks</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Smart Recommendations</h1>
          <p className="text-gray-600">Based on your size {scanResult.recommendedSize} and {scanResult.widthCategory} width profile.</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
          <div className="text-right">
            <p className="text-xs text-gray-400 font-bold uppercase">Scan Confidence</p>
            <p className="text-xl font-bold text-green-600">{scanResult.confidence}%</p>
          </div>
          <div className="w-px h-10 bg-gray-100" />
          <Link href="/scan">
            <Button variant="ghost" size="sm" className="text-orange-600">Retake Scan</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-8">
        {recommendations.map((rec, i) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-none shadow-sm hover:shadow-md transition-all rounded-[2.5rem] overflow-hidden group">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-square md:aspect-auto bg-gray-100 overflow-hidden">
                    <img src={rec.image} alt={rec.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-1">{rec.brand}</p>
                          <h3 className="text-3xl font-bold text-gray-900">{rec.name}</h3>
                        </div>
                        <div className="text-right">
                          <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-2xl font-bold text-lg">
                            {rec.fitScore}% Match
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-6">
                        <Info className="w-4 h-4 text-blue-500" />
                        <span className="text-blue-700 font-medium bg-blue-50 px-3 py-1 rounded-full text-sm">
                          {rec.matchReason}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {rec.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 bg-gray-100 text-gray-600 border-none">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                      <span className="text-3xl font-bold text-gray-900">${rec.price}</span>
                      <div className="flex space-x-3">
                        <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
                          <Star className="w-5 h-5" />
                        </Button>
                        <Link href={`/products/${rec.id}`}>
                          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 h-12 font-bold">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import { motion } from 'framer-motion';
export default RecommendationsPage;