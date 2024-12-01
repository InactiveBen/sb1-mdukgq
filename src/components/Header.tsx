import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

export const Header: React.FC = () => {
  const items = useCartStore((state) => state.items);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFAQClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#faq';
      return;
    }
    
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-neutral-900/75 backdrop-blur-md border-neutral-800/50' 
        : 'bg-transparent border-transparent'
    } border-b`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 font-bold text-white text-2xl tracking-tighter">
            Shop<span className="text-red-500">Blox</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          <Link to="/shop" className="text-sm font-semibold leading-6 text-white hover:text-neutral-300 transition-colors">
            Shop
          </Link>
          <a 
            href="/#faq" 
            onClick={handleFAQClick}
            className="text-sm font-semibold leading-6 text-white hover:text-neutral-300 transition-colors"
          >
            FAQ
          </a>
          <Link to="/support" className="text-sm font-semibold leading-6 text-white hover:text-neutral-300 transition-colors">
            Support
          </Link>
          <Link 
            to="/signup"
            className="rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm font-semibold text-white hover:brightness-90 transition-all"
          >
            Sign Up
          </Link>
          <button 
            type="button"
            className="text-white p-2 cursor-pointer rounded-lg hover:bg-neutral-800 ease-linear transition relative"
          >
            <ShoppingCart className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {items.length}
              </span>
            )}
          </button>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <button type="button" className="text-white p-2 cursor-pointer rounded-lg hover:bg-neutral-800 ease-linear transition relative">
            <ShoppingCart className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {items.length}
              </span>
            )}
          </button>
          <button type="button" className="text-white hover:text-neutral-300 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};
