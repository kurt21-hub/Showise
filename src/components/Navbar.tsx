"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, ShoppingCart, User, Menu, X, Scan, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useShoeWise } from '@/context/ShoeWiseContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { cart, user } = useShoeWise();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            onClick={() => {
              router.push('/products');
            }}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img src="/logo.jpg" alt="ShoeWise Logo" className="h-12 w-auto" />
          </button>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-600",
                  pathname === link.href ? "text-orange-600" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="hidden md:flex items-center bg-muted rounded-full px-3 py-1.5">
            <Search className="w-4 h-4 text-muted-foreground mr-2" />
            <input
              type="text"
              placeholder="Search shoes..."
              className="bg-transparent border-none outline-none text-sm w-32 focus:w-48 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <div className="flex items-center space-x-2">
            <Link href="/notifications">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full" />
              </Button>
            </Link>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
            </Link>

            <Link href={user ? "/profile" : "/auth/login"}>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>



            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background p-4 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "block text-lg font-medium py-2",
                pathname === link.href ? "text-orange-600" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
};

export default Navbar;