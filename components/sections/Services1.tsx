"use client";
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

export default function Services1() {
  return (
    <section className="section-box background-body">
      <div className="container">
        <div className="text-center mb-40">
          <h3 className="neutral-1000">Our Detailing Services</h3>
          <p className="text-lg-medium neutral-500 mt-2">
            From quick refresh packages to full deep-clean details. Mobile
            service available.
          </p>
        </div>

        <div className="row">
          {services.map((s) => (
            <div className="col-lg-3 col-md-6 mb-4" key={s.title}>
              <div className="background-card p-4 rounded-12 h-100 hover-up">
                <div className="mb-3">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="rounded-3 mb-2"
                    style={{ width: "100%", height: 140, objectFit: "cover" }}
                  />
                  <h6 className="neutral-1000">{s.title}</h6>
                </div>

                <p className="text-md-regular neutral-500 mb-3">{s.desc}</p>

                <Link href="/contact" className="btn btn-gray btn-sm">
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/services" className="btn btn-brand-2">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
