"use client";

import React from 'react';
import { RefreshCw, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ReturnsPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl text-orange-600 mb-6">
          <RefreshCw className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">Returns & Exchanges</h1>
        <p className="text-gray-600">Our "Perfect Fit" guarantee means you shop with zero risk.</p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ShieldCheck className="w-6 h-6 mr-2 text-green-600" />
            The Perfect Fit Guarantee
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If the shoes recommended by our AI scan don't fit you comfortably, you can return them within 30 days for a full refund or exchange. We'll even cover the return shipping.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h4 className="font-bold mb-2">Direct Purchases</h4>
              <p className="text-sm text-gray-500">Full refund or exchange within 30 days of delivery. Items must be in original condition with tags.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h4 className="font-bold mb-2">Marketplace Trades</h4>
              <p className="text-sm text-gray-500">Due to the nature of peer-to-peer trades, these are final once verified. However, we offer a "Re-List" service with zero fees.</p>
            </div>
          </div>
        </section>

        <section className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-4">How to start a return</h3>
          <div className="space-y-4">
            {[
              "Log in to your account and go to 'My Orders'.",
              "Select the order you wish to return and click 'Request Return'.",
              "Print the prepaid shipping label we send to your email.",
              "Drop the package at any authorized shipping location."
            ].map((step, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </div>
                <p className="text-blue-800 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col items-center text-center pt-8">
          <div className="flex items-center space-x-2 text-orange-600 mb-4">
            <AlertCircle className="w-5 h-5" />
            <span className="font-bold">Questions?</span>
          </div>
          <p className="text-gray-500 mb-8">Our support team is available 24/7 to help with your return.</p>
          <Link href="/contact">
            <Button className="bg-gray-900 text-white rounded-full px-8 h-12">Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPage;