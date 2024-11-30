import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { submitFeedback } from '../../utils/api';

interface FeedbackFormProps {
  rating: number;
  onSubmit: () => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ rating, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  const positiveOptions = [
    'Fast Support Response',
    'Helpful Staff',
    'Easy to Use',
    'Quick Delivery',
    'Good Value',
    'Clear Communication'
  ];

  const improvementOptions = [
    'Response Time',
    'Product Selection',
    'Website Navigation',
    'Payment Options',
    'Communication',
    'Prices'
  ];

  const isPositive = rating >= 4;
  const options = isPositive ? positiveOptions : improvementOptions;

  const handleOptionToggle = (option: string) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Convert search params to object
      const params: Record<string, string> = {};
      searchParams.forEach((value, key) => {
        params[key] = value;
      });

      await submitFeedback({
        rating,
        selectedOptions,
        comment,
        params
      });
      onSubmit();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-2">
          {isPositive ? "What did we do well?" : "What can we improve?"}
        </h2>
        <p className="text-neutral-300">Select all that apply</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleOptionToggle(option)}
            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
              selectedOptions.includes(option)
                ? 'border-red-500 bg-red-500/40 text-white'
                : 'border-neutral-800 hover:border-neutral-700 text-neutral-300'
            }`}
          >
            <span className="text-sm">{option}</span>
            {selectedOptions.includes(option) && (
              <Check className="w-4 h-4 text-red-500" />
            )}
          </button>
        ))}
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-neutral-300 mb-2">
          Additional comments (optional)
        </label>
        <textarea
          id="comment"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Tell us more about your experience..."
        />
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Feedback'
        )}
      </button>
    </motion.form>
  );
};
