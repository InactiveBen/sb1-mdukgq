import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingBag, AlertCircle, MessageSquare, Check, X, Search } from 'lucide-react';
import confetti from 'canvas-confetti';
import { OrderCheckDialog } from '../components/OrderCheckDialog';

export const SuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const [showOrderDialog, setShowOrderDialog] = useState(false);
  const [showReviewDialog, setShowReviewDialog] = useState(false);
  const [showTrackingDialog, setShowTrackingDialog] = useState(false);
  const [showShopDialog, setShowShopDialog] = useState(false);
  const [showAutoCheckDialog, setShowAutoCheckDialog] = useState(true);

  const handleReviewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowOrderDialog(true);
  };

  const handleShopClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowShopDialog(true);
  };

  const handleOrderResponse = (received: boolean) => {
    setShowOrderDialog(false);
    setShowAutoCheckDialog(false);
    if (received) {
      setShowReviewDialog(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setShowTrackingDialog(true);
    }
  };

  const handleTrackingResponse = (wantTracking: boolean) => {
    setShowTrackingDialog(false);
    if (wantTracking) {
      window.open('https://shopblox.gg/support', '_blank');
    }
  };

  const handleReviewResponse = (wantToReview: boolean) => {
    setShowReviewDialog(false);
    if (wantToReview) {
      window.open('https://www.trustpilot.com/evaluate/shopblox.gg?utm_medium=trustbox&utm_source=MicroReviewCount', '_blank');
    }
  };

  const handleShopResponse = (continueShopping: boolean) => {
    setShowShopDialog(false);
    if (continueShopping) {
      navigate('/shop');
    }
  };

  const DialogWrapper: React.FC<{
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }> = ({ show, onClose, children }) => (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-md bg-neutral-900 rounded-xl p-6 border border-neutral-800 relative"
              >
                {children}
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        className="max-w-md w-full text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white">Thank you for using Shop<span className="text-red-500">Blox</span>!</h1>
        
        <p className="text-neutral-300">
          Your order is on the way. You'll receive the codes in your email within the next 5-10 minutes. 
          In the meantime, if you've enjoyed your experience, please consider leaving a review on our <span className="text-red-500">Trustpilot</span>. 
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#"
            onClick={handleReviewClick}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm font-semibold text-white hover:brightness-90"
          >
            <ExternalLink className="w-4 h-4" />
            Leave a Review
          </a>
          
          <a
            href="#"
            onClick={handleShopClick}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            <ShoppingBag className="w-4 h-4" />
            Continue Shopping
          </a>
        </div>
      </motion.div>

      {showAutoCheckDialog && <OrderCheckDialog onResponse={handleOrderResponse} />}

      <DialogWrapper show={showOrderDialog} onClose={() => setShowOrderDialog(false)}>
        <h3 className="text-lg font-semibold text-white mb-4">Have you received your order?</h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleOrderResponse(true)}
            className="flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-green-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500/30 transition-colors"
          >
            <Check className="w-4 h-4" />
            Yes
          </button>
          <button
            onClick={() => handleOrderResponse(false)}
            className="flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500/30 transition-colors"
          >
            <X className="w-4 h-4" />
            No
          </button>
        </div>
      </DialogWrapper>

      <DialogWrapper show={showTrackingDialog} onClose={() => setShowTrackingDialog(false)}>
        <h3 className="text-lg font-semibold text-white mb-4">Would you like us to track down your order?</h3>
        <p className="text-neutral-300 mb-6">
          Our support team can help locate your order and ensure it's delivered promptly.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleTrackingResponse(true)}
            className="flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500/30 transition-colors"
          >
            <Search className="w-4 h-4" />
            Track Order
          </button>
          <button
            onClick={() => handleTrackingResponse(false)}
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-500 bg-neutral-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-500/30 transition-colors"
          >
            <X className="w-4 h-4" />
            Maybe Later
          </button>
        </div>
      </DialogWrapper>

      <DialogWrapper show={showReviewDialog} onClose={() => setShowReviewDialog(false)}>
        <h3 className="text-lg font-semibold text-white mb-4">Would you like to leave a review?</h3>
        <p className="text-neutral-300 mb-6">
          Your feedback helps other customers make informed decisions and helps us improve our service.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleReviewResponse(true)}
            className="flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-green-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500/30 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Write Review
          </button>
          <button
            onClick={() => handleReviewResponse(false)}
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-500 bg-neutral-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-500/30 transition-colors"
          >
            <X className="w-4 h-4" />
            Maybe Later
          </button>
        </div>
      </DialogWrapper>

      <DialogWrapper show={showShopDialog} onClose={() => setShowShopDialog(false)}>
        <h3 className="text-lg font-semibold text-white mb-4">Continue Shopping?</h3>
        <p className="text-neutral-300 mb-6">
          Would you like to browse more items in our shop?
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleShopResponse(true)}
            className="flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-green-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500/30 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Yes
          </button>
          <button
            onClick={() => handleShopResponse(false)}
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-500 bg-neutral-500/20 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-500/30 transition-colors"
          >
            <X className="w-4 h-4" />
            Maybe Later
          </button>
        </div>
      </DialogWrapper>
    </div>
  );
};
