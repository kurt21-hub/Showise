"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Package, Truck, CheckCircle2, MapPin, CreditCard, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const OrderDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();

  // Mock order data
  const order = {
    id: id as string,
    date: 'Oct 24, 2023',
    status: 'Processing',
    total: 165.00,
    shippingAddress: '123 Shoe Lane, New York, NY 10001',
    paymentMethod: 'Visa ending in 4242',
    items: [
      { id: '1', name: 'Air Max Pulse', brand: 'Nike', price: 150, size: 9.5, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop' }
    ],
    timeline: [
      { status: 'Order Placed', date: 'Oct 24, 10:30 AM', completed: true },
      { status: 'Payment Confirmed', date: 'Oct 24, 10:32 AM', completed: true },
      { status: 'Quality & Fit Verification', date: 'Oct 25, 09:00 AM', completed: false, current: true },
      { status: 'Shipped', date: 'Pending', completed: false },
      { status: 'Delivered', date: 'Pending', completed: false },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <button 
        onClick={() => router.back()}
        className="flex items-center text-gray-500 hover:text-orange-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Orders
      </button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Order {order.id}</h1>
          <p className="text-gray-500">Placed on {order.date}</p>
        </div>
        <Badge className="bg-blue-100 text-blue-700 border-none px-4 py-1.5 rounded-full text-sm font-bold">
          {order.status}
        </Badge>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Tracking Timeline */}
          <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-8">Tracking Status</h3>
              <div className="space-y-8">
                {order.timeline.map((step, i) => (
                  <div key={i} className="flex items-start space-x-4 relative">
                    {i !== order.timeline.length - 1 && (
                      <div className={cn(
                        "absolute left-4 top-8 w-0.5 h-8",
                        step.completed ? "bg-green-500" : "bg-gray-100"
                      )} />
                    )}
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10",
                      step.completed ? "bg-green-500 text-white" : 
                      step.current ? "bg-orange-100 text-orange-600 border-2 border-orange-600" : "bg-gray-100 text-gray-400"
                    )}>
                      {step.completed ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <p className={cn("font-bold", step.current ? "text-orange-600" : "text-gray-900")}>
                        {step.status}
                      </p>
                      <p className="text-sm text-gray-500">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">Items</h3>
              <div className="space-y-6">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-xs text-orange-600 font-bold uppercase">{item.brand}</p>
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500">Size: {item.size} • Qty: 1</p>
                      </div>
                    </div>
                    <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-8">
          {/* Delivery Info */}
          <Card className="border-none shadow-sm rounded-3xl p-8 bg-white">
            <h3 className="text-lg font-bold mb-6">Delivery Details</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Shipping Address</p>
                  <p className="text-sm text-gray-600">{order.shippingAddress}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Truck className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Shipping Method</p>
                  <p className="text-sm text-gray-600">Standard Delivery (3-5 days)</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Payment Summary */}
          <Card className="border-none shadow-sm rounded-3xl p-8 bg-white">
            <h3 className="text-lg font-bold mb-6">Payment Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>$150.00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>$15.00</span>
              </div>
              <div className="pt-4 border-t border-gray-100 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-orange-600">${order.total.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <p className="text-sm text-gray-600">{order.paymentMethod}</p>
            </div>
          </Card>

          <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100 flex items-start space-x-4">
            <ShieldCheck className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-orange-900 text-sm">Fit Guarantee</h4>
              <p className="text-orange-800 text-xs mt-1">
                If these don't fit perfectly, you have 30 days to return them for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;