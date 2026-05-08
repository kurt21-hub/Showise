"use client";

import React from 'react';
import { Bell, Settings, Zap, CheckCircle2, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const DropAlertsPage = () => {
  const activeAlerts = [
    { id: 1, brand: 'Nike', model: 'Air Max', type: 'All Releases', status: true },
    { id: 2, brand: 'Jordan', model: 'Jordan 1 High', type: 'Specific Model', status: true },
    { id: 3, brand: 'Adidas', model: 'Yeezy', type: 'Restocks Only', status: false },
  ];

  const handleToggle = (id: number) => {
    toast.success("Alert preference updated!");
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Drop Alerts</h1>
          <p className="text-gray-600">Manage your notifications for upcoming releases and restocks.</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12 font-bold">
          <Plus className="w-4 h-4 mr-2" />
          Add New Alert
        </Button>
      </div>

      <div className="grid gap-6 mb-12">
        {activeAlerts.map((alert) => (
          <Card key={alert.id} className="border-none shadow-sm rounded-3xl bg-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-bold text-lg">{alert.brand} {alert.model}</h3>
                      <Badge variant="secondary" className="text-[10px] uppercase rounded-full">{alert.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-500">Notify via Push & Email</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-gray-400 uppercase">Active</span>
                    <Switch defaultChecked={alert.status} onCheckedChange={() => handleToggle(alert.id)} />
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-sm rounded-[2.5rem] bg-gray-900 text-white p-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start space-x-4">
            <div className="bg-orange-600 p-3 rounded-2xl text-white shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">Smart Fit Alerts</h4>
              <p className="text-gray-400 text-sm">Only get notified for drops that match your AI foot scan profile and size availability.</p>
            </div>
          </div>
          <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 h-12 font-bold">
            Enable Smart Alerts
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DropAlertsPage;