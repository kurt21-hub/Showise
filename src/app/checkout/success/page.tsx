"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Package, ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const OrderSuccessPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8"
      >
        <CheckCircle2 className="w-12 h-12 text-green-600" />
      </motion.div>
      
      <h1 className="text-4xl font-bold mb-4">Order Placed Successfully!</h1>
      <p className="text-gray-600 mb-10 max-w-md mx-auto">
        Thank you for your purchase. Your order <span className="font-bold text-gray-900">#SW-9283</span> is being processed and will be shipped soon.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 w-full max-w-md">
        <Link href="/profile">
          <Button variant="outline" className="w-full rounded-full h-12">
            <Package className="w-4 h-4 mr-2" />
            Track Order
          </Button>
        </Link>
        <Link href="/products">
          <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
        </Link>
      </div>

      <div className="mt-16 p-8 bg-orange-50 rounded-3xl border border-orange-100 max-w-2xl w-full">
        <h3 className="font-bold text-orange-900 mb-2">What's Next?</h3>
        <div className="grid md:grid-cols-3 gap-6 text-left mt-6">
          <div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold mb-3 shadow-sm">1</div>
            <p className="text-sm font-bold text-orange-900">Confirmation</p>
            <p className="text-xs text-orange-800 mt-1">We've sent a confirmation email to your inbox.</p>
          </div>
          <div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold mb-3 shadow-sm">2</div>
            <p className="text-sm font-bold text-orange-900">Processing</p>
            <p className="text-xs text-orange-800 mt-1">Our team is verifying the fit and quality of your shoes.</p>
          </div>
          <div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold mb-3 shadow-sm">3</div>
            <p className="text-sm font-bold text-orange-900">Shipping</p>
            <p className="text-xs text-orange-800 mt-1">You'll receive a tracking number once it's on the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;