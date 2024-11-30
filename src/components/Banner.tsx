import React, { useState } from 'react';
import { X, AlertCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BannerProps {
  onClose: () => void;
}

export function Banner({ onClose }: BannerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 max-w-md animate-slide-in z-50">
      <motion.div
        layout
        className="relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800"
      >
        <div 
          className="px-6 py-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  You're on ShopBlox.gg
                </h3>
                <p className="text-sm text-neutral-300 font-medium">
                  We've finalized the transfer of our domain!{' '}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExpanded(!isExpanded);
                    }}
                    className="inline-flex items-center gap-1 text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors"
                  >
                    Click here for more information
                    <ChevronDown 
                      className={`h-3 w-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                    />
                  </button>
                </p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="text-neutral-400 hover:text-white transition-colors mt-1"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-neutral-800"
            >
              <div className="px-6 py-4">
                <p className="text-sm text-neutral-300 leading-relaxed">
                  We're excited to announce that we've completed the transfer to our new domain: ShopBlox.gg! 
                  This move allows us to better serve our community and provide an even more secure and reliable 
                  platform for all your Roblox toy code needs. All existing orders and accounts have been 
                  transferred seamlessly. You can continue using our services as usual.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
