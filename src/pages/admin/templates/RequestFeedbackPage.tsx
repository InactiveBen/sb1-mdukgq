import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

export const RequestFeedbackPage: React.FC = () => {
  const emailContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Share Your Feedback</title>
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; background-color: #171717; color: #fff; margin: 0; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #262626; border-radius: 12px; padding: 32px;">
    <h1 style="margin: 0 0 24px; font-size: 24px; text-align: center;">
      How was your experience with Shop<span style="color: #ef4444;">Blox</span>?
    </h1>
    
    <p style="color: #d4d4d4; margin: 0 0 24px; line-height: 1.5;">
      Hi there,
    </p>

    <p style="color: #d4d4d4; margin: 0 0 24px; line-height: 1.5;">
      Thank you for using ShopBlox! We'd love to hear about your experience. Your feedback helps us improve our service and better serve our community.
    </p>
    
    <div style="text-align: center; margin: 32px 0;">
      <a href="[FEEDBACK_LINK]" style="display: inline-block; background-color: rgba(239, 68, 68, 0.4); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; border: 1px solid #ef4444; box-shadow: inset 0 0 12px rgba(239, 68, 68, 0.65);">
        Share Your Feedback
      </a>
    </div>
    
    <p style="color: #d4d4d4; margin: 0 0 24px; line-height: 1.5;">
      This feedback link will expire in 7 days. If you have any questions or need assistance, please don't hesitate to contact our support team.
    </p>
    
    <p style="color: #d4d4d4; margin: 0; line-height: 1.5;">
      Best regards,<br>
      The ShopBlox Team
    </p>
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
    a.download = 'request-feedback-template.html';
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
            <h1 className="text-2xl font-bold text-white">Request Feedback Email Template</h1>
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
              <li>Replace [FEEDBACK_LINK] with the actual feedback URL</li>
              <li>For tickets: https://shopblox.codes/feedback?ticket=123456</li>
              <li>For orders: https://shopblox.codes/feedback?order=123456</li>
              <li>For agents: https://shopblox.codes/feedback?agent=123456</li>
              <li>For issues: https://shopblox.codes/feedback?issue=123456</li>
              <li>For ServiceNow: https://shopblox.codes/feedback?ServiceNow=123456</li>
              <li>Send the email to the customer</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
