import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AgeVerificationDialogProps {
  onVerified: () => void;
}

export const AgeVerificationDialog: React.FC<AgeVerificationDialogProps> = ({ onVerified }) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      setError('You must accept the Terms of Service and Privacy Policy to continue.');
      return;
    }
    
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
          You must be 13 years or older to shop at ShopBlox. Please enter your date of birth.
        </p>

        <div className="flex items-start gap-2 p-3 bg-blue-500/10 rounded-lg mb-6">
          <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-300">
            We don’t store your date of birth. Instead, we use a cookie to remember that you’ve confirmed your age.
          </p>
        </div>

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

          <div className="flex items-start gap-3">
            <div className="flex h-6 items-center">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => {
                  setTermsAccepted(e.target.checked);
                  if (e.target.checked) setError('');
                }}
                className="h-4 w-4 rounded border-neutral-800 bg-neutral-950 text-red-500 focus:ring-red-500 focus:ring-offset-neutral-900"
              />
            </div>
            <label htmlFor="terms" className="text-sm text-neutral-300">
              By continuing, I agree to ShopBlox's{' '}
              <Link to="/terms" target="_blank" className="text-red-500 hover:text-red-400">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" target="_blank" className="text-red-500 hover:text-red-400">
                Privacy Policy
              </Link>
            </label>
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
