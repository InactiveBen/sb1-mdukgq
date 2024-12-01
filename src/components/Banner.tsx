import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BannerHeader } from './banner/BannerHeader';
import { TermsAndConditions } from './banner/TermsAndConditions';

interface BannerProps {
  onClose: () => void;
}

export function Banner({ onClose }: BannerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div 
          className="fixed bottom-4 right-4 w-[384px] z-50"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          onAnimationComplete={() => {
            if (isClosing) {
              onClose();
            }
          }}
        >
          <motion.div
            layout="preserve-aspect"
            className="relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-lg"
          >
            <BannerHeader 
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              onClose={handleClose}
            />

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto', 
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1]
                      },
                      opacity: {
                        duration: 0.2,
                        delay: 0.1
                      }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1]
                      },
                      opacity: {
                        duration: 0.2
                      }
                    }
                  }}
                  className="border-t border-neutral-800 overflow-hidden"
                >
                  <TermsAndConditions />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
