"use client";

import React from 'react';
import Link from 'next/link';
import { Search, Book, Shield, Truck, RefreshCw, MessageCircle, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HelpCenterPage = () => {
  const categories = [
    { icon: <Book className="w-6 h-6 text-blue-600" />, title: "Getting Started", desc: "Learn how to scan your foot and find your size." },
    { icon: <Truck className="w-6 h-6 text-orange-600" />, title: "Shipping & Delivery", desc: "Track your orders and learn about our shipping methods." },
    { icon: <RefreshCw className="w-6 h-6 text-green-600" />, title: "Returns & Refunds", desc: "Our 'Perfect Fit' guarantee and how to start a return." },
    { icon: <Shield className="w-6 h-6 text-purple-600" />, title: "Marketplace Safety", desc: "How we verify shoes and protect your trades." },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold mb-6">How can we help?</h1>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
          <Input placeholder="Search for articles, guides, and more..." className="pl-14 h-16 rounded-2xl border-gray-200 text-lg shadow-sm" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {categories.map((cat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all rounded-[2rem] bg-white cursor-pointer group">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{cat.desc}</p>
              <div className="flex items-center text-orange-600 font-bold text-sm">
                Browse Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gray-900 rounded-[3rem] p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Still need assistance?</h2>
          <p className="text-gray-400 text-lg">Our support team is available 24/7 to help you with any questions or issues you might have.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <Link href="/contact">
            <Button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white rounded-full h-14 px-10 font-bold text-lg">
              Contact Support
            </Button>
          </Link>
          <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 rounded-full h-14 px-10 font-bold text-lg">
            <MessageCircle className="w-5 h-5 mr-2" />
            Live Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;