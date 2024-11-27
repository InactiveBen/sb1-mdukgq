import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogIn, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { PageBackground } from '../components/shared/PageBackground';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    toast.error(
      'Access Suspended',
      {
        description: 'Seller access is currently suspended as we migrate to using Stripe. All sellers have been paid out.',
        duration: 5000,
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setError('Access is currently suspended as we migrate to using Stripe. All sellers have been paid out. Please check back later or join our Discord for updates.');
    setIsSubmitting(false);
  };

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
              <LogIn className="w-12 h-12 text-red-500 mx-auto" />
              <h1 className="mt-4 text-3xl font-bold text-white">Welcome Back</h1>
              <p className="mt-2 text-neutral-300">
                Sign in to your seller account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-md"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-fit text-center ease-in-out duration-500 transition rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="text-sm text-center space-y-2">
              <p className="text-neutral-300">
                Don't have an account?{' '}
                <a href="/signup" className="text-red-500 hover:text-red-400">
                  Sign up
                </a>
              </p>
              <p className="text-neutral-300">
                Need help?{' '}
                <a href="/support" className="text-red-500 hover:text-red-400">
                  Contact support
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};