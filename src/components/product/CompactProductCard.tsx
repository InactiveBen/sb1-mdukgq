import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Product } from '../../types';

interface CompactProductCardProps {
  product: Product;
}

const rarityColors = {
  normal: 'border-neutral-500 bg-neutral-500/80',
  rare: 'border-yellow-500 bg-yellow-500/80',
  chaser: 'border-red-500 bg-red-500/80'
};

export const CompactProductCard: React.FC<CompactProductCardProps> = ({ product }) => {
  return (
    <Link to={`/shop/${product.id}`}>
      <motion.div 
        whileHover={{ y: -2 }}
        className="group relative bg-neutral-800/50 rounded-lg border border-neutral-800 overflow-hidden"
      >
        <div className="flex items-center gap-4 p-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center rounded-md transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-base font-semibold text-white truncate">{product.name}</h3>
              <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">${product.price}</span>
              <span className={`capitalize px-2 py-0.5 rounded text-xs font-medium text-white ${rarityColors[product.rarity]}`}>
                {product.rarity}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
