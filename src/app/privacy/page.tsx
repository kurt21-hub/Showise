"use client";

import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8">Privacy Policy</h1>
      <div className="prose prose-orange max-w-none text-gray-600 space-y-6">
        <p className="text-sm text-gray-400">Last Updated: October 2023</p>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including your name, email address, and foot scan data (biometric measurements). We also collect transaction data when you buy, sell, or trade on our marketplace.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p>We use your foot scan data exclusively to provide shoe size recommendations. Your contact information is used for account management, transaction updates, and customer support.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. Your biometric data is encrypted and stored separately from your identity whenever possible.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to provide the services you've requested (e.g., shipping providers).</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;