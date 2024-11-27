import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col py-24">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        
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
      "By accessing this Website and purchasing from us, accessible from shopblox.codes, you are agreeing to be bound by this Privacy Policy. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ShopBlox. This policy is not applicable to any information collected offline or via channels other than this website."
    ]
  },
  {
    title: "2. Consent",
    content: [
      "By using our website, you hereby consent to our Privacy Policy and agree to its terms."
    ]
  },
  {
    title: "3. Information we collect",
    content: [
      "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.",
      "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide."
    ]
  },
  {
    title: "4. How we use your information",
    content: [
      "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes. More examples include:",
      "Provide, operate, and maintain our website",
      "Improve, personalize, and expand our website",
      "Develop new products, services, features, and functionality",
      "Find and prevent fraud",
      "Send you emails"
    ]
  },
  {
    title: "5. Log Files",
    content: [
      "ShopBlox follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."
    ]
  },
  {
    title: "6. Cookies and Web Beacons",
    content: [
      "Like any other website, ShopBlox uses \"cookies\". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."
    ]
  },
  {
    title: "7. Third Party Privacy Policies",
    content: [
      "ShopBlox's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites."
    ]
  },
  {
    title: "8. Children's Information",
    content: [
      "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. ShopBlox does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."
    ]
  },
  {
    title: "9. Changes to This Privacy Policy",
    content: [
      "We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page."
    ]
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at help.shopblox@gmail.com."
    ]
  }
];