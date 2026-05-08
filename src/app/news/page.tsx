"use client";

import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const NewsPage = () => {
  const articles = [
    {
      id: 1,
      title: "The Evolution of Air Max: From 1987 to Now",
      excerpt: "Explore the history of Nike's most iconic cushioning technology and how it changed the sneaker world forever.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
      author: "James S.",
      date: "Oct 26, 2023",
      category: "History"
    },
    {
      id: 2,
      title: "Top 5 Running Shoes for Marathon Season",
      excerpt: "We've tested the latest carbon-plated racers to find the best options for your next personal best.",
      image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&auto=format&fit=crop",
      author: "Sarah K.",
      date: "Oct 24, 2023",
      category: "Performance"
    },
    {
      id: 3,
      title: "How AI is Solving the Sizing Crisis",
      excerpt: "A deep dive into how computer vision is helping sneakerheads find their perfect fit without leaving home.",
      image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=800&auto=format&fit=crop",
      author: "Tech Team",
      date: "Oct 22, 2023",
      category: "Technology"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Sneaker News</h1>
        <p className="text-gray-600">The latest drops, tech deep dives, and community stories.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Card key={article.id} className="border-none shadow-sm hover:shadow-md transition-all rounded-[2.5rem] overflow-hidden group">
            <CardContent className="p-0">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold">
                      {article.author.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-gray-700">{article.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-orange-600 font-bold">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;