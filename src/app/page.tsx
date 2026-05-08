"use client";

import Link from "next/link";
import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Send, ShieldCheck, Zap, Users, TrendingUp, Gift, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Home = () => {
  const brands = [
    { name: 'Nike', slug: 'nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
    { name: 'Adidas', slug: 'adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
    { name: 'Jordan', slug: 'jordan', logo: 'https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg' },
    { name: 'ASICS', slug: 'asics', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Asics_Logo.svg' },
  ];

  const topMatches = [
    {
      id: '1',
      name: 'Nike Air Max Pulse',
      brand: 'Nike',
      price: 8995,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
      match: 98,
      category: 'Running',
    },
    {
      id: '2',
      name: 'Adidas Ultraboost 24',
      brand: 'Adidas',
      price: 10995,
      image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&auto=format&fit=crop',
      match: 94,
      category: 'Running',
    },
    {
      id: '3',
      name: 'New Balance 1080v13',
      brand: 'New Balance',
      price: 9995,
      image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop',
      match: 96,
      category: 'Running',
    },
    {
      id: '4',
      name: 'ASICS Gel-Kayano 30',
      brand: 'ASICS',
      price: 9495,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
      match: 92,
      category: 'Stability',
    },
  ];

  const formatPeso = (amount: number) =>
    new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      maximumFractionDigits: 0,
    }).format(amount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-orange-600 uppercase bg-orange-50 rounded-full">
                THE FUTURE OF FOOTWEAR
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                Find Your <span className="text-orange-600">Perfect Fit</span> with AI.
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                ShoeWise lets you scan our QR code to install the mobile app and get smart shoe recommendations for your unique profile. Buy, sell, and trade shoes in our marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-orange-200">
                      <Scan className="w-5 h-5 mr-2" />
                      Scan Our QR Code
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md p-8">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center">Scan to Install Mobile App</DialogTitle>
                      <DialogDescription className="text-center text-lg mt-2">
                        Use your phone's camera to scan this QR code and download the ShoeWise app for AI foot scanning.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="my-8 p-4 bg-white rounded-xl shadow-inner border border-gray-100 flex flex-col items-center justify-center">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://shoewise.com/download" alt="QR Code" className="w-64 h-64 shadow-md rounded-lg" />
                      <p className="text-sm text-gray-500 font-medium mt-4">Point your camera here</p>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2">
                  Browse Collection
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 w-full h-full hidden lg:flex items-center justify-end pr-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-100 rounded-full blur-3xl opacity-50" />
          <motion.div
            className="relative z-10 w-[600px] h-[600px] bg-red-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden"
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: -15, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop"
              alt="Red Nike Shoe"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            {brands.map((brand) => (
              <img key={brand.slug} src={brand.logo} alt={brand.name} className="h-8 md:h-10 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">About ShoeWise</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            ShoeWise is a revolutionary platform for sneaker enthusiasts. We provide AI-powered recommendations, a vibrant marketplace, and a community for everything sneakers. Our mission is to make the world of sneakers more accessible and enjoyable for everyone.
          </p>
        </div>
      </section>

      {/* Features Section - Core Services */}
      <section id="features" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Complete Sneaker Ecosystem</h2>
            <p className="text-xl text-gray-300">Everything you need to collect, verify, and trade authenticated sneakers.</p>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '🛍️',
                title: 'Buy',
                desc: 'Discover authenticated shoes with AI fit matching before you purchase.',
                link: '/products',
              },
              {
                icon: '💼',
                title: 'Sell',
                desc: 'List your gently worn shoes and reach thousands of active buyers instantly.',
                link: '/sell',
              },
              {
                icon: '🔄',
                title: 'Trade-In',
                desc: 'Swap your old pairs for credit toward new AI-recommended footwear.',
                link: '/marketplace/trade',
              },
              {
                icon: '🛡️',
                title: 'Verify',
                desc: 'Get AI-powered authentication reports for complete peace of mind.',
                link: '/verification',
              },
              {
                icon: '👟',
                title: 'Fit Matching',
                desc: 'Our AI scans your feet to find the perfect size and model for you.',
                link: '/tools/size-comparison',
              },
              {
                icon: '💬',
                title: 'Community',
                desc: 'Connect with sneaker enthusiasts, share your collection, and trade tips.',
                link: '/community',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link href={feature.link}>
                  <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-2">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                      <p className="text-gray-400 flex-grow">{feature.desc}</p>
                      <div className="mt-4 text-orange-500 font-semibold flex items-center">
                        Learn more →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { stat: '2.4M+', label: 'Shoes Matched' },
                { stat: '180K+', label: 'Pairs Resold' },
                { stat: '45K+', label: 'Trade-Ins Completed' },
                { stat: '340T', label: 'CO₂ Saved (kg)' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{item.stat}</div>
                  <div className="text-orange-100 font-medium">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Powered by Advanced AI</h2>
            <p className="text-gray-600 text-lg">Cutting-edge technology for a smarter sneaker experience.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'AI Foot Scanning',
                desc: 'Get precise foot measurements using your smartphone camera for perfect fits.',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: 'Advanced Authentication',
                desc: '3D volumetric analysis and spectral material detection for 100% authenticity.',
                color: 'bg-green-100 text-green-600',
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Price Intelligence',
                desc: 'AI-powered pricing recommendations based on real-time market data.',
                color: 'bg-purple-100 text-purple-600',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Smart Matching',
                desc: 'Connect buyers and sellers with precision matching algorithms.',
                color: 'bg-pink-100 text-pink-600',
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: 'Rewards & Loyalty',
                desc: 'Earn points on every transaction and unlock exclusive tier benefits.',
                color: 'bg-yellow-100 text-yellow-600',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Market Insights',
                desc: 'Real-time analytics on trends, demand, and price movements.',
                color: 'bg-orange-100 text-orange-600',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className={`p-4 rounded-xl shrink-0 ${feature.color}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Matches Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-orange-600 uppercase bg-orange-100 rounded-full">
              AI-Curated Picks
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Top Matches for You</h2>
            <p className="text-gray-600 text-lg">AI-curated selections with personalized fit accuracy scores.</p>
          </div>

          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-6 min-w-max snap-x snap-mandatory">
              {topMatches.map((shoe) => (
                <motion.div
                  key={shoe.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="snap-start"
                >
                  <Card className="w-[320px] sm:w-[360px] overflow-hidden rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-lg transition-all group">
                    <CardContent className="p-0">
                      <div className="relative aspect-square bg-gray-100 overflow-hidden">
                        <img
                          src={shoe.image}
                          alt={shoe.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center rounded-full bg-orange-600 px-3 py-1 text-sm font-bold text-white shadow-md">
                            {shoe.match}% Match
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-900 backdrop-blur-sm">
                            {shoe.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 bg-white">
                        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">{shoe.brand}</p>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{shoe.name}</h3>
                        <p className="text-2xl font-extrabold text-orange-600 mb-5">{formatPeso(shoe.price)}</p>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full rounded-full h-12 bg-gray-900 text-white font-bold hover:bg-gray-800">
                              View in App
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md p-8 rounded-3xl">
                            <DialogHeader>
                              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-orange-50 flex items-center justify-center">
                                <Smartphone className="w-8 h-8 text-orange-600" />
                              </div>
                              <DialogTitle className="text-4xl font-bold text-center">Download the App</DialogTitle>
                              <DialogDescription className="text-center text-lg text-gray-500 mt-2 leading-relaxed">
                                To continue shopping and receive personalized AI recommendations, download the ShoeWise app on your phone.
                              </DialogDescription>
                            </DialogHeader>

                            <div className="mt-4 space-y-3">
                              <Button asChild className="w-full h-14 rounded-2xl text-xl font-bold bg-black hover:bg-gray-900 text-white">
                                <a href="https://apps.apple.com" target="_blank" rel="noreferrer">
                                  Download for iOS
                                </a>
                              </Button>
                              <Button asChild variant="outline" className="w-full h-14 rounded-2xl text-xl font-bold border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-900">
                                <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
                                  Download for Android
                                </a>
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input id="name" placeholder="Your Name" required className="rounded-xl h-12" />
            </div>
            <div className="space-y-2">
              <Input id="email" type="email" placeholder="Your Email" required className="rounded-xl h-12" />
            </div>
            <div className="space-y-2">
              <Textarea id="message" placeholder="Your Message" className="rounded-xl min-h-[150px]" required />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white rounded-full h-14 text-lg font-bold">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;