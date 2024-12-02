import React from 'react';
import { motion } from 'framer-motion';
import { PageBackground } from '../../shared/PageBackground';
import { Product } from '../../../types';

interface ProductLayoutProps {
  leftSection: React.ReactNode;
  rightSection: React.ReactNode;
}

export const ProductLayout: React.FC<ProductLayoutProps> = ({ leftSection, rightSection }) => {
  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full min-h-screen flex flex-col pt-24">
        <div className="flex-1 grid lg:grid-cols-2">
          {/* Left Section */}
          <div className="flex items-center justify-center p-8 lg:border-r border-neutral-800">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl"
            >
              {leftSection}
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center p-8 bg-neutral-900/50">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-xl space-y-8"
            >
              {rightSection}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
