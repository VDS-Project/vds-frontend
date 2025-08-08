"use client";

import { useEffect, useRef, useState } from "react";

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
  triggerOnce?: boolean;
}

export function useAppearAnimation(options: AnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const {
    threshold = 0.1,
    rootMargin = "0px",
    animationClass = "animated",
    delay = 0,
    triggerOnce = true,
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animationClass);
              setIsVisible(true);

              if (triggerOnce) {
                observer.unobserve(entry.target);
              }
            }, delay);
          } else if (!triggerOnce) {
            entry.target.classList.remove(animationClass);
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, animationClass, delay, triggerOnce]);

  return { ref, isVisible };
}

// Hook สำหรับใช้กับ multiple elements
export function useMultipleAppearAnimation(
  count: number,
  options: AnimationOptions = {}
) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visibleStates, setVisibleStates] = useState<boolean[]>(
    new Array(count).fill(false)
  );

  const {
    threshold = 0.1,
    rootMargin = "0px",
    animationClass = "animated",
    delay = 0,
    triggerOnce = true,
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.findIndex((ref) => ref === entry.target);

          if (entry.isIntersecting && index !== -1) {
            setTimeout(() => {
              entry.target.classList.add(animationClass);
              setVisibleStates((prev) => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
              });

              if (triggerOnce) {
                observer.unobserve(entry.target);
              }
            }, delay * (index + 1)); // Staggered animation
          } else if (!triggerOnce && index !== -1) {
            entry.target.classList.remove(animationClass);
            setVisibleStates((prev) => {
              const newStates = [...prev];
              newStates[index] = false;
              return newStates;
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin, animationClass, delay, triggerOnce]);

  const setRef = (index: number) => (element: HTMLElement | null) => {
    refs.current[index] = element;
  };

  return { setRef, visibleStates };
}
