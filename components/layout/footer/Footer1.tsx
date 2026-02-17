import Link from "next/link";
import Image from "next/image";

export default function Footer1() {
  return (
    <footer className="footer">
      <div className="container">
        {/* TOP */}
        <div className="footer-top pt-50 pb-30">
          <div className="row">
            {/* Brand / Contact */}
            <div className="col-lg-5 col-md-6 mb-30">
              <Link className="d-flex align-items-center" href="/">
                <Image
                  src="/logo-3.png" // or /logo-4.png (pick one)
                  alt="CrossShine Car Detailing"
                  width={400}
                  height={160}
                  priority
                  style={{ height: "40px", width: "auto" }}
                />
              </Link>

              <p
                className="text-md neutral-400 mt-3 mb-3"
                style={{ maxWidth: 420 }}
              >
                Mobile car detailing — we come to you. Interior, exterior, and
                protection services that restore your shine.
              </p>

              <div className="box-info-contact mt-0">
                <p className="text-md neutral-400 icon-address">
                  Mobile Service • Serving your area
                </p>
                <p className="text-md neutral-400 icon-worktime">
                  Hours: Mon–Sat • 8:00 AM – 6:00 PM
                </p>
                <p className="text-md neutral-400 icon-email">
                  crossshinecar@gmail.com
                </p>
              </div>

              <div className="box-need-help mt-3">
                <p className="need-help text-md-medium mb-5">Call or text</p>
                <Link
                  className="heading-6 phone-support"
                  href="tel:+16156024555"
                >
                  +1 615-602-4555
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 mb-30">
              <h6 className="text-linear-3">Quick Links</h6>
              <ul className="menu-footer">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/services">Services</Link>
                </li>

                <li>
                  <Link href="/about-us">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="col-lg-4 col-md-12 mb-30">
              <h6 className="text-linear-3">Get a Free Quote</h6>
              <p className="text-md neutral-400 mb-3">
                Ready to book? Send a message and we’ll confirm availability.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Link href="/contact" className="btn btn-brand-2">
                  Request Quote
                </Link>
                <a href="tel:+16156024555" className="btn btn-outline-light">
                  Call Now
                </a>
              </div>

              {/* OPTIONAL socials — only keep if you have real links */}
              {/* 
              <div className="mt-4">
                <p className="text-md neutral-400 mb-2">Follow</p>
                <div className="box-socials-footer d-inline-block">
                  <a className="icon-socials icon-instagram" href="YOUR_LINK" target="_blank" rel="noreferrer">Instagram</a>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom mt-30 pb-30">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-md-start text-center mb-10">
              <p className="text-sm color-white mb-0">
                © {new Date().getFullYear()} CrossShine Car Detailing. All
                rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end text-center mb-10">
              <p className="text-sm color-white mb-0">
                Built by{" "}
                <a
                  href="https://www.fassiltsegaye.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline", color: "inherit" }}
                >
                  Fassil Tsegaye
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
