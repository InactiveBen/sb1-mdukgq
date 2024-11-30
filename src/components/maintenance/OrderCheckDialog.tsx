import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Search, ExternalLink, ThumbsUp } from 'lucide-react';

interface OrderCheckDialogProps {
  onClose: () => void;
}

export const OrderCheckDialog: React.FC<OrderCheckDialogProps> = ({ onClose }) => {
  const [step, setStep] = React.useState<'initial' | 'emailCheck' | 'checkSpam' | 'support' | 'goodbye'>(
    'initial'
  );
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500); // Wait for animation to complete
  };

  const handleInitialResponse = (received: boolean) => {
    if (!received) {
      setStep('goodbye');
    } else {
      setStep('emailCheck');
    }
  };

  const handleCantFind = () => {
    setStep('support');
  };

  const handleContactSupport = () => {
    window.location.href = '/support';
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-neutral-800/30 border border-neutral-800 p-6 rounded-lg mt-8"
      >
        {step === 'initial' && (
          <>
            <h3 className="text-lg font-semibold text-white mb-4">Waiting for an order?</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleInitialResponse(true)}
                className="flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-green-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500/30 transition-colors"
              >
                <Check className="w-4 h-4" />
                Yes
              </button>
              <button
                onClick={() => handleInitialResponse(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500/30 transition-colors"
              >
                <X className="w-4 h-4" />
                No
              </button>
            </div>
          </>
        )}

        {step === 'emailCheck' && (
          <>
            <h3 className="text-lg font-semibold text-white mb-2">Have you checked your email?</h3>
            <p className="text-neutral-300 text-sm mb-4">
              Check your email for the order confirmation
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setStep('goodbye')}
                className="flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-green-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500/30 transition-colors"
              >
                <Check className="w-4 h-4" />
                Found it
              </button>
              <button
                onClick={() => setStep('checkSpam')}
                className="flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500/30 transition-colors"
              >
                <X className="w-4 h-4" />
                No
              </button>
            </div>
          </>
        )}

        {step === 'checkSpam' && (
          <>
            <h3 className="text-lg font-semibold text-white mb-2">Check Spam Folder</h3>
            <p className="text-neutral-300 text-sm mb-4">
              Please check your spam/junk folder for the order confirmation email
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setStep('goodbye')}
                className="flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-green-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500/30 transition-colors"
              >
                <Check className="w-4 h-4" />
                Found it
              </button>
              <button
                onClick={handleCantFind}
                className="flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500/30 transition-colors"
              >
                <Search className="w-4 h-4" />
                Can't find it
              </button>
            </div>
          </>
        )}

        {step === 'support' && (
          <>
            <h3 className="text-lg font-semibold text-white mb-2">Need Help?</h3>
            <p className="text-neutral-300 text-sm mb-4">
              Our support team can help locate your order and ensure it's delivered promptly
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleContactSupport}
                className="flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Contact Support
              </button>
              <button
                onClick={() => setStep('goodbye')}
                className="flex items-center justify-center gap-2 rounded-lg border border-neutral-500 bg-neutral-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-500/30 transition-colors"
              >
                <X className="w-4 h-4" />
                Maybe Later
              </button>
            </div>
          </>
        )}

        {step === 'goodbye' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center"
          >
            <ThumbsUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Thanks for checking in!</h3>
            <p className="text-neutral-300 text-sm mb-4">
              We appreciate your patience during maintenance
            </p>
            <button
              onClick={handleClose}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-500 bg-neutral-500/20 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-500/30 transition-colors"
            >
              Close
            </button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
