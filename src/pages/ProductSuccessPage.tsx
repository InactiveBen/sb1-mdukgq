import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Copy, CheckCircle2, ArrowLeft, AlertCircle, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { PageBackground } from '../components/shared/PageBackground';

export const ProductSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const code = new URLSearchParams(window.location.search).get('code');
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    if (!code) {
      navigate('/shop');
      return;
    }

    // Check if code has been viewed in a previous session
    const codeViewed = document.cookie.includes(`redeemed_${code}=true`);
    if (codeViewed) {
      setHasVisited(true);
    } else {
      // Launch confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.2, y: 0.6 },
        colors: ['#ef4444', '#ffffff', '#737373'],
        ticks: 200,
        gravity: 1.2,
        scalar: 1.2,
        shapes: ['circle', 'square']
      });
    }

    // Set cookie when page is loaded for the first time
    if (!codeViewed) {
      document.cookie = `redeemed_${code}=true; max-age=31536000; path=/`;
    }

    // Add beforeunload event listener
    const handleBeforeUnload = () => {
      setHasVisited(true);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [code, navigate]);

  const handleCopy = async () => {
    if (!code) return;
    
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (hasVisited) {
    return (
      <div className="relative isolate">
        <PageBackground />
        <div className="w-full h-full min-h-screen flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-neutral-900 rounded-xl border border-neutral-800 p-6 text-center"
          >
            <Mail className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Code Already Viewed</h1>
            <p className="text-neutral-300 mb-6">
              For security reasons, we cannot display the code again. Please check your email for the code - we sent it right after your purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
              >
                <Gift className="w-4 h-4" />
                Continue Shopping
              </Link>
              <a
                href="https://www.roblox.com/redeem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                <ArrowLeft className="w-4 h-4" />
                Redeem Now
              </a>
            </div>
            <p className="mt-6 text-sm text-neutral-400">
              Need help? Email us at{' '}
              <span className="text-red-500">support@shopblox.gg</span>
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

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
                Your order was successful. Here's your code to redeem on Roblox:
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-neutral-800/50 p-6 rounded-lg">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-sm font-medium text-neutral-400">Your Code:</span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 text-sm text-red-500 hover:text-red-400 transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Code
                      </>
                    )}
                  </button>
                </div>
                <div className="font-mono text-2xl text-white text-center tracking-wider bg-neutral-900 rounded-lg p-4 border border-neutral-800">
                  {code}
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-white">Important</h3>
                    <p className="text-sm text-neutral-300">
                      Save your code before leaving this page. For security reasons, you won't be able to view it again.
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
              <h2 className="mt-4 text-2xl font-bold text-white">How to Redeem</h2>
              <p className="mt-2 text-neutral-300">
                Follow these steps to redeem your code on Roblox:
              </p>
            </div>

            <div className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-neutral-300">
                <li>Visit <a href="https://www.roblox.com/redeem" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">roblox.com/redeem</a></li>
                <li>Sign in to your Roblox account</li>
                <li>Enter or paste your code</li>
                <li>Click "Redeem"</li>
                <li>Check your Roblox inventory for your item</li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
              >
                <Gift className="w-4 h-4" />
                Continue Shopping
              </Link>

              <a
                href="https://www.roblox.com/redeem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/50 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                <ArrowLeft className="w-4 h-4" />
                Redeem Now
              </a>
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
