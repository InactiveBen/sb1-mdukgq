import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ProductCard } from '../components/shop/ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { PageBackground } from '../components/shared/PageBackground';

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
      <div className="w-full h-full min-h-screen flex flex-col py-24 items-center">
        <div className="w-full max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl tracking-tight font-bold text-white">Shop Roblox Toy Codes</h2>
          
          <div className="w-full flex flex-col lg:flex-row gap-1 pt-4">
            <input
              className="flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm ring-offset-neutral-950 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2 text-white"
              placeholder="Search the name of a product you're looking for..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            
            <div className="w-full grid grid-cols-2 md:flex items-center gap-1">
              <div className="flex gap-1 items-center">
                <input
                  className="flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm ring-offset-neutral-950 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2 text-white"
                  placeholder="Min"
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                  className="flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm ring-offset-neutral-950 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2 text-white"
                  placeholder="Max"
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              
              <select
                className="flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm ring-offset-neutral-950 file:border-0 file:bg-transparent file:text-sm file:font-medium text-white"
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value)}
              >
                <option value="all">All Rarities</option>
                <option value="normal">Normal</option>
                <option value="rare">Rare</option>
                <option value="chaser">Chaser</option>
              </select>
            </div>
          </div>

          {products.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <Search className="w-16 h-16 text-neutral-700 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Products Available</h3>
              <p className="text-neutral-400 max-w-md">
                There are currently no products on sale. Please check back later or join our Discord for updates on new releases.
              </p>
            </motion.div>
          ) : filteredProducts.length === 0 ? (
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
          ) : (
            <div className="py-8 w-full grid grid-cols-2 gap-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-8 justify-between">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
