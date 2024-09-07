"use client"

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

export default function LenisScrollProvider({ children }) {
  const lenisRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.stop();
    
    // Wait for the next tick to ensure the DOM has updated
    setTimeout(() => {
      lenisRef.current?.start();
      lenisRef.current?.scrollTo(0, { immediate: true });
    
      window.dispatchEvent(new Event('resize'));

      // Additional delay to ensure everything is loaded
      setTimeout(() => {
        lenisRef.current?.resize();
      }, 100);
    }, 0);

  }, [pathname]);

  return <>{children}</>;
}