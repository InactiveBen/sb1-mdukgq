import React from 'react';
import { motion } from 'framer-motion';
import { Package, Search } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  filteredProducts: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, filteredProducts }) => {
  if (products.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-24 text-center"
      >
        <Package className="w-16 h-16 text-neutral-700 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">No Products Available</h3>
        <p className="text-neutral-400 max-w-md">
          There are currently no products on sale. Please check back later or join our Discord for updates on new releases.
        </p>
      </motion.div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-24 text-center"
      >
        <Search className="w-16 h-16 text-neutral-700 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">No Results Found</h3>
        <p className="text-neutral-400 max-w-md">
          We couldn't find any products matching your search criteria. Try adjusting your filters or search terms.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {filteredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};
