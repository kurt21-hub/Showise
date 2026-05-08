"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created successfully!");
    router.push('/scan'); // Direct to scan after signup
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-none shadow-xl rounded-[2rem] overflow-hidden">
        <CardContent className="p-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-500">Join ShoeWise for the perfect fit</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required className="rounded-xl h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="name@example.com" required className="rounded-xl h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required className="rounded-xl h-12" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <label htmlFor="terms" className="text-xs text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                I agree to the <Link href="/terms" className="text-orange-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12 font-bold text-lg shadow-lg shadow-orange-200">
              Sign Up
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-orange-600 font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;