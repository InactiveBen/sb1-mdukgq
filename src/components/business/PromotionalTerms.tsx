import React from 'react';
import { Tag } from 'lucide-react';

export const PromotionalTerms: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Promotional Terms</h2>
      
      <div className="bg-neutral-800/30 rounded-lg p-6">
        <div className="flex items-start gap-3 mb-4">
          <Tag className="w-5 h-5 text-red-500 mt-1" />
          <h3 className="font-semibold text-white">Discount & Promotion Rules</h3>
        </div>
        <ul className="space-y-2 text-neutral-300 list-disc list-inside">
          <li>One promotional code per order</li>
          <li>Cannot be combined with other offers</li>
          <li>Valid only during specified promotional periods</li>
          <li>We reserve the right to modify or cancel promotions at any time</li>
        </ul>
      </div>
    </section>
  );
};
