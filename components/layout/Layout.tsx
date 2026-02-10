"use client";

import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import MobileMenu from "./MobileMenu";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Header1 from "./header/Header1";

interface LayoutProps {
  headerStyle?: number;
  footerStyle?: number;
  children?: React.ReactNode;
  breadcrumbTitle?: string;
}

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
}: LayoutProps) {
  const [scroll, setScroll] = useState(false);

  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-active")
      : document.body.classList.remove("mobile-menu-active");
  };

  useEffect(() => {
    const WOW: any = require("wowjs");
    (window as any).wow = new WOW.WOW({ live: false });
    (window as any).wow.init();

    const handleScroll = () => setScroll(window.scrollY > 100);
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="top" />

      <Header1
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      <main className="main">
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
      </main>

      {!footerStyle && <Footer1 />}
      {footerStyle === 1 ? <Footer1 /> : null}
      {footerStyle === 2 ? <Footer2 /> : null}

      <BackToTop target="#top" />
    </>
  );
}
