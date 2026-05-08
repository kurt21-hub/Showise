"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Search, ZoomIn, Fingerprint, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AuthenticationGuidePage = () => {
  const checkpoints = [
    { icon: <Search className="w-6 h-6 text-blue-600" />, title: "Stitching Patterns", desc: "Authentic pairs have consistent, high-density stitching. Fakes often show frayed edges or uneven spacing." },
    { icon: <Fingerprint className="w-6 h-6 text-orange-600" />, title: "Material Texture", desc: "We analyze the grain of leather and the weave of mesh using high-resolution macro photography." },
    { icon: <ZoomIn className="w-6 h-6 text-purple-600" />, title: "Label Typography", desc: "Font weight, spacing, and ink quality on size tags are major indicators of authenticity." },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl text-green-600 mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-5xl font-extrabold mb-6">Authentication Guide</h1>
        <p className="text-xl text-gray-600">Learn how our experts and AI verify every pair on ShoeWise.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {checkpoints.map((point, i) => (
          <Card key={i} className="border-none shadow-sm bg-white rounded-3xl p-8 text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              {point.icon}
            </div>
            <h3 className="font-bold mb-2">{point.title}</h3>
            <p className="text-sm text-gray-500">{point.desc}</p>
          </Card>
        ))}
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Common Red Flags</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
            <div className="flex items-center space-x-2 text-red-600 mb-4">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold">The "Chemical" Smell</span>
            </div>
            <p className="text-sm text-red-800">Replica factories often use cheap glues and synthetic materials that emit a strong, pungent chemical odor compared to the mild leather scent of authentic pairs.</p>
          </div>
          <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
            <div className="flex items-center space-x-2 text-red-600 mb-4">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold">Inconsistent Box Labels</span>
            </div>
            <p className="text-sm text-red-800">Check for misspellings, incorrect color codes, or labels that aren't perfectly aligned. Authentic boxes have high-precision thermal printing.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 rounded-[3rem] p-12 text-white mb-16">
        <h2 className="text-3xl font-bold mb-8">The ShoeWise AI Advantage</h2>
        <div className="space-y-6">
          {[
            "3D Volumetric Analysis: We compare the internal volume of the shoe against official manufacturer specs.",
            "Spectral Material Analysis: Our sensors detect the chemical composition of materials to ensure they match the original.",
            "Global Database: We cross-reference every pair against a database of over 500,000 verified authentic sneakers."
          ].map((text, i) => (
            <div key={i} className="flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <h3 className="text-2xl font-bold mb-6">Ready to trade with confidence?</h3>
        <Link href="/marketplace">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-10 h-14 text-lg font-bold">
            Explore Marketplace
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AuthenticationGuidePage;