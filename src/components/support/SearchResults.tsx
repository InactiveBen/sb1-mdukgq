import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { SupportArticle } from '../../types/support';

interface SearchResultsProps {
  results: SupportArticle[];
  onClose: () => void;
  onArticleSelect: (article: SupportArticle) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ 
  results, 
  onClose,
  onArticleSelect 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="absolute z-10 w-full mt-2 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl overflow-hidden"
    >
      <div className="flex items-center justify-between p-4 border-b border-neutral-800">
        <span className="text-sm text-neutral-300">
          {results.length} {results.length === 1 ? 'result' : 'results'} found
        </span>
        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {results.length > 0 ? (
          <div className="divide-y divide-neutral-800">
            {results.map((article) => (
              <motion.div
                key={`search-${article.id}`}
                onClick={() => {
                  onArticleSelect(article);
                  onClose();
                }}
                className="w-full text-left p-4 hover:bg-neutral-800/50 transition-colors cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-white font-medium mb-1">{article.title}</h3>
                <p className="text-sm text-neutral-400">{article.excerpt}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center">
            <p className="text-neutral-400">No results found. Try a different search term.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
