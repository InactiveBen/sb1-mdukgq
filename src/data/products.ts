import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'test-product',
    name: 'Test Product',
    price: 1,
    image: 'https://cxpay.events/wp-content/uploads/2024/04/Test-Product-Do-not-Buy.png',
    rarity: 'normal',
    category: 'test',
    stock: 1,
    featured: true,
    stripeLink: 'https://buy.stripe.com/example1',
    description: 'DO NOT BUY THIS ITEM IT IS A TEST ITEM NO ITEM WILL BE SENT',
    tryOnLink: 'https://www.roblox.com/catalog/'
  },
];
