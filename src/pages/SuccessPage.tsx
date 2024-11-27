import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag } from 'lucide-react';

export const SuccessPage: React.FC = () => {
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
          Feel free to join our community on <span className="text-red-500">Discord</span> as well.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="https://www.trustpilot.com/review/shopblox.codes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm font-semibold text-white hover:brightness-90"
          >
            <ExternalLink className="w-4 h-4" />
            Leave a Review
          </a>
          
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            <ShoppingBag className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
      </motion.div>
    </div>
  );
};