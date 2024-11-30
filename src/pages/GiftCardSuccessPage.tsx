import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Mail, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { PageBackground } from '../components/shared/PageBackground';

export const GiftCardSuccessPage: React.FC = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ef4444', '#ffffff', '#737373'],
      ticks: 200,
      gravity: 1.2,
      scalar: 1.2,
      shapes: ['circle', 'square']
    });
  }, []);

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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4">
                <Gift className="w-8 h-8 text-red-500" />
              </div>
              <h1 className="text-3xl font-bold text-white">Thank You!</h1>
              <p className="mt-2 text-neutral-300">
                Your gift card purchase was successful. We've sent all the details to your email.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Check Your Email</h3>
                    <p className="text-sm text-neutral-300">
                      We've sent the gift card and receipt to your inbox
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Ready to Use</h3>
                    <p className="text-sm text-neutral-300">
                      The gift card can be used immediately on any item in our store
                    </p>
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
              <CheckCircle2 className="w-12 h-12 text-red-500 mx-auto lg:mx-0" />
              <h2 className="mt-4 text-2xl font-bold text-white">What's Next?</h2>
              <p className="mt-2 text-neutral-300">
                Ready to continue shopping? Check out our latest items or purchase another gift card.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
              >
                <Gift className="w-4 h-4" />
                Browse Shop
              </Link>

              <Link
                to="/gift-cards"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                <ArrowLeft className="w-4 h-4" />
                Buy Another
              </Link>
            </div>

            <div className="text-sm text-center lg:text-left text-neutral-400">
              <p>
                Need help? Email us at{' '}
                <span className="text-red-500">support@shopblox.gg</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
