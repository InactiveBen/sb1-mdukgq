import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

interface StatItemProps {
  name: string;
  value: string;
  delay: number;
  inView: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ name, value, delay, inView }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const count = useCountUp(inView ? numericValue : 0);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      const thousands = Math.floor(num / 1000);
      const remainder = num % 1000;
      return remainder ? `${thousands},${remainder.toString().padStart(3, '0')}` : `${thousands}`;
    }
    return num.toString();
  };

  return (
    <motion.div 
      className="flex flex-col bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <motion.dt 
        className="text-sm font-semibold leading-6 text-neutral-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.4 }}
      >
        {name}
      </motion.dt>
      <motion.dd 
        className="order-first text-3xl font-semibold tracking-tighter text-white tabular-nums"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.1, duration: 0.4 }}
      >
        {formatNumber(count)}{suffix}
      </motion.dd>
    </motion.div>
  );
};

const stats = [
  { name: 'Sales Completed', value: '5000+' },
  { name: 'Virtual Items Available', value: '100+' },
  { name: 'Customer Satisfaction', value: '99%' },
  { name: 'Toy codes sold', value: '10000+' }
];

export const Stats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            ref={ref}
            className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <StatItem
                key={stat.name}
                name={stat.name}
                value={stat.value}
                delay={index * 0.1}
                inView={isInView}
              />
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
};
