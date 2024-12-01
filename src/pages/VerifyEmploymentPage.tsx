import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, AlertCircle } from 'lucide-react';
import { employees } from '../data/employees';
import { PageBackground } from '../components/shared/PageBackground';
import { SearchBar } from '../components/verify/SearchBar';
import { HelpSection } from '../components/verify/HelpSection';
import { EmployeeCard } from '../components/verify/EmployeeCard';
import { NoResultsWarning } from '../components/verify/NoResultsWarning';

export const VerifyEmploymentPage: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    employee?: typeof employees[number];
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const employee = employees.find(emp => emp.id === userId);
    setSearchResult({
      found: !!employee,
      employee
    });
  };

  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full min-h-screen flex flex-col py-24">
        <div className="w-full max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <BadgeCheck className="w-12 h-12 text-red-500 mx-auto" />
              <h1 className="text-3xl font-bold text-white">Verify Employment</h1>
              <p className="text-neutral-300 max-w-lg mx-auto">
                Enter a Discord user ID to verify their employment status at ShopBlox.
              </p>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-left">
                    Always verify ShopBlox employees here before conducting any business. Only authorized 
                    personnel shown on this page can make purchases on behalf of ShopBlox or represent 
                    the company.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <SearchBar 
                userId={userId}
                onUserIdChange={setUserId}
                onHelpToggle={() => setShowHelp(!showHelp)}
              />

              {showHelp && <HelpSection />}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90"
              >
                <BadgeCheck className="w-4 h-4" />
                Verify Status
              </button>
            </form>

            {searchResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {searchResult.found && searchResult.employee ? (
                  <EmployeeCard employee={searchResult.employee} />
                ) : (
                  <NoResultsWarning />
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
