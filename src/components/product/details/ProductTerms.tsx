import React from 'react';

export const ProductTerms: React.FC = () => {
  return (
    <div className="text-center text-sm text-neutral-400">
      <p>
        By using ShopBlox and making a purchase, you agree to our{' '}
        <a href="/terms" className="text-red-500 hover:text-red-400">
          Terms of Service
        </a>
        .
      </p>
      <p className="mt-1">
        There are <strong>no returns/refunds</strong> due to the nature of the product.
      </p>
    </div>
  );
};
