import { useEffect, useState } from 'react';

export function useCountUp(end: number, duration = 1500, startOnMount = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!startOnMount) return;
    setStarted(true);
  }, [startOnMount]);

  useEffect(() => {
    if (!started && !startOnMount) return;

    let startTime: number;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, started, startOnMount]);

  return count;
}
