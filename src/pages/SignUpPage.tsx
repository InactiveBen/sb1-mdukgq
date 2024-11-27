import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, CheckCircle2, AlertCircle } from 'lucide-react';
import { PageBackground } from '../components/shared/PageBackground';

export const SignUpPage: React.FC = () => {
  // Rest of the component code remains exactly the same
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePassword = (pass: string) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    const hasNumber = /\d/.test(pass);
    return hasSpecialChar && hasNumber;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validatePassword(password)) {
      setError('Password must contain at least one special character and one number.');
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setError('Seller signups are currently paused. Please check back later or join our Discord for updates.');
    setIsSubmitting(false);
  };

  const benefits = [
    <>Earn up to <span className="text-red-500 font-bold">50%</span> commission on every sale</>,
    <>Get paid <span className="text-red-500 font-bold">instantly</span> via cryptocurrency</>,
    <>Access to our <span className="text-red-500 font-bold">seller dashboard</span> and <span className="text-red-500 font-bold">analytics</span></>,
    <><span className="text-red-500 font-bold">Priority support</span> and <span className="text-red-500 font-bold">dedicated account manager</span></>,
    <>Join a community of <span className="text-red-500 font-bold">successful</span> sellers</>
  ];

  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex items-center justify-center py-24">
        <div className="w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 lg:pr-12"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Start Earning With Shop<span className="text-red-500">Blox</span></h2>
              <p className="text-lg text-neutral-300">
                Join our marketplace and turn your Roblox toy codes into profit. 
                We provide the platform, tools, and support—you provide the codes.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-neutral-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-neutral-800/30 p-6 rounded-lg">
              <p className="text-neutral-300">
                "I've made over $10,000 selling toy codes on ShopBlox. The platform is easy to use 
                and the support team is always there when you need them."
              </p>
              <p className="mt-2 text-sm text-neutral-400">— John D., Top Seller</p>
            </div>
          </motion.div>

          {/* Right Side - Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:border-l lg:border-neutral-800 lg:pl-12"
          >
            <div className="max-w-md mx-auto space-y-6">
              <div className="text-center">
                <Store className="w-12 h-12 text-red-500 mx-auto" />
                <h1 className="mt-4 text-3xl font-bold text-white">Become a Seller</h1>
                <p className="mt-2 text-neutral-300">
                  Create your seller account to get started
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
                  <p className="mt-1 text-xs text-neutral-400">
                    Must contain at least one special character and one number
                  </p>
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
                  {isSubmitting ? 'Creating account...' : 'Create Account'}
                </button>
              </form>

              <div className="text-sm text-center space-y-2">
                <p className="text-neutral-300">
                  Already have an account?{' '}
                  <a href="/login" className="text-red-500 hover:text-red-400">
                    Log in
                  </a>
                </p>
                <p className="text-neutral-300">
                  Need help?{' '}
                  <a href="/support" className="text-red-500 hover:text-red-400">
                    Contact support
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};