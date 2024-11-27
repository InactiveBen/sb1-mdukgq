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
  placeId?: string;
  description?: string;
  tryOnLink?: string;
  testLink?: string;
}