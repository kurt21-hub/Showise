"use client";

import React, { useState } from 'react';
import { ShieldCheck, CreditCard, Truck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useShoeWise } from '@/context/ShoeWiseContext';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
  const router = useRouter();
  const { cart, clearCart } = useShoeWise();
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = 15;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      toast.success("Order placed successfully!");
      clearCart();
      router.push('/checkout/success');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-10">Checkout</h1>

      <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Address */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">Shipping Address</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required className="rounded-xl" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" placeholder="123 Shoe Lane" required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" placeholder="10001" required className="rounded-xl" />
              </div>
            </div>
          </section>

          {/* Delivery Method */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <Truck className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">Delivery Method</h2>
            </div>
            <RadioGroup defaultValue="standard" className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 rounded-2xl border-2 border-gray-100 hover:border-orange-200 cursor-pointer transition-all">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="standard" id="del-standard" />
                  <div>
                    <Label htmlFor="del-standard" className="font-bold">Standard Delivery</Label>
                    <p className="text-xs text-gray-500">3-5 business days</p>
                  </div>
                </div>
                <span className="font-bold">$15.00</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl border-2 border-gray-100 hover:border-orange-200 cursor-pointer transition-all">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="express" id="del-express" />
                  <div>
                    <Label htmlFor="del-express" className="font-bold">Express Delivery</Label>
                    <p className="text-xs text-gray-500">1-2 business days</p>
                  </div>
                </div>
                <span className="font-bold">$25.00</span>
              </div>
            </RadioGroup>
          </section>

          {/* Payment Method */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">Payment Method</h2>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-3xl border-2 border-orange-600 bg-orange-50/30">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-bold">Credit / Debit Card</span>
                  <div className="flex space-x-2">
                    <div className="w-8 h-5 bg-gray-200 rounded" />
                    <div className="w-8 h-5 bg-gray-200 rounded" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNum">Card Number</Label>
                    <Input id="cardNum" placeholder="0000 0000 0000 0000" required className="rounded-xl bg-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required className="rounded-xl bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required className="rounded-xl bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="border-none shadow-sm rounded-3xl p-8 sticky top-24">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.product.name} x {item.quantity}</span>
                  <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4 mb-8 pt-6 border-t border-gray-100">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-gray-100 flex justify-between font-bold text-xl">
                <span>Total</span>
                <span className="text-orange-600">${total.toFixed(2)}</span>
              </div>
            </div>
            <Button 
              type="submit"
              disabled={isProcessing}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full h-14 text-lg font-bold"
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </Button>
            <div className="mt-6 flex items-center justify-center space-x-2 text-gray-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs">Secure SSL Encrypted Payment</span>
            </div>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;