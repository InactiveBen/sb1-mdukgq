import React from 'react';
import { motion } from 'framer-motion';
import { PackageX, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageBackground } from '../shared/PageBackground';
import { SuggestedProducts } from './SuggestedProducts';
import { products } from '../../data/products';

export const InvalidProductPage: React.FC = () => {
  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full min-h-screen flex flex-col pt-24">
        <div className="flex-1 grid lg:grid-cols-2">
          {/* Left Section - Error Message */}
          <div className="flex items-center justify-center p-8 lg:border-r border-neutral-800">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl bg-neutral-900/50 rounded-lg border border-neutral-800 p-8"
            >
              <div className="text-center space-y-6">
                <PackageX className="w-12 h-12 text-red-500 mx-auto" />
                <div>
                  <h1 className="text-2xl font-bold text-white mb-2">Product Not Found</h1>
                  <p className="text-neutral-300">
                    This product may have been sold out or the link you followed might be invalid. 
                    Check out our other available items in the shop.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    to="/shop"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Browse Shop
                  </Link>
                  <Link
                    to="/"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Go Home
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Section - Suggested Products */}
          <div className="flex items-center justify-center p-8 bg-neutral-900/50">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-xl bg-neutral-900/50 rounded-lg border border-neutral-800 p-8"
            >
              <SuggestedProducts allProducts={products} compact />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
