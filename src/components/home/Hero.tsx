import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroImage } from './HeroImage';

export const Hero: React.FC = () => {
  return (
    <div className="relative isolate">
      <HeroBackground />
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Purchase the toy code you've been looking for
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-neutral-300 sm:max-w-md lg:max-w-none">
              Your one-stop shop for all your Roblox toy code needs. From the Deadly Dark Dominus to the elusive Redvalk and so much more, only on ShopBlox.
            </p>
            <div className="mt-10 flex gap-y-4 flex-col-reverse sm:flex-row items-center">
              <Link
                to="/shop"
                className="ease-linear transition rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm font-semibold text-white hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <motion.div 
            className="mt-14 flex justify-end sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hidden sm:block ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <HeroImage 
                src="/images/5.png" 
                alt="Navy Queen of the Night" 
                rotation={15}
                animationDelay={0}
              />
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <HeroImage 
                src="/images/2.png" 
                alt="Red Headstack" 
                rotation={-20}
                animationDelay={0.2}
              />
              <HeroImage 
                src="/images/3.png" 
                alt="Golden Horns of Pwnage" 
                rotation={-12}
                animationDelay={0.4}
              />
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <HeroImage 
                src="/images/4.png" 
                alt="Rainbow Barf Face" 
                rotation={22}
                animationDelay={0.6}
              />
              <HeroImage 
                src="/images/1.png" 
                alt="Redvalk" 
                rotation={18}
                animationDelay={0.8}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};