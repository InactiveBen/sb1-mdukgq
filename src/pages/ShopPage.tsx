import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, AlertCircle } from 'lucide-react';
import { products } from '../data/products';
import { PageBackground } from '../components/shared/PageBackground';

export const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const [email, setEmail] = useState('');
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showError, setShowError] = useState(false);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="relative isolate">
        <PageBackground />
        <div className="w-full h-full min-h-screen flex items-center justify-center py-24">
          <motion.div 
            className="max-w-md w-full text-center space-y-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
            <h1 className="text-3xl font-bold text-white">Product Not Found</h1>
            
            <p className="text-neutral-300">
              This product may have been sold or the link you followed might be broken.
              Please check our shop for available products.
            </p>

            <div className="pt-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
              >
                <ShoppingBag className="w-5 h-5" />
                Browse Shop
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    setShowEmailPrompt(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      setShowError(true);
      return;
    }
    
    if (email && product.stripeLink) {
      const url = new URL(product.stripeLink);
      url.searchParams.set('prefilled_email', email);
      window.open(url.toString(), '_blank');
      setShowEmailPrompt(false);
      setEmail('');
      setTermsAccepted(false);
      setShowError(false);
    }
  };

  const rarityColors = {
    normal: 'border-neutral-500 bg-neutral-500/80',
    rare: 'border-yellow-500 bg-yellow-500/80',
    chaser: 'border-red-500 bg-red-500/80'
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col py-24 items-center">
      <div className="w-full mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-5xl lg:flex flex-row lg:gap-x-8 lg:px-8">
        <div className="w-full max-w-sm flex justify-end lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="relative aspect-square h-full w-full overflow-hidden rounded-lg bg-[#252525]">
            <img
              alt={product.name}
              draggable="false"
              loading="lazy"
              className="object-center object-cover select-none"
              src={product.image}
            />
            {product.tryOnLink && (
              <a
                title="Try On Now"
                target="_blank"
                className="absolute bottom-4 right-4 p-2 z-[1] border-2 border-red-500 rounded-2xl peer"
                href={product.tryOnLink}
              >
                <ExternalLink className="h-6 w-6 text-red-500 hover:scale-125 ease-in-out duration-500 cursor-pointer" />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="mt-4">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{product.name}</h1>
          </div>

          <section aria-labelledby="information-heading" className="py-2">
            <h2 id="information-heading" className="sr-only">Product information</h2>

            <div className="flex flex-col gap-2 w-full">
              <div className="flex gap-2 items-center">
                <span className={`capitalize w-fit text-center ease-linear transition rounded-md border px-2 py-1 text-xs tracking-tighter font-semibold text-white ${rarityColors[product.rarity]}`}>
                  {product.rarity}
                </span>
                <span className="capitalize w-fit text-center ease-linear transition rounded-md border border-red-500 bg-red-500/80 px-2 py-1 text-xs tracking-tighter font-semibold text-white">
                  {product.category}
                </span>
              </div>
            </div>

            <div className="hidden sm:flex w-full pt-4 items-start gap-x-8 pb-12">
              <div className="flex flex-col gap-4">
                <span className="w-fit text-sm text-neutral-300 sm:text-base font-medium">Price</span>
                <span className="w-fit text-sm text-neutral-300 sm:text-base font-medium">Stock</span>
                <span className="w-fit text-sm text-neutral-300 sm:text-base font-medium">Description</span>
              </div>
              <div className="flex flex-col gap-4">
                <p className="w-fit text-base text-white font-bold">${product.price}</p>
                <p className="w-fit text-base text-white">{product.stock} available</p>
                <p className="w-fit text-base text-neutral-300">
                  {product.description || `Get this exclusive ${product.category} item for your Roblox avatar!`}
                </p>
              </div>
            </div>

            <div className="sm:hidden w-full pt-4 flex flex-col items-start gap-x-8 pb-12">
              <p className="w-fit text-base text-white font-bold">${product.price}</p>
              <p className="w-full text-base text-neutral-300">
                {product.description || `Get this exclusive ${product.category} item for your Roblox avatar!`}
              </p>
            </div>
          </section>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleBuyNow}
              className="w-full h-fit text-center ease-in-out duration-500 transition rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Buy Now
            </button>

            <span className="text-xs text-center text-neutral-300">
              By using ShopBlox and making a purchase, you agree to our{' '}
              <a className="font-semibold text-red-500" href="/terms">Terms of Service</a>.
              <br />
              There are <strong>no returns/refunds</strong> due to the nature of the product.
            </span>
          </div>
        </div>
      </div>

      {showEmailPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-neutral-900 rounded-lg p-6 max-w-md w-full border border-neutral-800">
            <h3 className="text-lg font-semibold text-white mb-4">Enter your email</h3>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />

              <div className="flex items-center gap-3">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => {
                        setTermsAccepted(e.target.checked);
                        if (e.target.checked) setShowError(false);
                      }}
                      className="h-5 w-5"
                    />
                  </div>
                </div>
                <label htmlFor="terms" className="text-sm text-neutral-300">
                  I agree to the <Link to="/terms" className="text-red-500 hover:text-red-400" target="_blank">Terms of Service</Link>. 
                  I understand that all sales are final and no refunds will be provided.
                </label>
              </div>

              {showError && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-md">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Please accept the terms to continue</p>
                </div>
              )}

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowEmailPrompt(false);
                    setEmail('');
                    setTermsAccepted(false);
                    setShowError(false);
                  }}
                  className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full h-fit text-center ease-in-out duration-500 transition rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Continue to Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
