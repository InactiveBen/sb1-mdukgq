import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../types';
import { CompactProductCard } from './CompactProductCard';

interface SuggestedProductsProps {
  currentProduct?: Product;
  allProducts: Product[];
  compact?: boolean;
}

export const SuggestedProducts: React.FC<SuggestedProductsProps> = ({ 
  currentProduct, 
  allProducts,
  compact = false
}) => {
  // Get 3 random products, excluding current product if provided
  const suggestedProducts = allProducts
    .filter(product => (!currentProduct || product.id !== currentProduct.id) && product.stock > 0)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  if (suggestedProducts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Available Products</h2>
        <p className="text-neutral-300">
          Check out these items from our collection
        </p>
      </div>

      <div className="space-y-4">
        {suggestedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CompactProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
