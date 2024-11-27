import React from 'react';
import { Scale } from 'lucide-react';

export const LegalInfo: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Legal Information</h2>
      
      <div className="bg-neutral-800/30 rounded-lg p-6">
        <div className="flex items-start gap-3 mb-4">
          <Scale className="w-5 h-5 text-red-500 mt-1" />
          <h3 className="font-semibold text-white">Legal Disclaimer</h3>
        </div>
        <div className="space-y-4 text-neutral-300">
          <p>
            ShopBlox is not affiliated, associated, authorized, endorsed by, or in any way officially 
            connected with Roblox Corporation, or any of its subsidiaries or its affiliates.
          </p>
          <p>
            All product names, logos, and brands are property of their respective owners. All company, 
            product, and service names used in this website are for identification purposes only.
          </p>
        </div>
      </div>
    </section>
  );
};
