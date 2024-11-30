import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface SupportResponseProps {
  response: {
    title: string;
    content: string[];
  };
  onClose: () => void;
}

export const SupportResponse: React.FC<SupportResponseProps> = ({ response, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <h3 className="text-xl font-semibold text-white mb-4">{response.title}</h3>
      
      <div className="space-y-3">
        {response.content.map((text, index) => (
          <p key={index} className="text-neutral-300">
            {text.includes('@') ? (
              <>
                {text.split('@')[0]}
                <a
                  href={`mailto:${text.split('@')[1]}`}
                  className="text-red-500 hover:text-red-400"
                >
                  @{text.split('@')[1]}
                </a>
              </>
            ) : (
              text
            )}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
