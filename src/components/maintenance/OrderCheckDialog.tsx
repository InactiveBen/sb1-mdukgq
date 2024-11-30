import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Search, ExternalLink } from 'lucide-react';

interface OrderCheckDialogProps {
  onClose: () => void;
}

export const OrderCheckDialog: React.FC<OrderCheckDialogProps> = ({ onClose }) => {
  const [step, setStep] = React.useState<'initial' | 'emailCheck' | 'checkSpam' | 'support'>(
    'initial'
  );

  const handleInitialResponse = (received: boolean) => {
    if (!received) {
      onClose();
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-neutral-800/50 p-6 rounded-lg space-y-6"
    >
      {step === 'initial' && (
        <>
          <h3 className="text-lg font-semibold text-white">Waiting for an order?</h3>
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
          <h3 className="text-lg font-semibold text-white">Have you checked your email?</h3>
          <p className="text-neutral-300 text-sm">
            Check your email for the order confirmation
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={onClose}
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
          <h3 className="text-lg font-semibold text-white">Check Spam Folder</h3>
          <p className="text-neutral-300 text-sm">
            Please check your spam/junk folder for the order confirmation email
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={onClose}
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
          <h3 className="text-lg font-semibold text-white">Need Help?</h3>
          <p className="text-neutral-300 text-sm">
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
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-lg border border-neutral-500 bg-neutral-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-500/30 transition-colors"
            >
              <X className="w-4 h-4" />
              Maybe Later
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};
