export type PageId = 'inicio' | 'productos' | 'mayoristas' | 'team-fuego' | 'especificaciones';

export type HeatLevel = 'all' | 'bravo' | 'agil' | 'fuego';
export type SizeFilter = 'all' | 'pocket' | 'standard' | 'pro' | 'bulk';

export interface Product {
  id: string;
  name: string;
  category: string;
  heatTag: string;
  heatLevel: 'bravo' | 'agil' | 'fuego';
  heatScore: number; // 1 to 5
  scoville: string;
  gripNote: string;
  badge?: string;
  badgeType?: 'yellow' | 'red' | 'dark';
  image: string;
  description: string;
  price: number;
  availableSizes: Array<'100g' | '150g' | '250g' | '500g' | '2.5kg'>;
  selectedSize: '100g' | '150g' | '250g' | '500g' | '2.5kg';
  nutrition: {
    sodium: string;
    carbs: string;
    calories: string;
    keyActive: string;
  };
  ingredients: string;
  usageProtocol: string;
  sku: string;
  isBestSeller?: boolean;
}

export interface CrewMember {
  id: string;
  name: string;
  alias: string;
  role: string;
  category: string;
  location: string;
  badge: string;
  bio: string;
  stats: { label: string; value: string }[];
  favoritePack: string;
  isFounder?: boolean;
}

export interface WholesaleTier {
  id: string;
  name: string;
  badge: string;
  marginPct: number;
  unitsRange: string;
  costPerUnit: number;
  pvp: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface CartItem {
  product: Product;
  size: '100g' | '150g' | '250g' | '500g' | '2.5kg';
  quantity: number;
  price: number;
}

export interface CampusReview {
  id: string;
  name: string;
  faculty: string;
  avatarText: string;
  rating: number;
  comment: string;
  date: string;
  verifiedStudent: boolean;
}
