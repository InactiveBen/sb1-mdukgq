import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Search, Heart } from 'lucide-react';

const features = [
  {
    title: 'Quick buying process',
    description: 'Select and purchase a code and receive it in your email instantly. No waiting necessary.',
    icon: Zap
  },
  {
    title: 'Straightforward Pricing',
    description: 'What you see is what you pay. No need to worry about hidden fees or shipping costs.',
    icon: DollarSign
  },
  {
    title: 'Toy code requests',
    description: "Can't find the code you want? No problem! Simply request it and we will do our best to get it for you.",
    icon: Search
  },
  {
    title: 'Customer satisfaction',
    description: "Our goal is to provide the exclusive items you're looking for. Don't forget to leave us a review :)",
    icon: Heart
  }
];

export const Features: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Purchasing a code is safe, quick, and easy
            </h2>
            <p className="text-base leading-8 text-neutral-300">
              We make it easy to find and purchase the toy code you've been looking for.
            </p>
          </div>
          <motion.dl 
            className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5]">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-1 text-base leading-7 text-neutral-300">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
};