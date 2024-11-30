import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SupportOptionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  delay?: number;
  isSelected?: boolean;
}

export const SupportOption: React.FC<SupportOptionProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
  delay = 0,
  isSelected = false
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onClick={onClick}
      className={`w-full text-left p-6 rounded-lg border transition-all ${
        isSelected
          ? 'border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5]'
          : 'border-neutral-800 bg-neutral-800/50 hover:bg-neutral-800'
      }`}
    >
      <Icon className="w-8 h-8 text-red-500 mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-300">{description}</p>
    </motion.button>
  );
};
