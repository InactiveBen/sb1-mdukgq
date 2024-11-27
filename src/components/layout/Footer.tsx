import React from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';
import { SocialLinks } from '../shared/SocialLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center overflow-hidden px-6 py-20 sm:py-24 lg:px-8 border-t border-neutral-800">
      <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12 max-w-7xl" aria-label="Footer">
        <div className="pb-6">
          <Link to="/" className="text-sm leading-6 text-white hover:text-neutral-300 ease-linear transition">
            Home
          </Link>
        </div>
        <div className="pb-6">
          <Link to="/shop" className="text-sm leading-6 text-white hover:text-neutral-300 ease-linear transition">
            Shop
          </Link>
        </div>
        <div className="pb-6">
          <Link to="/#faq" className="text-sm leading-6 text-white hover:text-neutral-300 ease-linear transition">
            FAQ
          </Link>
        </div>
        <div className="pb-6">
          <a href="https://discord.gg/tdvCm2rXTN" target="_blank" className="text-sm leading-6 text-white hover:text-neutral-300 ease-linear transition">
            Support
          </a>
        </div>
        <div className="pb-6">
          <Link to="/redeem" className="text-sm leading-6 text-white hover:text-neutral-300 ease-linear transition flex items-center gap-2">
            Redeem
          </Link>
        </div>
        <div className="pb-6">
          <Link to="/terms" className="text-sm leading-6 text-white hover:text-neutral-300 ease-linear transition">
            Terms
          </Link>
        </div>
        <div className="pb-6">
          <Link to="/privacy" className="text-sm leading-6 text-white hover:text-neutral-300 ease-linear transition">
            Privacy
          </Link>
        </div>
      </nav>
      <SocialLinks />
      <p className="mt-10 text-center text-xs leading-5 text-neutral-300">
        © {new Date().getFullYear()} ShopBlox. All rights reserved.<br />
        ShopBlox is not affiliated, associated, or partnered with Roblox Corporation in any way.
      </p>
    </footer>
  );
};