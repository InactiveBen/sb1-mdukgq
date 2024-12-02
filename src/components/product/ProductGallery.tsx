import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Product } from '../../types';

interface ProductGalleryProps {
  product: Product;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="aspect-square bg-neutral-900/50 rounded-lg border border-neutral-800 overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full flex items-center justify-center p-8"
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src={product.image}
            alt={product.name}
            className="w-4/5 h-4/5 object-contain"
            draggable="false"
          />
        </motion.div>
      </div>
      
      {product.tryOnLink && (
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          href={product.tryOnLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm font-semibold text-white hover:brightness-90"
        >
          <ExternalLink className="w-4 h-4" />
          Try On
        </motion.a>
      )}
    </div>
  );
};
