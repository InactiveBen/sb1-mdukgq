import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface OrderCheckDialogProps {
  onResponse: (received: boolean) => void;
}

export const OrderCheckDialog: React.FC<OrderCheckDialogProps> = ({ onResponse }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const dialog = document.getElementById('order-check-dialog');
      if (dialog) {
        dialog.classList.remove('opacity-0');
        dialog.classList.add('opacity-100');
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="order-check-dialog"
      className="fixed inset-0 z-50 opacity-0 transition-opacity duration-300"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50"
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md bg-neutral-900 rounded-xl p-6 border border-neutral-800 relative"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Have you received your order?</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => onResponse(true)}
                className="flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-green-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500/30 transition-colors"
              >
                <Check className="w-4 h-4" />
                Yes
              </button>
              <button
                onClick={() => onResponse(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500/30 transition-colors"
              >
                <X className="w-4 h-4" />
                No
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
