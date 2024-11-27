import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, AlertCircle } from 'lucide-react';
import { PageBackground } from '../components/shared/PageBackground';

export const MaintenancePage: React.FC = () => {
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
              <Wrench className="w-12 h-12 text-red-500 mx-auto" />
              <h1 className="mt-4 text-3xl font-bold text-white">Under Maintenance</h1>
              <p className="mt-2 text-neutral-300">
                We're currently performing scheduled maintenance to improve your experience
              </p>
            </div>

            <div className="bg-neutral-800/50 p-6 rounded-lg space-y-4">
              <div className="flex items-center gap-3 text-neutral-200">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Estimated downtime: 2-3 hours</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-200">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>System upgrades and security updates</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-200">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>All user data and accounts are safe</span>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://discord.gg/tdvCm2rXTN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
              >
                Join Our Discord
              </a>
            </div>

            <div className="text-sm text-center text-neutral-400">
              <p>
                We apologize for any inconvenience. For urgent matters,{' '}
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
