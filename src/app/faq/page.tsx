"use client";

import React from 'react';
import { HelpCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "How accurate is the AI foot scan?",
      answer: "Our AI foot scan has a 98.4% accuracy rate when following the instructions correctly. We recommend placing your foot on a white A4 piece of paper on a flat, well-lit floor for the best results."
    },
    {
      question: "Do I need to scan my foot for every brand?",
      answer: "No! Once you've scanned your foot, our system automatically maps your measurements against the internal dimensions of thousands of shoe models from different brands. We know that a Nike size 10 fits differently than an Adidas size 10."
    },
    {
      question: "How does the trading system work?",
      answer: "When you initiate a trade, both parties send their shoes to our verification center. Our experts check for authenticity and condition. Once verified, we ship the shoes to their new owners. This ensures a safe and honest exchange."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day 'Perfect Fit' guarantee. If the shoes recommended by our AI don't fit you comfortably, you can return them for a full refund or exchange, no questions asked."
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely. Your foot scan data and personal information are encrypted and stored securely. We never share your biometric data with third parties without your explicit consent."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl text-orange-600 mb-6">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600">Everything you need to know about ShoeWise.</p>
      </div>

      <div className="relative mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input 
          placeholder="Search for a question..." 
          className="pl-12 h-14 rounded-2xl border-gray-200 focus:ring-orange-500/20"
        />
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 bg-white">
            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQPage;