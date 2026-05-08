"use client";

import React from 'react';
import { Book, Search, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const GlossaryPage = () => {
  const terms = [
    { term: "DS (Deadstock)", definition: "A pair of sneakers that has never been worn, tried on, or laced. Usually includes original box and accessories." },
    { term: "VNDS (Very Near Deadstock)", definition: "Sneakers that have been worn once or twice but show almost no signs of wear." },
    { term: "LPU (Latest Pick Up)", definition: "The most recent addition to a collector's sneaker rotation." },
    { term: "Grail", definition: "A highly coveted sneaker that a collector desires above all others, often rare or expensive." },
    { term: "Colorway", definition: "The specific combination of colors used on a sneaker model." },
    { term: "Retro", definition: "A re-release of a classic sneaker model that was originally released years ago." },
    { term: "OG (Original)", definition: "Refers to the first time a sneaker model was ever released." },
    { term: "Beaters", definition: "Sneakers that are worn frequently and aren't kept in pristine condition." },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl text-orange-600 mb-6">
          <Book className="w-8 h-8" />
        </div>
        <h1 className="text-5xl font-extrabold mb-6">Sneaker Glossary</h1>
        <p className="text-xl text-gray-600">Master the lingo of the sneaker community.</p>
      </div>

      <div className="relative mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
        <Input placeholder="Search for a term..." className="pl-14 h-16 rounded-2xl border-gray-200 text-lg shadow-sm" />
      </div>

      <div className="grid gap-6">
        {terms.map((item, i) => (
          <Card key={i} className="border-none shadow-sm rounded-3xl bg-white hover:shadow-md transition-all">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-orange-600 mb-2">{item.term}</h3>
              <p className="text-gray-600 leading-relaxed">{item.definition}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex items-start space-x-4">
        <Info className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-blue-900">Did we miss something?</h4>
          <p className="text-blue-800 text-sm mt-1">
            The sneaker world is always evolving. If there's a term you'd like to see added, let us know through our community hub!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;