import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ExternalLink, Shield } from 'lucide-react';
import { sanitizeURL } from '../utils/sanitize';

export const SupportPage: React.FC = () => {
  const discordUrl = sanitizeURL('https://discord.gg/tdvCm2rXTN');
  const trustpilotUrl = sanitizeURL('https://www.trustpilot.com/review/shopblox.gg');

  return (
    <div className="w-full h-full min-h-screen flex flex-col py-24">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <Shield className="w-12 h-12 text-red-500 mx-auto" />
          <h1 className="text-3xl font-bold text-white">Need Help? We're Here For You</h1>
          
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Our support team is available to assist you with any questions or concerns. 
            For your security, we only provide support through our official Discord server.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a
              href={discordUrl}
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
              <h3 className="text-lg font-semibold text-white mb-2">Secure Support</h3>
              <p className="text-neutral-300">
                All support is handled through our official Discord server for enhanced security and verification.
              </p>
            </div>

            <div className="bg-neutral-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Availability</h3>
              <p className="text-neutral-300">
                Our support team is available around the clock to assist you whenever you need help.
              </p>
            </div>

            <div className="bg-neutral-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Verified Support</h3>
              <p className="text-neutral-300">
                Only trust support from verified staff members with official roles in our Discord server.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-neutral-800/30 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">Security Notice</h2>
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Official Support Channels</h3>
                <p className="text-neutral-300">
                  We only provide support through our official Discord server. Never share sensitive information through other channels.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Verify Staff Members</h3>
                <p className="text-neutral-300">
                  Always verify staff member roles in our Discord server. Never trust direct messages from unverified users.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Protect Your Information</h3>
                <p className="text-neutral-300">
                  Never share your password or sensitive information. Our staff will never ask for this information.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
