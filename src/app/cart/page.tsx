"use client";

import React from 'react';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useShoeWise } from '@/context/ShoeWiseContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useShoeWise();

  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingBag className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any shoes yet.</p>
        <Link href="/products">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <Card key={item.product.id} className="border-none shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{item.product.brand}</p>
                        <h3 className="font-bold text-lg">{item.product.name}</h3>
                        <p className="text-sm text-gray-500">Size: 10.5</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)} className="text-gray-400 hover:text-red-500">
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-3 py-1">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.product.id, -1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="font-bold text-sm">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.product.id, 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <span className="font-bold text-lg">${item.product.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="border-none shadow-sm rounded-3xl p-8 sticky top-24">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-4 mb-8">
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
            <Link href="/checkout">
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full h-14 text-lg font-bold">
                Checkout
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <p className="text-center text-xs text-gray-400 mt-6">
              Secure checkout powered by Stripe.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;