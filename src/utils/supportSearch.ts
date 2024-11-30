import { supportCategories } from '../data/supportCategories';
import { SupportArticle } from '../types/support';

export const findMatchingArticles = (query: string): SupportArticle[] => {
  const searchTerms = query.toLowerCase().split(' ');
  const results: SupportArticle[] = [];

  supportCategories.forEach(category => {
    category.articles.forEach(article => {
      const titleMatch = searchTerms.some(term => 
        article.title.toLowerCase().includes(term)
      );
      const contentMatch = searchTerms.some(term => 
        article.content?.toLowerCase().includes(term)
      );
      const keywordsMatch = article.keywords?.some(keyword =>
        searchTerms.some(term => keyword.toLowerCase().includes(term))
      );

      if (titleMatch || contentMatch || keywordsMatch) {
        results.push(article);
      }
    });
  });

  return results;
};
