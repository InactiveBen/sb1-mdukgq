import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ExternalLink } from 'lucide-react';

export const SupportPage: React.FC = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col py-24">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h1 className="text-3xl font-bold text-white">Need Help? We're Here For You</h1>
          
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any questions or concerns. 
            Whether you need help with a purchase, have questions about a product, or just want to learn more about ShopBlox, 
            we're here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a
              href="https://discord.gg/tdvCm2rXTN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Join Our Discord
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-neutral-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Quick Response Time</h3>
              <p className="text-neutral-300">
                Get answers to your questions quickly. Our average response time is under 5 minutes.
              </p>
            </div>

            <div className="bg-neutral-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Availability</h3>
              <p className="text-neutral-300">
                Our support team is available around the clock to assist you whenever you need help.
              </p>
            </div>

            <div className="bg-neutral-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Community Support</h3>
              <p className="text-neutral-300">
                Join our Discord community to connect with other users and get help from our team.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-neutral-800/30 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">Common Questions</h2>
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">How do I receive my code?</h3>
                <p className="text-neutral-300">
                  After purchase, your code will be sent to the email address you provided during checkout within 5-10 minutes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">What if I don't receive my code?</h3>
                <p className="text-neutral-300">
                  First, check your spam/junk folder. If you still can't find it, contact our support team on Discord and we'll help you right away.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer refunds?</h3>
                <p className="text-neutral-300">
                  Due to the digital nature of our products, we do not offer refunds once a code has been delivered. Please make sure to review your purchase carefully.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};