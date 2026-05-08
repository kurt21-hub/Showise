"use client";

import React from 'react';
import { Scan, Zap, RefreshCw, ShieldCheck, ArrowRight, Smartphone, Ruler, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HowItWorksPage = () => {
  const steps = [
    {
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: "1. Capture Your Foot",
      desc: "Use your phone camera to take a photo of your foot. For best results, place your foot on a white A4 paper."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "2. AI Analysis",
      desc: "Our advanced computer vision algorithms detect key points on your foot to calculate precise length and width."
    },
    {
      icon: <Ruler className="w-8 h-8 text-orange-600" />,
      title: "3. Get Your Profile",
      desc: "Receive a detailed foot profile including your recommended size across different brands and width categories."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-orange-600" />,
      title: "4. Shop with Confidence",
      desc: "Browse shoes with a 'Fit Match' score. We only recommend shoes that will actually feel good on your feet."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-6">How ShoeWise Works</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We've combined AI technology with footwear expertise to solve the biggest problem in online shoe shopping: <span className="text-orange-600 font-bold">The Wrong Fit.</span>
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
                Our Technology
              </div>
              <h2 className="text-4xl font-bold mb-6">Precision Engineering for Your Feet</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our AI doesn't just measure length. It analyzes the entire geometry of your foot, including arch height and width profile. We then cross-reference this data with our internal database of shoe internal dimensions—which often differ from the size on the box.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "98.4% measurement accuracy",
                  "Brand-specific size mapping",
                  "Width-aware recommendations",
                  "Continuous learning from user feedback"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/scan">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">
                  Try the Scan Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2 bg-gray-100 rounded-[3rem] aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=800&auto=format&fit=crop" 
                alt="AI Foot Scanning Technology" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to find your perfect fit?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Join over 50,000 users who have found their perfect shoe size with ShoeWise.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/scan">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-14">
                Start Scanning
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-white text-white hover:bg-white hover:text-gray-900">
                Browse Shoes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;