import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const rarityColors = {
  normal: 'border-neutral-500 bg-neutral-500/80',
  rare: 'border-yellow-500 bg-yellow-500/80',
  chaser: 'border-red-500 bg-red-500/80'
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-neutral-900/50 rounded-lg border border-neutral-800 overflow-hidden"
    >
      <Link to={`/shop/${product.id}`} className="block">
        <div className="aspect-square relative overflow-hidden">
          {(product.featured || product.isNew) && (
            <div className="absolute top-2 left-2 z-10">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
                {product.isNew ? 'NEW' : 'FEATURED'}
              </span>
            </div>
          )}
          
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-white truncate">{product.name}</h3>
          
          <div className="mt-2 flex items-center justify-between">
            <span className="text-2xl font-bold text-white">${product.price}</span>
            <span className={`capitalize px-2 py-1 rounded-md text-xs font-medium text-white ${rarityColors[product.rarity]}`}>
              {product.rarity}
            </span>
          </div>

          <div className="mt-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300">
              {product.stock} in stock
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
