"use client";
import Link from "next/link";

const items = [
  {
    title: "Interior Deep Clean",
    before: "/assets/imgs/gallery/before-after/interior-before.png",
    after: "/assets/imgs/gallery/before-after/interior-after.png",
  },
  {
    title: "Exterior Wash + Wax",
    before: "/assets/imgs/gallery/before-after/exterior-before.png",
    after: "/assets/imgs/gallery/before-after/exterior-after.png",
  },
  {
    title: "Seat & Carpet Shampoo",
    before: "/assets/imgs/gallery/before-after/seats-before.png",
    after: "/assets/imgs/gallery/before-after/seats-after.png",
  },
  {
    title: "Engine Bay Detail",
    before: "/assets/imgs/gallery/before-after/engine-before.png",
    after: "/assets/imgs/gallery/before-after/engine-after.png",
  },
];

export default function Gallery() {
  return (
    <section className="section-box background-body pt-96 pb-50">
      <div className="container">
        <div className="row align-items-end mb-40">
          <div className="col-md-8">
            <h3 className="neutral-1000">Before &amp; After</h3>
            <p className="text-lg-medium neutral-500">
              Real results. Clean interiors, glossy paint, and restored shine.
            </p>
          </div>
          <div className="col-md-4 mt-md-0 mt-3">
            <div className="d-flex justify-content-md-end justify-content-start">
              <Link className="btn btn-brand-2" href="/gallery">
                View Full Gallery
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {items.map((x) => (
            <div className="col-lg-6 mb-4" key={x.title}>
              <div className="background-card rounded-12 p-3 hover-up h-100">
                <h6 className="neutral-1000 mb-3">{x.title}</h6>

                <div className="row g-3">
                  <div className="col-6">
                    <div className="position-relative">
                      <img
                        src={x.before}
                        alt={`${x.title} before`}
                        className="rounded-3"
                        style={{
                          width: "100%",
                          height: 190,
                          objectFit: "cover",
                        }}
                      />
                      <span
                        className="badge bg-dark position-absolute top-0 start-0 m-2"
                        style={{ fontSize: 12 }}
                      >
                        Before
                      </span>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="position-relative">
                      <img
                        src={x.after}
                        alt={`${x.title} after`}
                        className="rounded-3"
                        style={{
                          width: "100%",
                          height: 190,
                          objectFit: "cover",
                        }}
                      />
                      <span
                        className="badge bg-success position-absolute top-0 start-0 m-2"
                        style={{ fontSize: 12 }}
                      >
                        After
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 d-flex gap-2">
                  <Link className="btn btn-gray btn-sm" href="/contact">
                    Get a Quote
                  </Link>
                  <Link className="btn btn-primary btn-sm" href="/gallery">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm neutral-500 mb-0">
            Want your car to look like this? Book a detail today.
          </p>
        </div>
      </div>
    </section>
  );
}
