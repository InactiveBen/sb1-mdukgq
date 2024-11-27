import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CustomDropdown } from './shared/CustomDropdown';

interface AgeVerificationDialogProps {
  onVerified: () => void;
}

export const AgeVerificationDialog: React.FC<AgeVerificationDialogProps> = ({ onVerified }) => {
  const navigate = useNavigate();
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
      document.cookie = "age_verified=true; max-age=2592000; path=/";
      onVerified();
    } else {
      document.cookie = "age_failed_check=true; max-age=2592000; path=/";
      navigate('/banned');
    }
  };

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1)
  }));

  const days = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1)
  }));

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => ({
    value: String(currentYear - i),
    label: String(currentYear - i)
  }));

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
            We don't store your date of birth on our servers. Instead, we use a cookie to remember that you've confirmed your age.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <CustomDropdown
              options={months}
              value={month}
              onChange={setMonth}
              placeholder="Month"
              label="Month"
            />
            <CustomDropdown
              options={days}
              value={day}
              onChange={setDay}
              placeholder="Day"
              label="Day"
            />
            <CustomDropdown
              options={years}
              value={year}
              onChange={setYear}
              placeholder="Year"
              label="Year"
            />
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
                className="h-4 w-4"
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
