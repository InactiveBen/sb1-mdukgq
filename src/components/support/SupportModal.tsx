import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { SupportArticle } from '../../types/support';

interface SupportModalProps {
  article: SupportArticle | null;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <AnimatePresence>
      {article && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-md bg-neutral-900 rounded-xl p-6 border border-neutral-800 relative"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-white">{article.title}</h2>
                  <button
                    onClick={onClose}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4 text-neutral-300">
                  {article.content?.split('\n\n').map((section, index) => (
                    <div key={index} className="space-y-2">
                      {section.split('\n').map((line, lineIndex) => {
                        // Handle bullet points
                        if (line.startsWith('•')) {
                          return (
                            <div key={lineIndex} className="flex items-start gap-2 pl-4">
                              <span className="text-red-500 mt-1.5">•</span>
                              <span>{line.substring(1).trim()}</span>
                            </div>
                          );
                        }
                        // Handle numbered lists
                        if (/^\d+\./.test(line)) {
                          return (
                            <div key={lineIndex} className="flex items-start gap-2 pl-4">
                              <span className="text-red-500">{line.split('.')[0]}.</span>
                              <span>{line.substring(line.indexOf('.') + 1).trim()}</span>
                            </div>
                          );
                        }
                        // Regular text
                        return <p key={lineIndex}>{line}</p>;
                      })}
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-sm text-neutral-300">
                      Still need help? Email us at{' '}
                      <a href="mailto:support@shopblox.gg" className="text-red-500 hover:text-red-400">
                        support@shopblox.gg
                      </a>
                      . We take all support requests seriously and will respond within 24 hours to address your case immediately.
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      onClick={onClose}
                      className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                    <a
                      href="mailto:support@shopblox.gg"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm font-semibold text-white hover:brightness-90"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Support
                    </a>
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
