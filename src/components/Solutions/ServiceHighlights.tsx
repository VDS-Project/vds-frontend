"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceHighlight {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

const highlights: ServiceHighlight[] = [
  {
    id: 1,
    title: "Industrial Expertise",
    description:
      "Specialized knowledge in manufacturing and industrial operations providing comprehensive workforce solutions.",
    image: "/img/demos/transportation-logistic/services/service-1.jpg",
    href: "/solutions/industrial",
  },
  {
    id: 2,
    title: "Quality Assurance",
    description:
      "Rigorous screening processes and comprehensive training programs ensuring top-tier talent delivery.",
    image: "/img/demos/transportation-logistic/services/service-2.jpg",
    href: "/solutions/quality",
  },
  {
    id: 3,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance and dedicated support for all your workforce management requirements.",
    image: "/img/demos/transportation-logistic/services/service-3.jpg",
    href: "/solutions/support",
  },
];

export default function ServiceHighlights() {
  return (
    <div className="container">
      <div className="row pt-2 pb-4">
        <div className="col">
          <hr className="solid my-5" />
        </div>
      </div>

      <div className="row pb-5">
        {highlights.map((highlight) => (
          <div key={highlight.id} className="col-4 mb-4">
            <span className="thumb-info thumb-info-swap-content anim-hover-inner-wrapper">
              <span className="thumb-info-wrapper overlay overlay-show overlay-gradient-bottom-content">
                <Image
                  src={highlight.image}
                  className="img-fluid"
                  alt={highlight.title}
                  width={600}
                  height={400}
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "3/2",
                  }}
                  sizes="(max-width: 768px) 100vw, 33.333vw"
                />
                <span className="thumb-info-title bottom-30 bg-transparent w-100 mw-100 p-0 text-center">
                  <span className="thumb-info-swap-content-wrapper">
                    <span className="thumb-info-inner text-3-5 pb-2">
                      <span className="text-light font-weight-semi-bold">
                        {highlight.title}
                      </span>
                    </span>
                    <span className="thumb-info-inner text-2">
                      <p className="px-5 text-2 opacity-7 font-weight-medium text-light ls-0">
                        {highlight.description}
                      </p>
                      <Link
                        href={highlight.href}
                        className="btn border-0 px-3 py-1 line-height-8 btn-primary ls-0"
                      >
                        View Details
                      </Link>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
