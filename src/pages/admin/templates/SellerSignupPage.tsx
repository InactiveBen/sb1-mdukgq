import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

export const SellerSignupPage: React.FC = () => {
  const emailContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your ShopBlox Account</title>
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; background-color: #171717; color: #fff; margin: 0; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #262626; border-radius: 12px; padding: 32px;">
    <h1 style="margin: 0 0 24px; font-size: 24px; text-align: center;">
      Welcome to Shop<span style="color: #ef4444;">Blox</span>!
    </h1>
    
    <p style="color: #d4d4d4; margin: 0 0 24px; line-height: 1.5;">
      Please use the following code to verify your email address:
    </p>
    
    <div style="background-color: #171717; border-radius: 8px; padding: 16px; margin: 0 0 24px; text-align: center;">
      <code style="font-size: 32px; letter-spacing: 0.5em; color: #ef4444;">[CODE]</code>
    </div>
    
    <p style="color: #d4d4d4; margin: 0 0 24px; line-height: 1.5;">
      This code will expire in 10 minutes. If you didn't request this verification, please ignore this email.
    </p>
    
    <p style="color: #d4d4d4; margin: 0 0 24px; line-height: 1.5;">
      For security reasons, never share this code with anyone. Our team will never ask for your verification code.
    </p>
    
    <div style="text-align: center;">
      <a href="https://discord.gg/shopblox" style="display: inline-block; background-color: #ef4444; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600;">
        Join Our Discord
      </a>
    </div>
  </div>
</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(emailContent);
  };

  const handleDownload = () => {
    const blob = new Blob([emailContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'seller-signup-template.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col py-24">
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Seller Signup Email Template</h1>
            <div className="flex gap-4">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Copy HTML
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg p-6 overflow-auto">
            <pre className="text-neutral-300 text-sm">
              <code>{emailContent}</code>
            </pre>
          </div>

          <div className="bg-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Usage Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-neutral-300">
              <li>Copy the HTML template above</li>
              <li>Replace [CODE] with the 4-digit verification code</li>
              <li>Send the email to the new seller</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
};