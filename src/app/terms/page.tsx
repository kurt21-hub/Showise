"use client";

import React from 'react';

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8">Terms of Service</h1>
      <div className="prose prose-orange max-w-none text-gray-600 space-y-6">
        <p className="text-sm text-gray-400">Last Updated: October 2023</p>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using ShoeWise, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on ShoeWise's website for personal, non-commercial transitory viewing only.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Marketplace Transactions</h2>
          <p>ShoeWise acts as a facilitator for trades and sales. While we provide verification services, users are responsible for providing accurate descriptions of their items. Fraudulent listings will result in immediate account termination.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. AI Scanning Accuracy</h2>
          <p>Our AI scanning technology provides recommendations based on the data provided. While highly accurate, ShoeWise does not guarantee a 100% perfect fit for every individual due to personal comfort preferences.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;