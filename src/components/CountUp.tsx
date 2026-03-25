import { useEffect, useState, useRef } from "react";
import { useInView, useAnimation, motion } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const CountUp = ({ end, duration = 2, suffix = "", decimals = 0, className = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(easeProgress * end);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  const formattedCount = count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {formattedCount}{suffix}
    </span>
  );
};
