"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const ForgotPasswordPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reset link sent to your email!");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-none shadow-xl rounded-[2rem] overflow-hidden">
        <CardContent className="p-10">
          <Link href="/auth/login" className="inline-flex items-center text-sm text-gray-500 hover:text-orange-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>

          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
            <p className="text-gray-500">Enter your email to receive a reset link</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="name@example.com" required className="rounded-xl h-12" />
            </div>

            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12 font-bold text-lg shadow-lg shadow-orange-200">
              Send Reset Link
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;