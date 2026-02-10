export default function WhyUs1({ cls }: any) {
  return (
    <section className={`section-box box-why-book-22 background-body ${cls}`}>
      <div className="container">
        <div className="text-center wow fadeInUp">
          <p className="text-xl-medium neutral-500 wow fadeInUp">
            HOW IT WORKS
          </p>
          <h3 className="neutral-1000 wow fadeInUp">
            Mobile Detailing Made Easy <br className="d-none d-lg-block" />
            We Bring the Shine to You
          </h3>
        </div>

        <div className="row mt-40">
          {/* 1 */}
          <div className="col-lg-3 col-sm-6">
            <div className="card-why wow fadeIn" data-wow-delay="0.1s">
              <div className="card-image">
                {/* keep your same SVG */}
                {/* (SVG #1) */}
              </div>
              <div className="card-info">
                <h6 className="text-xl-bold neutral-1000">Pick a Service</h6>
                <p className="text-md-medium neutral-500">
                  Choose the detail you need — interior, exterior, full detail,
                  or add-ons.
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="col-lg-3 col-sm-6">
            <div className="card-why wow fadeIn" data-wow-delay="0.2s">
              <div className="card-image">{/* (SVG #2) */}</div>
              <div className="card-info">
                <h6 className="text-xl-bold neutral-1000">
                  Choose Your Location
                </h6>
                <p className="text-md-medium neutral-500">
                  Home, office, or anywhere you’re parked — we’re fully mobile.
                </p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="col-lg-3 col-sm-6">
            <div className="card-why wow fadeIn" data-wow-delay="0.3s">
              <div className="card-image">{/* (SVG #3) */}</div>
              <div className="card-info">
                <h6 className="text-xl-bold neutral-1000">
                  Book a Date &amp; Time
                </h6>
                <p className="text-md-medium neutral-500">
                  Tell us your preferred day — we’ll confirm and lock in your
                  appointment.
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="col-lg-3 col-sm-6">
            <div className="card-why wow fadeIn" data-wow-delay="0.4s">
              <div className="card-image">{/* (SVG #4) */}</div>
              <div className="card-info">
                <h6 className="text-xl-bold neutral-1000">
                  We Detail + You Approve
                </h6>
                <p className="text-md-medium neutral-500">
                  We restore your shine and do a quick walkthrough before we
                  finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
