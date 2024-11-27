import React from 'react';
import { AlertCircle, Clock, FileText } from 'lucide-react';

export const PolicySection: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Our Policies</h2>
      
      <div className="space-y-8">
        <div className="bg-neutral-800/30 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
            <h3 className="font-semibold text-white">Refund Policy</h3>
          </div>
          <p className="text-neutral-300">
            Due to the digital nature of our products, all sales are final and no refunds will be 
            provided once a code has been delivered. Please ensure you review your purchase carefully 
            before completing the transaction.
          </p>
        </div>

        <div className="bg-neutral-800/30 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <Clock className="w-5 h-5 text-red-500 mt-1" />
            <h3 className="font-semibold text-white">Delivery Policy</h3>
          </div>
          <p className="text-neutral-300">
            Codes are delivered automatically to your email address within 5-10 minutes of successful 
            payment. If you don't receive your code within this timeframe, please check your spam 
            folder or contact our support team.
          </p>
        </div>

        <div className="bg-neutral-800/30 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <FileText className="w-5 h-5 text-red-500 mt-1" />
            <h3 className="font-semibold text-white">Terms of Service</h3>
          </div>
          <p className="text-neutral-300">
            By using our service, you agree to our Terms of Service and Privacy Policy. We reserve 
            the right to refuse service to anyone for any reason at any time.
          </p>
          <div className="mt-4 flex gap-4">
            <a 
              href="/terms" 
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="/privacy" 
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
