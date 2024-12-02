import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Coins, Clock, Lock, X } from 'lucide-react';
import { Product } from '../../types';

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMethod: (method: 'stripe' | 'robux') => void;
  product: Product;
}

export const PaymentMethodModal: React.FC<PaymentMethodModalProps> = ({
  isOpen,
  onClose,
  onSelectMethod,
  product
}) => {
  if (!isOpen) return null;

  const handleMethodSelect = (method: 'stripe' | 'robux') => {
    onSelectMethod(method);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-md bg-neutral-900 rounded-xl p-6 border border-neutral-800"
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Select Payment Method</h2>
            <p className="text-sm text-neutral-400">Price: ${product.price}</p>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleMethodSelect('stripe')}
            className="w-full flex items-center gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors border border-neutral-700"
          >
            <CreditCard className="w-5 h-5 text-red-500" />
            <div className="flex-1 text-left">
              <div className="font-medium text-white">Pay with Card</div>
              <div className="text-sm text-neutral-400">Secure payment via Stripe</div>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-500 text-xs">
              <Clock className="w-3 h-3" />
              <span>5-10 min</span>
            </div>
          </button>

          <button
            onClick={() => handleMethodSelect('robux')}
            disabled={!product.robuxEnabled}
            className="w-full flex items-center gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors border border-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed relative"
          >
            <Coins className="w-5 h-5 text-red-500" />
            <div className="flex-1 text-left">
              <div className="font-medium text-white">Pay with Robux</div>
              <div className="text-sm text-neutral-400">R${product.robuxPrice}</div>
            </div>
            {product.robuxEnabled ? (
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-yellow-500/20 text-yellow-500 text-xs">
                <Clock className="w-3 h-3" />
                <span>24-48h</span>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/80 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-2 text-neutral-400">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm">Unavailable</span>
                </div>
              </div>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
