"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <div className="bg-gradient m-0 p-relative top-1">
      <div className="container py-2">
        <div className="row align-items-center text-center text-lg-start py-5">
          <div className="col-lg-9 mb-3 mb-lg-0">
            <p className="text-color-light text-4-5 font-weight-medium line-height-4 mb-0">
              <span
                className="d-inline-block appear-animation"
                data-appear-animation="fadeInUpShorterPlus"
                data-appear-animation-delay="0"
              >
                Get the best workforce solutions for your business growth.
                Partner with Thailand&apos;s leading manpower provider.
              </span>
            </p>
          </div>
          <div className="col-lg-3 pt-3 pt-lg-0 text-center text-lg-end">
            <span
              className="d-inline-block appear-animation"
              data-appear-animation="fadeInUpShorterPlus"
              data-appear-animation-delay="300"
            >
              <Link
                href="/getintouch"
                className="btn btn-light text-color-tertiary border-0 text-3-5 font-weight-semi-bold btn-px-5 btn-py-3"
              >
                Request Rate
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
