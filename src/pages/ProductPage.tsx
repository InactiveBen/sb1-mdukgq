import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageBackground } from '../components/shared/PageBackground';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { ProductActions } from '../components/product/ProductActions';
import { EmailPromptModal } from '../components/product/EmailPromptModal';
import { InvalidProductPage } from '../components/product/InvalidProductPage';
import { SuggestedProducts } from '../components/product/SuggestedProducts';
import { products } from '../data/products';
import { useScrollToTop } from '../hooks/useScrollToTop';

export const ProductPage: React.FC = () => {
  useScrollToTop();
  
  const { productId } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <InvalidProductPage />;
  }

  const handleBuyNow = () => {
    setShowEmailPrompt(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && product.stripeLink) {
      const url = new URL(product.stripeLink);
      url.searchParams.set('prefilled_email', email);
      window.open(url.toString(), '_blank');
      setShowEmailPrompt(false);
      setEmail('');
    }
  };

  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex flex-col">
        <div className="flex-1 grid lg:grid-cols-2">
          {/* Left Section - Gallery */}
          <div className="flex items-center justify-center p-8 lg:border-r border-neutral-800">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl"
            >
              <ProductGallery product={product} />
            </motion.div>
          </div>

          {/* Right Section - Info & Actions */}
          <div className="flex items-center justify-center p-8 bg-neutral-900/50">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-xl space-y-8"
            >
              <ProductInfo product={product} />
              <ProductActions 
                product={product} 
                onBuyNow={handleBuyNow}
              />

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
            </motion.div>
          </div>
        </div>

        {/* Suggested Products */}
        <SuggestedProducts currentProduct={product} allProducts={products} />
      </div>

      <EmailPromptModal
        isOpen={showEmailPrompt}
        email={email}
        setEmail={setEmail}
        onSubmit={handleEmailSubmit}
        onClose={() => setShowEmailPrompt(false)}
      />
    </div>
  );
};
