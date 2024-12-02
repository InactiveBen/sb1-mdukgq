export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rarity: 'normal' | 'rare' | 'chaser';
  category: string;
  stock: number;
  featured?: boolean;
  isNew?: boolean;
  stripeLink?: string;
  robuxLink?: string;
  robuxEnabled?: boolean;
  robuxPrice?: number;
  placeId?: string;
  description?: string;
  tryOnLink?: string;
  testLink?: string;
}
