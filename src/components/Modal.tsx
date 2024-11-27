import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-neutral-900 rounded-xl p-6 z-50 border border-neutral-800"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-white">Domain Transfer Complete</h2>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 text-neutral-300">
              <p>
                We're excited to announce that we've completed the transfer to our new domain: ShopBlox.codes!
              </p>
              <p>
                This move allows us to better serve our community and provide an even more secure and reliable platform for all your Roblox toy code needs.
              </p>
              <p>
                All existing orders and accounts have been transferred seamlessly. You can continue using our services as usual.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}