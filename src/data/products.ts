import { Product } from '../types';

export const products: Product[] = [
 {
    id: 'off-sale',
    name: 'testing off-sale',
    price: 0.50,
    robuxPrice: 1,
    stripeEnabled: false,
    robuxEnabled: false,
    robuxLink: 'https://www.roblox.com/game-pass/1',
    image: '/images/4.png',
    rarity: 'rare',
    category: 'face',
    stock: 13434234234,
    featured: true,
    stripeLink: 'https://buy.stripe.com/example1',
    placeId: '12345678',
    description: 'Express yourself with this unique and colorful face accessory that adds a fun, rainbow-themed twist to your avatar!',
    tryOnLink: 'https://www.roblox.com/catalog/12345678',
    testLink: 'https://www.roblox.com/games/185655149/Welcome-to-Bloxburg'
  },
];
