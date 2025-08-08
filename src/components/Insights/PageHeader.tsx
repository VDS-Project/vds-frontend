"use client";

import Link from "next/link";

export default function PageHeader() {
  return (
    <div className="custom-page-header border-bottom-light">
      <section
        className="page-header page-header-modern page-header-lg overlay overlay-light overlay-show overlay-op-9 m-0"
        style={{
          backgroundImage:
            "url(/img/demos/transportation-logistic/backgrounds/background-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-4">
          <div className="row">
            <div className="col">
              <ul className="breadcrumb text-4 font-weight-semi-bold mb-2">
                <li>
                  <Link
                    href="/"
                    className="text-color-primary text-decoration-none text-capitalize"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-color-primary active text-capitalize">
                  Insights
                </li>
              </ul>
              <h1 className="text-color-tertiary font-weight-semi-bold text-9">
                Insights
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
