import React from 'react';
import { ShieldAlert, Shield, Users } from 'lucide-react';
import { PageBackground } from '../components/shared/PageBackground';
import { BannedHeader } from '../components/banned/BannedHeader';
import { InfoCard } from '../components/banned/InfoCard';
import { AccessDeniedBox } from '../components/banned/AccessDeniedBox';

export const BannedPage: React.FC = () => {
  const infoCards = [
    {
      icon: ShieldAlert,
      title: "Legal Requirements",
      description: "Due to legal regulations, data protection laws, and platform policies, we cannot provide services to users under 13 years of age.",
    },
    {
      icon: Shield,
      title: "User Safety",
      description: "This age restriction helps ensure a safe environment and protects young users in accordance with online safety regulations.",
    },
    {
      icon: Users,
      title: "Community Standards",
      description: "Our community guidelines are designed to maintain a secure and appropriate environment for all users.",
    },
  ];

  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex items-center justify-center py-24">
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <BannedHeader />
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {infoCards.map((card, index) => (
                <InfoCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <AccessDeniedBox />
          </div>
        </div>
      </div>
    </div>
  );
};
