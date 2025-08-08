"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [currentLocation, setCurrentLocation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const locations = [
    {
      id: 1,
      name: "Rojana Industrial Park, Phra Nakhon Si Ayutthaya",
      email: "hq@vds.co.th",
      phone: "089-241-5151",
    },
    {
      id: 2,
      name: "Navanakorn Industrial Zone, Pathumtani",
      email: "navanakorn@vds.co.th",
      phone: "089-742-9328",
    },
    {
      id: 3,
      name: "Amata Nakorn 1 Industrial, Chonburi",
      email: "amata1@vds.co.th",
      phone: "080-109-9994",
    },
    {
      id: 4,
      name: "Amata Nakorn 2 Industrial, Chonburi",
      email: "amata2@vds.co.th",
      phone: "800 123 4567",
    },
    {
      id: 5,
      name: "Pakchong, Saraburi",
      email: "pakchong@vds.co.th",
      phone: "800 123 4567",
    },
    {
      id: 6,
      name: "Prachinburi",
      email: "prachinburi@vds.co.th",
      phone: "800 123 4567",
    },
  ];

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsPerView.mobile);
      } else if (window.innerWidth < 992) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlides = Math.max(0, locations.length - itemsToShow);

  const nextLocation = () => {
    setCurrentLocation((prev) => Math.min(prev + 1, maxSlides));
  };

  const prevLocation = () => {
    setCurrentLocation((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="border-0 relative">
      {/* Header */}
      <div className="container">
        <div className="row pt-5 pb-4">
          <div className="col-md-8">
            <h3 className="font-semibold text-9 capitalize mb-2">
              Our Locations
            </h3>
            <div className="mb-4">
              <hr className="bg-primary border-0 h-1 w-16" />
            </div>
          </div>
          <div className="col-md-4 text-md-right">
            <a
              href="https://maps.app.goo.gl/KbPWzEuqpFTYTSbT8"
              className="btn bg-tertiary border-0 text-3.5 font-semibold px-6 py-3 text-white hover:bg-tertiary/90 transition-colors duration-300 hidden md:inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigate
            </a>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="container-fluid">
        <div className="row justify-center">
          <div className="col-lg-10">
            <div className="relative">
              <Image
                src="/img/vds-map.svg"
                alt="VDS Location Map"
                width={1200}
                height={400}
                className="w-full object-cover rounded-lg shadow-sm"
                style={{ minHeight: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Locations Carousel */}
      <div className="container pt-5 mt-3 pb-3">
        <div className="row">
          <div className="col">
            <div className="relative overflow-hidden">
              {/* Locations Container */}
              <div
                ref={containerRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentLocation * (100 / itemsToShow)
                  }%)`,
                  width: `${(locations.length * 100) / itemsToShow}%`,
                }}
              >
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className="px-5"
                    style={{ width: `${100 / locations.length}%` }}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                      <p className="font-semibold text-tertiary text-4 leading-relaxed mb-2">
                        {location.name}
                      </p>
                      <p className="font-medium text-3 leading-relaxed mb-2">
                        <a
                          href={`mailto:${location.email}`}
                          className="text-gray-600 hover:text-primary transition-colors duration-300"
                        >
                          {location.email}
                        </a>
                      </p>
                      <p className="font-medium text-3 leading-relaxed mb-0 text-gray-600">
                        {location.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              {maxSlides > 0 && (
                <>
                  <button
                    onClick={prevLocation}
                    disabled={currentLocation === 0}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                      currentLocation === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-100 shadow-lg"
                    }`}
                    aria-label="Previous locations"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>

                  <button
                    onClick={nextLocation}
                    disabled={currentLocation === maxSlides}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                      currentLocation === maxSlides
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-100 shadow-lg"
                    }`}
                    aria-label="Next locations"
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
