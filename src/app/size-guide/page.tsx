"use client";

import React from 'react';
import { Ruler, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const SizeGuidePage = () => {
  const sizeData = [
    { us: '7', uk: '6', eu: '40', cm: '25' },
    { us: '8', uk: '7', eu: '41', cm: '26' },
    { us: '9', uk: '8', eu: '42.5', cm: '27' },
    { us: '10', uk: '9', eu: '44', cm: '28' },
    { us: '11', uk: '10', eu: '45', cm: '29' },
    { us: '12', uk: '11', eu: '46', cm: '30' },
  ];

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl text-blue-600 mb-6">
          <Ruler className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">Size Guide</h1>
        <p className="text-gray-600">Find your perfect fit across all major brands.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="border-none shadow-sm bg-orange-50 rounded-3xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              Why sizes vary
            </h3>
            <p className="text-orange-800 text-sm leading-relaxed">
              Every brand uses different "lasts" (the 3D foot shape used to build a shoe). A Nike size 10 might feel tighter than an Adidas size 10 because of the arch height or toe box width. Our AI scan accounts for these subtle differences.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-blue-50 rounded-3xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              How to measure
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              For the most accurate results, use our AI scan. If measuring manually, measure from the back of your heel to the tip of your longest toe in the afternoon, as feet tend to swell during the day.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-16">
        <div className="p-8 border-b border-gray-50">
          <h3 className="text-xl font-bold">International Conversion Chart</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50">
              <TableHead className="font-bold">US Men's</TableHead>
              <TableHead className="font-bold">UK</TableHead>
              <TableHead className="font-bold">EU</TableHead>
              <TableHead className="font-bold">CM</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sizeData.map((row) => (
              <TableRow key={row.us}>
                <TableCell className="font-bold">{row.us}</TableCell>
                <TableCell>{row.uk}</TableCell>
                <TableCell>{row.eu}</TableCell>
                <TableCell>{row.cm}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md">
          <h3 className="text-2xl font-bold mb-2">Still not sure?</h3>
          <p className="text-gray-400 text-sm">Our AI scan is 98.4% accurate and takes less than 30 seconds. Never guess your size again.</p>
        </div>
        <Link href="/scan">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12 font-bold">
            Start AI Scan
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SizeGuidePage;