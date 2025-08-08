// src/components/WhoWeAre/TeamSection.tsx
"use client";

import { useState, useEffect } from "react";
import { useAppearAnimation } from "@/hooks/useAppearAnimation";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  // Animation refs using existing hook
  const { ref: headerRef } = useAppearAnimation({
    animationClass: "fadeInUpShorter",
    delay: 0,
    threshold: 0.1,
  });

  const { ref: titleRef } = useAppearAnimation({
    animationClass: "fadeInUpShorter",
    delay: 400,
    threshold: 0.1,
  });

  const { ref: descriptionRef } = useAppearAnimation({
    animationClass: "fadeInUpShorter",
    delay: 600,
    threshold: 0.1,
  });

  const { ref: carouselRef } = useAppearAnimation({
    animationClass: "fadeInUpShorter",
    delay: 800,
    threshold: 0.1,
  });

  // Responsive items count
  const getItemsCount = () => {
    if (windowWidth >= 1200) return 4;
    if (windowWidth >= 992) return 3;
    if (windowWidth >= 768) return 3;
    if (windowWidth >= 476) return 2;
    return 1;
  };

  // Owl Carousel
  const { currentIndex, containerRef, goTo, handlers } = useOwlCarousel({
    autoplay: false,
    autoplayTimeout: 5000,
    items: getItemsCount(),
    responsive: {
      "0": { items: 1 },
      "476": { items: 2 },
      "768": { items: 3 },
      "992": { items: 3 },
      "1200": { items: 4 },
    },
    nav: false,
    dots: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
  });

  // Load team data
  useEffect(() => {
    const loadTeamData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));

      setTeamMembers([
        {
          id: 1,
          name: "John Doe",
          position: "CEO & Founder",
          image: "/img/demos/startup-agency/authors/author-1.jpg",
        },
        {
          id: 2,
          name: "Jane Smith",
          position: "Operations Director",
          image: "/img/demos/startup-agency/authors/author-2.jpg",
        },
        {
          id: 3,
          name: "Mike Johnson",
          position: "HR Manager",
          image: "/img/demos/startup-agency/authors/author-3.jpg",
        },
        {
          id: 4,
          name: "Sarah Wilson",
          position: "Quality Assurance",
          image: "/img/demos/startup-agency/authors/author-1.jpg",
        },
        {
          id: 5,
          name: "Tom Anderson",
          position: "Business Development",
          image: "/img/demos/startup-agency/authors/author-2.jpg",
        },
      ]);
      setLoading(false);
    };

    loadTeamData();
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (loading) {
    return (
      <div className="container position-relative z-index-3 pt-md-5 pb-1 pb-sm-5 my-5">
        <div className="row justify-content-center pt-5">
          <div className="col-lg-10 text-center">
            <div className="animate-pulse">
              <div className="bg-gray-200 h-4 w-24 mx-auto mb-4 rounded"></div>
              <div className="bg-gray-200 h-8 w-48 mx-auto mb-4 rounded"></div>
              <div className="bg-gray-200 h-4 w-96 mx-auto rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const itemsPerView = getItemsCount();
  const totalDots = Math.ceil(teamMembers.length / itemsPerView);
  const currentDot = Math.floor(currentIndex / itemsPerView);

  return (
    <div
      className="container position-relative pt-md-5 pb-1 pb-sm-5 my-5"
      style={{ zIndex: 3 }}
    >
      <div className="row justify-content-center pt-5">
        <div className="col-lg-10 text-center">
          <span
            ref={headerRef}
            className="text-color-grey positive-ls-2 font-weight-medium custom-font-size-2 d-block mb-1 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="0"
          >
            OUR TEAM
          </span>
          <h2
            ref={titleRef}
            className="font-weight-bold text-10 mb-4 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="400"
          >
            We Are Passionate
          </h2>
          <p
            ref={descriptionRef}
            className="custom-font-size-2 font-weight-light appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="600"
          >
            Our dedicated team brings together expertise, innovation, and
            passion to deliver exceptional workforce solutions for your business
            success.
          </p>
        </div>
      </div>

      <div className="row mb-5 mb-lg-0">
        <div className="col">
          <div className="custom-svg-wrapper-2">
            {/* SVG Background - ตรงตาม HTML เดิม */}
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1736 315"
              data-plugin-float-element-svg="true"
            >
              <g
                data-plugin-float-element
                data-plugin-options="{'startPos': 'top', 'speed': 0.2, 'isInsideSVG': true, 'transition': true, 'transitionDuration': 2000}"
              >
                <circle fill="#DFDFDB" cx="145.5" cy="31.5" r="9.5" />
              </g>
              <g
                data-plugin-float-element
                data-plugin-options="{'startPos': 'bottom', 'speed': 0.3, 'isInsideSVG': true, 'transition': true, 'transitionDuration': 2000}"
              >
                <circle
                  className="custom-svg-fill-color-secondary"
                  fill="#4F4BFC"
                  cx="75"
                  cy="128"
                  r="17"
                />
                <circle fill="#eff1f3" cx="74.69" cy="128.31" r="15.43" />
              </g>
              <g
                data-plugin-float-element
                data-plugin-options="{'startPos': 'bottom', 'speed': 0.2, 'isInsideSVG': true, 'transition': true, 'transitionDuration': 2000}"
              >
                <circle
                  className="custom-svg-fill-color-secondary"
                  fill="#4F4BFC"
                  cx="1693"
                  cy="201.5"
                  r="17"
                />
                <circle fill="#eff1f3" cx="1693.31" cy="201.81" r="15.43" />
              </g>
              <g
                data-plugin-float-element
                data-plugin-options="{'startPos': 'top', 'speed': 0.3, 'isInsideSVG': true, 'transition': true, 'transitionDuration': 2000}"
              >
                <circle fill="#DFDFDB" cx="1620.5" cy="295.5" r="9.5" />
              </g>
            </svg>

            <div
              ref={carouselRef}
              className="appear-animation"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="800"
            >
              {/* Team Carousel ใช้ useOwlCarousel hook ที่มีอยู่ */}
              <div className="owl-carousel-container custom-dots-style-1">
                <div
                  ref={containerRef}
                  className="owl-carousel-wrapper overflow-hidden"
                  {...handlers}
                >
                  <div
                    className="owl-carousel-inner flex transition-transform duration-600"
                    style={{
                      transform: `translateX(-${
                        (currentIndex * 100) / itemsPerView
                      }%)`,
                      width: `${(teamMembers.length * 100) / itemsPerView}%`,
                    }}
                  >
                    {teamMembers.map((member, index) => (
                      <div
                        key={member.id}
                        className="owl-item"
                        style={{
                          width: `${100 / teamMembers.length}%`,
                          paddingRight:
                            index < teamMembers.length - 1 ? "15px" : "0",
                          paddingLeft: index > 0 ? "15px" : "0",
                        }}
                      >
                        <a href="#" className="text-decoration-none">
                          <div className="card custom-card-style-1 box-shadow-4 my-3">
                            <div className="card-body p-3">
                              <div className="thumb-info thumb-info-hide-wrapper-bg mb-3 pb-2">
                                <div className="thumb-info-wrapper">
                                  <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className="img-fluid"
                                    style={{
                                      aspectRatio: "1/1",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              </div>
                              <h3 className="text-center font-weight-bold text-capitalize line-height-1 text-5 text-color-hover-primary mb-0">
                                {member.name}
                              </h3>
                              <p className="text-center text-color-grey text-3 mb-2">
                                {member.position}
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Dots Navigation */}
                {totalDots > 1 && (
                  <div className="owl-dots text-center mt-4">
                    {Array.from({ length: totalDots }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goTo(index * itemsPerView)}
                        className={`owl-dot ${
                          currentDot === index ? "active" : ""
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
