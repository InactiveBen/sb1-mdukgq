import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductLayout } from '../components/product/layout/ProductLayout';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductHeader } from '../components/product/details/ProductHeader';
import { ProductDescription } from '../components/product/details/ProductDescription';
import { ProductDetails } from '../components/product/details/ProductDetails';
import { ProductActions } from '../components/product/ProductActions';
import { ProductTerms } from '../components/product/details/ProductTerms';
import { InvalidProductPage } from '../components/product/InvalidProductPage';
import { products } from '../data/products';
import { useScrollToTop } from '../hooks/useScrollToTop';

export const ProductPage: React.FC = () => {
  useScrollToTop();
  
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <InvalidProductPage />;
  }

  const handleBuyNow = (method: 'stripe' | 'robux') => {
    if (method === 'stripe' && product.stripeLink) {
      window.open(product.stripeLink, '_blank');
    } else if (method === 'robux' && product.robuxLink) {
      window.open(product.robuxLink, '_blank');
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
    <ProductLayout
      leftSection={leftSection}
      rightSection={rightSection}
    />
  );
};
