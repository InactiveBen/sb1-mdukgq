import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Coins, X, Lock } from 'lucide-react';
import { Product } from '../../types';
import { BioVerification } from './BioVerification';
import { FriendRequestConfirmation } from './FriendRequestConfirmation';

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMethod: (method: 'stripe' | 'robux') => void;
  product: Product;
  resetToFirstStep?: boolean;
}

type Step = 'method' | 'profile' | 'bio' | 'friend-request' | 'email';

export const PaymentMethodModal: React.FC<PaymentMethodModalProps> = ({
  isOpen,
  onClose,
  onSelectMethod,
  product,
  resetToFirstStep = false
}) => {
  const [currentStep, setCurrentStep] = useState<Step>('method');
  const [selectedMethod, setSelectedMethod] = useState<'stripe' | 'robux' | null>(null);
  const [email, setEmail] = useState('');
  const [profileLink, setProfileLink] = useState('');
  const [bioVerified, setBioVerified] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep('method');
      setSelectedMethod(null);
      setEmail('');
      setProfileLink('');
      setBioVerified(false);
    }
  }, [isOpen]);

  const handleBack = () => {
    if (currentStep === 'method' || resetToFirstStep) {
      onClose();
      return;
    }

    setCurrentStep('method');
    setSelectedMethod(null);
  };

  const handleMethodSelect = (method: 'stripe' | 'robux') => {
    if ((method === 'stripe' && !product.stripeEnabled) || 
        (method === 'robux' && !product.robuxEnabled)) {
      return;
    }

    setSelectedMethod(method);
    if (method === 'stripe') {
      setCurrentStep('email');
    } else {
      setCurrentStep('profile');
    }
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profileLink) {
      setCurrentStep('bio');
    }
  };

  const handleBioVerified = (verified: boolean) => {
    setBioVerified(verified);
    if (verified) {
      setCurrentStep('friend-request');
    }
  };

  const handleFriendRequestConfirmed = () => {
    if (selectedMethod === 'robux' && product.robuxLink) {
      window.open(product.robuxLink, '_blank');
      onClose();
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMethod === 'stripe' && product.stripeLink) {
      const url = new URL(product.stripeLink);
      url.searchParams.set('prefilled_email', email);
      window.open(url.toString(), '_blank');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-[100]"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md bg-neutral-900 rounded-xl p-6 border border-neutral-800 max-h-[90vh] overflow-y-auto"
        >
          {currentStep === 'method' && (
            <>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">Select Payment Method</h2>
                  <p className="text-sm text-neutral-400">Price: ${product.price}</p>
                </div>
                <button onClick={onClose} className="text-neutral-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => handleMethodSelect('stripe')}
                  disabled={!product.stripeEnabled}
                  className="w-full flex items-center gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed relative"
                >
                  {!product.stripeEnabled && (
                    <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <div className="flex items-center gap-2 text-neutral-400">
                        <Lock className="w-4 h-4" />
                        <span className="text-sm font-medium">Unavailable</span>
                      </div>
                    </div>
                  )}
                  <CreditCard className="w-6 h-6 text-red-500" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">Pay with Card</span>
                      <span className="text-xs text-green-500 bg-green-500/20 px-2 py-1 rounded-full">5-10 min</span>
                    </div>
                    <span className="text-sm text-neutral-400">Secure payment via Stripe</span>
                  </div>
                </button>

                <button
                  onClick={() => handleMethodSelect('robux')}
                  disabled={!product.robuxEnabled}
                  className="w-full flex items-center gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed relative"
                >
                  {!product.robuxEnabled && (
                    <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <div className="flex items-center gap-2 text-neutral-400">
                        <Lock className="w-4 h-4" />
                        <span className="text-sm font-medium">Unavailable</span>
                      </div>
                    </div>
                  )}
                  <Coins className="w-6 h-6 text-red-500" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">Pay with Robux</span>
                      <span className="text-xs text-yellow-500 bg-yellow-500/20 px-2 py-1 rounded-full">24-48h</span>
                    </div>
                    <span className="text-sm text-neutral-400">R${product.robuxPrice}</span>
                  </div>
                </button>
              </div>
            </>
          )}

          {currentStep === 'profile' && (
            <form onSubmit={handleProfileSubmit} className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Enter Roblox Profile</h2>
                <button type="button" onClick={handleBack} className="text-neutral-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="profile" className="block text-sm font-medium text-neutral-300 mb-2">
                    Your Roblox Profile Link
                  </label>
                  <input
                    type="url"
                    id="profile"
                    value={profileLink}
                    onChange={(e) => setProfileLink(e.target.value)}
                    placeholder="https://www.roblox.com/users/123456789/profile"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                    pattern="https://www\.roblox\.com/users/\d+/profile"
                  />
                  <p className="mt-1 text-xs text-neutral-400">
                    Example: https://www.roblox.com/users/123456789/profile
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {currentStep === 'bio' && (
            <BioVerification
              onVerify={handleBioVerified}
              profileLink={profileLink}
            />
          )}

          {currentStep === 'friend-request' && (
            <FriendRequestConfirmation
              onConfirm={handleFriendRequestConfirmed}
              onBack={handleBack}
            />
          )}

          {currentStep === 'email' && (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Enter Details</h2>
                <button type="button" onClick={handleBack} className="text-neutral-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-neutral-300">
                    I agree to the{' '}
                    <a href="/terms" target="_blank" className="text-red-500 hover:text-red-400">
                      Terms of Service
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </>
  );
};
