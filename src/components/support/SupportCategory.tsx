import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { SupportCategory as CategoryType, SupportArticle } from '../../types/support';

interface SupportCategoryProps {
  category: CategoryType;
  isSelected: boolean;
  onSelect: () => void;
  onArticleSelect: (article: SupportArticle) => void;
  delay?: number;
}

export const SupportCategory: React.FC<SupportCategoryProps> = ({
  category,
  isSelected,
  onSelect,
  onArticleSelect,
  delay = 0
}) => {
  const { icon: Icon, title, description, articles } = category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 100 }}
    >
      <div
        onClick={onSelect}
        className={`w-full text-left p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
          isSelected
            ? 'border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5]'
            : 'border-neutral-800 bg-neutral-800/50 hover:bg-neutral-800'
        }`}
      >
        <Icon className="w-8 h-8 text-red-500 mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-neutral-300 mb-4">{description}</p>

        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="space-y-3 mt-4 pt-4 border-t border-red-500/30"
            >
              {articles.map((article) => (
                <motion.div
                  key={`${category.id}-${article.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onArticleSelect(article);
                  }}
                  className="block w-full text-left text-sm text-white hover:text-red-400 transition-colors py-2 cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {article.title}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
