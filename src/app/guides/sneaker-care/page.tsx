"use client";

import React from 'react';
import { Sparkles, Droplets, Shield, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SneakerCarePage = () => {
  const materials = [
    { id: 'leather', name: 'Leather', icon: <Shield className="w-5 h-5" /> },
    { id: 'suede', name: 'Suede/Nubuck', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'mesh', name: 'Mesh/Knit', icon: <Droplets className="w-5 h-5" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">Sneaker Care Guide</h1>
        <p className="text-xl text-gray-600">Keep your collection looking fresh with our expert maintenance tips.</p>
      </div>

      <Tabs defaultValue="leather" className="w-full mb-16">
        <TabsList className="grid grid-cols-3 h-16 bg-gray-100 p-1 rounded-2xl mb-8">
          {materials.map(m => (
            <TabsTrigger key={m.id} value={m.id} className="rounded-xl font-bold">
              {m.icon}
              <span className="ml-2 hidden sm:inline">{m.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="leather">
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-white p-10">
            <h3 className="text-2xl font-bold mb-6">Cleaning Leather Sneakers</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <p className="text-gray-600">Remove loose dirt with a soft-bristled brush or dry cloth.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <p className="text-gray-600">Mix warm water with a small amount of mild soap or specialized sneaker cleaner.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <p className="text-gray-600">Gently scrub the surface in circular motions. Avoid soaking the leather.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0 font-bold">4</div>
                <p className="text-gray-600">Wipe away excess foam and let them air dry away from direct sunlight or heat.</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="suede">
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-white p-10">
            <h3 className="text-2xl font-bold mb-6">Cleaning Suede & Nubuck</h3>
            <div className="p-6 bg-red-50 rounded-2xl border border-red-100 mb-8 flex items-start space-x-4">
              <Info className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <p className="text-sm text-red-800 font-bold">NEVER use water on suede. It can cause permanent staining and texture damage.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <p className="text-gray-600">Use a specialized suede brush to lift the nap and remove surface dust.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <p className="text-gray-600">For scuffs, use a suede eraser to gently rub the affected area.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <p className="text-gray-600">Apply a water-repellent spray specifically designed for suede to prevent future stains.</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="mesh">
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-white p-10">
            <h3 className="text-2xl font-bold mb-6">Cleaning Mesh & Knit</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <p className="text-gray-600">Remove the laces and wash them separately.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <p className="text-gray-600">Use a soft brush and cleaning solution to scrub the mesh. Be careful not to snag the fabric.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <p className="text-gray-600">For deep stains, you can use a laundry bag and wash on a delicate cycle (cold water only).</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white">
          <h3 className="text-xl font-bold mb-4">Pro Tip: Storage</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Store your sneakers in a cool, dry place. Use shoe trees or stuff them with acid-free paper to maintain their shape and prevent creasing.
          </p>
        </div>
        <div className="p-8 bg-orange-600 rounded-[2.5rem] text-white">
          <h3 className="text-xl font-bold mb-4">Need cleaning supplies?</h3>
          <p className="text-orange-100 text-sm leading-relaxed mb-6">
            Browse our curated selection of premium sneaker cleaning kits and protectors.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-orange-50 rounded-full px-6 font-bold">Shop Care Kits</Button>
        </div>
      </div>
    </div>
  );
};

export default SneakerCarePage;