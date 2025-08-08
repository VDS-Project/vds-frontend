// components/Layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Navigation items
const navigationItems = [
  { name: "Home", href: "/", file: "index.html" },
  { name: "Who We Are", href: "/whoweare", file: "whoweare.html" },
  { name: "Solutions", href: "/solutions", file: "solutions.html" },
  { name: "Insights", href: "/insights", file: "insights.html" },
  { name: "Get in Touch", href: "/getintouch", file: "getintouch.html" },
];

// Language options
const languages = [
  { code: "en", name: "English" },
  { code: "th", name: "Thailand" },
  { code: "ja", name: "Japan" },
];

// Social media links
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/VDS.BusinessCenter/",
    icon: "fab fa-facebook-f",
  },
  {
    name: "Line",
    href: "https://line.me/ti/p/ZT_r5Oga3d",
    icon: "fab fa-line",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@vds_business",
    icon: "fab fa-tiktok",
  },
  {
    name: "LinkedIn",
    href: "http://www.linkedin.com/",
    icon: "fab fa-linkedin-in",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  // Sticky header functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeSticky = scrollY > 200;

      setIsScrolled(scrollY > 50);
      setIsSticky(shouldBeSticky);

      // Add/remove classes for sticky behavior
      const header = document.getElementById("header");
      if (header) {
        if (shouldBeSticky) {
          header.classList.add("header-effect-reveal-sticky");
          header.style.transform = "translateY(-44px)";
        } else {
          header.classList.remove("header-effect-reveal-sticky");
          header.style.transform = "translateY(0)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLanguageDropdownOpen(false);
  }, [pathname]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        id="header"
        className="header-effect-reveal"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1030,
          transition: "all 0.3s ease",
          transform: isSticky ? "translateY(-44px)" : "translateY(0)",
          boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
        }}
        data-plugin-options={JSON.stringify({
          stickyEnabled: true,
          stickyEffect: "reveal",
          stickyEnableOnBoxed: true,
          stickyEnableOnMobile: false,
          stickyChangeLogo: false,
          stickyStartAt: 200,
          stickySetTop: "-44px",
        })}
      >
        <div
          className="header-body border-0 border-bottom-light"
          style={{ background: "white" }}
        >
          <div className="header-container container-fluid p-0">
            <div className="header-row" style={{ display: "flex" }}>
              {/* Logo Column */}
              <div
                className="header-column header-column-border-right flex-grow-0 d-sticky-header-active-none"
                style={{ borderRight: "1px solid #EDEDED" }}
              >
                <div className="header-row">
                  <div
                    className="header-logo p-relative top-1 m-0"
                    style={{ padding: "1rem" }}
                  >
                    <Link href="/">
                      <Image
                        alt="VDS Logo"
                        width={320}
                        height={150}
                        src="/img/logo/vds-logo-nobg.svg"
                        style={{ maxHeight: "60px", width: "auto" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Main Header Column */}
              <div className="header-column" style={{ flex: 1 }}>
                {/* Top Bar */}
                <div
                  className="border-bottom-light w-100"
                  style={{ borderBottom: "1px solid #EDEDED" }}
                >
                  <div
                    className="hstack gap-4 px-4 py-2 font-weight-semi-bold d-none d-lg-flex"
                    style={{
                      display: "none",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {/* Phone */}
                    <div
                      className="d-none d-lg-inline-block ps-1"
                      style={{
                        display: "inline-block",
                        paddingLeft: "0.25rem",
                      }}
                    >
                      <a
                        className="text-color-default text-color-hover-primary text-2"
                        href="tel:089-241-5151"
                        style={{ color: "#777", textDecoration: "none" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#b61818")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#777")
                        }
                      >
                        089-241-5151
                      </a>
                    </div>

                    {/* Divider */}
                    <div
                      className="vr d-lg-inline-block opacity-2 d-none d-xl-inline-block"
                      style={{
                        width: "1px",
                        height: "20px",
                        backgroundColor: "#EDEDED",
                        opacity: 0.2,
                        display: "inline-block",
                      }}
                    ></div>

                    {/* Email */}
                    <div
                      className="d-none d-xl-inline-block"
                      style={{ display: "inline-block" }}
                    >
                      <a
                        className="text-color-default text-color-hover-primary text-2"
                        href="mailto:contact@vds.co.th"
                        style={{ color: "#777", textDecoration: "none" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#b61818")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#777")
                        }
                      >
                        contact@vds.co.th
                      </a>
                    </div>

                    {/* Divider */}
                    <div
                      className="vr opacity-2 d-none d-xl-inline-block"
                      style={{
                        width: "1px",
                        height: "20px",
                        backgroundColor: "#EDEDED",
                        opacity: 0.2,
                        display: "inline-block",
                      }}
                    ></div>

                    {/* Working Hours */}
                    <div
                      className="d-none d-xl-inline-block"
                      style={{ display: "inline-block" }}
                    >
                      <span
                        className="text-color-default text-2"
                        style={{ color: "#777" }}
                      >
                        Mon — Fri: 8AM — 5PM
                      </span>
                    </div>

                    {/* Language Dropdown */}
                    <div
                      className="ms-auto d-none d-lg-inline-block"
                      style={{ marginLeft: "auto", display: "inline-block" }}
                    >
                      <ul
                        className="nav nav-pills"
                        style={{
                          display: "flex",
                          listStyle: "none",
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        <li
                          className="nav-item dropdown"
                          style={{ position: "relative" }}
                        >
                          <button
                            className="nav-link text-2 p-0 text-color-default"
                            style={{
                              background: "none",
                              border: "none",
                              color: "#777",
                              fontSize: "12px",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                            }
                          >
                            {selectedLanguage.name}
                            <i
                              className="fas fa-angle-down ms-1"
                              style={{ marginLeft: "0.25rem" }}
                            ></i>
                          </button>

                          {isLanguageDropdownOpen && (
                            <div
                              className="dropdown-menu dropdown-menu-end text-2"
                              style={{
                                position: "absolute",
                                top: "100%",
                                right: 0,
                                background: "white",
                                border: "1px solid #EDEDED",
                                borderRadius: "4px",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                                minWidth: "120px",
                                zIndex: 1000,
                                display: "block",
                              }}
                            >
                              {languages.map((language) => (
                                <button
                                  key={language.code}
                                  className="dropdown-item text-color-default"
                                  style={{
                                    display: "block",
                                    width: "100%",
                                    padding: "8px 16px",
                                    border: 0,
                                    background: "transparent",
                                    color: "#777",
                                    textAlign: "left",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    setSelectedLanguage(language);
                                    setIsLanguageDropdownOpen(false);
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                      "#f8f9fa";
                                    e.currentTarget.style.color = "#b61818";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                      "transparent";
                                    e.currentTarget.style.color = "#777";
                                  }}
                                >
                                  {language.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </li>
                      </ul>
                    </div>

                    {/* Divider */}
                    <div
                      className="vr opacity-2 d-none d-lg-inline-block"
                      style={{
                        width: "1px",
                        height: "20px",
                        backgroundColor: "#EDEDED",
                        opacity: 0.2,
                        display: "inline-block",
                      }}
                    ></div>

                    {/* Social Links */}
                    <div
                      className="d-none d-lg-inline-block"
                      style={{ display: "inline-block" }}
                    >
                      <ul
                        className="nav nav-pills me-1"
                        style={{
                          display: "flex",
                          listStyle: "none",
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        {socialLinks.map((social, index) => (
                          <li
                            key={social.name}
                            className="nav-item mx-1"
                            style={{ margin: "0 0.25rem" }}
                          >
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={social.name}
                              className="text-color-default text-color-hover-primary text-2"
                              style={{
                                color: "#777",
                                textDecoration: "none",
                                fontSize: "12px",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "#b61818")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "#777")
                              }
                            >
                              <i className={social.icon}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mobile Top Bar */}
                  <div
                    className="d-lg-none px-3 py-2"
                    style={{
                      display: "block",
                      borderBottom: "1px solid #EDEDED",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "12px",
                      }}
                    >
                      <a
                        href="tel:089-241-5151"
                        style={{ color: "#777", textDecoration: "none" }}
                      >
                        089-241-5151
                      </a>
                      <a
                        href="mailto:contact@vds.co.th"
                        style={{ color: "#777", textDecoration: "none" }}
                      >
                        contact@vds.co.th
                      </a>
                    </div>
                  </div>
                </div>

                {/* Navigation Row */}
                <div
                  className="header-row h-100"
                  style={{ display: "flex", height: "60px" }}
                >
                  <div
                    className="hstack h-100 w-100"
                    style={{ display: "flex", height: "100%", width: "100%" }}
                  >
                    <div
                      className="h-100 w-100 w-xl-auto"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <div
                        className="header-nav header-nav-links h-100 justify-content-end justify-content-lg-start me-4 me-lg-0 ms-lg-3"
                        style={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0 1rem",
                        }}
                      >
                        {/* Desktop Navigation */}
                        <div
                          className="header-nav-main d-none d-lg-block"
                          style={{ display: "none" }}
                        >
                          <nav>
                            <ul
                              className="nav nav-pills"
                              id="mainNav"
                              style={{
                                display: "flex",
                                listStyle: "none",
                                margin: 0,
                                padding: 0,
                                alignItems: "center",
                              }}
                            >
                              {navigationItems.map((item) => (
                                <li
                                  key={item.href}
                                  style={{ margin: "0 0.5rem" }}
                                >
                                  <Link
                                    href={item.href}
                                    className={cn(
                                      "nav-link",
                                      pathname === item.href && "active"
                                    )}
                                    style={{
                                      padding: "8px 16px",
                                      color:
                                        pathname === item.href
                                          ? "#b61818"
                                          : "#777",
                                      textDecoration: "none",
                                      textTransform: "capitalize",
                                      fontSize: "16px",
                                      fontWeight: 500,
                                      transition: "color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                      (e.currentTarget.style.color = "#b61818")
                                    }
                                    onMouseLeave={(e) =>
                                      (e.currentTarget.style.color =
                                        pathname === item.href
                                          ? "#b61818"
                                          : "#777")
                                    }
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </div>

                        {/* Mobile Navigation */}
                        <div
                          className="d-lg-none"
                          style={{ display: "block", width: "100%" }}
                        >
                          {isMobileMenuOpen && (
                            <nav style={{ width: "100%" }}>
                              <ul
                                style={{
                                  listStyle: "none",
                                  margin: 0,
                                  padding: 0,
                                }}
                              >
                                {navigationItems.map((item) => (
                                  <li
                                    key={item.href}
                                    style={{ margin: "0.5rem 0" }}
                                  >
                                    <Link
                                      href={item.href}
                                      style={{
                                        display: "block",
                                        padding: "12px 0",
                                        color:
                                          pathname === item.href
                                            ? "#b61818"
                                            : "#777",
                                        textDecoration: "none",
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        borderBottom: "1px solid #f0f0f0",
                                      }}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </nav>
                          )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                          className="btn header-btn-collapse-nav d-lg-none"
                          style={{
                            background: "none",
                            border: "none",
                            fontSize: "18px",
                            color: "#777",
                            cursor: "pointer",
                            padding: "8px",
                            marginLeft: "auto",
                            display: "block",
                          }}
                          onClick={toggleMobileMenu}
                          aria-label="Toggle navigation"
                        >
                          <i
                            className={
                              isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"
                            }
                          ></i>
                        </button>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div
                      className="d-none d-xxl-flex"
                      style={{
                        display: "none",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0 1rem",
                      }}
                    >
                      <Link
                        href="/find-talent"
                        className="btn btn-tertiary"
                        style={{
                          padding: "8px 16px",
                          background: "#262c36",
                          color: "white",
                          textDecoration: "none",
                          borderRadius: "4px",
                          fontSize: "14px",
                          fontWeight: 500,
                          transition: "background 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "#1b2027")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "#262c36")
                        }
                      >
                        Find Talent
                      </Link>
                      <Link
                        href="/find-job"
                        className="btn btn-primary"
                        style={{
                          padding: "8px 16px",
                          background: "#b61818",
                          color: "white",
                          textDecoration: "none",
                          borderRadius: "4px",
                          fontSize: "14px",
                          fontWeight: 500,
                          transition: "background 0.3s ease",
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: isScrolled ? "140px" : "160px" }}></div>
    </>
  );
}
