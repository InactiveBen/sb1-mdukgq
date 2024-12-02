import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Copy, Check, AlertCircle } from 'lucide-react';

interface BioVerificationProps {
  onVerify: (verified: boolean) => void;
  profileLink: string;
}

export const BioVerification: React.FC<BioVerificationProps> = ({ onVerify, profileLink }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [checking, setChecking] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const maxAttempts = 12;

  useEffect(() => {
    const words = ['apple', 'banana', 'cherry', 'dragon', 'eagle', 'flower', 'guitar', 'hammer', 'island', 'jungle', 'koala', 'lemon', 'monkey', 'needle', 'orange', 'panda', 'queen', 'rabbit', 'snake', 'tiger'];
    const selectedWords = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      selectedWords.push(words[randomIndex]);
    }
    setVerificationCode(`!shop! ${selectedWords.join(' ')} !shop!`);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(verificationCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      setError('Failed to copy code to clipboard');
    }
  };

  const getUserId = (link: string) => {
    try {
      const match = link.match(/\/users\/(\d+)/);
      if (!match) {
        console.error('Invalid profile link format:', link);
        return null;
      }
      return match[1];
    } catch (err) {
      console.error('Error parsing user ID:', err);
      return null;
    }
  };

  const checkBio = async () => {
    setError(null);
    setDebugInfo(null);

    const userId = getUserId(profileLink);
    if (!userId) {
      setError('Invalid profile link format. Expected: https://www.roblox.com/users/USERID/profile');
      setChecking(false);
      return false;
    }

    try {
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://users.roblox.com/v1/users/${userId}`)}`;
      console.log('Fetching via proxy:', proxyUrl);
      
      const response = await fetch(proxyUrl);
      const data = await response.json();
      
      if (!data.contents) {
        throw new Error('No content received from proxy');
      }

      let userData;
      try {
        userData = JSON.parse(data.contents);
      } catch (parseError) {
        console.error('Failed to parse user data:', data.contents);
        throw new Error('Invalid user data response');
      }

      setDebugInfo({
        userId,
        proxyResponse: data,
        parsedUserData: userData,
        verificationCode,
        currentBio: userData.description,
        timestamp: new Date().toISOString()
      });

      console.log('Bio check:', {
        currentBio: userData.description,
        expectedCode: verificationCode,
        matches: userData.description?.includes(verificationCode),
        timestamp: new Date().toISOString()
      });

      if (userData.description?.includes(verificationCode)) {
        onVerify(true);
        return true;
      }

      return false;

    } catch (err) {
      console.error('Bio verification error:', {
        error: err,
        debugInfo: {
          userId,
          verificationCode,
          timestamp: new Date().toISOString(),
          errorDetails: err instanceof Error ? err.message : 'Unknown error'
        }
      });

      let errorMessage = 'Failed to verify profile. ';
      if (err instanceof Error) {
        errorMessage += err.message;
      }

      setError(errorMessage);
      return false;
    }
  };

  useEffect(() => {
    if (!checking) return;

    const runCheck = async () => {
      const isVerified = await checkBio();
      
      if (isVerified) {
        console.log('Verification successful!');
        setChecking(false);
        return;
      }

      setAttempts(prev => {
        if (prev >= maxAttempts - 1) {
          setError('Verification timed out. Please make sure you added the code to your profile description and try again.');
          setChecking(false);
          return prev;
        }
        return prev + 1;
      });
    };

    const timer = setTimeout(runCheck, 5000);
    return () => clearTimeout(timer);
  }, [checking, attempts, verificationCode, profileLink]);

  return (
    <div className="space-y-6">
      <div className="bg-neutral-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Verify Your Profile</h3>
        
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-sm">
                <p className="text-neutral-300">
                  To verify your profile, please:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-neutral-300">
                  <li>Copy the verification code below</li>
                  <li>Add it to your Roblox profile description</li>
                  <li>Click "Start Verification" when ready</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between gap-4 bg-neutral-900 rounded-lg p-4 border border-neutral-800">
              <code className="text-red-500 font-mono text-sm break-all">
                {verificationCode}
              </code>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 text-neutral-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex flex-col gap-2 text-red-500 bg-red-500/10 p-3 rounded-md">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
              {debugInfo && (
                <details className="mt-2 text-xs text-neutral-400">
                  <summary className="cursor-pointer hover:text-neutral-300">Debug Information</summary>
                  <pre className="mt-2 p-2 bg-neutral-900 rounded overflow-auto">
                    {JSON.stringify(debugInfo, null, 2)}
                  </pre>
                </details>
              )}
            </div>
          )}

          {checking ? (
            <div className="flex items-center justify-center gap-3 p-4 bg-neutral-800/50 rounded-lg">
              <Loader2 className="w-5 h-5 text-red-500 animate-spin" />
              <span className="text-sm text-neutral-300">
                Checking your profile... ({attempts}/{maxAttempts})
              </span>
            </div>
          ) : (
            <button
              onClick={() => {
                setChecking(true);
                setAttempts(0);
              }}
              disabled={checking}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-6 py-3 text-sm font-semibold text-white hover:brightness-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start Verification
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
