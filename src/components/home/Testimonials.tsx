import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "I've bought multiple times from him and each time has been very fast and very kind. Would definitely recommend buying from him if you're looking for specific codes at a good price!",
    author: "Anthony",
    image: "/testimonials/anthony.webp"
  },
  {
    content: "I've bought many codes from ShopBlox, his prices are very low and has almost anything you need, he delivers incredibly quickly and he is very reliable.",
    author: "Omar",
    image: "/testimonials/omar.webp"
  },
  {
    content: "I bought MANY codes with ShopBlox for my account and also to resell. Always very attentive and quick in service! Very fast delivery too! Great service and reliable! Buy without fear!",
    author: "Sapphi_Cah",
    image: "/testimonials/sappi.webp"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-bold leading-8 tracking-tight text-red-600 uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Here's what ShopBlox<br /> customers have to say
          </p>
        </div>
        <motion.div 
          className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="-mt-8 sm:-mx-4 grid sm:grid-cols-2 sm:text-[0] lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <figure className="rounded-2xl bg-neutral-800 p-8 text-sm leading-6 h-full flex flex-col justify-between">
                  <blockquote className="text-white">
                    <p>"{testimonial.content}"</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden bg-neutral-900">
                      <img
                        alt={testimonial.author}
                        src={testimonial.image}
                        className="object-center object-cover"
                      />
                    </div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};