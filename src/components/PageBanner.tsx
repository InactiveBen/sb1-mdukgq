import React, { useState } from 'react';
import { X, AlertCircle, Tag } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Modal } from './Modal';

interface BannerProps {
  onClose: () => void;
}

export function PageBanner({ onClose }: BannerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const getBannerContent = () => {
    switch (location.pathname) {
      case '/login':
        return {
          title: 'Access Suspended',
          message: 'Access is currently suspended as we migrate to using Stripe. All sellers have been paid out. Please check back later or join our Discord for updates.',
          icon: AlertCircle
        };
      case '/signup':
        return {
          title: 'Signups Paused',
          message: 'Seller signups are currently paused. Please check back later or join our Discord for updates.',
          icon: AlertCircle
        };
      default:
        return {
          title: 'Cyber Monday Sale',
          message: 'Use code cyber20 for 20% off all orders for a limited time only',
          icon: Tag
        };
    }
  };

  const content = getBannerContent();
  const Icon = content.icon;

  return (
    <>
      <div className="fixed bottom-4 right-4 max-w-md animate-slide-in z-50">
        <div className="relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
          <div className="px-6 py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <Icon className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {content.title}
                  </h3>
                  <p className="text-sm text-neutral-300 font-medium">
                    {content.message}
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
