import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, AlertCircle, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageBackground } from '../components/shared/PageBackground';
import { OrderCheckDialog } from '../components/maintenance/OrderCheckDialog';

export const MaintenancePage: React.FC = () => {
  const [showOrderDialog, setShowOrderDialog] = useState(true);

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
              <Wrench className="w-12 h-12 text-red-500 mx-auto lg:mx-0" />
              <h1 className="mt-4 text-3xl font-bold text-white">Scheduled Maintenance</h1>
              <p className="mt-2 text-neutral-300">
                We're performing scheduled updates to improve our services
              </p>
            </div>

            <div className="grid gap-4">
              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">System Updates</h3>
                    <p className="text-sm text-neutral-300">Implementing performance improvements and new features</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Service Status</h3>
                    <p className="text-sm text-neutral-300">All orders and accounts are safe and secure</p>
                  </div>
                </div>
              </div>
            </div>

            {showOrderDialog && (
              <OrderCheckDialog onClose={() => setShowOrderDialog(false)} />
            )}
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
              <h2 className="mt-4 text-2xl font-bold text-white">Need Help?</h2>
              <p className="mt-2 text-neutral-300">
                Our support team is here to assist you
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                to="/support"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
              >
                Contact Support
              </Link>

              <div className="text-sm text-center lg:text-left text-neutral-400">
                <p>
                  For immediate assistance, visit our{' '}
                  <Link to="/support" className="text-red-500 hover:text-red-400">
                    support page
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
