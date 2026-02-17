"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isOpen = selectedIndex !== null;

  const current = useMemo(() => {
    if (selectedIndex === null) return null;
    return services[selectedIndex];
  }, [selectedIndex]);

  const close = () => setSelectedIndex(null);

  const goPrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + services.length) % services.length;
    });
  };

  const goNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % services.length;
    });
  };

  // ESC to close, arrows to navigate + lock scroll
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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
          {services.map((s, idx) => (
            <div className="col-lg-3 col-md-6 mb-4" key={s.title}>
              <div className="background-card p-4 rounded-12 h-100 hover-up">
                <div className="mb-3">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="rounded-3 mb-2"
                    style={{
                      width: "100%",
                      height: 140,
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedIndex(idx)}
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

      {/* MODAL / LIGHTBOX */}
      {isOpen && current && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "min(1000px, 95vw)",
              width: "100%",
            }}
          >
            {/* CLOSE */}
            <button
              onClick={close}
              aria-label="Close"
              style={{
                position: "absolute",
                top: -12,
                right: -12,
                width: 40,
                height: 40,
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                fontSize: 20,
                lineHeight: "40px",
                textAlign: "center",
              }}
            >
              ✕
            </button>

            {/* PREV */}
            <button
              onClick={goPrev}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: 10,
                top: "40%",
                transform: "translateY(-50%)",
                width: 44,
                height: 44,
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                fontSize: 22,
              }}
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              onClick={goNext}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: 10,
                top: "40%",
                transform: "translateY(-50%)",
                width: 44,
                height: 44,
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                fontSize: 22,
              }}
            >
              ›
            </button>

            {/* BIG IMAGE */}
            <img
              src={current.img}
              alt={current.title}
              style={{
                width: "100%",
                maxHeight: "68vh",
                objectFit: "contain",
                borderRadius: 12,
                boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
                animation: "zoomIn 160ms ease-out",
                background: "rgba(255,255,255,0.02)",
              }}
            />

            {/* CAPTION */}
            <div
              style={{
                marginTop: 10,
                color: "rgba(255,255,255,0.9)",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              {current.title} — <b>←</b>/<b>→</b> to navigate, <b>Esc</b> to
              close
            </div>

            {/* THUMBNAILS */}
            <div
              style={{
                marginTop: 12,
                display: "flex",
                gap: 10,
                overflowX: "auto",
                paddingBottom: 6,
                justifyContent: "center",
              }}
            >
              {services.map((s, idx) => {
                const active = idx === selectedIndex;
                return (
                  <button
                    key={s.title}
                    onClick={() => setSelectedIndex(idx)}
                    aria-label={`View ${s.title}`}
                    style={{
                      border: active
                        ? "2px solid rgba(255,255,255,0.95)"
                        : "2px solid transparent",
                      padding: 0,
                      borderRadius: 10,
                      cursor: "pointer",
                      background: "transparent",
                      flex: "0 0 auto",
                      boxShadow: active
                        ? "0 8px 24px rgba(0,0,0,0.35)"
                        : "none",
                    }}
                  >
                    <img
                      src={s.img}
                      alt={s.title}
                      style={{
                        width: 80,
                        height: 54,
                        objectFit: "cover",
                        borderRadius: 8,
                        opacity: active ? 1 : 0.7,
                        display: "block",
                      }}
                    />
                  </button>
                );
              })}
            </div>

            <style jsx>{`
              @keyframes zoomIn {
                from {
                  transform: scale(0.97);
                  opacity: 0.2;
                }
                to {
                  transform: scale(1);
                  opacity: 1;
                }
              }
              /* nicer scrollbar on webkit */
              div::-webkit-scrollbar {
                height: 8px;
              }
              div::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.25);
                border-radius: 999px;
              }
            `}</style>
          </div>
        </div>
      )}
    </section>
  );
}
