import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-red-500">404</h1>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h2>
          <p className="mt-6 text-base leading-7 text-neutral-300">Sorry, we couldn't find the page you're looking for.</p>
          <div className="mt-10">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-red-500/40 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_0_12px_#ef4444a5] hover:bg-red-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 transition-all duration-200"
            >
              <Home className="h-5 w-5" />
              Go back home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};