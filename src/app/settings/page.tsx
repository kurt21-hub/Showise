"use client";

import React from 'react';
import { User, Bell, Shield, CreditCard, Globe, Moon, ChevronRight, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const SettingsPage = () => {
  const handleSave = () => {
    toast.success("Settings updated successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-10">Settings</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Navigation */}
        <div className="space-y-2">
          {[
            { icon: <User className="w-5 h-5" />, label: "Profile", active: true },
            { icon: <Bell className="w-5 h-5" />, label: "Notifications" },
            { icon: <Shield className="w-5 h-5" />, label: "Privacy & Security" },
            { icon: <CreditCard className="w-5 h-5" />, label: "Payments" },
            { icon: <Globe className="w-5 h-5" />, label: "Language" },
          ].map((item, i) => (
            <button 
              key={i}
              className={cn(
                "w-full flex items-center space-x-3 p-4 rounded-2xl transition-colors",
                item.active ? "bg-orange-50 text-orange-600" : "hover:bg-gray-50 text-gray-600"
              )}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-2 space-y-8">
          <Card className="border-none shadow-sm rounded-3xl">
            <CardHeader className="p-8 pb-0">
              <CardTitle className="text-xl font-bold">Public Profile</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl font-bold">
                  A
                </div>
                <Button variant="outline" className="rounded-full">Change Avatar</Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" defaultValue="Alex Johnson" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="alexj_sneaks" className="rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" placeholder="Tell the community about your collection..." className="rounded-xl" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm rounded-3xl">
            <CardHeader className="p-8 pb-0">
              <CardTitle className="text-xl font-bold">Preferences</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-bold">Email Notifications</Label>
                  <p className="text-sm text-gray-500">Receive updates about your orders and trades.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-bold">Public Profile</Label>
                  <p className="text-sm text-gray-500">Allow others to see your collection and scan history.</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base font-bold">Dark Mode</Label>
                  <p className="text-sm text-gray-500">Switch between light and dark themes.</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSave} className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12 font-bold">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;