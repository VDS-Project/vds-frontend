"use client";

import { useState, useEffect } from "react";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      backgroundImage: "/img/hero/5.svg",
      title1: "We Empower",
      title2: "You Grow",
      animation: "kenBurnsToLeft",
    },
    {
      id: 2,
      backgroundImage: "/img/hero/6.svg",
      title1: "We Delivery",
      title2: "We Build",
      animation: "kenBurnsToRight",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden mb-0" style={{ height: "800px" }}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-300 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Ken Burns Effect */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[30s] ease-linear ${
              index === currentSlide ? "scale-100" : "scale-110"
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              transformOrigin:
                slide.animation === "kenBurnsToLeft" ? "left" : "right",
            }}
          />

          {/* Content Overlay */}
          <div className="container-fluid h-full px-5 mx-5 pb-5 relative z-10">
            <div className="row h-full relative z-10 gx-5 pb-5">
              <div className="col">
                {index === 0 ? (
                  <>
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 delay-100"
                      style={{
                        animation:
                          index === currentSlide
                            ? "fadeInRightShorter 0.6s ease-out 0.1s both"
                            : "none",
                      }}
                    >
                      <h3
                        className="text-white font-bold tracking-normal relative left-0 pe-5 whitespace-nowrap"
                        style={{
                          transform: "rotate(90deg)",
                          fontSize: "clamp(2rem, 4vw, 4rem)",
                          transformOrigin: "left center",
                        }}
                      >
                        {slide.title1}
                      </h3>
                    </div>
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 delay-300"
                      style={{
                        animation:
                          index === currentSlide
                            ? "fadeInRightShorterPlus 0.6s ease-out 0.3s both"
                            : "none",
                        left: "120px",
                      }}
                    >
                      <h3
                        className="font-bold tracking-normal relative pe-5 whitespace-nowrap"
                        style={{
                          transform: "rotate(90deg)",
                          fontSize: "clamp(2rem, 4vw, 4rem)",
                          transformOrigin: "left center",
                          color: "transparent",
                          WebkitTextStroke: "2px #ffffff",
                        }}
                      >
                        {slide.title2}
                      </h3>
                    </div>
                  </>
                ) : (
                  <div className="text-right h-full relative">
                    <h3
                      className="text-white font-bold tracking-normal absolute top-1/2 right-0 pe-5 whitespace-nowrap"
                      style={{
                        transform: "rotate(90deg) translateY(-50%)",
                        fontSize: "clamp(2rem, 4vw, 4rem)",
                        transformOrigin: "right center",
                      }}
                    >
                      {slide.title1}
                    </h3>
                    <h3
                      className="font-bold tracking-normal absolute top-1/2 pe-5 whitespace-nowrap"
                      style={{
                        transform: "rotate(90deg) translateY(-50%)",
                        fontSize: "clamp(2rem, 4vw, 4rem)",
                        transformOrigin: "right center",
                        right: "120px",
                        color: "transparent",
                        WebkitTextStroke: "2px #ffffff",
                      }}
                    >
                      {slide.title2}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-primary hover:bg-primary/80 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-primary hover:bg-primary/80 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeInRightShorter {
          from {
            opacity: 0;
            transform: translate3d(50px, -50%, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, -50%, 0);
          }
        }

        @keyframes fadeInRightShorterPlus {
          from {
            opacity: 0;
            transform: translate3d(100px, -50%, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, -50%, 0);
          }
        }
      `}</style>
    </div>
  );
}
