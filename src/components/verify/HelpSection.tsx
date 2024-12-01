import React from 'react';
import { motion } from 'framer-motion';

export const HelpSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-neutral-800/30 rounded-lg p-4"
    >
      <h4 className="font-medium text-white mb-2">How to Find a Discord User ID</h4>
      <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
        <li>Enable Developer Mode in Discord (User Settings → App Settings → Advanced)</li>
        <li>Right-click on the user's name or profile</li>
        <li>Click "Copy User ID" at the bottom of the menu</li>
        <li>Paste the ID in the search box above</li>
      </ol>
    </motion.div>
  );
};
