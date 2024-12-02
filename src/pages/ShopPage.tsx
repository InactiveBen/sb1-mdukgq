import React, { useState } from 'react';
import { Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageBackground } from '../components/shared/PageBackground';
import { SearchFilters } from '../components/shop/SearchFilters';
import { ProductGrid } from '../components/shop/ProductGrid';
import { products } from '../data/products';

export const ShopPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesMinPrice = !minPrice || product.price >= parseInt(minPrice);
    const matchesMaxPrice = !maxPrice || product.price <= parseInt(maxPrice);
    const matchesRarity = selectedRarity === 'all' || product.rarity === selectedRarity;
    return matchesSearch && matchesMinPrice && matchesMaxPrice && matchesRarity;
  });

  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex flex-col py-24">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <Package className="w-12 h-12 text-red-500 mx-auto" />
              <h1 className="text-3xl font-bold text-white">Shop Roblox Toy Codes</h1>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Browse our collection of exclusive Roblox toy codes. From rare items to limited editions, 
                find the perfect addition to your avatar.
              </p>
            </div>

            <SearchFilters
              search={search}
              setSearch={setSearch}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              selectedRarity={selectedRarity}
              setSelectedRarity={setSelectedRarity}
            />

            <ProductGrid 
              products={products}
              filteredProducts={filteredProducts}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
