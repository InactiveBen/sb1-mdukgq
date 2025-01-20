import React from 'react';
import { motion } from 'framer-motion';
import { ShieldOff, AlertCircle, Mail, Ban, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageBackground } from '../components/shared/PageBackground';

export const AdminPage: React.FC = () => {
  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen grid lg:grid-cols-2">
        {/* Left Section */}
        <div className="flex items-center justify-center p-8 lg:border-r border-neutral-800">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md space-y-6"
          >
            <div className="text-center lg:text-left">
              <ShieldOff className="w-12 h-12 text-red-500 mx-auto lg:mx-0" />
              <h1 className="mt-4 text-3xl font-bold text-white">Service Not Available</h1>
              <p className="mt-2 text-neutral-300">
                We regret to inform you that our services are not available in your region
              </p>
            </div>

            <div className="grid gap-4">
              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Ban className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Regional Restrictions</h3>
                    <p className="text-sm text-neutral-300">Due to regulatory requirements, we are unable to provide our services in your region</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Permanent Restriction</h3>
                    <p className="text-sm text-neutral-300">This restriction is permanent and we will not be able to offer services in your region in the future</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-8 bg-neutral-900/50">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md space-y-6"
          >
            <div className="text-center lg:text-left">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto lg:mx-0" />
              <h2 className="mt-4 text-2xl font-bold text-white">Need Assistance?</h2>
              <p className="mt-2 text-neutral-300">
                Our support team can help answer any questions about this restriction
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:support@shopblox.gg"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
              >
                <Mail className="w-5 h-5" />
                Contact Support
              </a>

              <div className="text-sm text-center lg:text-left text-neutral-400">
                <p>
                  We sincerely apologize for any inconvenience this may cause. Thank you for your understanding.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
