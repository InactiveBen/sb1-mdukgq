import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../../types';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700"
    >
      <h3 className="text-sm font-medium text-white mb-2">Product Details</h3>
      <dl className="grid grid-cols-2 gap-4">
        <div>
          <dt className="text-sm text-neutral-400">Category</dt>
          <dd className="text-sm font-medium text-white">{product.category}</dd>
        </div>
        <div>
          <dt className="text-sm text-neutral-400">Rarity</dt>
          <dd className="text-sm font-medium text-white capitalize">{product.rarity}</dd>
        </div>
      </dl>
    </motion.div>
  );
};
