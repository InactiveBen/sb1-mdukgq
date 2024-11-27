import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Stats } from '../components/home/Stats';
import { Testimonials } from '../components/home/Testimonials';
import { FAQ } from '../components/home/FAQ';
import { CallToAction } from '../components/home/CallToAction';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <main>
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
    </div>
  );
};