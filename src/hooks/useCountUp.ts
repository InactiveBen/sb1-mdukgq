import { useState, useEffect, useRef } from 'react';

const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};

interface CountUpState {
  displayValue: string;
  rawValue: number;
}

export const useCountUp = (end: number, duration: number = 2000) => {
  const [state, setState] = useState<CountUpState>({ displayValue: '0', rawValue: 0 });
  const frameRef = useRef<number>();

  useEffect(() => {
    let startTimestamp: number | null = null;
    
    const formatNumber = (num: number) => {
      if (num >= 1000) {
        const thousands = Math.floor(num / 1000);
        const remainder = num % 1000;
        if (remainder === 0) {
          return `${thousands}k`;
        }
        return num.toString();
      }
      return num.toString();
    };
    
    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      
      const currentValue = Math.floor(easedProgress * end);
      setState({
        displayValue: formatNumber(currentValue),
        rawValue: currentValue
      });
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setState({
          displayValue: formatNumber(end),
          rawValue: end
        });
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return state;
};
