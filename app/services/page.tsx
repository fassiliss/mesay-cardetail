"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

const services = [
  {
    title: "Interior & Exterior Detail",
    desc: "Complete inside + outside detailing for a clean, refreshed finish.",
    img: "/assets/imgs/services/placeholders/interior.png",
  },
  {
    title: "Steam Cleaning & Sanitizing",
    desc: "Deep steam clean to remove germs, odors, and grime safely.",
    img: "/assets/imgs/services/placeholders/steam1.png",
  },
  {
    title: "Wax & Paint Protection",
    desc: "High-gloss shine with protection from sun, rain, and dirt.",
    img: "/assets/imgs/services/placeholders/wax.png",
  },
  {
    title: "Carpet & Seat Shampoo",
    desc: "Lift stains and restore seats & carpets for a like-new interior.",
    img: "/assets/imgs/services/placeholders/seats.png",
  },
  {
    title: "Engine Bay Cleaning",
    desc: "Careful cleaning under the hood for a polished look.",
    img: "/assets/imgs/services/placeholders/engine.png",
  },
  {
    title: "Tire Cleaning & Shine",
    desc: "Deep tire clean + shine for a crisp, finished appearance.",
    img: "/assets/imgs/services/placeholders/tires.png",
  },
  {
    title: "Custom Detailing Packages",
    desc: "Choose what you need—build a package that fits your vehicle.",
    img: "/assets/imgs/services/placeholders/custom.png",
  },
  {
    title: "Fleet Wash Service",
    desc: "Recurring fleet service for business vehicles—on schedule.",
    img: "/assets/imgs/services/placeholders/fleet.png",
  },
];

const testimonials = [
  {
    title: "Amazing Transformation",
    text: "My car looked brand new after their full detail. The interior was spotless and the exterior had an incredible shine. Highly recommend!",
    author: "Marcus Johnson",
    location: "Nashville",
    img: "/assets/imgs/testimonials/testimonials-1/author-1.png",
  },
  {
    title: "Best Mobile Service",
    text: "They came to my office and detailed my car while I worked. Super convenient and the results were fantastic. Will definitely use again.",
    author: "Jennifer Davis",
    location: "Franklin",
    img: "/assets/imgs/testimonials/testimonials-1/author-2.png",
  },
  {
    title: "Professional & Thorough",
    text: "The attention to detail is unmatched. They got stains out of my seats that I thought were permanent. Great communication throughout.",
    author: "David Thompson",
    location: "Brentwood",
    img: "/assets/imgs/testimonials/testimonials-1/author-3.png",
  },
];

export default function Services() {
  return (
    <>
      <Layout  footerStyle={1}>
        <div>
          {/* Page Header */}
          <div className="page-header pt-30 background-body">
            <div className="custom-container position-relative mx-auto">
              <div className="bg-overlay rounded-12 overflow-hidden">
                <img
                  className="w-100 h-100 img-banner"
                  src="/assets/imgs/page-header/banner1.png"
                  alt="CrossShine"
                />
              </div>
              <div className="container position-absolute z-1 top-50 start-50 translate-middle">
                <h2 className="text-white">Our Services</h2>
                <span className="text-white text-xl-medium">
                  Professional detailing, exceptional results
                </span>
              </div>
              <div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3">
                <Link href="/" className="neutral-700 text-md-medium">
                  Home
                </Link>
                <span>
                  <img
                    src="/assets/imgs/template/icons/arrow-right.svg"
                    alt="CrossShine"
                  />
                </span>
                <Link href="#" className="neutral-1000 text-md-bold">
                  Services
                </Link>
              </div>
            </div>
          </div>

          {/* Services List */}
          <section className="section-box background-body py-96">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-7">
                  <h3 className="neutral-1000">
                    Complete <span className="text-primary">Car Detailing</span>{" "}
                    Services for Every Need
                  </h3>
                </div>
                <div className="col-lg-5">
                  <p className="text-lg-medium neutral-500">
                    From quick exterior washes to full interior deep cleans, we
                    offer professional detailing services that restore your
                    vehicle's shine. Mobile service available.
                  </p>
                </div>
              </div>
              <div className="row mt-50">
                {services.map((service, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="card-news background-card hover-up mb-24">
                      <div className="card-image">
                        <img
                          src={service.img}
                          alt={service.title}
                          style={{
                            width: "100%",
                            height: 200,
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="card-info">
                        <div className="card-title mb-3">
                          <Link
                            className="text-xl-bold neutral-1000"
                            href="/contact"
                          >
                            {service.title}
                          </Link>
                          <p className="text-md-medium neutral-500 mt-2">
                            {service.desc}
                          </p>
                        </div>
                        <div className="card-program">
                          <div className="endtime">
                            <div className="card-button">
                              <Link
                                className="btn btn-primary2"
                                href="/contact"
                              >
                                Get a Quote
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="section-box-banner-3 banner-2 background-body">
            <div className="container pt-110 pb-110 position-relative z-1">
              <div className="row justify-content-center">
                <div className="col-auto text-center wow fadeInUp justify-content-center d-flex flex-column align-items-center">
                  <h2 className="text-white">First-Time Customer Special</h2>
                  <h6 className="text-white">
                    Get 15% off your first full detail <br />
                    Book today and restore your car's shine
                  </h6>
                  <Link
                    className="btn btn-primary rounded-pill btn-lg mt-20"
                    href="/contact"
                  >
                    Book Your Detail
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M12.5 19L19.5 12L12.5 5M19.5 12L5.5 12"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="section-box py-96 background-body">
            <div className="container">
              <div className="row">
                <div className="col-auto mx-auto wow fadeInUp text-center d-flex flex-column align-items-center justify-content-center">
                  <div className="box-author-testimonials background-100">
                    <img
                      src="/assets/imgs/page/homepage1/testimonial.png"
                      alt="CrossShine"
                    />
                    <img
                      src="/assets/imgs/page/homepage1/testimonial2.png"
                      alt="CrossShine"
                    />
                    <img
                      src="/assets/imgs/page/homepage1/testimonial3.png"
                      alt="CrossShine"
                    />
                    Testimonials
                  </div>
                  <h3 className="mt-8 mb-15 neutral-1000">
                    What our customers say
                  </h3>
                </div>
              </div>
              <div className="row mt-30">
                {testimonials.map((testimonial, index) => (
                  <div className="col-lg-4 col-md-6 mb-4" key={index}>
                    <div className="card-testimonial background-card h-100">
                      <div className="card-info">
                        <p className="text-xl-bold card-title neutral-1000">
                          {testimonial.title}
                        </p>
                        <p className="text-md-regular neutral-500">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="card-top pt-40 border-0 mb-0">
                        <div className="card-author">
                          <div className="card-image">
                            <img
                              src={testimonial.img}
                              alt={testimonial.author}
                            />
                          </div>
                          <div className="card-info">
                            <p className="text-lg-bold neutral-1000">
                              {testimonial.author}
                            </p>
                            <p className="text-md-regular neutral-1000">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                        <div className="card-rate">
                          {[...Array(5)].map((_, i) => (
                            <img
                              key={i}
                              className="background-brand-2 p-1"
                              src="/assets/imgs/template/icons/star-black.svg"
                              alt="star"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us CTA */}
          <section className="section-cta-7 background-body">
            <div className="box-cta-6">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img
                      className="rounded-12 w-100"
                      src="/assets/imgs/cta/cta-10/img-1.png"
                      alt="CrossShine Detailing"
                    />
                  </div>
                  <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-4">
                    <h4 className="mb-4 neutral-1000">
                      Why Choose CrossShine?
                    </h4>
                    <p className="text-lg-medium neutral-500 mb-4">
                      We bring professional detailing to you. Quality products,
                      experienced technicians, and results that speak for
                      themselves.
                    </p>
                    <div className="row">
                      <div className="col">
                        <ul className="list-ticks-green list-ticks-green-2">
                          <li className="neutral-1000 pe-0">
                            Mobile service — we come to you
                          </li>
                          <li className="neutral-1000 pe-0">
                            Premium products safe for all surfaces
                          </li>
                          <li className="neutral-1000 pe-0">
                            Satisfaction guaranteed on every detail
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Link className="btn btn-primary mt-2" href="/contact">
                      Get a Free Quote
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 15L15 8L8 1M15 8L1 8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-overlay position-absolute bottom-0 end-0 h-75 background-brand-2 opacity-25 z-0 rounded-start-pill" />
            </div>
          </section>

          {/* Stats Section */}
          <section className="section-static-1 background-body border-bottom">
            <div className="container">
              <div className="row">
                <div className="pt-65 pb-96">
                  <div className="wow fadeIn">
                    <div className="d-flex align-items-center justify-content-around flex-wrap">
                      <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                        <div className="d-flex justify-content-center justify-content-md-start">
                          <h3 className="count neutral-1000">
                            <CounterUp count={5} />
                          </h3>
                          <h3 className="neutral-1000">+</h3>
                        </div>
                        <div className="text-md-start text-center">
                          <p className="text-lg-bold neutral-1000">Years</p>
                          <p className="text-lg-bold neutral-1000">
                            Experience
                          </p>
                        </div>
                      </div>
                      <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                        <div className="d-flex justify-content-center justify-content-md-start">
                          <h3 className="count neutral-1000">
                            <CounterUp count={2000} />
                          </h3>
                          <h3 className="neutral-1000">+</h3>
                        </div>
                        <div className="text-md-start text-center">
                          <p className="text-lg-bold neutral-1000">Cars</p>
                          <p className="text-lg-bold neutral-1000">Detailed</p>
                        </div>
                      </div>
                      <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                        <div className="d-flex justify-content-center justify-content-md-start">
                          <h3 className="count neutral-1000">
                            <CounterUp count={500} />
                          </h3>
                          <h3 className="neutral-1000">+</h3>
                        </div>
                        <div className="text-md-start text-center">
                          <p className="text-lg-bold neutral-1000">Happy</p>
                          <p className="text-lg-bold neutral-1000">Customers</p>
                        </div>
                      </div>
                      <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                        <div className="d-flex justify-content-center justify-content-md-start">
                          <h3 className="count neutral-1000">
                            <CounterUp count={5} />
                          </h3>
                          <h3 className="neutral-1000">★</h3>
                        </div>
                        <div className="text-md-start text-center">
                          <p className="text-lg-bold neutral-1000">Google</p>
                          <p className="text-lg-bold neutral-1000">Rating</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
