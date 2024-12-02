import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface SearchFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  maxPrice: string;
  setMaxPrice: (value: string) => void;
  selectedRarity: string;
  setSelectedRarity: (value: string) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  search,
  setSearch,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  selectedRarity,
  setSelectedRarity
}) => {
  return (
    <div className="max-w-3xl mx-auto space-y-6 bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
        <input
          className="w-full h-12 pl-12 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Search for items..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filters Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Min Price */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-300">Min Price</label>
          <input
            className="w-full h-12 rounded-lg border border-neutral-800 bg-neutral-900 px-4 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="$ Min"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>

        {/* Max Price */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-300">Max Price</label>
          <input
            className="w-full h-12 rounded-lg border border-neutral-800 bg-neutral-900 px-4 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="$ Max"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        
        {/* Rarity Filter */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-300">Rarity</label>
          <div className="relative">
            <select
              className="w-full h-12 rounded-lg border border-neutral-800 bg-neutral-900 pl-4 pr-10 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
            >
              <option value="all">All Rarities</option>
              <option value="normal">Normal</option>
              <option value="rare">Rare</option>
              <option value="chaser">Chaser</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};
