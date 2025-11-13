import React from "react";
import "../styles/FeaturedSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "FINANCIAL TIMES",
    description:
      "We were recognized by Financial Times in the America's Fastest-growing Companies list of 2024, showcasing significant revenue growth between 2019 and 2022.",
  },
  {
    title: "FORBES",
    description:
      "BairesDev was highlighted by Forbes as a leading nearshore software outsourcing firm in LATAM for tech innovation and delivery.",
  },
  {
    title: "INSIDER",
    description:
      "Insider covered our expansion into new markets and our role in transforming global software teams.",
  },
  {
    title: "CNBC",
    description:
      "CNBC recognized our contributions to digital acceleration and enterprise solutions in the U.S. market.",
  },
];

const FeaturedSlider = () => {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <span>As featured in...</span>
        <div className="media-logos">
          <span>CNBC</span>
          <span>Forbes</span>
          <span>INSIDER</span>
          <span>Bloomberg</span>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-card">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedSlider;
