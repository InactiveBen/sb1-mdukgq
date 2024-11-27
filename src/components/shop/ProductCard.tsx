import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { TestTubes } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const rarityColors = {
  normal: 'border-neutral-500 bg-neutral-500/80',
  rare: 'border-yellow-500 bg-yellow-500/80',
  chaser: 'border-red-500 bg-red-500/80'
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [email, setEmail] = useState('');
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);

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

  const handleTestGame = () => {
    if (product.placeId) {
      window.open(`https://www.roblox.com/games/${product.placeId}/PlayTest`, '_blank');
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="group relative aspect-square h-full w-full overflow-hidden rounded-lg bg-[#252525] flex flex-col items-center">
        {(product.featured || product.isNew) && (
          <span className="absolute px-6 -left-7 top-6 font-bold bg-gradient-to-br from-yellow-600 to-yellow-400 text-white -rotate-45 select-none z-10">
            {product.isNew ? 'NEW' : 'FEATURED'}
          </span>
        )}
        <Link className="relative w-full h-full" to={`/shop/${product.id}`}>
          <img
            alt={product.name}
            draggable="false"
            loading="lazy"
            className="group-hover:brightness-75 group-hover:scale-105 ease-in-out duration-500 object-center object-cover select-none absolute h-full w-full inset-0"
            src={product.image}
          />
        </Link>
        <div className="absolute left-0 bottom-0 p-2 flex items-center justify-between w-full">
          <span className={`capitalize w-fit text-center ease-linear transition rounded-md border px-2 py-1 text-xs tracking-tighter font-semibold text-white ${rarityColors[product.rarity]}`}>
            {product.rarity}
          </span>
          <span className="capitalize w-fit text-center ease-linear transition rounded-md border border-red-500 bg-red-500/80 px-2 py-1 text-xs tracking-tighter font-semibold text-white">
            {product.category}
          </span>
        </div>
        <div className="absolute opacity-0 group-hover:opacity-100 bottom-2 translate-y-16 group-hover:translate-y-0 w-[95%] flex flex-col gap-2 transition-all duration-500">
          <button
            onClick={handleBuyNow}
            className="w-full h-fit text-center rounded-lg border border-red-600 bg-red-500/90 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90"
          >
            Buy Now
            <span className="sr-only">, {product.name}</span>
          </button>
          {product.placeId && (
            <button
              onClick={handleTestGame}
              className="w-full h-fit text-center rounded-lg border border-blue-600 bg-blue-500/90 shadow-[inset_0_0_12px_#3b82f6a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90 flex items-center justify-center gap-2"
            >
              <TestTubes className="w-4 h-4" />
              Test Game
            </button>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col">
          <h3 className="text-lg font-semibold text-white tracking-tighter text-ellipsis overflow-hidden whitespace-nowrap">
            {product.name}
          </h3>
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-medium text-neutral-300 tracking-tighter">
              ${product.price}
            </h4>
            <span className="text-sm font-medium text-neutral-400 tracking-tighter">
              Stock: {product.stock}
            </span>
          </div>
        </div>
      </div>

      {showEmailPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-neutral-900 rounded-lg p-6 max-w-md w-full border border-neutral-800">
            <h3 className="text-lg font-semibold text-white mb-4">Enter your email</h3>
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowEmailPrompt(false)}
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