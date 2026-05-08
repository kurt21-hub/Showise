"use client";

import Link from "next/link";
import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Features</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">AI Recommendations</h3>
              <p className="text-gray-600">Get personalized sneaker recommendations based on your style and preferences.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Marketplace</h3>
              <p className="text-gray-600">Buy, sell, and trade sneakers with other enthusiasts in our secure marketplace.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">Join our community to discuss the latest releases, share your collection, and connect with others.</p>
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