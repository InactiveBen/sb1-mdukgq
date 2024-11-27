import React from 'react';
import { Link } from 'react-router-dom';

export const CallToAction: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Purchase the toy code<br /> you've been looking for
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            From exclusive chasers to the newest releases, our large collection of Roblox toy codes will have something for everyone.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/shop"
              className="ease-linear transition rounded-lg border border-red-500 bg-red-500/40 shadow-[inset_0_0_12px_#ef4444a5] px-4 py-2 text-sm font-semibold text-white hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#ef4444" />
            <stop offset="1" stopColor="#ef4444" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};