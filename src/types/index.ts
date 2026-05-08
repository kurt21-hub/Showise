export type ShoeCondition = 'new' | 'like-new' | 'used' | 'heavily-used';
export type ListingType = 'sell' | 'trade' | 'both';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: 'running' | 'casual' | 'basketball' | 'formal' | 'lifestyle';
  description: string;
  sizes: number[];
  fitScore?: number; // Percentage match based on scan
  isRecommended?: boolean;
  widthProfile?: 'narrow' | 'standard' | 'wide';
}

export interface Listing extends Product {
  sellerId: string;
  sellerName: string;
  condition: ShoeCondition;
  listingType: ListingType;
  originalPrice?: number;
  tradePreferences?: string;
}

export interface ScanResult {
  lengthCm: number;
  widthCm: number;
  recommendedSize: number;
  widthCategory: 'narrow' | 'standard' | 'wide';
  confidence: number;
  timestamp: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  scanHistory: ScanResult[];
  savedProducts: string[];
}