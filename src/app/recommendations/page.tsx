"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Footprints, Info, Star } from 'lucide-react';
import { useShoeWise } from '@/context/ShoeWiseContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const recommendations = [
    {
        id: '1',
        name: 'Air Max Pulse',
        brand: 'Nike',
        price: 8995,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop',
        matchReason: 'Best for Standard Width',
        fitScore: 98,
        tags: ['Daily Wear', 'Cushioned'],
    },
    {
        id: '7',
        name: 'Fresh Foam 1080',
        brand: 'New Balance',
        price: 9995,
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=400&auto=format&fit=crop',
        matchReason: 'Great for Arch Support',
        fitScore: 97,
        tags: ['Running', 'Premium'],
    },
    {
        id: '4',
        name: 'Gel-Kayano 30',
        brand: 'ASICS',
        price: 9495,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop',
        matchReason: 'Stability Specialist',
        fitScore: 95,
        tags: ['Stability', 'Long Distance'],
    },
    {
        id: '2',
        name: 'Ultraboost Light',
        brand: 'Adidas',
        price: 10995,
        image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=400&auto=format&fit=crop',
        matchReason: 'Best Energy Return',
        fitScore: 94,
        tags: ['Running', 'Responsive'],
    },
];

const formatPeso = (amount: number) =>
    new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        maximumFractionDigits: 0,
    }).format(amount);

const RecommendationsPage = () => {
    const { scanResult } = useShoeWise();

    if (!scanResult) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Footprints className="w-12 h-12 text-orange-600" />
                </div>
                <h1 className="text-3xl font-bold mb-4">No Scan Data Found</h1>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Scan your foot to unlock personalized recommendations tailored to your unique profile.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/scan">
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12">
                            Start AI Scan
                        </Button>
                    </Link>
                    <Link href="/products">
                        <Button variant="outline" className="rounded-full px-8 h-12 border-2 border-orange-200 text-orange-600 hover:bg-orange-50">
                            Browse Marketplace
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
                <div>
                    <div className="flex items-center space-x-2 text-orange-600 font-bold mb-2">
                        <Star className="w-5 h-5" />
                        <span className="uppercase tracking-wider text-sm">AI-Powered Picks</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-2">Top Matches for You</h1>
                    <p className="text-gray-600">
                        AI-curated selections with personalized fit accuracy scores.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Based on your size {scanResult.recommendedSize} and {scanResult.widthCategory} width profile.
                    </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
                    <div className="text-right">
                        <p className="text-xs text-gray-400 font-bold uppercase">Scan Confidence</p>
                        <p className="text-xl font-bold text-green-600">{scanResult.confidence}%</p>
                    </div>
                    <div className="w-px h-10 bg-gray-100" />
                    <Link href="/scan">
                        <Button variant="ghost" size="sm" className="text-orange-600">
                            Retake Scan
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-500">Swipe horizontally to browse more recommendations.</p>
                <Link href="/products" className="text-sm font-semibold text-orange-600 hover:underline hidden sm:inline-flex items-center gap-1">
                    Open Marketplace <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-6 snap-x snap-mandatory min-w-max">
                    {recommendations.map((rec, i) => (
                        <motion.div
                            key={rec.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="snap-start"
                        >
                            <Card className="w-[320px] sm:w-[360px] border-none shadow-sm hover:shadow-md transition-all rounded-[2.5rem] overflow-hidden group h-full">
                                <CardContent className="p-0 h-full flex flex-col">
                                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                                        <img
                                            src={rec.image}
                                            alt={rec.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-orange-600 text-white border-none px-3 py-1 rounded-full">
                                                {rec.fitScore}% Match
                                            </Badge>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-white/90 text-gray-900 border-none px-3 py-1 rounded-full">
                                                Running
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-2 gap-3">
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
                                                    {rec.brand}
                                                </p>
                                                <h3 className="font-bold text-xl line-clamp-1">{rec.name}</h3>
                                            </div>
                                            <div className="text-right shrink-0">
                                                <div className="bg-orange-50 text-orange-600 px-3 py-1.5 rounded-2xl font-bold text-sm">
                                                    {rec.fitScore}%
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2 mb-4">
                                            <Info className="w-4 h-4 text-blue-500" />
                                            <span className="text-blue-700 font-medium bg-blue-50 px-3 py-1 rounded-full text-sm">
                                                {rec.matchReason}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {rec.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 bg-gray-100 text-gray-600 border-none">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-gray-100 space-y-4">
                                            <span className="text-3xl font-bold text-gray-900 block">{formatPeso(rec.price)}</span>

                                            <div className="grid grid-cols-2 gap-3">
                                                <Link href={`/products/${rec.id}`}>
                                                    <Button variant="outline" className="w-full rounded-full h-12 border-2 border-gray-200 text-gray-900 hover:bg-gray-50 font-bold">
                                                        View in App
                                                    </Button>
                                                </Link>
                                                <Link href={`/marketplace/${rec.id}`}>
                                                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full h-12 font-bold">
                                                        Buy in App
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecommendationsPage;
