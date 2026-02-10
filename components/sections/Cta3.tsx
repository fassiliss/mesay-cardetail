"use client";
import Link from "next/link";

export default function Cta3() {
  return (
    <section className="section-box background-brand-2 py-60">
      <div className="container text-center">
        <h2 className="text-white mb-15">Ready to Restore Your Car’s Shine?</h2>

        <p className="text-white mb-30">
          Professional interior & exterior detailing. Mobile service available.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link href="/contact" className="btn btn-dark px-4">
            Get a Free Quote
          </Link>

          <a href="tel:+16156024555" className="btn btn-outline-light px-4">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
