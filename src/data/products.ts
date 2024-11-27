import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'rainbow-barf-face',
    name: 'Rainbow Barf Face',
    price: 999,
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
  {
    id: 'red-headstack',
    name: 'Red Headstack',
    price: 199,
    image: '/images/2.png',
    rarity: 'rare',
    category: 'hat',
    stock: 3,
    featured: true,
    stripeLink: 'https://buy.stripe.com/example2',
    placeId: '23456789',
    description: 'Stack up your style with this vibrant red headwear that\'s sure to make you stand out!',
    tryOnLink: 'https://www.roblox.com/catalog/23456789',
    testLink: 'https://www.roblox.com/games/23456789/test'
  },
  {
    id: 'navy-queen',
    name: 'Navy Queen of the Night',
    price: 299,
    image: '/images/5.png',
    rarity: 'rare',
    category: 'hat',
    stock: 2,
    featured: true,
    stripeLink: 'https://buy.stripe.com/example3',
    placeId: '34567890',
    description: 'Rule the night with this majestic navy crown fit for royalty!',
    tryOnLink: 'https://www.roblox.com/catalog/34567890',
    testLink: 'https://www.roblox.com/games/34567890/test'
  },
  {
    id: 'red-valk',
    name: 'Red Valk',
    price: 4999,
    image: '/images/1.png',
    rarity: 'chaser',
    category: 'hat',
    stock: 1,
    featured: true,
    stripeLink: 'https://buy.stripe.com/example4',
    placeId: '45678901',
    description: 'The legendary Red Valk - one of the most sought-after items in Roblox. A true symbol of prestige and rarity!',
    tryOnLink: 'https://www.roblox.com/catalog/45678901',
    testLink: 'https://www.roblox.com/games/45678901/test'
  },
  {
    id: 'golden-horns',
    name: 'Golden Horns of Pwnage',
    price: 249,
    image: '/images/3.png',
    rarity: 'rare',
    category: 'hat',
    stock: 4,
    featured: true,
    stripeLink: 'https://buy.stripe.com/example5',
    placeId: '56789012',
    description: 'Show off your dominance with these gleaming golden horns that command respect wherever you go!',
    tryOnLink: 'https://www.roblox.com/catalog/56789012',
    testLink: 'https://www.roblox.com/games/56789012/test'
  }
];