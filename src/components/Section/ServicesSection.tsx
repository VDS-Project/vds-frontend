"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      image: "/img/services/recuitement.svg",
      title: "Recruitment Services",
      description:
        "Comprehensive talent search and placement for all business needs.",
      link: "#",
    },
    {
      id: 2,
      image: "/img/services/manpower.svg",
      title: "Manpower Outsourcing",
      description:
        "Flexible staffing solutions for operational excellence and cost efficiency.",
      link: "#",
    },
    {
      id: 3,
      image: "/img/services/mou.svg",
      title: "Foreign Worker Recruitment",
      description:
        "Legal sourcing and deployment of migrant workers for your industry needs.",
      link: "#",
    },
    {
      id: 4,
      image: "/img/demos/transportation-logistic/services/service-2.jpg",
      title: "Labor Consulting",
      description:
        "Professional advisory on labor regulations, compliance, and HR strategies.",
      link: "#",
    },
  ];

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsPerView.mobile);
      } else if (window.innerWidth < 1200) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlides = Math.max(0, services.length - itemsToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="border-0" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container py-5">
        <div className="row pb-3">
          <div className="col pb-5 mb-3">
            <div className="relative overflow-hidden">
              {/* Services Container */}
              <div
                ref={containerRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / itemsToShow)
                  }%)`,
                  width: `${(services.length * 100) / itemsToShow}%`,
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className="px-2.5"
                    style={{ width: `${100 / services.length}%` }}
                  >
                    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      {/* Service Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <h4 className="text-xl font-semibold mb-2 text-center">
                            {service.title}
                          </h4>

                          {/* Hidden content that appears on hover */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                            <p className="text-sm text-white/90 mb-4 px-4">
                              {service.description}
                            </p>
                            <a
                              href={service.link}
                              className="inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-300"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              {maxSlides > 0 && (
                <>
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                      currentSlide === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-100 shadow-lg"
                    }`}
                    aria-label="Previous services"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>

                  <button
                    onClick={nextSlide}
                    disabled={currentSlide === maxSlides}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                      currentSlide === maxSlides
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-100 shadow-lg"
                    }`}
                    aria-label="Next services"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
