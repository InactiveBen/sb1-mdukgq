import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

export const ProductSentPage: React.FC = () => {
  const emailContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your ShopBlox Order</title>
</head>
<body style="font-family: '__Inter_d65c78', system-ui, -apple-system, sans-serif; background-color: #171717; color: #fff; margin: 0; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #262626; border-radius: 12px; padding: 32px;">
    <h1 style="margin: 0 0 24px; font-size: 24px; text-align: center;">
      Thank you for your purchase from Shop<span style="color: #ef4444;">Blox</span>!
    </h1>
    
    <p style="color: #d4d4d4; margin: 0 0 24px; line-height: 1.5;">
      Here is your code for [PRODUCT_NAME]:
    </p>
    
    <div style="background-color: #171717; border-radius: 8px; padding: 16px; margin: 0 0 24px; text-align: center;">
      <code style="font-size: 20px; color: #ef4444;">[CODE]</code>
    </div>
    
    [DOWNLOAD_SECTION]

    <p style="color: #d4d4d4; margin: 0 0 24px; line-height: 1.5;">
      To redeem your code:
    </p>
    
    <ol style="color: #d4d4d4; margin: 0 0 24px; padding-left: 24px; line-height: 1.5;">
      <li>Visit <a href="https://www.roblox.com/redeem" style="color: #ef4444; text-decoration: none;">roblox.com/redeem</a></li>
      <li>Enter your code</li>
      <li>Click "Redeem"</li>
      <li>Enjoy your new item!</li>
    </ol>
    
    <p style="color: #d4d4d4; margin: 0 0 24px; line-height: 1.5;">
      If you have any issues, please don't hesitate to contact us on Discord.
    </p>
    
    <div style="text-align: center;">
      <a href="https://discord.gg/shopblox" style="display: inline-block; background-color: rgba(239, 68, 68, 0.4); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; border: 1px solid #ef4444; box-shadow: inset 0 0 12px rgba(239, 68, 68, 0.65);">
        Join Our Discord
      </a>
    </div>
  </div>
</body>
</html>`;

  const downloadSection = `
    <div style="background-color: #171717; border-radius: 8px; padding: 24px; margin: 0 0 24px;">
      <h2 style="margin: 0 0 16px; font-size: 18px; color: #fff; text-align: center;">
        Download Your Content
      </h2>
      <p style="color: #d4d4d4; margin: 0 0 16px; line-height: 1.5; text-align: center;">
        Click the button below to download your purchased content:
      </p>
      <div style="text-align: center;">
        <a href="[DOWNLOAD_LINK]" style="display: inline-block; background-color: rgba(239, 68, 68, 0.4); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; border: 1px solid #ef4444; box-shadow: inset 0 0 12px rgba(239, 68, 68, 0.65);">
          <span style="display: inline-flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Now
          </span>
        </a>
      </div>
      <p style="color: #d4d4d4; margin: 16px 0 0; font-size: 14px; text-align: center;">
        This download link will expire in 24 hours.
      </p>
    </div>
  `;

  const handleCopy = (withDownload: boolean) => {
    let content = emailContent;
    if (withDownload) {
      content = content.replace('[DOWNLOAD_SECTION]', downloadSection);
    } else {
      content = content.replace('[DOWNLOAD_SECTION]', '');
    }
    navigator.clipboard.writeText(content);
  };

  const handleDownload = (withDownload: boolean) => {
    let content = emailContent;
    if (withDownload) {
      content = content.replace('[DOWNLOAD_SECTION]', downloadSection);
    } else {
      content = content.replace('[DOWNLOAD_SECTION]', '');
    }
    const blob = new Blob([content], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product-sent-template.html';
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
            <h1 className="text-2xl font-bold text-white">Product Sent Email Template</h1>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleCopy(false)}
                  className="inline-flex items-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90"
                >
                  <ExternalLink className="w-4 h-4" />
                  Copy Standard
                </button>
                <button
                  onClick={() => handleCopy(true)}
                  className="inline-flex items-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90"
                >
                  <ExternalLink className="w-4 h-4" />
                  Copy with Download
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleDownload(false)}
                  className="inline-flex items-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90"
                >
                  <Download className="w-4 h-4" />
                  Download Standard
                </button>
                <button
                  onClick={() => handleDownload(true)}
                  className="inline-flex items-center gap-2 rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm tracking-tighter font-semibold text-white hover:brightness-90"
                >
                  <Download className="w-4 h-4" />
                  Download with Download
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg p-6 overflow-auto">
            <pre className="text-neutral-300 text-sm">
              <code>{emailContent.replace('[DOWNLOAD_SECTION]', downloadSection)}</code>
            </pre>
          </div>

          <div className="bg-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Usage Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-neutral-300">
              <li>Copy the HTML template above (with or without download section)</li>
              <li>Replace [PRODUCT_NAME] with the actual product name</li>
              <li>Replace [CODE] with the customer's code</li>
              <li>If using download section, replace [DOWNLOAD_LINK] with the actual download URL</li>
              <li>Send the email to the customer</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
};