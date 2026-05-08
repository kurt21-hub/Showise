"use client";

import React from 'react';
import { Target, Users, Heart, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At ShoeWise, we believe that everyone deserves the perfect fit. We're on a mission to eliminate the guesswork from online shoe shopping through cutting-edge AI and a community-driven marketplace.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why We Started</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ShoeWise was born out of a simple frustration: ordering shoes online only to have them arrive and not fit. We realized that "Size 10" means something different for every brand, and every foot is unique.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We spent two years developing our proprietary AI scanning technology to bridge the gap between digital shopping and physical comfort.
              </p>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=800&auto=format&fit=crop" 
                alt="Team working" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-8 h-8 text-orange-600" />, title: "Precision", desc: "Accuracy is at the heart of everything we build." },
              { icon: <Users className="w-8 h-8 text-orange-600" />, title: "Community", desc: "A marketplace built by sneakerheads, for sneakerheads." },
              { icon: <Heart className="w-8 h-8 text-orange-600" />, title: "Passion", desc: "We love shoes as much as you do." },
              { icon: <ShieldCheck className="w-8 h-8 text-orange-600" />, title: "Trust", desc: "Every trade and sale is verified for authenticity." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 text-center shadow-sm">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;