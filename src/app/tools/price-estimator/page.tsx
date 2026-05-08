"use client";

import React, { useState } from 'react';
import { Calculator, TrendingUp, Info, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

const PriceEstimatorPage = () => {
  const [step, setStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleEstimate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setResult({
        low: 185,
        average: 210,
        high: 245,
        demand: 'High',
        trend: 'Up 5% this month',
        lastSale: 215
      });
      setIsCalculating(false);
      setStep(2);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl text-orange-600 mb-6">
          <Calculator className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">Market Price Estimator</h1>
        <p className="text-gray-600">Get an AI-powered valuation for your sneakers based on real-time marketplace data.</p>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white">
              <CardContent className="p-10">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-lg font-bold">Which shoe are you pricing?</Label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input placeholder="e.g. Jordan 1 Retro High OG 'Chicago'" className="pl-12 h-14 rounded-2xl border-gray-200" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <Label className="text-lg font-bold">Condition</Label>
                      <Select>
                        <SelectTrigger className="h-14 rounded-2xl border-gray-200">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New / Deadstock</SelectItem>
                          <SelectItem value="like-new">Like New</SelectItem>
                          <SelectItem value="used">Used / Good</SelectItem>
                          <SelectItem value="heavily-used">Heavily Used</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-4">
                      <Label className="text-lg font-bold">Size (US Men's)</Label>
                      <Input type="number" step="0.5" placeholder="e.g. 10.5" className="h-14 rounded-2xl border-gray-200" />
                    </div>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-start space-x-4">
                    <Info className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <p className="text-sm text-blue-800">
                      Our algorithm analyzes thousands of recent sales across multiple platforms to give you the most accurate estimate.
                    </p>
                  </div>

                  <Button 
                    onClick={handleEstimate}
                    disabled={isCalculating}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-16 text-xl font-bold shadow-lg shadow-orange-200"
                  >
                    {isCalculating ? "Analyzing Market Data..." : "Get Price Estimate"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="bg-gray-900 rounded-[3rem] p-10 text-white text-center relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Estimated Value</p>
                <h2 className="text-6xl font-black mb-2">${result.average}</h2>
                <p className="text-gray-400 mb-8">Suggested Listing Range: ${result.low} - ${result.high}</p>
                
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Demand</p>
                    <p className="font-bold">{result.demand}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Trend</p>
                    <p className="font-bold text-green-400">{result.trend}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Last Sale</p>
                    <p className="font-bold">${result.lastSale}</p>
                  </div>
                </div>
              </div>
              <TrendingUp className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 -rotate-12" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={() => setStep(1)} className="rounded-full px-8 h-14 text-lg">
                Estimate Another
              </Button>
              <Link href="/sell">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-12 h-14 text-lg font-bold">
                  List for Sale Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PriceEstimatorPage;