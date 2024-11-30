import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, AlertCircle } from 'lucide-react';
import { SupportArticle } from '../../types/support';

interface ContactSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  article?: SupportArticle | null;
}

export const ContactSupportModal: React.FC<ContactSupportModalProps> = ({ 
  isOpen, 
  onClose,
  article 
}) => {
  const getArticleSpecificInstructions = () => {
    if (!article) return null;

    switch (article.id) {
      case 'payment-declined':
        return (
          <div className="space-y-1 mt-2">
            <p className="font-medium">Please include:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>The error message you received</li>
              <li>Your payment method (card type)</li>
              <li>Whether you completed 3D Secure verification</li>
              <li>Any screenshots of the error</li>
            </ul>
          </div>
        );
      case 'missing-order':
        return (
          <div className="space-y-1 mt-2">
            <p className="font-medium">Please include:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Order date and time</li>
              <li>Email used for purchase</li>
              <li>Payment method used</li>
              <li>Item(s) ordered</li>
            </ul>
          </div>
        );
      case 'wrong-item':
        return (
          <div className="space-y-1 mt-2">
            <p className="font-medium">Please include:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Your order number</li>
              <li>The item you ordered</li>
              <li>The incorrect item received</li>
              <li>Screenshot of the code (if safe to do so)</li>
            </ul>
          </div>
        );
      case 'invalid-code':
        return (
          <div className="space-y-1 mt-2">
            <p className="font-medium">Please include:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>The exact error message</li>
              <li>Screenshot of the error</li>
              <li>Your order number</li>
              <li>When you attempted to redeem</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full items-start justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-md bg-neutral-900 rounded-xl p-6 border border-neutral-800 mt-20 mb-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-red-500" />
                    <h2 className="text-xl font-bold text-white">Contact Support</h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <p className="text-neutral-300">
                    Please email us at <span className="text-red-500 font-semibold">support@shopblox.gg</span>
                  </p>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="space-y-2 text-sm text-neutral-300">
                        <p>
                          We take all support requests seriously and will respond within 24 hours to address your case immediately.
                        </p>
                        {article ? (
                          getArticleSpecificInstructions()
                        ) : (
                          <>
                            <p>To help us assist you faster, please include:</p>
                            <ul className="list-disc pl-4 space-y-1">
                              <li>Your order number (if applicable)</li>
                              <li>A clear description of your issue</li>
                              <li>Any relevant screenshots or information</li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={onClose}
                      className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
