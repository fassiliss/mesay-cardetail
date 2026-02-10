"use client";

import { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";

import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import { swiperGroup3, swiperGroupAnimate } from "@/util/swiperOptions";

export default function AboutUs() {
  const [isOpen, setOpen] = useState(false);
  const [isAccordion, setIsAccordion] = useState<number | null>(1);

  const handleAccordion = (key: number) => {
    setIsAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        <div className="page-header pt-30 background-body">
          <div className="custom-container position-relative mx-auto">
            <div className="bg-overlay rounded-12 overflow-hidden">
              <img
                className="w-100 h-100 img-banner"
                src="/assets/imgs/page-header/banner.png"
                alt="Carento"
              />
            </div>

            <div className="container position-absolute z-1 top-50 start-50 translate-middle">
              <h2 className="text-white">About Us</h2>
              <span className="text-white text-xl-medium">
                Get the latest news, Paint correction, ceramic coating, interior
                detailing.
              </span>
            </div>

            <div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 @@navigation-page">
              <Link href="/" className="neutral-700 text-md-medium">
                Home
              </Link>
              <span>
                <img
                  src="/assets/imgs/template/icons/arrow-right.svg"
                  alt="Carento"
                />
              </span>
              <span className="neutral-1000 text-md-bold">About Us</span>
            </div>
          </div>
        </div>

        {/* section-1 */}
        <section className="section-1 py-96 background-body">
          {/* ... keep your section markup exactly as-is ... */}
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
                        <p>How do I make a reservation on your website</p>
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
                        Provide a step-by-step guide on how users can browse and
                        book travel services on your platform...
                      </div>
                    </div>
                  </div>

                  {/* Repeat the same collapsed/show pattern for 2..5 */}
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
                      href="/help"
                    >
                      Help Center
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

        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="JXMWOmuR1hU"
          onClose={() => setOpen(false)}
        />
      </div>
    </Layout>
  );
}
