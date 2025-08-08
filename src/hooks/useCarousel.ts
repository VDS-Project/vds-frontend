"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface CarouselOptions {
  autoplay?: boolean;
  autoplayTimeout?: number;
  loop?: boolean;
  margin?: number;
  responsive?: {
    [key: number]: {
      items: number;
    };
  };
}

export function useCarousel(options: CarouselOptions = {}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  const {
    autoplay = false,
    autoplayTimeout = 5000,
    loop = true,
    margin = 0,
    responsive = { 0: { items: 1 } },
  } = options;

  // Calculate items per slide based on screen width
  const updateItemsPerSlide = useCallback(() => {
    const width = window.innerWidth;
    let items = 1;

    const breakpoints = Object.keys(responsive)
      .map(Number)
      .sort((a, b) => b - a);

    for (const breakpoint of breakpoints) {
      if (width >= breakpoint) {
        items = responsive[breakpoint].items;
        break;
      }
    }

    setItemsPerSlide(items);
  }, [responsive]);

  // Go to specific slide
  const goToSlide = useCallback(
    (slideIndex: number) => {
      if (!carouselRef.current) return;

      const slides = carouselRef.current.children;
      const totalSlides = slides.length;

      if (totalSlides === 0) return;

      let targetSlide = slideIndex;

      if (loop) {
        targetSlide = slideIndex % totalSlides;
      } else {
        targetSlide = Math.max(
          0,
          Math.min(slideIndex, totalSlides - itemsPerSlide)
        );
      }

      setCurrentSlide(targetSlide);

      // Apply transform
      const slideWidth = 100 / itemsPerSlide;
      const transform = `translateX(-${targetSlide * slideWidth}%)`;

      Array.from(slides).forEach((slide, index) => {
        const element = slide as HTMLElement;
        element.style.transform = transform;
        element.style.marginRight =
          index < slides.length - 1 ? `${margin}px` : "0";
        element.style.transition = "transform 0.6s ease-in-out";
        element.style.width = `calc(${slideWidth}% - ${
          (margin * (itemsPerSlide - 1)) / itemsPerSlide
        }px)`;
        element.style.display = "inline-block";
        element.style.verticalAlign = "top";
      });
    },
    [itemsPerSlide, loop, margin]
  );

  // Next slide
  const nextSlide = useCallback(() => {
    if (!carouselRef.current) return;
    const totalSlides = carouselRef.current.children.length;
    goToSlide(currentSlide + 1 >= totalSlides ? 0 : currentSlide + 1);
  }, [currentSlide, goToSlide]);

  // Previous slide
  const prevSlide = useCallback(() => {
    if (!carouselRef.current) return;
    const totalSlides = carouselRef.current.children.length;
    goToSlide(currentSlide - 1 < 0 ? totalSlides - 1 : currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Setup autoplay
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(nextSlide, autoplayTimeout);
    return () => clearInterval(interval);
  }, [autoplay, autoplayTimeout, nextSlide]);

  // Setup responsive behavior
  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, [updateItemsPerSlide]);

  // Initialize carousel layout
  useEffect(() => {
    if (carouselRef.current) {
      goToSlide(0);
    }
  }, [itemsPerSlide, goToSlide]);

  return {
    carouselRef,
    currentSlide,
    itemsPerSlide,
    goToSlide,
    nextSlide,
    prevSlide,
  };
}
