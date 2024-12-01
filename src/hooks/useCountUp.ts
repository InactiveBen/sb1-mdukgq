import { useState, useEffect, useRef } from 'react';

const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};

export const useCountUp = (end: number, duration: number = 1500) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    let startTimestamp: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      
      // For values over 1000, show increments of 10
      const increment = end > 1000 ? 10 : 1;
      const currentValue = Math.round((easedProgress * end) / increment) * increment;
      
      setCount(currentValue);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return count;
};
