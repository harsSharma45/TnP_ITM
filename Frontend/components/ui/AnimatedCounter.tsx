"use client"
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

export const AnimatedCounter = ({ end, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  const countRef = useRef(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      const start = Date.now();
      const timer = setInterval(() => {
        const timePassed = Date.now() - start;
        const progress = Math.min(timePassed / duration, 1);
        countRef.current = Math.floor(end * progress);
        setCount(countRef.current);
        
        if (progress === 1) {
          setHasAnimated(true);
          clearInterval(timer);
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [inView, end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
}; 