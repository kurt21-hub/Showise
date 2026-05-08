"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, User, Share2, Bookmark, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NewsArticlePage = () => {
  const { id } = useParams();
  const router = useRouter();

  // Mock article data
  const article = {
    id,
    title: "How AI is Solving the Sizing Crisis",
    subtitle: "A deep dive into how computer vision is helping sneakerheads find their perfect fit without leaving home.",
    content: `
      <p className="mb-6">For decades, the biggest hurdle in online footwear shopping has been the inconsistency of sizing. A size 10 in one brand might feel like a 9.5 in another, leading to a 30% return rate across the industry. But a new wave of AI-powered technology is changing the game.</p>
      
      <h2 className="text-2xl font-bold mb-4 mt-8">The Problem with Traditional Sizing</h2>
      <p className="mb-6">Traditional shoe sizing is based on the "last"—the mechanical form that has a shape similar to that of a human foot. However, every manufacturer uses different lasts, and even within the same brand, different models can vary wildly based on their intended use (performance vs. lifestyle).</p>
      
      <h2 className="text-2xl font-bold mb-4 mt-8">Enter Computer Vision</h2>
      <p className="mb-6">By using advanced computer vision algorithms, platforms like ShoeWise can now map the unique geometry of a user's foot using just a standard smartphone camera. This isn't just about length; it's about volume, arch height, and width profile.</p>
      
      <blockquote className="border-l-4 border-orange-600 pl-6 py-2 my-8 italic text-xl text-gray-700">
        "We're moving from a world of 'What size are you?' to 'How does this specific shoe fit you?'"
      </blockquote>
      
      <h2 className="text-2xl font-bold mb-4 mt-8">The Future of the Marketplace</h2>
      <p className="mb-6">As this data becomes more ubiquitous, we'll see a shift in how marketplaces operate. Instead of browsing thousands of shoes, users will be presented with a curated selection of footwear that is guaranteed to fit their unique profile.</p>
    `,
    image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=1200&auto=format&fit=crop",
    author: "Tech Team",
    date: "Oct 22, 2023",
    category: "Technology",
    readTime: "6 min read"
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <button 
        onClick={() => router.back()}
        className="flex items-center text-gray-500 hover:text-orange-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to News
      </button>

      <div className="mb-10">
        <Badge className="bg-orange-50 text-orange-600 border-none px-4 py-1 rounded-full uppercase tracking-widest text-xs font-bold mb-6">
          {article.category}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {article.subtitle}
        </p>
        
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-gray-900">{article.author}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-3 h-3 mr-1" />
                {article.date} • {article.readTime}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-12 shadow-xl">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
      </div>

      <div 
        className="prose prose-orange max-w-none text-gray-700 leading-relaxed text-lg"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="mt-16 pt-12 border-t border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">Comments (12)</h3>
          <Button variant="outline" className="rounded-full">
            <MessageSquare className="w-4 h-4 mr-2" />
            Post a Comment
          </Button>
        </div>
        
        <div className="space-y-8">
          {[
            { user: 'Mike R.', text: 'This is exactly what the industry needs. Sizing has been a nightmare for years.', time: '2 hours ago' },
            { user: 'Sarah K.', text: 'I tried the scan and it was surprisingly accurate. Can\'t wait to see more brands integrated.', time: '5 hours ago' }
          ].map((comment, i) => (
            <div key={i} className="flex space-x-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600 shrink-0">
                {comment.user.charAt(0)}
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl flex-1">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold text-gray-900">{comment.user}</p>
                  <span className="text-xs text-gray-400">{comment.time}</span>
                </div>
                <p className="text-gray-600">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticlePage;