import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

interface HoldToConfirmButtonProps {
  onConfirm: () => void;
  confirmed?: boolean;
  duration?: number;
}

export const HoldToConfirmButton: React.FC<HoldToConfirmButtonProps> = ({ 
  onConfirm,
  confirmed = false,
  duration = 3000 
}) => {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<number>();
  const startTime = useRef<number>();

  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  const startHolding = () => {
    if (confirmed) return;
    
    setIsHolding(true);
    startTime.current = Date.now();
    progressInterval.current = window.setInterval(() => {
      const elapsed = Date.now() - (startTime.current || 0);
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        stopHolding(true);
      }
    }, 10);
  };

  const stopHolding = (completed = false) => {
    if (confirmed) return;
    
    setIsHolding(false);
    setProgress(0);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    if (completed) {
      onConfirm();
    }
  };

  return (
    <div className="space-y-3">
      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-neutral-300">
            <span className="font-medium text-red-400">Required:</span> Send a friend request to{' '}
            <a
              href="https://www.roblox.com/users/7651319898/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 font-medium"
            >
              @ShopBloxLLC
            </a>
            {' '}to receive your product. Orders will not be delivered without an accepted friend request.
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {confirmed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center justify-center gap-2 bg-neutral-800 rounded-lg p-3"
          >
            <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center">
              <Check className="w-3 h-3 text-red-500" />
            </div>
            <span className="text-sm text-neutral-300">
              You confirmed that you have sent it
            </span>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <button
              type="button"
              onMouseDown={startHolding}
              onMouseUp={() => stopHolding()}
              onMouseLeave={() => stopHolding()}
              onTouchStart={startHolding}
              onTouchEnd={() => stopHolding()}
              className="relative w-full rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-neutral-800" />
              <motion.div
                className="absolute inset-0 bg-red-500/20"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0 }}
              />
              <div className="relative py-2.5 px-4 text-sm font-medium text-white text-center">
                {isHolding ? 'Hold to confirm...' : 'Hold to confirm you sent the friend request'}
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
