"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Interior Detail",
    message: "",
    agree: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.agree) {
      alert("Please agree to the Terms and Privacy Policy.");
      return;
    }

    // TODO: connect to email/API (Formspree, Resend, Next API route, etc.)
    console.log("Submitted:", form);
    alert("Thanks! We received your request. We’ll contact you soon.");
  };

  return (
    <Layout footerStyle={1} >
      <div>
        {/* header */}
        <div className="page-header pt-30 background-body">
          <div className="custom-container position-relative mx-auto">
            <div className="bg-overlay rounded-12 overflow-hidden">
              <img
                className="w-100 h-100 rounded-12 img-banner"
                src="/assets/imgs/page-header/banner4.png"
                alt="Contact"
              />
            </div>
            <div className="container position-absolute z-1 top-50 start-50 translate-middle text-center">
              <h2 className="text-white">Get a Quote</h2>
              <span className="text-white text-xl-medium">
                Paint correction • Ceramic coating • Interior detailing
              </span>
            </div>
          </div>
        </div>

        {/* contact cards - replace "agents worldwide" */}
        <section className="box-section background-body pt-110">
          <div className="container">
            <div className="text-start">
              <h4 className="neutral-1000">Contact Details</h4>
              <p className="neutral-500 mb-0">
                Book an appointment or ask about packages & pricing.
              </p>
            </div>

            <div className="row mt-30">
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card-contact">
                  <div className="card-info p-4">
                    <div className="card-title">
                      <p className="title heading-6 mb-1">Call / Text</p>
                    </div>
                    <Link
                      className="phone text-md-medium"
                      href="tel:+12125550146"
                    >
                      +1 (615) 602-4555
                    </Link>
                    <p className="neutral-500 mt-2 mb-0">Mon–Sat: 9am–6pm</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card-contact">
                  <div className="card-info p-4">
                    <div className="card-title">
                      <p className="title heading-6 mb-1">Email</p>
                    </div>
                    <Link
                      className="email text-md-medium"
                      href="mailto:hello@yourdetailshop.com"
                    >
                      crossshinecar@gmail.com
                    </Link>
                    <p className="neutral-500 mt-2 mb-0">
                      We reply within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card-contact">
                  <div className="card-info p-4">
                    <div className="card-title">
                      <p className="title heading-6 mb-1">Location</p>
                    </div>
                    <p className="text-md-medium mb-2 neutral-1000">
                      12560 Rental Rd, Memphis, TN 38118
                    </p>
                    <Link
                      className="text-md-medium"
                      href="https://www.google.com/maps"
                      target="_blank"
                    >
                      Open in Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* form + map */}
        <section className="box-section box-contact-form background-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-30">
                <h2 className="neutral-1000 mb-25">
                  Request a Detailing Quote
                </h2>

                <form className="form-contact" onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="text-sm-medium neutral-1000">
                          First Name
                        </label>
                        <input
                          className="form-control username"
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={onChange}
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="text-sm-medium neutral-1000">
                          Last Name
                        </label>
                        <input
                          className="form-control username"
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={onChange}
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="text-sm-medium neutral-1000">
                          Email Address
                        </label>
                        <input
                          className="form-control email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={onChange}
                          placeholder="email@domain.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="text-sm-medium neutral-1000">
                          Phone Number
                        </label>
                        <input
                          className="form-control phone"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={onChange}
                          placeholder="(555) 555-5555"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="text-sm-medium neutral-1000">
                          Service Needed
                        </label>
                        <select
                          className="form-control"
                          name="service"
                          value={form.service}
                          onChange={onChange}
                        >
                          <option>Interior Detail</option>
                          <option>Exterior Detail</option>
                          <option>Full Detail</option>
                          <option>Paint Correction</option>
                          <option>Ceramic Coating</option>
                          <option>Engine Bay Detail</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="text-sm-medium neutral-1000">
                          Your Message
                        </label>
                        <textarea
                          className="form-control"
                          rows={6}
                          name="message"
                          value={form.message}
                          onChange={onChange}
                          placeholder="Tell us your vehicle (year/make/model), condition, and what you want done…"
                        />
                      </div>
                    </div>

                    <div className="box-remember-forgot">
                      <div className="form-group">
                        <div className="remeber-me">
                          <label className="text-sm-medium neutral-500">
                            <input
                              className="cb-remember"
                              type="checkbox"
                              name="agree"
                              checked={form.agree}
                              onChange={onChange}
                            />{" "}
                            Agree to our{" "}
                            <Link
                              className="text-sm-medium neutral-1000"
                              href="/term"
                            >
                              Terms of service
                            </Link>{" "}
                            and{" "}
                            <Link
                              className="text-sm-medium neutral-1000"
                              href="/privacy"
                            >
                              Privacy Policy
                            </Link>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button className="btn btn-book" type="submit">
                        Send Request
                        <svg
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                        >
                          <path
                            d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-lg-6 mb-30">
                <div className="ps-lg-5">
                  <h4 className="neutral-1000">
                    Mobile Service — We Come To You
                  </h4>
                  <p className="neutral-500 mb-3">
                    Door-to-door detailing at your home or workplace. Tell us
                    your city/zip and we’ll confirm availability.
                  </p>

                  <div className="background-card rounded-12 p-4">
                    <div className="mb-3">
                      <p className="text-sm-bold neutral-1000 mb-1">
                        Service Area
                      </p>
                      <p className="neutral-500 mb-0">
                        Memphis + surrounding areas (add your cities here).
                        Travel fees may apply outside our core zone.
                      </p>
                    </div>

                    <div className="mb-3">
                      <p className="text-sm-bold neutral-1000 mb-1">Hours</p>
                      <p className="neutral-500 mb-0">
                        Mon–Sat: 9am–6pm • Sun: By appointment
                      </p>
                    </div>

                    <div>
                      <p className="text-sm-bold neutral-1000 mb-1">
                        What to Prepare
                      </p>
                      <ul className="list-ticks-green list-ticks-green-2 mb-0">
                        <li className="neutral-500">Access to the vehicle</li>
                        <li className="neutral-500">
                          Optional: water/power (if available)
                        </li>
                        <li className="neutral-500">
                          We bring our own equipment
                        </li>
                      </ul>
                    </div>
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
