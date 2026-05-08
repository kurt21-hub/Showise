"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Logged in successfully!");
    router.push('/');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-none shadow-xl rounded-[2rem] overflow-hidden">
        <CardContent className="p-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-500">Sign in to your ShoeWise account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="name@example.com" required className="rounded-xl h-12" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/auth/forgot" className="text-xs text-orange-600 hover:underline">Forgot password?</Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" required className="rounded-xl h-12" />
            </div>

            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12 font-bold text-lg shadow-lg shadow-orange-200">
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-orange-600 font-bold hover:underline">Sign Up</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;