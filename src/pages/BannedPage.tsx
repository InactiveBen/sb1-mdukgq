import React from 'react';
import { motion } from 'framer-motion';
import { Ban, AlertCircle } from 'lucide-react';
import { PageBackground } from '../components/shared/PageBackground';

export const BannedPage: React.FC = () => {
  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex items-center justify-center py-24">
        <div className="w-full max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="text-center">
              <Ban className="w-12 h-12 text-red-500 mx-auto" />
              <h1 className="mt-4 text-3xl font-bold text-white">Access Denied</h1>
              <p className="mt-2 text-neutral-300">
                You must be at least 13 years old to use ShopBlox
              </p>
            </div>

            <div className="bg-neutral-800/50 p-6 rounded-lg space-y-4">
              <div className="flex items-start gap-3 text-neutral-200">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Age Requirement Not Met</p>
                  <p className="text-sm text-neutral-300 mt-1">
                    For safety and legal reasons, ShopBlox requires all users to be 13 years or older.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm text-center text-neutral-400">
              <p>
                If you believe this is a mistake, please{' '}
                <a href="/support" className="text-red-500 hover:text-red-400">
                  contact support
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
