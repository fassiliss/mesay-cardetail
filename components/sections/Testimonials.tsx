
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperGroupAnimate } from "@/util/swiperOptions";

const reviews = [
  {
    title: "Interior Looks New Again",
    text: "Cross Shine pulled years of stains and odors out of my seats. The car looked, smelled, and felt completely refreshed when they were done.",
    name: "Maria Johnson",
    location: "Nashville, TN",
    image: "/assets/imgs/testimonials/testimonials-1/author-1.png",
  },
  {
    title: "Easy Mobile Service",
    text: "They came to my workplace, handled the full detail, and walked me through the finished car before leaving. Super convenient and professional.",
    name: "Daniel Brooks",
    location: "Brentwood, TN",
    image: "/assets/imgs/testimonials/testimonials-1/author-2.png",
  },
  {
    title: "Paint Has Real Shine",
    text: "The exterior wash and wax made a huge difference. The paint had a deep gloss again, and the tires and trim looked crisp.",
    name: "Alicia Carter",
    location: "Franklin, TN",
    image: "/assets/imgs/testimonials/testimonials-1/author-3.png",
  },
  {
    title: "Great Attention to Detail",
    text: "Every vent, cup holder, mat, and hard-to-reach area was cleaned carefully. You can tell they take pride in the finish.",
    name: "Marcus Reed",
    location: "Nashville, TN",
    image: "/assets/imgs/testimonials/testimonials-1/author-1.png",
  },
];

export default function Testimonials() {
  return (
    <>
      <section className="section-box py-96 background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-9 col-sm-9 wow fadeInUp">
              <div className="box-author-testimonials">
                <img
                  src="/assets/imgs/page/homepage1/testimonial.png"
                  alt="Customer review"
                />
                <img
                  src="/assets/imgs/page/homepage1/testimonial2.png"
                  alt="Customer review"
                />
                <img
                  src="/assets/imgs/page/homepage1/testimonial3.png"
                  alt="Customer review"
                />
                Testimonials
              </div>
              <h3 className="mt-8 mb-15 neutral-1000">
                What our customers say
              </h3>
            </div>
          </div>
        </div>

        <div className="block-testimonials wow fadeIn">
          <div className="container-testimonials">
            <div className="container-slider ps-0">
              <div className="box-swiper mt-30">
                <Swiper
                  {...swiperGroupAnimate}
                  className="swiper-container swiper-group-animate swiper-group-journey"
                >
                  <div className="swiper-wrapper">
                    {reviews.map((review) => (
                      <SwiperSlide key={`${review.name}-${review.title}`}>
                        <div className="card-testimonial background-card">
                          <div className="card-info">
                            <p className="text-xl-bold card-title neutral-1000">
                              {review.title}
                            </p>
                            <p className="text-md-regular neutral-500">
                              {review.text}
                            </p>
                          </div>
                          <div className="card-top pt-40 border-0 mb-0">
                            <div className="card-author">
                              <div className="card-image">
                                <img src={review.image} alt={review.name} />
                              </div>
                              <div className="card-info">
                                <p className="text-lg-bold neutral-1000">
                                  {review.name}
                                </p>
                                <p className="text-md-regular neutral-1000">
                                  {review.location}
                                </p>
                              </div>
                            </div>
                            <div className="card-rate">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <img
                                  key={star}
                                  className="background-brand-2 p-1"
                                  src="/assets/imgs/template/icons/star-black.svg"
                                  alt="5 star rating"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
