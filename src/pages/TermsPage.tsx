import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col py-24">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Terms and Conditions of Use</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-neutral-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

const sections = [
  {
    title: "1. OVERVIEW",
    content: [
      "This website is operated by ShopBlox. Throughout the site, the terms \"we\", \"us\" and \"our\" refer to ShopBlox. ShopBlox offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.",
      "By accessing this Website and purchasing from us, accessible from shopblox.codes, you are agreeing to be bound by these Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. These Terms and Conditions of Use apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content."
    ]
  },
  {
    title: "2. ONLINE STORE TERMS",
    content: [
      "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services."
    ]
  },
  {
    title: "3. GENERAL CONDITIONS",
    content: [
      "We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.",
      "You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us. The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms."
    ]
  },
  {
    title: "4. RETURN/REFUND POLICY",
    content: [
      "Due to the nature of the products we sell, we do not offer returns or refunds for any products once purchased. By purchasing a product, you acknowledge that you have read, understood, and agreed to this policy and have used your best efforts to ensure that the product you are purchasing is the correct one for your needs."
    ]
  },
  {
    title: "5. CONTACT INFORMATION",
    content: [
      "Questions about the Terms of Service should be sent to us at help.shopblox@gmail.com."
    ]
  }
];