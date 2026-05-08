"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Smartphone,
    TrendingUp,
    Users,
    Gift,
    Zap,
    Search,
    Zap as Zap2,
    BarChart3,
    MessageCircle,
    Heart,
    Layers,
    ArrowRight,
    CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturesPage = () => {
    const featureCategories = [
        {
            category: 'Authentication & Verification',
            icon: ShieldCheck,
            color: 'bg-green-50 border-green-200',
            textColor: 'text-green-600',
            features: [
                {
                    title: '3D Volumetric Analysis',
                    desc: 'Compare internal volume against official specs with precision.',
                    icon: '📐',
                },
                {
                    title: 'Spectral Material Detection',
                    desc: 'Identify chemical composition to match original materials.',
                    icon: '🔬',
                },
                {
                    title: 'Global Database Cross-Reference',
                    desc: 'Match against 500K+ verified authentic sneakers.',
                    icon: '🌐',
                },
                {
                    title: 'Authentication Reports',
                    desc: 'Detailed PDF reports with verification status and analysis.',
                    icon: '📄',
                },
            ],
        },
        {
            category: 'AI Fit & Size Matching',
            icon: Smartphone,
            color: 'bg-blue-50 border-blue-200',
            textColor: 'text-blue-600',
            features: [
                {
                    title: 'Foot Scanning Technology',
                    desc: 'Capture precise measurements using your smartphone camera.',
                    icon: '📱',
                },
                {
                    title: 'Size Conversion Database',
                    desc: 'Accurate conversion between US, UK, EU, and CM sizes.',
                    icon: '📏',
                },
                {
                    title: 'Model-Specific Fit Profiles',
                    desc: 'Know how each brand and model fits based on thousands of reviews.',
                    icon: '👟',
                },
                {
                    title: 'Personalized Recommendations',
                    desc: 'AI suggests shoes that match your unique foot profile.',
                    icon: '✨',
                },
            ],
        },
        {
            category: 'Marketplace & Trading',
            icon: TrendingUp,
            color: 'bg-orange-50 border-orange-200',
            textColor: 'text-orange-600',
            features: [
                {
                    title: 'Peer-to-Peer Trading',
                    desc: 'Trade-in your old shoes for credit toward new purchases.',
                    icon: '🔄',
                },
                {
                    title: 'Automated Matching',
                    desc: 'Our algorithm connects compatible buyers and sellers.',
                    icon: '⚙️',
                },
                {
                    title: 'Price Intelligence',
                    desc: 'Real-time pricing recommendations based on market trends.',
                    icon: '📊',
                },
                {
                    title: 'Secure Escrow',
                    desc: 'Protected transactions with guaranteed buyer and seller safety.',
                    icon: '🔐',
                },
            ],
        },
        {
            category: 'Community & Social',
            icon: Users,
            color: 'bg-purple-50 border-purple-200',
            textColor: 'text-purple-600',
            features: [
                {
                    title: 'Discussion Forum',
                    desc: 'Connect with sneaker enthusiasts and share knowledge.',
                    icon: '💬',
                },
                {
                    title: 'Collection Showcase',
                    desc: 'Display your sneaker collection and track its value over time.',
                    icon: '🎨',
                },
                {
                    title: 'Live Trading Feed',
                    desc: 'See recent trades and community activity in real-time.',
                    icon: '📰',
                },
                {
                    title: 'Expert Guides',
                    desc: 'Learn from authentication experts and sneaker historians.',
                    icon: '📚',
                },
            ],
        },
        {
            category: 'Rewards & Loyalty',
            icon: Gift,
            color: 'bg-yellow-50 border-yellow-200',
            textColor: 'text-yellow-600',
            features: [
                {
                    title: 'Points System',
                    desc: 'Earn points on every buy, sell, and trade transaction.',
                    icon: '⭐',
                },
                {
                    title: 'Tier Progression',
                    desc: 'Advance from Rookie to Hall of Fame with increasing benefits.',
                    icon: '🏆',
                },
                {
                    title: 'Exclusive Perks',
                    desc: 'Early access to drops, double points, and birthday gifts.',
                    icon: '🎁',
                },
                {
                    title: 'VIP Experiences',
                    desc: 'Invitation-only events and early releases for top members.',
                    icon: '🌟',
                },
            ],
        },
        {
            category: 'Analytics & Insights',
            icon: BarChart3,
            color: 'bg-red-50 border-red-200',
            textColor: 'text-red-600',
            features: [
                {
                    title: 'Portfolio Analytics',
                    desc: 'Track your collection value, ROI, and performance over time.',
                    icon: '📈',
                },
                {
                    title: 'Market Trends',
                    desc: 'Real-time data on which models are trending and gaining value.',
                    icon: '🔥',
                },
                {
                    title: 'Price Predictions',
                    desc: 'AI-powered forecasts for sneaker value appreciation.',
                    icon: '🔮',
                },
                {
                    title: 'Trading Insights',
                    desc: 'Understand market demand and optimal times to buy or sell.',
                    icon: '💡',
                },
            ],
        },
    ];

    const stats = [
        { value: '2.4M+', label: 'Shoes Matched', color: 'from-blue-500 to-blue-600' },
        { value: '180K+', label: 'Pairs Resold', color: 'from-purple-500 to-purple-600' },
        { value: '45K+', label: 'Trade-Ins', color: 'from-pink-500 to-pink-600' },
        { value: '340T', label: 'CO₂ Saved', color: 'from-green-500 to-green-600' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">All Features</Badge>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Everything You Need for the <span className="text-orange-500">Perfect Sneaker</span> Experience
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            From authentication to community, from AI sizing to market analytics—ShoeWise has it all.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="border-0 bg-white shadow-md text-center p-8">
                                    <div className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent text-4xl font-bold mb-2`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    {featureCategories.map((category, catIdx) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={catIdx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: catIdx * 0.1 }}
                                className="mb-20"
                            >
                                {/* Category Header */}
                                <div className={`${category.color} border rounded-2xl p-8 mb-8`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`p-3 bg-white rounded-lg ${category.textColor}`}>
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                                    </div>
                                    <p className="text-gray-700 text-lg max-w-2xl">
                                        Cutting-edge technology designed to enhance your sneaker journey.
                                    </p>
                                </div>

                                {/* Features Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {category.features.map((feature, fIdx) => (
                                        <motion.div
                                            key={fIdx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: (catIdx * 0.05) + (fIdx * 0.05) }}
                                        >
                                            <Card className="h-full border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all hover:-translate-y-1">
                                                <CardContent className="p-6 flex flex-col h-full">
                                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                                                    <p className="text-gray-600 flex-grow">{feature.desc}</p>
                                                    <div className="mt-4 flex items-center text-orange-600 font-semibold text-sm">
                                                        <CheckCircle2 className="w-4 h-4 mr-2" />
                                                        Available Now
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <h2 className="text-4xl font-bold mb-6">Ready to Experience ShoeWise?</h2>
                    <p className="text-xl text-orange-100 mb-8">
                        Join thousands of sneaker enthusiasts using our platform every day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/products">
                            <Button className="bg-white text-orange-600 hover:bg-orange-50 rounded-full px-10 h-14 text-lg font-bold">
                                Browse Marketplace
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/verification">
                            <Button
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-orange-400 rounded-full px-10 h-14 text-lg font-bold"
                            >
                                Verify a Shoe
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturesPage;
