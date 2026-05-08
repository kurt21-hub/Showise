"use client";

import React from 'react';
import { ShieldCheck, Search, Ruler, Package, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const VerificationPage = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Authenticity Check",
      desc: "Our experts inspect stitching, materials, and labels against our database of authentic models to ensure you never get a replica."
    },
    {
      icon: <Ruler className="w-8 h-8 text-orange-600" />,
      title: "Fit Verification",
      desc: "We measure the internal dimensions of every marketplace shoe to ensure it matches the seller's description and our AI's expectations."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: "Condition Grading",
      desc: "We verify the condition (New, Like New, Used) to ensure the buyer gets exactly what they paid for."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl text-green-600 mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-extrabold mb-6">ShoeWise Verified</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every transaction on our marketplace goes through our rigorous multi-point inspection process. We handle the trust so you can focus on the style.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">The Verification Journey</h2>
              <div className="space-y-8">
                {[
                  { title: "Seller Ships to Us", desc: "Once a deal is made, the seller ships the item to one of our global verification centers." },
                  { title: "Expert Inspection", desc: "Our team performs a physical inspection using high-resolution imaging and material analysis." },
                  { title: "Digital Tagging", desc: "Verified items receive a digital ShoeWise tag that links to their unique verification report." },
                  { title: "Secure Delivery", desc: "We repackage the item in our premium ShoeWise box and ship it directly to the buyer." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop" 
                alt="Verification Process" 
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to trade with confidence?</h2>
          <Link href="/marketplace">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-14">
              Explore Marketplace
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VerificationPage;