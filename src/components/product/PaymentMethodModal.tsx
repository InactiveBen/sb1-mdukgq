import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Coins, Lock, AlertCircle } from 'lucide-react';
import { Product } from '../../types';

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMethod: (method: 'stripe' | 'robux') => void;
  product: Product;
}

const DeliveryBadge: React.FC<{
  time: string;
  color: string;
  tooltip: string;
}> = ({ time, color, tooltip }) => {
  return (
    <div className="relative group">
      <span className={`px-2 py-0.5 text-xs font-medium ${color} rounded-full`}>
        {time}
      </span>
      <div className="absolute invisible group-hover:visible -top-10 left-1/2 -translate-x-1/2 w-48 p-2 bg-neutral-800 rounded text-xs text-neutral-300 z-10">
        {tooltip}
      </div>
    </div>
  );
};

export const PaymentMethodModal: React.FC<PaymentMethodModalProps> = ({
  isOpen,
  onClose,
  onSelectMethod,
  product
}) => {
  const [selectedMethod, setSelectedMethod] = useState<'stripe' | 'robux' | null>(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [friendRequestSent, setFriendRequestSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMethod || !termsAccepted) return;

    if (selectedMethod === 'robux' && !friendRequestSent) return;
    if (selectedMethod === 'robux' && !username) return;
    if (selectedMethod === 'stripe' && !email) return;

    onSelectMethod(selectedMethod);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-neutral-900 rounded-lg p-6 max-w-md w-full border border-neutral-800"
      >
        {!selectedMethod ? (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">Select Payment Method</h3>
            </div>

            <div className="space-y-4">
              {/* Card Payment Option */}
              <button
                onClick={() => setSelectedMethod('stripe')}
                className="w-full flex items-center gap-3 p-4 rounded-lg bg-neutral-800/50 border border-neutral-700 hover:bg-neutral-800 transition-colors"
              >
                <CreditCard className="w-5 h-5 text-red-500" />
                <div className="flex-1 text-left">
                  <div className="font-medium text-white">Pay with Card</div>
                  <div className="text-sm text-neutral-400">Secure payment via Stripe</div>
                  <div className="text-sm font-medium text-white mt-1">${product.price.toFixed(2)}</div>
                </div>
                <DeliveryBadge
                  time="5-10 min"
                  color="bg-green-500/20 text-green-500"
                  tooltip="Get your order delivered via email within 5-10 minutes"
                />
              </button>

              {/* Robux Payment Option */}
              <div className={`relative ${!product.robuxEnabled && 'cursor-not-allowed'}`}>
                <button
                  onClick={() => product.robuxEnabled && setSelectedMethod('robux')}
                  disabled={!product.robuxEnabled}
                  className={`w-full flex items-center gap-3 p-4 rounded-lg bg-neutral-800/50 border border-neutral-700 transition-colors ${
                    product.robuxEnabled ? 'hover:bg-neutral-800' : 'opacity-75'
                  }`}
                >
                  <Coins className="w-5 h-5 text-red-500" />
                  <div className="flex-1 text-left">
                    <div className="font-medium text-white">Pay with Robux</div>
                    <div className="text-sm text-neutral-400">Direct payment using Robux</div>
                    <div className="text-sm font-medium text-white mt-1">
                      {product.robuxPrice?.toLocaleString() || '0'} Robux
                    </div>
                  </div>
                  {product.robuxEnabled ? (
                    <DeliveryBadge
                      time="24-48h"
                      color="bg-yellow-500/20 text-yellow-500"
                      tooltip="Robux purchases are delivered manually and may take up to 24-48 hours to process"
                    />
                  ) : (
                    <div className="flex items-center gap-1">
                      <Lock className="w-4 h-4 text-neutral-500" />
                      <span className="text-xs font-medium text-neutral-500">Unavailable</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {selectedMethod === 'stripe' ? 'Card Payment' : 'Robux Payment'}
              </h3>

              {selectedMethod === 'stripe' ? (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-neutral-300 mb-1">
                      Roblox Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your Roblox username"
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm text-red-400 font-medium">Important</p>
                        <p className="text-sm text-neutral-300">
                          You must send a friend request to @ShopBloxLLC to receive your product. 
                          Your order will not be delivered until the friend request is accepted.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="friendRequest"
                      checked={friendRequestSent}
                      onChange={(e) => setFriendRequestSent(e.target.checked)}
                      className="mt-1"
                      required
                    />
                    <label htmlFor="friendRequest" className="text-sm text-neutral-300">
                      I confirm that I have sent a friend request to{' '}
                      <a
                        href="https://www.roblox.com/users/7651319898/profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-red-400"
                      >
                        @ShopBloxLLC
                      </a>
                    </label>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-neutral-300">
                    I agree to the{' '}
                    <a href="/terms" className="text-red-500 hover:text-red-400">
                      Terms of Service
                    </a>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedMethod(null);
                  setEmail('');
                  setUsername('');
                  setTermsAccepted(false);
                  setFriendRequestSent(false);
                }}
                className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={
                  !termsAccepted || 
                  (selectedMethod === 'robux' && (!username || !friendRequestSent)) ||
                  (selectedMethod === 'stripe' && !email)
                }
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm font-semibold text-white hover:brightness-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Payment
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
