import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { SupportArticle } from '../../types/support';

interface SupportModalProps {
  article: SupportArticle | null;
  onClose: () => void;
  onContactSupport: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ 
  article, 
  onClose,
  onContactSupport 
}) => {
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
            <div className="flex min-h-full items-start justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-md bg-neutral-900 rounded-xl p-6 border border-neutral-800 mt-20 mb-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-white pr-8">{article.title}</h2>
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4 text-neutral-300 max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar pr-4">
                  {article.content?.split('\n\n').map((section, index) => (
                    <div key={index} className="space-y-2">
                      {section.split('\n').map((line, lineIndex) => {
                        if (line.startsWith('•')) {
                          return (
                            <div key={lineIndex} className="flex items-start gap-2 pl-4">
                              <span className="text-red-500 mt-1.5">•</span>
                              <span>{line.substring(1).trim()}</span>
                            </div>
                          );
                        }
                        if (/^\d+\./.test(line)) {
                          return (
                            <div key={lineIndex} className="flex items-start gap-2 pl-4">
                              <span className="text-red-500">{line.split('.')[0]}.</span>
                              <span>{line.substring(line.indexOf('.') + 1).trim()}</span>
                            </div>
                          );
                        }
                        return <p key={lineIndex}>{line}</p>;
                      })}
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-4 border-t border-neutral-800 pt-4">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-sm text-neutral-300">
                      Still need help? Our support team is here to assist you.
                    </p>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={onClose}
                      className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onContactSupport();
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm font-semibold text-white hover:brightness-90"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Support
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
