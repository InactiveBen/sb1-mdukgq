import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export const Header: React.FC = () => {
  const items = useCartStore((state) => state.items);

  return (
    <header className="fixed bg-transparent border-transparent inset-x-0 top-0 z-50 ease-linear transition border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a className="-m-1.5 p-1.5 font-bold text-white text-2xl tracking-tighter" href="/">
            Shop<span className="text-red-500">Blox</span>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          <a className="text-sm font-semibold leading-6 text-white" href="/shop">Shop</a>
          <a className="text-sm font-semibold leading-6 text-white" href="/#faq">FAQ</a>
          <a className="text-sm font-semibold leading-6 text-white" href="/support">Support</a>
          <button type="button" className="text-white p-2 cursor-pointer rounded-lg hover:bg-neutral-800 ease-linear transition relative">
            <ShoppingCart className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {items.length}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};