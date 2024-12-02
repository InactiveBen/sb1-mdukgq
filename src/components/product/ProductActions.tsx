import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TestTubes } from 'lucide-react';
import { Product } from '../../types';
import { PaymentMethodModal } from './PaymentMethodModal';

interface ProductActionsProps {
  product: Product;
  onBuyNow: (method: 'stripe' | 'robux') => void;
}

export const ProductActions: React.FC<ProductActionsProps> = ({ product, onBuyNow }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleTestGame = () => {
    if (product.testLink) {
      window.open(product.testLink, '_blank');
    }
  };

  const handlePaymentMethodSelect = (method: 'stripe' | 'robux') => {
    setShowPaymentModal(false);
    onBuyNow(method);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-6"
      >
        <div className="flex flex-col gap-4">
          <button
            onClick={() => setShowPaymentModal(true)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </button>

          {product.testLink && (
            <button
              onClick={handleTestGame}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              <TestTubes className="w-4 h-4" />
              Test Item
            </button>
          )}
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
