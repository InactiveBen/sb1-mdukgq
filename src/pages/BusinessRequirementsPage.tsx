import React from 'react';
import { motion } from 'framer-motion';
import { Globe, AlertCircle, CheckCircle2, XCircle, ExternalLink } from 'lucide-react';
import { PageBackground } from '../components/shared/PageBackground';

export const BusinessRequirementsPage: React.FC = () => {
  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex flex-col py-24">
        <div className="w-full max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <Globe className="w-12 h-12 text-red-500 mx-auto" />
              <h1 className="mt-4 text-3xl font-bold text-white">Business Website Requirements</h1>
              <p className="mt-2 text-neutral-300">
                Essential information about website requirements for your Stripe account activation
              </p>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700">
              <h2 className="text-xl font-semibold text-white mb-4">Why does Stripe need my business website?</h2>
              <p className="text-neutral-300">
                Stripe reviews your website, social media profile, or mobile app to understand your business and verify what you're selling. 
                This is necessary to comply with financial regulations and "Know Your Customer" obligations.
              </p>
              <div className="mt-4 flex items-start gap-2 text-neutral-300 bg-neutral-900 p-4 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  You must maintain a functioning website with the appropriate information at all times. 
                  Stripe regularly checks for compliance and may require updates if issues are detected.
                </p>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700">
              <h2 className="text-xl font-semibold text-white mb-4">Required Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Required Immediately:</h3>
                  <ul className="space-y-2">
                    {['Business name', 'Descriptions of goods or services offered'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-neutral-300">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Required Before Selling:</h3>
                  <ul className="space-y-2">
                    {[
                      'Customer service contact details (phone, email, address, contact form, or online messaging)',
                      'Return policy and process (for physical goods)',
                      'Refund and dispute policy',
                      'Cancelation policy (if applicable)',
                      'Legal or export restrictions (if applicable)',
                      'Terms and conditions of promotions'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-neutral-300">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700">
              <h2 className="text-xl font-semibold text-white mb-4">Common Issues to Avoid</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Inaccessible Website',
                    description: 'Your webpage must load and be accessible without a password.'
                  },
                  {
                    title: 'Under Construction',
                    description: 'Your account cannot be activated until your website contains all necessary information about your business.'
                  },
                  {
                    title: 'Incomplete Social Media Profile',
                    description: 'Provide a full URL to your specific profile (e.g., facebook.com/profile/yourbusiness). Just the social media handle or domain is insufficient.'
                  },
                  {
                    title: 'Regional Blocking',
