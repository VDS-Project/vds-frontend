"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Recruitment Services",
    description:
      "Comprehensive talent search and placement for all business needs.",
    icon: "/img/icons/recruitment.svg",
    href: "/solutions/recruitment",
  },
  {
    id: 2,
    title: "Manpower Outsourcing",
    description:
      "Flexible staffing solutions for operational excellence and cost efficiency.",
    icon: "/img/icons/outsourcing.svg",
    href: "/solutions/outsourcing",
  },
  {
    id: 3,
    title: "Foreign Worker Recruitment",
    description:
      "Legal sourcing and deployment of migrant workers for your industry needs.",
    icon: "/img/icons/foreign-worker.svg",
    href: "/solutions/foreign-workers",
  },
  {
    id: 4,
    title: "Labor Consulting",
    description:
      "Professional advisory on labor regulations, compliance, and HR strategies.",
    icon: "/img/icons/consulting.svg",
    href: "/solutions/consulting",
  },
];

export default function ServicesGrid() {
  return (
    <div className="container">
      <div className="row">
        {services.map((service) => (
          <div
            key={service.id}
            className="col-lg-6 mb-4 anim-hover-translate-top-10px transition-3ms"
          >
            <div className="card">
              <div className="card-body p-5">
                <div className="d-flex flex-row">
                  <div className="pt-2">
                    <Image
                      width={70}
                      height={43}
                      src={service.icon}
                      alt={service.title}
                      className="svg-fill-color-primary"
                      priority={service.id <= 2} // Load first 2 icons with priority
                    />
                  </div>
                  <div className="ps-4">
                    <h4 className="mb-2 text-5 font-weight-semi-bold">
                      {service.title}
                    </h4>
                    <p className="mb-2 font-weight-medium text-3">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="text-uppercase text-2-5 stretched-link text-decoration-underline text-color-primary text-color-hover-tertiary font-weight-semi-bold transition-2ms d-inline-block"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
