"use client";

import Link from "next/link";
import PerfectScrollbar from "react-perfect-scrollbar";
import dynamic from "next/dynamic";

// ✅ Dark/Light toggle (client-only)
const ThemeSwitch = dynamic(() => import("@/components/elements/ThemeSwitch"), {
  ssr: false,
});

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <PerfectScrollbar className="mobile-header-wrapper-inner">
          {/* ✅ Top bar */}
          <div className="mobile-header-logo d-flex align-items-center justify-content-between">
            <Link className="d-flex" href="/" onClick={handleMobileMenu}>
              <img
                className="light-mode"
                alt="Cross Shine"
                src="/logo-3.png"
                style={{ height: 34, width: "auto" }}
              />
            </Link>

            <div className="d-flex align-items-center gap-3">
              {/* ✅ Theme toggle on mobile */}
              <ThemeSwitch />

              {/* ✅ Close menu icon */}
              <div
                className="burger-icon burger-icon-white"
                onClick={handleMobileMenu}
              />
            </div>
          </div>

          {/* ✅ Menu links */}
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li>
                      <Link href="/" onClick={handleMobileMenu}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" onClick={handleMobileMenu}>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery" onClick={handleMobileMenu}>
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us" onClick={handleMobileMenu}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" onClick={handleMobileMenu}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>

      {/* ✅ Overlay */}
      {isMobileMenu && (
        <div className="body-overlay-1" onClick={handleMobileMenu} />
      )}
    </>
  );
}
