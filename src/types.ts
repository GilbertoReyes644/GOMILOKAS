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
  availableSizes: Array<'150g' | '250g' | '500g' | '2.5kg'>;
  selectedSize: '150g' | '250g' | '500g' | '2.5kg';
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

export interface Athlete {
  id: string;
  name: string;
  title: string;
  category: string;
  location: string;
  bio: string;
  attackGummy: string;
  image: string;
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
  size: '150g' | '250g' | '500g' | '2.5kg';
  quantity: number;
  price: number;
}
