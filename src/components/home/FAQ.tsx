import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ContactSupportModal } from '../support/ContactSupportModal';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-neutral-800 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="text-base font-semibold leading-7 text-white">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.2, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.1 }
              }
            }}
          >
            <p className="pb-6 text-base leading-7 text-neutral-300">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const faqs = [
  {
    question: "Will I get banned for using ShopBlox?",
    answer: "No, as you are purchasing the toy code associated with a specific toy. It's the same as if you were to purchase that toy in-store."
  },
  {
    question: "Can I get a refund?",
    answer: "No. Due to the nature of Roblox toy codes, all sales are final. By using ShopBlox, and checking out, you agree to abide by our refund policy. If you have any questions, please contact us before purchasing."
  },
  {
    question: "Why should I purchase toy codes from ShopBlox?",
    answer: "ShopBlox uses Stripe, to ensure your payment goes through safely which allows you to purchase toy codes with a peace of mind."
  },
  {
    question: "Where do I find the toy code I purchased?",
    answer: "After purchasing, you will be sent an email with your code to the email address you provided during checkout. Make sure to check your junk/spam folder. If you still do not receive an email, please contact us."
  },
  {
    question: "How do I redeem my code?",
    answer: "Visit roblox.com/redeem and enter your code to redeem your toy code item."
  },
  {
    question: "I'm looking for a specific item code, can you help?",
    answer: "Sure! Contact our support team and we will do our best to find it for you."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
        Frequently asked questions
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
        Have a different question and can't find the answer you're looking for? Reach out to our{' '}
        <button
          onClick={() => setShowContactModal(true)}
          className="font-semibold text-red-500 hover:text-red-600 ease-linear transition"
        >
          support team
        </button>{' '}
        and we'll get back to you as soon as we can.
      </p>
      <div className="mt-20">
        <dl className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </dl>
      </div>

      <ContactSupportModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        article={null}
      />
    </div>
  );
};
