import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, isVisible]);

  return (
    <div ref={counterRef} className="text-center animate-counter">
      <div className="text-4xl md:text-5xl font-nunito font-bold text-maroon mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-charcoal font-medium">{label}</div>
    </div>
  );
};

export default Counter;