import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductLayout } from '../components/product/layout/ProductLayout';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductHeader } from '../components/product/details/ProductHeader';
import { ProductDescription } from '../components/product/details/ProductDescription';
import { ProductDetails } from '../components/product/details/ProductDetails';
import { ProductActions } from '../components/product/ProductActions';
import { ProductTerms } from '../components/product/details/ProductTerms';
import { EmailPromptModal } from '../components/product/EmailPromptModal';
import { InvalidProductPage } from '../components/product/InvalidProductPage';
import { products } from '../data/products';
import { useScrollToTop } from '../hooks/useScrollToTop';

export const ProductPage: React.FC = () => {
  useScrollToTop();
  
  const { productId } = useParams();
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

  const leftSection = <ProductGallery product={product} />;
  
  const rightSection = (
    <>
      <ProductHeader product={product} />
      <ProductDescription product={product} />
      <ProductDetails product={product} />
      <ProductActions product={product} onBuyNow={handleBuyNow} />
      <ProductTerms />
    </>
  );

  return (
    <>
      <ProductLayout
        leftSection={leftSection}
        rightSection={rightSection}
      />

      <EmailPromptModal
        isOpen={showEmailPrompt}
        email={email}
        setEmail={setEmail}
        onSubmit={handleEmailSubmit}
        onClose={() => setShowEmailPrompt(false)}
      />
    </>
  );
};
