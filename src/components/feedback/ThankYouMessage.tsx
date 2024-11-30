import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ThankYouMessageProps {
  rating: number;
}

export const ThankYouMessage: React.FC<ThankYouMessageProps> = ({ rating }) => {
  const isPositive = rating >= 4;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center space-y-6"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4">
        <Heart className="w-8 h-8 text-red-500" />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          {isPositive ? "Thank you for your feedback!" : "Thanks for letting us know!"}
        </h2>
        <p className="text-neutral-300">
          {isPositive
            ? "We're glad you had a great experience. Your feedback helps us maintain our high standards."
            : "We appreciate your honest feedback. We'll work hard to improve our service based on your input."}
        </p>
      </div>

      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
        >
          Return Home
        </Link>
      </div>
    </motion.div>
  );
};
