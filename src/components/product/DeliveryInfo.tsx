import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ChevronDown } from 'lucide-react';

export const DeliveryInfo: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-red-500/10 border border-red-500/20 rounded-lg overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 hover:bg-red-500/5 transition-colors"
      >
        <div className="flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="text-sm font-medium text-red-400">Important Delivery Disclaimer</p>
            <p className="text-xs text-neutral-300">Click to view full details.</p>
          </div>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-red-500/20"
          >
            <div className="p-3 space-y-2 text-sm">
              <p className="text-neutral-300 text-xs">
                Your order will be delivered via Roblox messages within 24-48 hours. You must:
              </p>
              
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-xs">•</span>
                  <p className="text-neutral-300 text-xs">
                    Send a friend request to{' '}
                    <a
                      href="https://www.roblox.com/users/7651319898/profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-400"
                    >
                      @ShopBloxLLC
                    </a>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-xs">•</span>
                  <p className="text-neutral-300 text-xs">
                    Have space in your friends list
                  </p>
                </div>
              </div>

              <div className="bg-red-500/10 rounded p-2">
                <p className="text-red-400 text-xs">
                  Your order cannot be delivered unless these steps are completed. The delivery account will message you with your product codes.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
