import React from 'react';
import { motion } from 'framer-motion';
import { Lock, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageBackground } from '../components/shared/PageBackground';

export const AdminPage: React.FC = () => {
  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex items-center justify-center py-24">
        <div className="w-full max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
        

            <div className="pt-4">
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
              >
                <LogIn className="w-5 h-5" />
                Sign In
              </Link>
            </div>

            <div className="text-sm text-neutral-400">
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};