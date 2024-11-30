import { Package, CreditCard, ShieldQuestion, Mail, AlertCircle, Gift } from 'lucide-react';
import { SupportCategory } from '../types/support';

export const supportCategories: SupportCategory[] = [
  {
    id: 'orders',
    icon: Package,
    title: 'Orders & Delivery',
    description: 'Track your order, delivery times, and order issues',
    articles: [
      {
        id: 'missing-order',
        title: 'Missing Order',
        excerpt: 'What to do if you haven\'t received your order',
        content: `If you haven't received your order, please follow these steps:

1. Check your email inbox and spam/junk folder for the order confirmation
2. Orders typically arrive within 5-10 minutes of purchase
3. Verify the email address you provided during checkout

If you still can't find your order after checking both folders:
• Contact our support team with your order details
• Include the email address used for purchase
• Provide any order reference numbers you received

Our team will prioritize locating your order and ensuring it's delivered promptly.`,
        url: '/support/missing-order',
        keywords: ['missing', 'lost', 'order', 'not received', 'where']
      },
      {
        id: 'wrong-item',
        title: 'Wrong Item Received',
        excerpt: 'Steps to take if you received the incorrect item',
        content: `If you've received the wrong item, we'll help make it right:

1. Do not redeem or use the incorrect code
2. Take a screenshot of the code you received
3. Contact our support team immediately with:
   • Your order number
   • The item you ordered
   • The incorrect item received

We take wrong deliveries very seriously and will:
• Verify your original order
• Issue the correct code immediately
• Investigate to prevent future errors

Please note: Once a code is redeemed, we cannot replace it, so it's important to verify before redemption.`,
        url: '/support/wrong-item',
        keywords: ['wrong', 'incorrect', 'mistake', 'error']
      }
    ]
  },
  {
    id: 'payments',
    icon: CreditCard,
    title: 'Payment & Billing',
    description: 'Payment methods, refunds, and billing issues',
    articles: [
      {
        id: 'payment-declined',
        title: 'Payment Declined',
        excerpt: 'Common reasons for declined payments and how to fix them',
        content: `If your payment was declined, here are the most common reasons and solutions:

Common Reasons:
1. Insufficient funds
2. 3D Secure authentication required
3. Card restrictions for online purchases
4. Bank security measures
5. Incorrect card information

Solutions:
• Verify your card has sufficient funds
• Complete 3D Secure verification if prompted
• Contact your bank to authorize online purchases
• Double-check all card information
• Try an alternative payment method

For recurring issues:
• Use a different card
• Try a different payment method
• Contact your bank for specific decline reasons
• Ensure your billing address matches your card

Need help? Our support team can assist with alternative payment options.`,
        url: '/support/payment-declined',
        keywords: ['declined', 'failed', 'payment', 'card']
      },
      {
        id: 'refund-policy',
        title: 'Refund Policy',
        excerpt: 'Understanding our refund policy',
        content: `Our Refund Policy:

Due to the digital nature of our products, all sales are final. Here's why:

• Digital codes cannot be "returned" once revealed
• Codes are unique and can only be used once
• We cannot verify if a code has been redeemed or shared

Exceptions may be made in cases of:
1. Technical errors preventing code delivery
2. Incorrect item delivery
3. Verified system issues

If you experience any issues:
• Contact support before attempting to redeem any codes
• Provide your order number and detailed description
• Keep all email correspondence

We're committed to ensuring you receive what you paid for and will work to resolve any legitimate issues.`,
        url: '/support/refund-policy',
        keywords: ['refund', 'money back', 'return']
      }
    ]
  },
  {
    id: 'account',
    icon: ShieldQuestion,
    title: 'Account Help',
    description: 'Account access, security, and settings',
    articles: [
      {
        id: 'login-issues',
        title: 'Login Issues',
        excerpt: 'Trouble logging in? Find help here',
        content: `Having trouble logging in? Follow these steps:

1. Password Reset:
   • Click "Forgot Password" on the login page
   • Enter your email address
   • Check your email for reset instructions
   • Create a new, strong password

2. Common Issues:
   • Incorrect email address
   • Case-sensitive password
   • Account not verified
   • Temporary account lock

3. Still Can't Login?
   • Clear your browser cache
   • Try a different browser
   • Check for typos in email
   • Ensure caps lock is off

Contact support if these steps don't resolve your issue.`,
        url: '/support/login-issues',
        keywords: ['login', 'password', 'access', 'cant login']
      },
      {
        id: 'account-security',
        title: 'Account Security',
        excerpt: 'Keep your account safe and secure',
        content: `Protect your account with these security measures:

1. Strong Password:
   • Use at least 12 characters
   • Mix letters, numbers, and symbols
   • Avoid personal information
   • Never reuse passwords

2. Two-Factor Authentication:
   • Enable 2FA in account settings
   • Use an authenticator app
   • Keep backup codes safe

3. Safe Practices:
   • Never share your password
   • Log out on shared devices
   • Watch for suspicious activity
   • Update contact information

Report any unauthorized access immediately to support.`,
        url: '/support/account-security',
        keywords: ['security', 'protection', 'hack', 'stolen']
      }
    ]
  },
  {
    id: 'redeem',
    icon: Gift,
    title: 'Code Redemption',
    description: 'How to redeem codes and troubleshooting',
    articles: [
      {
        id: 'how-to-redeem',
        title: 'How to Redeem Codes',
        excerpt: 'Step-by-step guide to redeeming your codes',
        content: `Follow these steps to redeem your code:

1. Visit roblox.com/redeem
2. Log into your Roblox account
3. Enter the code exactly as received
4. Click "Redeem"
5. Check your inventory for the item

Tips for Successful Redemption:
• Copy and paste to avoid typos
• Ensure correct capitalization
• Remove any extra spaces
• Check for similar characters (0 vs O, 1 vs l)

Keep your confirmation email for reference.`,
        url: '/support/how-to-redeem',
        keywords: ['redeem', 'code', 'activate', 'use']
      },
      {
        id: 'invalid-code',
        title: 'Invalid Code Issues',
        excerpt: 'What to do if your code isn\'t working',
        content: `If your code isn't working, try these solutions:

Common Issues:
1. Incorrect Format:
   • Check for typos
   • Verify capitalization
   • Remove spaces
   • Try copying/pasting

2. Code Status:
   • Already redeemed
   • Expired code
   • Invalid format
   • Region restrictions

Troubleshooting Steps:
1. Clear browser cache
2. Try a different browser
3. Check internet connection
4. Verify Roblox status

Still having issues? Contact support with:
• Screenshot of error
• Code attempted
• Order number`,
        url: '/support/invalid-code',
        keywords: ['invalid', 'not working', 'error', 'code']
      }
    ]
  }
];
