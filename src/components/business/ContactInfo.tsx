import React from 'react';
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Customer Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-red-500 mt-1" />
          <div>
            <h3 className="font-semibold text-white">Email</h3>
            <a href="mailto:help.shopblox@gmail.com" className="text-neutral-300 hover:text-red-500 transition-colors">
              help.shopblox@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-red-500 mt-1" />
          <div>
            <h3 className="font-semibold text-white">Phone</h3>
            <a href="tel:+15735579293" className="text-neutral-300 hover:text-red-500 transition-colors">
              (573) 557-9293
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MessageCircle className="w-5 h-5 text-red-500 mt-1" />
          <div>
            <h3 className="font-semibold text-white">Discord</h3>
            <a 
              href="https://discord.gg/shopblox" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-red-500 transition-colors"
            >
              Join our community
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-red-500 mt-1" />
          <div>
            <h3 className="font-semibold text-white">Support Hours</h3>
            <p className="text-neutral-300">24/7 via Discord</p>
          </div>
        </div>
      </div>
    </section>
  );
};
