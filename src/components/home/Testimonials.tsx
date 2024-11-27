import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-bold leading-8 tracking-tight text-red-600 uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Here's what ShopBlox<br /> customers have to say
          </p>
        </div>
        <motion.div 
          className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Unable to fetch reviews</h3>
            <p className="text-neutral-400 max-w-md">
              Please try again later. In the meantime, you can check our reviews on{' '}
              <a 
                href="https://www.trustpilot.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                Trustpilot
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
