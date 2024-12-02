import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import { HoldToConfirmButton } from './HoldToConfirmButton';

interface FriendRequestConfirmationProps {
  onConfirm: () => void;
  onBack: () => void;
}

export const FriendRequestConfirmation: React.FC<FriendRequestConfirmationProps> = ({
  onConfirm,
  onBack
}) => {
  const [friendRequestConfirmed, setFriendRequestConfirmed] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleConfirm = () => {
    if (termsAccepted && friendRequestConfirmed) {
      onConfirm();
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Friend Request Required</h2>
          <p className="text-sm text-neutral-400">Required for order delivery</p>
        </div>
        <button onClick={onBack} className="text-neutral-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="text-sm text-neutral-300">
                  Your order will be delivered via Roblox messages within 24-48 hours. You must:
                </p>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>
                      Send a friend request to{' '}
                      <a
                        href="https://www.roblox.com/users/7651319898/profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-red-400 font-medium"
                      >
                        @ShopBloxLLC
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Have space in your friends list</span>
                  </li>
                </ul>
                <p className="text-sm font-medium text-red-400">
                  Orders will not be delivered without an accepted friend request.
                </p>
              </div>
            </div>
          </div>
        </div>

        <HoldToConfirmButton
          onConfirm={() => setFriendRequestConfirmed(true)}
          confirmed={friendRequestConfirmed}
        />

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
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
          onClick={handleConfirm}
          disabled={!termsAccepted || !friendRequestConfirmed}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Payment
        </button>
      </div>
    </>
  );
};
