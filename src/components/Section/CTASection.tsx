"use client";

export default function CTASection() {
  return (
    <div
      className="m-0"
      style={{
        background: "linear-gradient(135deg, var(--primary) 0%, #8b1538 100%)",
      }}
    >
      <div className="container py-2">
        <div className="row items-center text-center lg:text-left py-5">
          <div className="col-lg-9 mb-3 lg:mb-0">
            <p className="text-white text-4.5 font-medium leading-tight mb-0">
              <span className="inline-block">
                <strong>Get a Workforce Quote Online</strong> – Need urgent
                support? Call <u className="text-white">089-241-5151</u>
              </span>
            </p>
          </div>
          <div className="col-lg-3 pt-3 lg:pt-0 text-center lg:text-right">
            <span className="inline-block">
              <a
                href="#"
                className="btn bg-white text-tertiary border-0 text-3.5 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors duration-300"
              >
                Get a Quote
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
