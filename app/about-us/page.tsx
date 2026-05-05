"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function AboutUs() {
  const [isAccordion, setIsAccordion] = useState<number | null>(1);

  const handleAccordion = (key: number) => {
    setIsAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <Layout footerStyle={1}>
      <div>
        <div className="page-header pt-30 background-body">
          <div className="custom-container position-relative mx-auto">
            <div className="bg-overlay rounded-12 overflow-hidden">
              <img
                className="w-100 h-100 img-banner"
                src="/assets/imgs/page-header/banner.png"
                alt="Cross Shine car detailing"
              />
            </div>

            <div className="container position-absolute z-1 top-50 start-50 translate-middle">
              <h2 className="text-white">About Us</h2>
              <span className="text-white text-xl-medium">
                Mobile detailing, paint correction, ceramic coating, and
                interior deep cleaning.
              </span>
            </div>

            <div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 @@navigation-page">
              <Link href="/" className="neutral-700 text-md-medium">
                Home
              </Link>
              <span>
                <img
                  src="/assets/imgs/template/icons/arrow-right.svg"
                  alt="Next"
                />
              </span>
              <span className="neutral-1000 text-md-bold">About Us</span>
            </div>
          </div>
        </div>

        {/* section-1 */}
        <section className="section-1 py-96 background-body">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-30">
                <h3 className="neutral-1000 mb-20">
                  We bring professional detailing to your driveway
                </h3>
                <p className="text-lg-medium neutral-500 mb-20">
                  Cross Shine Car Detailing helps Nashville drivers keep their
                  vehicles clean, protected, and ready for the road without
                  spending the day at a shop.
                </p>
                <p className="neutral-500 mb-0">
                  From interior refreshes to full details, engine bay cleaning,
                  paint correction, and ceramic coating, every appointment is
                  built around careful work, clear communication, and a final
                  walkthrough before we leave.
                </p>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="background-card rounded-12 p-4">
                  <h5 className="neutral-1000 mb-3">Why customers call us</h5>
                  <ul className="list-ticks-green list-ticks-green-2 mb-0">
                    <li className="neutral-500">
                      Mobile service at your home, office, or fleet location
                    </li>
                    <li className="neutral-500">
                      Interior, exterior, protection, and custom packages
                    </li>
                    <li className="neutral-500">
                      Clear scheduling and quote confirmation before work starts
                    </li>
                    <li className="neutral-500">
                      Detail-focused service for daily drivers and business
                      vehicles
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* faqs 1 */}
        <section className="section-box box-faqs background-body pt-0">
          <div className="box-faqs-inner">
            <div className="container">
              <div className="text-center">
                <span className="text-sm-bold bg-2 p-3 rounded-12">
                  Our Support
                </span>
                <h3 className="mt-4 neutral-1000">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="block-faqs">
                <div className="accordion" id="accordionFAQ">
                  <div className="accordion-item wow fadeInUp border-bottom-0">
                    <h5
                      className="accordion-header"
                      id="headingOne"
                      onClick={() => handleAccordion(1)}
                    >
                      <button
                        className={`accordion-button text-heading-5 ${
                          isAccordion === 1 ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded={isAccordion === 1}
                        aria-controls="collapseOne"
                      >
                        <h3>01</h3>
                        <p>How do I request a detailing appointment?</p>
                      </button>
                    </h5>

                    <div
                      className={`accordion-collapse collapse ${
                        isAccordion === 1 ? "show" : ""
                      }`}
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        Send a quote request with your service, vehicle type,
                        and preferred date. We will confirm availability,
                        package details, and pricing before your appointment is
                        locked in.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item wow fadeInUp border-bottom-0">
                    <h5
                      className="accordion-header"
                      id="headingTwo"
                      onClick={() => handleAccordion(2)}
                    >
                      <button
                        className={`accordion-button text-heading-5 ${
                          isAccordion === 2 ? "" : "collapsed"
                        }`}
                        type="button"
                        aria-expanded={isAccordion === 2}
                        aria-controls="collapseTwo"
                      >
                        <h3>02</h3>
                        <p>Do you come to my location?</p>
                      </button>
                    </h5>
                    <div
                      className={`accordion-collapse collapse ${
                        isAccordion === 2 ? "show" : ""
                      }`}
                      id="collapseTwo"
                      aria-labelledby="headingTwo"
                    >
                      <div className="accordion-body">
                        Yes. Cross Shine is a mobile detailing service for
                        Nashville and surrounding areas. Travel fees may apply
                        outside the core service area.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item wow fadeInUp border-bottom-0">
                    <h5
                      className="accordion-header"
                      id="headingThree"
                      onClick={() => handleAccordion(3)}
                    >
                      <button
                        className={`accordion-button text-heading-5 ${
                          isAccordion === 3 ? "" : "collapsed"
                        }`}
                        type="button"
                        aria-expanded={isAccordion === 3}
                        aria-controls="collapseThree"
                      >
                        <h3>03</h3>
                        <p>Do I need to provide water or power?</p>
                      </button>
                    </h5>
                    <div
                      className={`accordion-collapse collapse ${
                        isAccordion === 3 ? "show" : ""
                      }`}
                      id="collapseThree"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        Access to water or power is helpful when available, but
                        we can confirm what is needed for your package when we
                        schedule the job.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item wow fadeInUp border-bottom-0">
                    <h5
                      className="accordion-header"
                      id="headingFour"
                      onClick={() => handleAccordion(4)}
                    >
                      <button
                        className={`accordion-button text-heading-5 ${
                          isAccordion === 4 ? "" : "collapsed"
                        }`}
                        type="button"
                        aria-expanded={isAccordion === 4}
                        aria-controls="collapseFour"
                      >
                        <h3>04</h3>
                        <p>Which service should I choose?</p>
                      </button>
                    </h5>
                    <div
                      className={`accordion-collapse collapse ${
                        isAccordion === 4 ? "show" : ""
                      }`}
                      id="collapseFour"
                      aria-labelledby="headingFour"
                    >
                      <div className="accordion-body">
                        Choose a full detail if you want the whole vehicle
                        refreshed. Choose interior or exterior detail for a more
                        focused clean, and ask about paint correction or ceramic
                        coating when you want longer-term paint protection.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 wow fadeInUp mt-4">
                  <div className="d-flex justify-content-center gap-2">
                    <Link className="btn btn-primary mt-2" href="/contact">
                      Contact Us
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

                    <Link
                      className="btn btn-primary bg-transparent mt-2 invert"
                      href="/gallery"
                    >
                      View Gallery
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
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
