import { Product } from '../types';

export const products: Product[] = [
   {
    id: 'rainbow-barf-face',
    name: 'Rainbow Barf Face',
    price: 999,
    robuxPrice: 300000,
    robuxEnabled: false,
    robuxLink: 'https://www.roblox.com/game-pass/12345678',
    image: '/images/4.png',
    rarity: 'rare',
    category: 'face',
    stock: 1,
    featured: true,
    stripeLink: 'https://buy.stripe.com/example1',
    placeId: '12345678',
    description: 'Express yourself with this unique and colorful face accessory that adds a fun, rainbow-themed twist to your avatar!',
    tryOnLink: 'https://www.roblox.com/catalog/12345678',
    testLink: 'https://www.roblox.com/games/185655149/Welcome-to-Bloxburg'
  },
];
