"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ScanResult, UserProfile } from '@/types';

interface ShoeWiseContextType {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
  scanResult: ScanResult | null;
  setScanResult: (result: ScanResult | null) => void;
  cart: { product: Product; quantity: number }[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
}

const ShoeWiseContext = createContext<ShoeWiseContextType | undefined>(undefined);

export const ShoeWiseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);

  // Mock initial user for demo purposes
  useEffect(() => {
    setUser({
      id: '1',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      scanHistory: [],
      savedProducts: [],
    });
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  return (
    <ShoeWiseContext.Provider value={{ 
      user, setUser, 
      scanResult, setScanResult, 
      cart, addToCart, removeFromCart, updateQuantity, clearCart 
    }}>
      {children}
    </ShoeWiseContext.Provider>
  );
};

export const useShoeWise = () => {
  const context = useContext(ShoeWiseContext);
  if (context === undefined) {
    throw new Error('useShoeWise must be used within a ShoeWiseProvider');
  }
  return context;
};