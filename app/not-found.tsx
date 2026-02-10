import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout footerStyle={1}>
      <div className="container pt-140 pb-170">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="d-flex justify-content-center align-items-center flex-column text-center">
              <h1 className="mb-2">404</h1>
              <h4 className="neutral-1000">Page Not Found</h4>

              <p className="text-md-medium neutral-500 mt-3">
                Sorry, this page doesn’t exist. But we can still make your car
                shine again ✨
              </p>

              <div className="d-flex gap-2 flex-wrap justify-content-center mt-30">
                <Link href="/" className="btn btn-primary">
                  Back to Home
                </Link>

                <Link
                  href="/services"
                  className="btn btn-primary bg-transparent invert"
                >
                  View Services
                </Link>

                <Link href="/contact" className="btn btn-brand-2">
                  Get a Quote
                </Link>

                {/* ✅ Call Now Button */}
                <a href="tel:+16156024555" className="btn btn-black">
                  Call Now
                </a>
              </div>

              <div className="mt-40">
                <img
                  src="/assets/imgs/template/404.png"
                  alt="Cross Shine Car Detailing"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>

              <p className="text-sm neutral-500 mt-4 mb-0">
                Phone: <strong>(615) 602-4555</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
