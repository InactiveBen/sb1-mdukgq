import { Package, CreditCard, ShieldQuestion, Mail } from 'lucide-react';
import { SupportOption } from './types';

export const supportOptions: SupportOption[] = [
  {
    id: 'order',
    icon: Package,
    title: 'Order Issues',
    description: 'Having trouble with your order?',
    subOptions: [
      {
        id: 'missing',
        icon: Package,
        title: 'Missing Order',
        description: 'Haven\'t received your order yet?',
        response: {
          title: 'Missing Order',
          content: [
            'I understand you haven\'t received your order yet. Let me help you with that.',
            'First, please check your email inbox and spam folder. Orders typically arrive within 5-10 minutes.',
            'If you still can\'t find your order email after checking both folders, please contact us at support@shopblox.gg with your order details and we\'ll help track it down right away.'
          ]
        }
      },
      {
        id: 'wrong',
        icon: Package,
        title: 'Wrong Item',
        description: 'Received incorrect item?',
        response: {
          title: 'Wrong Item Received',
          content: [
            'I\'m sorry to hear you received the wrong item. This is a serious issue that we\'ll resolve right away.',
            'Please email us at support@shopblox.gg with:',
            '• Your order number\n• A description of what you received vs what you ordered',
            'Our team will prioritize your case and work to resolve this as quickly as possible.'
          ]
        }
      }
    ]
  },
  {
    id: 'payment',
    icon: CreditCard,
    title: 'Payment Issues',
    description: 'Questions about payments or refunds?',
    subOptions: [
      {
        id: 'declined',
        icon: CreditCard,
        title: 'Card Declined',
        description: 'Having trouble with payment?',
        response: {
          title: 'Card Declined',
          content: [
            'I see you\'re having trouble with your payment. Let me explain some common reasons for declined payments:',
            '• Insufficient funds\n• 3D Secure authentication required\n• Card restrictions for online purchases\n• Bank security measures',
            'The first step is to contact your bank to confirm your card isn\'t limited. Some payments may require 3D Secure verification for additional security.',
            'If you continue to have issues, try using a different payment method or contact us at support@shopblox.gg for assistance.'
          ]
        }
      },
      {
        id: 'refund',
        icon: CreditCard,
        title: 'Refund Request',
        description: 'Need information about refunds?',
        response: {
          title: 'Refund Policy',
          content: [
            'I understand you\'re inquiring about a refund. Let me explain our policy:',
            'Due to the digital nature of our products, all sales are final. This policy is in place because digital codes cannot be "returned" once revealed.',
            'However, if you\'ve encountered any issues with your purchase, please contact us at support@shopblox.gg and we\'ll do our best to help resolve the situation.'
          ]
        }
      }
    ]
  },
  {
    id: 'account',
    icon: ShieldQuestion,
    title: 'Account Help',
    description: 'Need help with your account?',
    response: {
      title: 'Account Support',
      content: [
        'I\'ll help you with your account issue. Here are some common solutions:',
        '• Make sure you\'re using the correct email address\n• Check if your email is verified\n• Try resetting your password if you\'re having trouble logging in',
        'If none of these solutions work, please email us at support@shopblox.gg and we\'ll help get your account sorted out.'
      ]
    }
  },
  {
    id: 'other',
    icon: Mail,
    title: 'Other Questions',
    description: 'Can\'t find what you\'re looking for?',
    response: {
      title: 'Contact Us',
      content: [
        'I understand your question might not fit into our standard categories.',
        'Please email our support team at support@shopblox.gg with your inquiry, and we\'ll get back to you within 24 hours.',
        'We\'re here to help with any questions or concerns you may have!'
      ]
    }
  }
];
