import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { PageBackground } from '../components/shared/PageBackground';
import { EmojiRating } from '../components/feedback/EmojiRating';
import { FeedbackForm } from '../components/feedback/FeedbackForm';
import { ThankYouMessage } from '../components/feedback/ThankYouMessage';
import { validateFeedbackParams } from '../utils/feedbackValidation';

export const FeedbackPage: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    const { isValid, error } = validateFeedbackParams(searchParams);
    if (!isValid && error) {
      setValidationError(error);
    }
  }, [searchParams]);

  const handleRatingSelect = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (validationError) {
    return (
      <div className="relative isolate">
        <PageBackground />
        <div className="w-full h-full min-h-screen flex items-center justify-center py-24">
          <div className="w-full max-w-lg mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-900 rounded-xl border border-neutral-800 p-8"
            >
              <div className="text-center space-y-6">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
                <h2 className="text-xl font-semibold text-white">Invalid Feedback Link</h2>
                <p className="text-neutral-300">{validationError}</p>
                <button
                  onClick={() => navigate('/support')}
                  className="inline-flex items-center justify-center rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
                >
                  Contact Support
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex items-center justify-center py-24">
        <div className="w-full max-w-lg mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900 rounded-xl border border-neutral-800 p-8"
          >
            {!submitted ? (
              <>
                {rating === null ? (
                  <EmojiRating onSelect={handleRatingSelect} />
                ) : (
                  <FeedbackForm rating={rating} onSubmit={handleSubmit} />
                )}
              </>
            ) : (
              <ThankYouMessage rating={rating!} />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
