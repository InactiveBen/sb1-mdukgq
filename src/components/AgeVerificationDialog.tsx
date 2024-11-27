import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface AgeVerificationDialogProps {
  onVerified: () => void;
}

export const AgeVerificationDialog: React.FC<AgeVerificationDialogProps> = ({ onVerified }) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 13) {
      // Set cookie that expires in 30 days
      document.cookie = "age_verified=true; max-age=2592000; path=/";
      onVerified();
    } else {
      setError('You must be at least 13 years old to use this site.');
    }
  };

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-neutral-900 rounded-xl p-6 border border-neutral-800"
      >
        <h2 className="text-xl font-bold text-white mb-4">Age Verification Required</h2>
        <p className="text-neutral-300 mb-6">
          You must be 13 years or older to use ShopBlox. Please enter your date of birth.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="month" className="block text-sm font-medium text-neutral-300 mb-1">
                Month
              </label>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
                className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white"
              >
                <option value="">Month</option>
                {months.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="day" className="block text-sm font-medium text-neutral-300 mb-1">
                Day
              </label>
              <select
                id="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                required
                className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white"
              >
                <option value="">Day</option>
                {days.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-neutral-300 mb-1">
                Year
              </label>
              <select
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
                className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white"
              >
                <option value="">Year</option>
                {years.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-md">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full h-fit text-center ease-in-out duration-500 transition rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90"
          >
            Verify Age
          </button>
        </form>
      </motion.div>
    </div>
  );
};
