import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { name: 'Sales Completed', value: '5K+' },
  { name: 'Virtual Items Available', value: '100+' },
  { name: 'Customer Satisfaction', value: '99%' },
  { name: 'Toy codes sold', value: '10K+' }
];

export const Stats: React.FC = () => {
  return (
    <div className="bg-neutral-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by thousands of buyers
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              No need to look anywhere else for Roblox toy codes.
            </p>
          </div>
          <motion.dl 
            className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] p-8">
                <motion.dt 
                  className="text-sm font-semibold leading-6 text-neutral-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {stat.name}
                </motion.dt>
                <motion.dd 
                  className="order-first text-3xl font-semibold tracking-tighter text-white tabular-nums"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {stat.value}
                </motion.dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
};