import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-neutral-800/50 p-6 rounded-lg space-y-4"
    >
      <div className="flex items-start gap-3">
        <Icon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-neutral-300 mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
