"use client";

import { useEffect, useRef } from "react";

export interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(
  animation: string = "fadeInUp",
  options: AnimationOptions = {}
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", `animate-${animation}`);

            if (options.triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!options.triggerOnce) {
            entry.target.classList.remove("animate-in", `animate-${animation}`);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animation, options.threshold, options.rootMargin, options.triggerOnce]);

  return ref;
}

// Hook สำหรับ Ken Burns effect
export function useKenBurns() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.classList.add("ken-burns-effect");
  }, []);

  return ref;
}
