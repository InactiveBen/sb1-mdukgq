import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home,
  ShoppingBag,
  Gift,
  FileText,
  Shield,
  HelpCircle,
  UserPlus,
  LogIn,
  Settings
} from 'lucide-react';
import { PageBackground } from '../components/shared/PageBackground';

interface SitemapSection {
  title: string;
  icon: React.FC<{ className?: string }>;
  links: {
    name: string;
    path: string;
    description: string;
  }[];
}

const sections: SitemapSection[] = [
  {
    title: 'Main Pages',
    icon: Home,
    links: [
      { name: 'Home', path: '/', description: 'Welcome to ShopBlox' },
      { name: 'Shop', path: '/shop', description: 'Browse our collection of Roblox toy codes' },
      { name: 'Success', path: '/success', description: 'Order confirmation page' }
    ]
  },
  {
    title: 'Product Management',
    icon: ShoppingBag,
    links: [
      { name: 'Redeem', path: '/redeem', description: 'Redeem your gift cards' }
    ]
  },
  {
    title: 'User Access',
    icon: UserPlus,
    links: [
      { name: 'Sign Up', path: '/signup', description: 'Create a new account' },
      { name: 'Login', path: '/login', description: 'Access your account' }
    ]
  },
  {
    title: 'Support & Help',
    icon: HelpCircle,
    links: [
      { name: 'Support', path: '/support', description: 'Get help with your orders' },
      { name: 'FAQ', path: '/#faq', description: 'Frequently asked questions' }
    ]
  },
  {
    title: 'Legal',
    icon: Shield,
    links: [
      { name: 'Terms', path: '/terms', description: 'Terms of Service' },
      { name: 'Privacy', path: '/privacy', description: 'Privacy Policy' }
    ]
  },
  {
    title: 'Admin',
    icon: Settings,
    links: [
      { name: 'Admin Panel', path: '/admin', description: 'Site administration' }
    ]
  }
];

export const SitemapPage: React.FC = () => {
  return (
    <div className="relative isolate">
      <PageBackground />
      <div className="w-full h-full min-h-screen flex flex-col py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <FileText className="w-12 h-12 text-red-500 mx-auto" />
              <h1 className="mt-4 text-3xl font-bold text-white">Sitemap</h1>
              <p className="mt-2 text-neutral-300">
                A complete overview of all pages available on ShopBlox
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.1 }}
                  className="bg-neutral-800/50 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="w-5 h-5 text-red-500" />
                    <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="block p-3 rounded-lg hover:bg-neutral-700/50 transition-colors"
                        >
                          <div className="text-white font-medium">{link.name}</div>
                          <div className="text-sm text-neutral-400">{link.description}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
