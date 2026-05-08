"use client";

import React from 'react';
import { Truck, Globe, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ShippingPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl text-blue-600 mb-6">
          <Truck className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">Shipping Information</h1>
        <p className="text-gray-600">Fast, secure, and verified delivery to your doorstep.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: <Globe className="w-6 h-6 text-blue-600" />, title: "Global Shipping", desc: "We ship to over 50 countries worldwide." },
          { icon: <ShieldCheck className="w-6 h-6 text-green-600" />, title: "Fully Insured", desc: "Every package is insured for its full value." },
          { icon: <Clock className="w-6 h-6 text-orange-600" />, title: "Fast Processing", desc: "Orders are verified and shipped within 48 hours." }
        ].map((item, i) => (
          <Card key={i} className="border-none shadow-sm bg-white rounded-3xl p-6 text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              {item.icon}
            </div>
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </Card>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-16">
        <div className="p-8 border-b border-gray-50">
          <h3 className="text-xl font-bold">Shipping Rates & Times</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50">
              <TableHead className="font-bold">Method</TableHead>
              <TableHead className="font-bold">Delivery Time</TableHead>
              <TableHead className="font-bold">Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Standard Delivery</TableCell>
              <TableCell>3-5 Business Days</TableCell>
              <TableCell>$15.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Express Delivery</TableCell>
              <TableCell>1-2 Business Days</TableCell>
              <TableCell>$25.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">International</TableCell>
              <TableCell>7-14 Business Days</TableCell>
              <TableCell>$45.00+</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-orange-900">Verification Center Processing</h4>
          <p className="text-orange-800 text-sm mt-1">
            Please note that for marketplace trades and purchases, items first travel to our verification center. This adds approximately 2-3 days to the total delivery time but ensures you receive 100% authentic products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;