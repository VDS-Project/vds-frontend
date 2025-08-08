"use client";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="border-0 section-intro">
      <div className="container py-5 mt-5">
        <div className="row mt-4">
          <div className="col-lg-5">
            <p className="font-medium text-4 mb-4">
              <span
                className="inline-block text-tertiary font-bold text-6xl leading-none mr-4 -mt-2 float-left"
                style={{
                  fontFamily: "serif",
                  letterSpacing: "-1px",
                }}
              >
                22
              </span>
              years of trusted experience in workforce solutions and manpower
              outsourcing for world-class businesses.
            </p>
            <p className="m-0">
              <Link
                href="/whoweare"
                className="uppercase text-3.5 underline text-primary hover:text-tertiary font-semibold transition-all duration-300 inline-block"
              >
                More Who We Are
              </Link>
            </p>
          </div>

          <div className="hidden lg:block col-lg-1 text-center">
            <div
              className="h-full w-px bg-primary/10 mx-auto"
              style={{ minHeight: "150px" }}
            />
          </div>

          <div className="pb-5 lg:pb-0 my-5 lg:my-0 col-lg-6">
            <p
              className="font-medium text-8 leading-tight text-tertiary relative -bottom-2.5"
              style={{ letterSpacing: "-1px" }}
            >
              <span className="lg:inline-block">
                We <strong>empower</strong> our clients
              </span>{" "}
              <span className="lg:inline-block">
                to grow and compete at highest level of services.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
