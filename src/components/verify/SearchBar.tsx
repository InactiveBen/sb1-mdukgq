import React from 'react';
import { Search, HelpCircle } from 'lucide-react';

interface SearchBarProps {
  userId: string;
  onUserIdChange: (value: string) => void;
  onHelpToggle: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  userId,
  onUserIdChange,
  onHelpToggle
}) => {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
      <input
        type="text"
        value={userId}
        onChange={(e) => onUserIdChange(e.target.value)}
        placeholder="Enter Discord User ID"
        className="w-full h-12 pl-12 pr-12 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="button"
        onClick={onHelpToggle}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors"
      >
        <HelpCircle className="w-5 h-5" />
      </button>
    </div>
  );
};
