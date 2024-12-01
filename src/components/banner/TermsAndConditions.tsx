import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const TermsAndConditions: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <motion.div
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      exit={{ y: -10 }}
      className="px-6 py-4"
    >
      <div className="space-y-3 text-sm text-neutral-300">
        <p className="leading-relaxed">
          Save big this Cyber Monday with 20% off select items across our store! 
          Enter code <span className="text-red-500 font-semibold">CYBER20</span> at 
          checkout to redeem your discount.
        </p>

        <div className="bg-neutral-800/50 rounded-lg overflow-hidden">
          <button
            onClick={() => setShowTerms(!showTerms)}
            className="w-full flex items-center justify-between p-3 hover:bg-neutral-700/30 transition-colors"
          >
            <span className="font-medium text-white">Terms & Conditions</span>
            <ChevronDown 
              className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                showTerms ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {showTerms && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: 'auto', 
                  opacity: 1,
                  transition: {
                    height: { duration: 0.2 },
                    opacity: { duration: 0.2, delay: 0.1 }
                  }
                }}
                exit={{ 
                  height: 0, 
                  opacity: 0,
                  transition: {
                    height: { duration: 0.2 },
                    opacity: { duration: 0.1 }
                  }
                }}
                className="border-t border-neutral-700/50"
              >
                <div className="p-3 space-y-2">
                  <ul className="list-disc pl-4 space-y-1.5">
                    <li>Discount is valid exclusively on select items, as determined by ShopBlox.</li>
                    <li>This offer cannot be combined with any other discounts, promotions, or coupon codes.</li>
                    <li>The promotion is valid for a limited time only and may be modified or terminated at ShopBlox's discretion without prior notice.</li>
                    <li>Excludes chaser items, newly released products, and other items specified by ShopBlox.</li>
                    <li>Discount code must be entered at checkout and cannot be applied retroactively to prior purchases.</li>
                    <li>This offer has no cash value and cannot be redeemed for cash or credit.</li>
                    <li>Additional restrictions may apply. For full details, please refer to our Terms of Service.</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
