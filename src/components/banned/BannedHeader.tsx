import React from 'react';
import { Ban } from 'lucide-react';
import { motion } from 'framer-motion';

export const BannedHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-4"
    >
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/10 mb-4">
        <Ban className="w-12 h-12 text-red-500" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Access Restricted
      </h1>
      <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
        For your safety and in compliance with regulations, this website requires users to be 13 years or older
      </p>
    </motion.div>
  );
};
