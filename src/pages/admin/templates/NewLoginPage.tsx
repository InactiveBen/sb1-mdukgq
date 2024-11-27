import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

export const NewLoginPage: React.FC = () => {
  const emailContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Login Detected</title>
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; background-color: #171717; color: #fff; margin: 0; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #262626; border-radius: 12px; padding: 32px;">
    <h1 style="margin: 0 0 24px; font-size: 24px; text-align: center;">
      New Login Detected
    </h1>
    
    <p style="color: #d4d4d4; margin: 0 0 24px; line-height: 1.5;">
      We detected a new login to your Shop<span style="color: #ef4444;">Blox</span> account from:
    </p>
    
    <div style="background-color: #171717; border-radius: 8px; padding: 16px; margin: 0 0 24px;">
      <p style="margin: 0; color: #d4d4d4;">
        <strong>Device:</strong> [DEVICE]<br>
        <strong>Location:</strong> [LOCATION]<br>
        <strong>IP Address:</strong> [IP_ADDRESS]<br>
        <strong>Time:</strong> [TIME]
      </p>
    </div>
    
    <p style="color: #d4d4d4; margin: 0 0 24px; line-height: 1.5;">
      If this was you, you can ignore this email. If you don't recognize this activity, please:
    </p>
    
    <ol style="color: #d4d4d4; margin: 0 0 24px; padding-left: 24px; line-height: 1.5;">
      <li>Change your password immediately</li>
      <li>Enable two-factor authentication</li>
      <li>Contact our support team</li>
    </ol>
    
    <div style="text-align: center;">
      <a href="https://discord.gg/shopblox" style="display: inline-block; background-color: #ef4444; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600;">
        Contact Support
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
    a.download = 'new-login-template.html';
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
            <h1 className="text-2xl font-bold text-white">New Login Alert Email Template</h1>
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
              <li>Replace [DEVICE] with the device information</li>
              <li>Replace [LOCATION] with the login location</li>
              <li>Replace [IP_ADDRESS] with the IP address</li>
              <li>Replace [TIME] with the login timestamp</li>
              <li>Send the email to the user</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
};