// components/Layout/Footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Navigation links ตรงตามเดิม
const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Who We Are", href: "/whoweare" },
  { name: "Solutions", href: "/solutions" },
  { name: "Insights", href: "/insights" },
  { name: "Get In Touch", href: "/getintouch" },
];

// Useful links ตรงตามเดิม
const usefulLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Use", href: "#" },
];

export default function Footer() {
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  return (
    <footer
      id="footer"
      className="position-relative top-1 bg-tertiary border-top-0"
      style={{
        position: "relative",
        top: "0.25rem",
        background: "#262c36", // สี tertiary จาก skin
        borderTop: 0,
      }}
    >
      <div
        className="container py-5"
        style={{
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div
          className="row pt-5"
          style={{
            paddingTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {/* Company Info Section - col-lg-4 */}
          <div
            className="col-lg-4"
            style={{
              maxWidth: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
            }}
          >
            <Link
              href="/"
              className="text-decoration-none"
              style={{ textDecoration: "none" }}
            >
              <Image
                src="/img/vds-logo-footer.svg"
                alt="VDS Logo"
                width={88}
                height={88}
                className="img-fluid mb-4"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginBottom: "1.5rem",
                }}
              />
            </Link>

            <p
              className="text-3-5 pe-lg-2"
              style={{
                fontSize: "16px",
                color: "white",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
              }}
            >
              We empower our clients to grow and compete at highest level of
              services.
            </p>

            <ul
              className="list list-unstyled"
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li
                className="d-flex align-items-center mb-4"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <a
                  href="mailto:contact@vds.co.th"
                  className="d-inline-flex align-items-center text-decoration-none text-color-light text-color-hover-primary font-weight-semibold text-4-5"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "18px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#b61818")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  contact@vds.co.th
                </a>
              </li>
              <li
                className="d-flex align-items-center mb-4"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <a
                  href="tel:089-241-5151"
                  className="d-inline-flex align-items-center text-decoration-none text-color-light text-color-hover-primary font-weight-semibold text-4-5"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "18px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#b61818")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  089-241-5151, 086-396-3824
                </a>
              </li>
            </ul>

            <div
              className="d-none d-xxl-inline-block ws-nowrap"
              style={{
                display: "none",
                whiteSpace: "nowrap",
              }}
            >
              <Link
                href="/find-talent"
                className="btn border-0 px-4 py-2 line-height-9 btn-light text-color-dark me-2"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "white",
                  color: "#262c36",
                  textDecoration: "none",
                  border: 0,
                  borderRadius: "0",
                  lineHeight: "36px",
                  marginRight: "0.5rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#f2f2f2")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "white")
                }
              >
                Find Talent
              </Link>
              <Link
                href="/find-job"
                className="btn border-0 px-4 py-2 line-height-9 btn-primary"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#b61818",
                  color: "white",
                  textDecoration: "none",
                  border: 0,
                  borderRadius: "0",
                  lineHeight: "36px",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#941414")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#b61818")
                }
              >
                Find Job
              </Link>
            </div>
          </div>

          {/* Links Section - col-lg-8 */}
          <div
            className="col-lg-8"
            style={{
              maxWidth: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
            }}
          >
            <div
              className="row mb-5"
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "3rem",
              }}
            >
              {/* Navigation Links - col-lg-6 */}
              <div
                className="col-lg-6 mb-4 mb-lg-0"
                style={{
                  width: "100%",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                  marginBottom: "1.5rem",
                }}
              >
                <h4
                  className="text-color-light font-weight-semibold mb-3"
                  style={{
                    color: "white",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Navigation
                </h4>
                <ul
                  className="list list-unstyled columns-lg-2"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    columnCount: 2,
                    columnGap: "1rem",
                  }}
                >
                  {navigationLinks.map((link, index) => (
                    <li
                      key={index}
                      style={{ marginBottom: "0.5rem", breakInside: "avoid" }}
                    >
                      <Link
                        href={link.href}
                        className="text-color-grey text-color-hover-primary"
                        style={{
                          color: "#969696",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#b61818")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#969696")
                        }
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Links - col-lg-6 */}
              <div
                className="col-lg-6"
                style={{
                  width: "100%",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                }}
              >
                <h4
                  className="text-color-light font-weight-semibold mb-3"
                  style={{
                    color: "white",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Useful Links
                </h4>
                <ul
                  className="list list-unstyled columns-lg-2"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    columnCount: 2,
                    columnGap: "1rem",
                  }}
                >
                  {usefulLinks.map((link, index) => (
                    <li
                      key={index}
                      style={{ marginBottom: "0.5rem", breakInside: "avoid" }}
                    >
                      <Link
                        href={link.href}
                        className="text-color-grey text-color-hover-primary"
                        style={{
                          color: "#969696",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#b61818")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#969696")
                        }
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              <div
                className="col p-relative bottom-3"
                style={{
                  width: "100%",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                  position: "relative",
                  bottom: "0.75rem",
                }}
              >
                {/* Alert Messages */}
                <div
                  className={cn(
                    "alert alert-success",
                    !newsletterSuccess && "d-none"
                  )}
                  id="newsletterSuccess"
                  style={{
                    display: newsletterSuccess ? "block" : "none",
                    padding: "12px 16px",
                    backgroundColor: "#d4edda",
                    border: "1px solid #c3e6cb",
                    color: "#155724",
                    borderRadius: "4px",
                    marginBottom: "16px",
                  }}
                >
                  <strong>Success!</strong> You&apos;ve been added to our email
                  list.
                </div>

                <div
                  className={cn(
                    "alert alert-danger",
                    !newsletterError && "d-none"
                  )}
                  id="newsletterError"
                  style={{
                    display: newsletterError ? "block" : "none",
                    padding: "12px 16px",
                    backgroundColor: "#f8d7da",
                    border: "1px solid #f5c6cb",
                    color: "#721c24",
                    borderRadius: "4px",
                    marginBottom: "16px",
                  }}
                >
                  {newsletterError}
                </div>

                {/* ISO Certification */}
                <div
                  className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Link
                    href="/"
                    className="text-decoration-none"
                    style={{ textDecoration: "none" }}
                  >
                    <Image
                      src="/img/bsi-iso-9001-white.svg"
                      alt="ISO 9001 Certification"
                      width={92}
                      height={92}
                      className="img-fluid mb-4"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        marginBottom: "1.5rem",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        className="footer-copyright bg-transparent"
        style={{ background: "transparent" }}
      >
        <div
          className="container"
          style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 15px" }}
        >
          <hr
            className="bg-color-light opacity-1"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              opacity: 1,
              border: 0,
              height: "1px",
              margin: "1rem 0",
            }}
          />
          <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              className="col mt-4 mb-4 pb-4"
              style={{
                width: "100%",
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
                paddingBottom: "1.5rem",
                paddingRight: "15px",
                paddingLeft: "15px",
              }}
            >
              <p
                className="text-center text-3 mb-0 text-color-grey"
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  margin: 0,
                  color: "#969696",
                }}
              >
                VDS Business Center Co., Ltd. © 2025. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
