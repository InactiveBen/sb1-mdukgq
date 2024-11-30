import React, { useState } from 'react';
import { X, Tag, ChevronDown } from 'lucide-react';
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
              <Tag className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Cyber Monday Sale
                </h3>
                <p className="text-sm text-neutral-300 font-medium">
                  Use code CYBER20 to get 20% off at checkout*{' '}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExpanded(!isExpanded);
                    }}
                    className="inline-flex items-center gap-1 text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors"
                  >
                    See details
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
                <div className="space-y-3 text-sm text-neutral-300">
                  <p className="leading-relaxed">
                    Save big this Cyber Monday with 20% off select items across our store! 
                    Enter code <span className="text-red-500 font-semibold">CYBER20</span> at 
                    checkout to redeem your discount.
                  </p>
                  <div className="bg-neutral-800/50 rounded-lg p-3 space-y-2">
                    <p className="font-medium text-white">Terms & Conditions:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Discount applies to select items only</li>
                      <li>Cannot be combined with other offers</li>
                      <li>Limited time offer</li>
                      <li>Excludes chaser items and new releases</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
