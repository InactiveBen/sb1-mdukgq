import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../../types';

interface ProductDescriptionProps {
  product: Product;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="prose prose-invert"
    >
      <p className="text-neutral-300">
        {product.description || `Get this exclusive ${product.category} item for your Roblox avatar!`}
      </p>
    </motion.div>
  );
};
