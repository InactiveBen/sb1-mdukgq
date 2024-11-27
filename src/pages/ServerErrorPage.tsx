import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ServerCrash, RefreshCw } from 'lucide-react';
import { LoadingSpinner } from '../components/shared/LoadingSpinner';

export const ServerErrorPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate a delay before refreshing
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        className="max-w-md w-full text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isLoading ? (
          <>
            <LoadingSpinner />
            <p className="text-neutral-300">Reconnecting to server...</p>
          </>
        ) : (
          <>
            <ServerCrash className="w-16 h-16 text-red-500 mx-auto" />
            <h1 className="text-3xl font-bold text-white">Server Not Responding</h1>
            
            <p className="text-neutral-300">
              We're having trouble connecting to our servers. This could be due to high traffic or maintenance.
              Please try again later.
            </p>

            <div className="pt-4">
              <button
                onClick={handleRefresh}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
            </div>

            <div className="text-sm text-neutral-400">
              If this problem persists, please <a href="/support" className="text-red-500 hover:text-red-400">contact support</a> for assistance.
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};
