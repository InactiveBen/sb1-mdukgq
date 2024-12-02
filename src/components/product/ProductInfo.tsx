import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../types';

interface ProductInfoProps {
  product: Product;
}

const rarityColors = {
  normal: 'border-neutral-500 bg-neutral-500/80',
  rare: 'border-yellow-500 bg-yellow-500/80',
  chaser: 'border-red-500 bg-red-500/80'
};

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="space-y-6">
      <div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <h1 className="text-3xl font-bold text-white">{product.name}</h1>
          {(product.featured || product.isNew) && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
              {product.isNew ? 'NEW' : 'FEATURED'}
            </span>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <span className="text-3xl font-bold text-white">${product.price}</span>
          <span className={`capitalize px-3 py-1 rounded-md text-sm font-medium text-white ${rarityColors[product.rarity]}`}>
            {product.rarity}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300">
            {product.stock} in stock
          </span>
        </motion.div>
      </div>

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
    </div>
  );
};
