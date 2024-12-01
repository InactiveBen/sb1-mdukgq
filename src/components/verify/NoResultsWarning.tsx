import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, ExternalLink, MessageCircle } from 'lucide-react';

export const NoResultsWarning: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-neutral-800/30 rounded-lg overflow-hidden"
    >
      {/* Header */}
      <div className="bg-red-500/10 border-b border-red-500/20 p-6">
        <div className="flex items-center justify-center gap-3">
          <ShieldAlert className="w-8 h-8 text-red-500" />
          <div className="text-center">
            <h3 className="text-xl font-bold text-red-500">Security Alert</h3>
            <p className="text-sm text-neutral-300">Unverified User Detected</p>
          </div>
        </div>
      </div>

      {/* Warning Content */}
      <div className="p-6 space-y-6">
        <div className="bg-neutral-900/50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-white">Potential Scam Warning</p>
              <p className="mt-1 text-sm text-neutral-300">
                This Discord user ID is not associated with any ShopBlox employee. If they claim to work for us, 
                they are attempting to scam you.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <ExternalLink className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Report to Discord</p>
                <p className="mt-1 text-sm text-neutral-300">
                  Report this user to Discord's Trust & Safety team for impersonation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Contact Support</p>
                <p className="mt-1 text-sm text-neutral-300">
                  Alert our support team about this impersonation attempt.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://discord.com/safety"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Report to Discord
          </a>
          <a
            href="https://discord.gg/shopblox"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-3 text-sm font-semibold text-white hover:brightness-90 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Support
          </a>
        </div>

        <div className="text-center">
          <p className="text-xs text-neutral-400">
            Always verify employee status through this page before conducting any business.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
