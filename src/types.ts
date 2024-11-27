export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rarity: 'normal' | 'rare' | 'chaser';
  category: string;
  featured?: boolean;
  isNew?: boolean;
}