import React, { useState } from 'react';
import { X, AlertCircle, ExternalLink } from 'lucide-react';
import { Modal } from './Modal';

interface BannerProps {
  onClose: () => void;
}

export function Banner({ onClose }: BannerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 max-w-md animate-slide-in z-50">
        <div className="relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
          <div className="px-6 py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    You're on ShopBlox.codes
                  </h3>
                  <p className="text-sm text-neutral-300 font-medium">
                    We've finalized the transfer of our domain!{' '}
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-1 text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors"
                    >
                      Click here for more information
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors mt-1"
                aria-label="Close banner"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}