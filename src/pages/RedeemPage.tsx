import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, AlertCircle } from 'lucide-react';

export const RedeemPage: React.FC = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Always show invalid code message since this is a demo
    setError('Invalid or expired gift card code.');
    setIsSubmitting(false);
  };

  return (
    <div className="w-full h-full min-h-screen flex items-center justify-center py-24">
      <div className="w-full max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <Gift className="w-12 h-12 text-red-500 mx-auto" />
          <h1 className="text-3xl font-bold text-white">Redeem Gift Card</h1>
          
          <p className="text-neutral-300">
            Enter your gift card code below to add credit to your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="XXXX-XXXX-XXXX-XXXX"
                className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-lg text-center tracking-widest text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                maxLength={19}
                pattern="[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}"
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
              disabled={isSubmitting || code.length < 19}
              className="w-full h-fit text-center ease-in-out duration-500 transition rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Checking...' : 'Redeem Gift Card'}
            </button>
          </form>

          <div className="text-sm text-neutral-400">
            <p>Gift cards can only be used once and cannot be refunded.</p>
            <p>Need help? <a href="/support" className="text-red-500 hover:text-red-400">Contact support</a></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};