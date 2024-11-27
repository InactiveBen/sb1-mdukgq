import React from 'react';

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
    answer: "ShopBlox uses Stripe, a Level 1 payment provider, to ensure your payment goes through safely which allows you to purchase toy codes with a peace of mind."
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
    answer: "Sure! Join our Discord and create a ticket and we will do our best to find it for you."
  }
];

export const FAQ: React.FC = () => {
  return (
    <div id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
        Frequently asked questions
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
        Have a different question and can't find the answer you're looking for? Reach out to our support team by{' '}
        <a
          target="_blank"
          className="font-semibold text-red-500 hover:text-red-600 ease-linear transition"
          href="https://discord.gg/tdvCm2rXTN"
        >
          joining the Discord
        </a>{' '}
        and we'll get back to you as soon as we can.
      </p>
      <div className="mt-20">
        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-base font-semibold leading-7 text-white">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-300">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};