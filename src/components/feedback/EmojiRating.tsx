import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface EmojiRatingProps {
  onSelect: (rating: number) => void;
}

export const EmojiRating: React.FC<EmojiRatingProps> = ({ onSelect }) => {
  const emojis = [
    { rating: 1, emoji: '😢', label: 'Very Unsatisfied' },
    { rating: 2, emoji: '😕', label: 'Unsatisfied' },
    { rating: 3, emoji: '😐', label: 'Neutral' },
    { rating: 4, emoji: '😊', label: 'Satisfied' },
    { rating: 5, emoji: '😍', label: 'Very Satisfied' }
  ];

  const handleSelect = (rating: number) => {
    if (rating >= 4) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    onSelect(rating);
  };

  return (
    <div className="text-center space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">How was your experience?</h1>
        <p className="text-neutral-300">Your feedback helps us improve our service</p>
      </div>

      <div className="flex justify-center gap-4">
        {emojis.map(({ rating, emoji, label }) => (
          <motion.button
            key={rating}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect(rating)}
            className="flex flex-col items-center gap-2 group"
          >
            <span className="text-4xl transition-transform group-hover:scale-110">
              {emoji}
            </span>
            <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
              {label}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
