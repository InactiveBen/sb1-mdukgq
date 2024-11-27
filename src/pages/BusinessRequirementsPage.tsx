import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Clock, AlertCircle } from 'lucide-react';
import { PageBackground } from '../components/shared/PageBackground';
import { ContactInfo } from '../components/business/ContactInfo';
import { PolicySection } from '../components/business/PolicySection';
import { LegalInfo } from '../components/business/LegalInfo';
import { PromotionalTerms } from '../components/business/PromotionalTerms';

export const BusinessPage: React.FC = () => {
  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex flex-col py-24">
        <div className="w-full max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* About Section */}
            <section>
              <h1 className="text-3xl font-bold text-white mb-4">About ShopBlox</h1>
              <p className="text-neutral-300">
                ShopBlox is a trusted marketplace for Roblox toy codes. We provide a secure platform 
                for users to purchase authentic Roblox toy codes, which can be redeemed for exclusive 
                virtual items on the Roblox platform.
              </p>
            </section>

            {/* Contact Information */}
            <ContactInfo />

            {/* Policies */}
            <PolicySection />

            {/* Legal Information */}
            <LegalInfo />

            {/* Promotional Terms */}
            <PromotionalTerms />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
