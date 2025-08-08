"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface OwlCarouselOptions {
  autoplay?: boolean;
  autoplayTimeout?: number;
  items?: number;
  responsive?: Record<string, { items: number }>;
  nav?: boolean;
  dots?: boolean;
  loop?: boolean;
  mouseDrag?: boolean;
  touchDrag?: boolean;
}

export function useOwlCarousel(options: OwlCarouselOptions = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Element[]>([]);

  const {
    autoplay = true,
    autoplayTimeout = 7000,
    items: itemsCount = 1,
    nav = true,
    dots = true,
    loop = true,
    mouseDrag = true,
    touchDrag = true,
  } = options;

  // Auto play functionality
  useEffect(() => {
    if (!autoplay || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (loop) {
          return (prev + 1) % items.length;
        }
        return prev < items.length - 1 ? prev + 1 : 0;
      });
    }, autoplayTimeout);

    return () => clearInterval(interval);
  }, [autoplay, autoplayTimeout, items.length, loop, isDragging]);

  // Mouse events (แทน jQuery mouse events)
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!mouseDrag) return;
      setIsMouseDown(true);
      setIsDragging(true);
    },
    [mouseDrag]
  );

  const handleMouseUp = useCallback(() => {
    setIsMouseDown(false);
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isMouseDown || !mouseDrag) return;
      e.preventDefault();
      return false;
    },
    [isMouseDown, mouseDrag]
  );

  const handleMouseLeave = useCallback(() => {
    setIsMouseDown(false);
    setIsDragging(false);
  }, []);

  // Touch events
  const handleTouchStart = useCallback(() => {
    if (!touchDrag) return;
    setIsDragging(true);
  }, [touchDrag]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!touchDrag) return;
      e.preventDefault();
    },
    [touchDrag]
  );

  // Navigation functions
  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      if (loop) {
        return (prev + 1) % items.length;
      }
      return Math.min(prev + 1, items.length - 1);
    });
  }, [items.length, loop]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (loop) {
        return (prev - 1 + items.length) % items.length;
      }
      return Math.max(prev - 1, 0);
    });
  }, [items.length, loop]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, items.length - 1)));
    },
    [items.length]
  );

  return {
    currentIndex,
    containerRef,
    isMouseDown,
    isDragging,
    next,
    prev,
    goTo,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
    },
  };
}
