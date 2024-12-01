import React from 'react';
import { Tag, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface BannerHeaderProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  onClose: () => void;
}

export const BannerHeader: React.FC<BannerHeaderProps> = ({
  isExpanded,
  setIsExpanded,
  onClose
}) => {
  return (
    <motion.div 
      layout="position"
      className="px-6 py-4"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <motion.div layout="position">
            <Tag className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
          </motion.div>
          <div>
            <motion.h3 
              layout="position"
              className="text-base font-bold text-white mb-1"
            >
              Cyber Monday Sale
            </motion.h3>
            <motion.p 
              layout="position"
              className="text-sm text-neutral-300 font-medium"
            >
              Use code CYBER20 to get 20% off at checkout*{' '}
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1 text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors"
              >
                See details
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </motion.div>
              </button>
            </motion.p>
          </div>
        </div>
        <motion.button
          layout="position"
          onClick={onClose}
          className="text-neutral-400 hover:text-white transition-colors mt-1"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};
