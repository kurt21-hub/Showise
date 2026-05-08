"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { ShieldCheck, CheckCircle2, Award, Search, Ruler, Zap, Download, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const VerificationReportPage = () => {
  const { id } = useParams();

  const report = {
    id,
    itemName: "Air Max Pulse",
    brand: "Nike",
    size: "9.5 US",
    sku: "DR0453-001",
    verifiedDate: "Oct 26, 2023",
    inspector: "Senior Authenticator #42",
    status: "Authentic",
    score: 100,
    checks: [
      { label: "Stitching & Construction", status: "Pass" },
      { label: "Material Quality", status: "Pass" },
      { label: "Label & Font Accuracy", status: "Pass" },
      { label: "Box & Packaging", status: "Pass" },
      { label: "RFID/NFC Verification", status: "Pass" },
      { label: "Internal Dimensions", status: "Pass" },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
        {/* Header / Certificate Banner */}
        <div className="bg-gray-900 p-12 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 shadow-lg shadow-green-500/20">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-black mb-2">Certificate of Authenticity</h1>
            <p className="text-gray-400">Report ID: {id}</p>
          </div>
          <Award className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 -rotate-12" />
          <Award className="absolute -top-10 -left-10 w-64 h-64 text-white/5 rotate-12" />
        </div>

        <CardContent className="p-12">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Item Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500">Product</span>
                  <span className="font-bold">{report.itemName}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500">Brand</span>
                  <span className="font-bold">{report.brand}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500">Size</span>
                  <span className="font-bold">{report.size}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500">SKU</span>
                  <span className="font-bold">{report.sku}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Verification Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500">Status</span>
                  <Badge className="bg-green-100 text-green-700 border-none rounded-full px-3">{report.status}</Badge>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500">Verified Date</span>
                  <span className="font-bold">{report.verifiedDate}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500">Authenticator</span>
                  <span className="font-bold">{report.inspector}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500">Authenticity Score</span>
                  <span className="font-bold text-green-600">{report.score}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Inspection Checklist</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {report.checks.map((check, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <span className="text-sm font-medium text-gray-700">{check.label}</span>
                  <div className="flex items-center text-green-600 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    {check.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
            <Button className="flex-1 bg-gray-900 text-white rounded-full h-12 font-bold">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="flex-1 rounded-full h-12 font-bold">
              <Share2 className="w-4 h-4 mr-2" />
              Share Report
            </Button>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default VerificationReportPage;