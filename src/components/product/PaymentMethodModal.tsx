import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Coins, Clock, X, Lock } from 'lucide-react';
import { Product } from '../../types';
import { DeliveryInfo } from './DeliveryInfo';
import { BioVerification } from './BioVerification';
import { FriendRequestConfirmation } from './FriendRequestConfirmation';

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMethod: (method: 'stripe' | 'robux') => void;
  product: Product;
}

type Step = 'method' | 'bio' | 'friend-request' | 'email';

export const PaymentMethodModal: React.FC<PaymentMethodModalProps> = ({
  isOpen,
  onClose,
  onSelectMethod,
  product
}) => {
  const [currentStep, setCurrentStep] = useState<Step>('method');
  const [selectedMethod, setSelectedMethod] = useState<'stripe' | 'robux' | null>(null);
  const [email, setEmail] = useState('');
  const [profileLink, setProfileLink] = useState('');
  const [bioVerified, setBioVerified] = useState(false);

  const handleBack = () => {
    if (currentStep === 'method') {
      onClose();
      return;
    }

    if (currentStep === 'bio') {
      setCurrentStep('method');
    } else if (currentStep === 'friend-request') {
      setCurrentStep('bio');
    } else if (currentStep === 'email') {
      setCurrentStep('method');
    }
  };

  const handleMethodSelect = (method: 'stripe' | 'robux') => {
    setSelectedMethod(method);
    if (method === 'stripe') {
      setCurrentStep('email');
    } else {
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
    if (selectedMethod) {
      onSelectMethod(selectedMethod);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMethod) {
      onSelectMethod(selectedMethod);
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
                  className="w-full flex items-center gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors border border-neutral-700"
                >
                  <CreditCard className="w-5 h-5 text-red-500" />
                  <div className="flex-1 text-left">
                    <div className="font-medium text-white">Pay with Card</div>
                    <div className="text-sm text-neutral-400">Secure payment via Stripe</div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-500 text-xs">
                      <Clock className="w-3 h-3" />
                      <span className="group-hover:text-opacity-0 transition-all">5-10 min</span>
                      <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded bg-neutral-800 text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -top-8">
RECOMMENDED                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleMethodSelect('robux')}
                  disabled={!product.robuxEnabled}
                  className="w-full flex items-center gap-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors border border-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed relative"
                >
                  <Coins className="w-5 h-5 text-red-500" />
                  <div className="flex-1 text-left">
                    <div className="font-medium text-white">Pay with Robux</div>
                    <div className="text-sm text-neutral-400">R${product.robuxPrice}</div>
                  </div>
                  {product.robuxEnabled ? (
                    <div className="group relative">
                      <div className="flex items-center gap-1 px-2 py-1 rounded bg-yellow-500/20 text-yellow-500 text-xs">
                        <Clock className="w-3 h-3" />
                        <span className="group-hover:text-opacity-0 transition-all">24-48h</span>
                        <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded bg-neutral-800 text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -top-8">
Slower                       </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/80 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-neutral-400">
                        <Lock className="w-4 h-4" />
                        <span className="text-sm">Unavailable</span>
                      </div>
                    </div>
                  )}
                </button>
              </div>
            </>
          )}

          {currentStep === 'bio' && (
            <>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">Verify Your Profile</h2>
                  <p className="text-sm text-neutral-400">R${product.robuxPrice}</p>
                </div>
                <button onClick={handleBack} className="text-neutral-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <DeliveryInfo />
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Your Roblox Profile Link
                  </label>
                  <input
                    type="url"
                    value={profileLink}
                    onChange={(e) => setProfileLink(e.target.value)}
                    placeholder="https://www.roblox.com/users/..."
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                {profileLink && (
                  <BioVerification
                    profileLink={profileLink}
                    onVerify={handleBioVerified}
                  />
                )}
              </div>
            </>
          )}

          {currentStep === 'friend-request' && (
            <FriendRequestConfirmation
              onConfirm={handleFriendRequestConfirmed}
              onBack={handleBack}
            />
          )}

          {currentStep === 'email' && (
            <>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">Card Payment</h2>
                  <p className="text-sm text-neutral-400">${product.price}</p>
                </div>
                <button onClick={handleBack} className="text-neutral-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
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
                    className="mt-1"
                    required
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
              </form>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
};
