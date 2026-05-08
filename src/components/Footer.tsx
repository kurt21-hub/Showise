"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-orange-500">
              ShoeWise
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing the way you buy shoes. Our AI technology ensures you never have to worry about the wrong fit again.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Shop & Explore</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/products" className="hover:text-orange-500 transition-colors">All Shoes</Link></li>
              <li><Link href="/marketplace" className="hover:text-orange-500 transition-colors">Marketplace</Link></li>
              <li><Link href="/releases" className="hover:text-orange-500 transition-colors">Release Calendar</Link></li>
              <li><Link href="/verification" className="hover:text-orange-500 transition-colors">Verification Center</Link></li>
              <li><Link href="/scan" className="hover:text-orange-500 transition-colors">Foot Scan</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/faq" className="hover:text-orange-500 transition-colors">FAQs</Link></li>
              <li><Link href="/shipping" className="hover:text-orange-500 transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-orange-500 transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/size-guide" className="hover:text-orange-500 transition-colors">Size Guide</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-orange-500 transition-colors">How It Works</Link></li>
              <li><Link href="/news" className="hover:text-orange-500 transition-colors">Sneaker News</Link></li>
              <li><Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ShoeWise Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;