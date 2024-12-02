import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from '../shop/ProductCard';

interface SuggestedProductsProps {
  currentProduct: Product;
  allProducts: Product[];
}

export const SuggestedProducts: React.FC<SuggestedProductsProps> = ({ currentProduct, allProducts }) => {
  // Filter out current product and get 3 random products
  const suggestedProducts = allProducts
    .filter(product => product.id !== currentProduct.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  if (suggestedProducts.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 border-t border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <Package className="w-8 h-8 text-red-500 mx-auto" />
          <h2 className="text-2xl font-bold text-white">You Might Also Like</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Check out these similar items from our collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suggestedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
