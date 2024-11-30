import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, AlertCircle, Mail } from 'lucide-react';
import { supportCategories } from '../data/supportCategories';
import { SupportCategory } from '../components/support/SupportCategory';
import { SearchResults } from '../components/support/SearchResults';
import { SupportModal } from '../components/support/SupportModal';
import { ContactSupportModal } from '../components/support/ContactSupportModal';
import { PageBackground } from '../components/shared/PageBackground';
import { findMatchingArticles } from '../utils/supportSearch';
import { SupportArticle } from '../types/support';

export const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<SupportArticle | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const searchResults = searchQuery ? findMatchingArticles(searchQuery) : [];
  const showSearchResults = searchQuery.length > 0;

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const handleArticleSelect = (article: SupportArticle) => {
    setSelectedArticle(article);
  };

  const handleContactSupport = () => {
    setShowContactModal(true);
  };

  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex flex-col py-24">
        <div className="w-full max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-white">How can we help?</h1>
              <p className="text-neutral-300 max-w-lg mx-auto">
                Search our help center or browse the categories below to find the answers you need.
              </p>
            </div>

            <div className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help..."
                  className="w-full h-12 pl-12 pr-4 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {showSearchResults && (
                <SearchResults 
                  results={searchResults} 
                  onClose={() => setSearchQuery('')}
                  onArticleSelect={handleArticleSelect}
                />
              )}
            </div>

            {!showSearchResults && (
              <div className="grid gap-6 md:grid-cols-2">
                {supportCategories.map((category, index) => (
                  <SupportCategory
                    key={category.id}
                    category={category}
                    isSelected={selectedCategory === category.id}
                    onSelect={() => handleCategorySelect(category.id)}
                    onArticleSelect={handleArticleSelect}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-red-500/10 border border-red-500 rounded-lg p-6 mt-8"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Need immediate assistance?</h3>
                  <p className="text-neutral-300 mb-4">
                    If you need urgent help or can't find what you're looking for, our support team is here to help. 
                    We take all support requests seriously and will respond within 24 hours.
                  </p>
                  <button
                    onClick={handleContactSupport}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Support
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <SupportModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onContactSupport={() => {
            setSelectedArticle(null);
            setShowContactModal(true);
          }}
        />

        <ContactSupportModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
          article={selectedArticle}
        />
      </div>
    </div>
  );
};
