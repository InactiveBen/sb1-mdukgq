import React from 'react';
import { motion } from 'framer-motion';
import { PackageX, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageBackground } from '../shared/PageBackground';

export const InvalidProductPage: React.FC = () => {
  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-neutral-900 rounded-xl border border-neutral-800 p-6 text-center"
        >
          <PackageX className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Product Not Found</h1>
          <p className="text-neutral-300 mb-6">
            This product may have been sold out or the link you followed might be invalid. 
            Check out our other available items in the shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
            >
              <ShoppingBag className="w-4 h-4" />
              Browse Shop
            </Link>
            <Link
              to="/"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
