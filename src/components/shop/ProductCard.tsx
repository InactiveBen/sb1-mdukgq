import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { Product } from '../../types';
import { PaymentMethodModal } from '../product/PaymentMethodModal';

interface ProductCardProps {
  product: Product;
}

const rarityColors = {
  normal: 'border-neutral-500 bg-neutral-500/80',
  rare: 'border-yellow-500 bg-yellow-500/80',
  chaser: 'border-red-500 bg-red-500/80'
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleBuyNow = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentMethodSelect = (method: 'stripe' | 'robux') => {
    setShowPaymentModal(false);
    
    if (method === 'stripe' && product.stripeLink) {
      window.open(product.stripeLink, '_blank');
    } else if (method === 'robux' && product.robuxLink) {
      window.open(product.robuxLink, '_blank');
    }
  };

  return (
    <>
      <motion.div 
        whileHover={{ y: -5 }}
        className="group relative bg-neutral-900/50 rounded-lg border border-neutral-800 overflow-hidden"
      >
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
          
          {/* Hover Overlay with Actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
            <button
              onClick={handleBuyNow}
              className="w-full transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2.5 text-sm font-semibold text-white hover:brightness-90"
            >
              <ShoppingCart className="w-4 h-4" />
              Buy Now
            </button>
            
            <Link
              to={`/shop/${product.id}`}
              className="w-full transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              <ExternalLink className="w-4 h-4" />
              View Details
            </Link>
          </div>
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
      </motion.div>

      <PaymentMethodModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSelectMethod={handlePaymentMethodSelect}
        product={product}
      />
    </>
  );
};
