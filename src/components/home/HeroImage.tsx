import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroImageProps {
  src: string;
  alt: string;
  rotation: number;
  animationDelay: number;
}

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, rotation, animationDelay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: animationDelay,
        ease: 'easeOut'
      }}
    >
      <Link 
        to="/shop" 
        className="relative flex flex-col items-center justify-center group"
      >
        <motion.img
          alt={alt}
          draggable="false"
          loading="lazy"
          width="420"
          height="420"
          className="aspect-[2/3] w-full object-center object-cover select-none drop-shadow-xl transition-transform duration-300"
          src={src}
          style={{
            rotate: rotation,
            transformOrigin: 'center center',
          }}
          whileHover={{ 
            scale: 1.05,
            rotate: rotation * 1.2,
            transition: { duration: 0.3 }
          }}
        />
      </Link>
    </motion.div>
  );
};