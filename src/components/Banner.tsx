import React, { useState } from 'react';
import { X, AlertCircle, Tag, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface PageBannerProps {
  onClose: () => void;
}

export function PageBanner({ onClose }: PageBannerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const getBannerContent = () => {
    switch (location.pathname) {
      case '/login':
        return {
          title: 'Access Suspended',
          message: 'Access is currently suspended as we migrate to using Stripe. All sellers have been paid out. Please check back later.',
          icon: AlertCircle,
          details: 'We are currently in the process of migrating our payment system to Stripe to provide better security and reliability for all our sellers. During this transition period, all seller accounts have been temporarily suspended and all outstanding payments have been processed. We will announce when the system is back online through our official channels.'
        };
      case '/signup':
        return {
          title: 'Signups Paused',
          message: 'Seller signups are currently paused. Please check back later.',
          icon: AlertCircle,
          details: 'We are currently upgrading our seller onboarding system to provide a better experience for new sellers. During this maintenance period, new seller registrations are temporarily paused. All existing seller accounts remain unaffected. We appreciate your patience during this upgrade.'
        };
      default:
        return {
          title: 'Black Friday Sale',
          message: 'Use code black20 for 20% off all orders for a limited time only',
          icon: Tag,
          details: 'Our biggest sale of the year is here! Use code black20 at checkout to receive 20% off your entire order. This offer is valid on all products across our store, including new arrivals and featured items. Don\'t miss out on these incredible savings - shop now before the sale ends!'
        };
    }
  };

  const content = getBannerContent();
  const Icon = content.icon;

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
              <Icon className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  {content.title}
                </h3>
                <p className="text-sm text-neutral-300 font-medium">
                  {content.message}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <motion.button
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-neutral-400 hover:text-white transition-colors mt-1.5"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                aria-label={isExpanded ? "Show less" : "Show more"}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="text-neutral-400 hover:text-white transition-colors mt-1.5"
                aria-label="Close banner"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
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
                  {content.details}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
