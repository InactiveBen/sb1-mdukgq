import React from 'react';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

const rarityColors = {
  normal: 'border-neutral-500 bg-neutral-500/80',
  rare: 'border-yellow-500 bg-yellow-500/80',
  chaser: 'border-red-500 bg-red-500/80'
};

const categoryColors = {
  hat: 'border-red-500 bg-red-500/80',
  face: 'border-red-500 bg-red-500/80',
  'neck acc.': 'border-red-500 bg-red-500/80',
  'particle item': 'border-blue-500 bg-blue-500/80',
  random: 'border-red-500 bg-red-500/80',
  gear: 'border-red-500 bg-red-500/80',
  default: 'border-red-500 bg-red-500/80'
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="flex flex-col gap-2">
      <div className="group relative aspect-square h-full w-full overflow-hidden rounded-lg bg-[#252525] flex flex-col items-center">
        {(product.featured || product.isNew) && (
          <span className="absolute px-6 -left-7 top-6 font-bold bg-gradient-to-br from-yellow-600 to-yellow-400 text-white -rotate-45 select-none z-10">
            {product.isNew ? 'NEW' : 'FEATURED'}
          </span>
        )}
        <a className="relative w-full h-full" href={`/shop/${product.id}`}>
          <img
            alt={product.name}
            draggable="false"
            loading="lazy"
            className="group-hover:brightness-75 group-hover:scale-105 ease-in-out duration-500 object-center object-cover select-none absolute h-full w-full inset-0"
            src={product.image}
          />
        </a>
        <div className="absolute left-0 bottom-0 p-2 flex items-center justify-between w-full">
          <span className={`capitalize w-fit text-center ease-linear transition rounded-md border px-2 py-1 text-xs tracking-tighter font-semibold text-white ${rarityColors[product.rarity]}`}>
            {product.rarity}
          </span>
          <span className={`capitalize w-fit text-center ease-linear transition rounded-md border px-2 py-1 text-xs tracking-tighter font-semibold text-white ${categoryColors[product.category] || categoryColors.default}`}>
            {product.category}
          </span>
        </div>
        <button
          onClick={() => addItem(product)}
          className="absolute group-hover:translate-y-0 bottom-2 translate-y-16 w-[95%] h-fit text-center ease-in-out duration-500 transition rounded-lg border border-red-600 bg-red-500/90 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90"
        >
          Add to Cart
        </button>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col">
          <h3 className="text-lg font-semibold text-white tracking-tighter text-ellipsis overflow-hidden whitespace-nowrap">
            {product.name}
          </h3>
          <h4 className="text-sm font-medium text-neutral-300 tracking-tighter">
            ${product.price}
          </h4>
        </div>
      </div>
    </div>
  );
};