import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

const useLenixScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
};

export default useLenixScroll;
