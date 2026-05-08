"use client";

import React from 'react';
import { Users, MessageSquare, TrendingUp, Calendar, Heart, Share2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CommunityPage = () => {
  const posts = [
    {
      user: 'Alex J.',
      avatar: null,
      text: 'Just got my first pair of Cloudmonsters based on the AI scan. The fit is incredible! Highly recommend for anyone with wider feet.',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop',
      likes: 42,
      comments: 8,
      time: '1 hour ago'
    },
    {
      user: 'Sarah K.',
      avatar: null,
      text: 'Looking to trade my Jordan 1s for something more lifestyle-focused. Check out my marketplace listing!',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop',
      likes: 28,
      comments: 15,
      time: '3 hours ago'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Community Hub</h1>
          <p className="text-gray-600">Connect with fellow sneakerheads and share your latest finds.</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12 font-bold">
          <Plus className="w-4 h-4 mr-2" />
          Create Post
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-8">
          {posts.map((post, i) => (
            <Card key={i} className="border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 border-2 border-orange-100">
                      <AvatarFallback className="bg-orange-50 text-orange-600 font-bold">{post.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-gray-900">{post.user}</p>
                      <p className="text-xs text-gray-400">{post.time}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Share2 className="w-4 h-4 text-gray-400" />
                  </Button>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{post.text}</p>
                
                <div className="aspect-video rounded-3xl overflow-hidden mb-6">
                  <img src={post.image} alt="Post image" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex items-center space-x-6 pt-6 border-t border-gray-50">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-bold">{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-600 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-sm font-bold">{post.comments}</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Trending Topics */}
          <Card className="border-none shadow-sm rounded-3xl bg-white p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
              Trending Topics
            </h3>
            <div className="space-y-4">
              {[
                { tag: '#AirMaxDay', posts: '1.2k posts' },
                { tag: '#PerfectFit', posts: '842 posts' },
                { tag: '#SneakerTrades', posts: '567 posts' },
                { tag: '#YeezyRestock', posts: '432 posts' },
              ].map((topic, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <span className="font-bold text-gray-700 group-hover:text-orange-600 transition-colors">{topic.tag}</span>
                  <span className="text-xs text-gray-400">{topic.posts}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Events */}
          <Card className="border-none shadow-sm rounded-3xl bg-gray-900 text-white p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-orange-500" />
              Community Events
            </h3>
            <div className="space-y-6">
              {[
                { title: 'NYC Sneaker Swap', date: 'Nov 12, 2023', location: 'Brooklyn, NY' },
                { title: 'AI Tech Talk', date: 'Nov 15, 2023', location: 'Virtual' },
              ].map((event, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-bold text-orange-500 text-sm">{event.date}</p>
                  <h4 className="font-bold">{event.title}</h4>
                  <p className="text-xs text-gray-400">{event.location}</p>
                </div>
              ))}
            </div>
            <Button className="w-full mt-8 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-bold">
              View All Events
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;