import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AgeConfirmationDialogProps {
  age: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export const AgeConfirmationDialog: React.FC<AgeConfirmationDialogProps> = ({
  age,
  onConfirm,
  onCancel
}) => {
  const isUnderAge = age < 13;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onCancel}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md bg-neutral-900 rounded-xl p-6 border border-neutral-800"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-white">Age Verification</h3>
          <p className="mt-2 text-neutral-300">
            Please confirm that you are <span className="font-bold text-white">{age} years old</span>
          </p>
        </div>

        <div className="space-y-4">
          {isUnderAge && (
            <div className="flex items-start gap-3 p-4 bg-yellow-500/10 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <p className="text-sm text-yellow-200 font-medium">Warning</p>
                <p className="text-sm text-yellow-200/80">
                  This action cannot be undone. Users under 13 will be restricted from accessing the site.
                </p>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              onClick={onCancel}
              className="flex-1 rounded-lg border border-neutral-800 bg-neutral-800/50 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-3 text-sm font-semibold text-white hover:brightness-90 transition-all"
            >
              Confirm Age
            </button>
          </div>

          <p className="text-xs text-neutral-400 text-center pt-4">
            By continuing, you agree to our{' '}
            <Link to="/terms" target="_blank" className="text-red-500 hover:text-red-400">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" target="_blank" className="text-red-500 hover:text-red-400">
              Privacy Policy
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
