import React from 'react';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const AccessDeniedBox: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-lg"
    >
      <div className="flex items-start gap-4">
        <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-white">Access Denied</h3>
          <p className="text-neutral-300 mt-3 leading-relaxed">
            Based on the date of birth provided, we cannot grant you access to ShopBlox at this time. 
            This restriction is in place to protect young users and comply with online safety regulations.
            You will be able to access our services when you reach 13 years of age.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/support"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90 transition-all"
            >
              Contact Support
            </a>
            <span className="text-sm text-neutral-400">
              If you believe this is a mistake
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
