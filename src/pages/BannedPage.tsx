import React from 'react';
import { motion } from 'framer-motion';
import { Ban, AlertCircle, ShieldAlert, Shield } from 'lucide-react';
import { PageBackground } from '../components/shared/PageBackground';

export const BannedPage: React.FC = () => {
  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex items-center justify-center py-24">
        <div className="w-full max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-4">
                <Ban className="w-10 h-10 text-red-500" />
              </div>
              <h1 className="text-4xl font-bold text-white">Access Restricted</h1>
              <p className="text-xl text-neutral-300">
                This website requires users to be 13 years or older
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <div className="bg-neutral-800/50 p-6 rounded-lg space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Legal Requirements</h3>
                    <p className="text-sm text-neutral-300 mt-1">
                      Due to legal regulations and platform policies, we cannot provide services to users under 13 years of age.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-800/50 p-6 rounded-lg space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">User Safety</h3>
                    <p className="text-sm text-neutral-300 mt-1">
                      This restriction is in place to ensure the safety and security of our young users and comply with online safety regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg mt-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Access Denied</h3>
                  <p className="text-sm text-neutral-300 mt-2">
                    Based on the date of birth provided, we cannot grant you access to ShopBlox at this time. 
                    You will be able to access our services when you reach 13 years of age.
                  </p>
                  <div className="mt-4 text-sm text-neutral-400">
                    If you believe this is a mistake, please{' '}
                    <a href="/support" className="text-red-500 hover:text-red-400 transition-colors">
                      contact our support team
                    </a>{' '}
                    for assistance.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
