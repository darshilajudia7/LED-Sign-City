"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CARDS = [
  { title: "Fixed Outdoor LED Signs", button: "Shop Fixed Outdoor", image: "/Solutions-1.png" },
  { title: "Mobile LED Signs", button: "Shop Mobile", image: "/Solutions-2.png" },
  { title: "Indoor LED Signs", button: "Shop Indoor", image: "/Solutions-3.png" },
  { title: "Custom LED Displays", button: "Shop Custom", image: "/Solutions-4.png" },
];

const INDUSTRIES = [
  {
    id: "public-nonprofit",
    title: "LED Signs for Public and Non-Profit Organizations",
    description: "Share community updates, events, missions, and causes with programmable displays that reach far and wide.",
    linkText: "Shop Public & Non-Profit Signs",
    imgSrc: "/serve-1.png"
  },
  {
    id: "retail-businesses",
    title: "LED Signs for Retail and Businesses",
    description: "Drive foot traffic with instant price changes, promotions, specials, and eye-catching messages that convert customers.",
    linkText: "Shop Retail & Business Signs",
    imgSrc: "/serve-2.png"
  },
  {
    id: "partners-resellers",
    title: "LED Signs for Partners and Resellers",
    description: "White-label options, bulk pricing, and easy integration for sign shops, installers, or affiliates to expand your offerings.",
    linkText: "Shop Partner & Resellers Signs",
    imgSrc: "/serve-3.png"
  },
  {
    id: "custom-architecture",
    title: "LED Signs for Custom Architecture",
    description: "Tailor-made structural screen specs built natively to dynamically align into bespoke geometric structures.",
    linkText: "Shop Custom Signs",
    imgSrc: "/serve-4.png"
  }
];

const FEATURES = [
  {
    title: "We flipped the old model no planned obsolescence",
    text: "Unlike most LED signs replaced every 5–10 years (industry standard lifespan before major issues or full swap), XIGNZ is designed to upgrade forever. Your sign gets better over time with free software updates (new features, efficiency) and hardware module swaps (brighter, sharper, more advanced tech)."
  },
  {
    title: "Modular XIGNZ platform true flexibility",
    text: "Interchangeable cabinets and components let you build or expand to any size without starting over. Resize or refresh? No tearing down structures—just add or upgrade modules seamlessly."
  },
  {
    title: "Smart, no-confusion resolution choices",
    text: "Limited options tailored to real viewing distances—so you get optimal clarity and performance without overwhelming specs or wrong picks."
  },
  {
    title: "Massive savings on upgrades like changing light bulbs",
    text: "Replace only modules at end-of-life or for better tech—save up to 80% vs. full replacement. Avoid new permits in most cases (module swaps often don't trigger full sign permits like new installs do), skip shopping for a whole new sign, dodge high labor costs for tear-down/re-install, and eliminate new structure builds for size changes. Upgrades are fast, low-disruption, and dramatically cheaper long-term."
  },
  {
    title: "Lifetime support + aligned incentives",
    text: "Backed by a 2-year comprehensive parts replacement warranty and lifetime prorated parts exchange program—even if old parts disappear, new compatible components fit right in. We're more motivated than other suppliers to deliver exceptional service and make upgrades a no-brainer—because your ongoing success (and easy upgrades) keeps you with us for decades. We're in it together."
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 col-12">
              <h1 className="hero-title mb-3">
                Let Your Sign Do More.<br />
                Control the Conversation.
              </h1>
              <p className="hero-subtitle mb-4">
                Let your sign do more for you. Move from static, inconvenient signs to powerful digital displays.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-4 mb-4">
                <Link href="#" className="btn btn-custom-yellow shadow-sm">
                  <span>✦</span> Build Your Custom Sign Now
                </Link>
                <Link href="#" className="text-white text-decoration-none fw-semibold d-inline-flex align-items-center gap-2">
                  See How XIGNZ Works <span className="fs-5">→</span>
                </Link>
              </div>
              <div className="d-flex align-items-center gap-2 star-rating">
                <div className="d-flex text-warning">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <span className="fw-bold ms-1">5.0</span>
                <span className="text-white-50 text-sm">Based on 128 reviews</span>
              </div>
            </div>

            <div className="col-lg-6 col-12 text-center text-lg-end">
              <div className="img-container pe-lg-4">
                <Image
                  src="/LED.png"
                  alt="Digital LED Sign Cabinets"
                  width={580}
                  height={350}
                  priority
                  className="img-fluid object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="industries-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-title mb-3">Industries We Serve</h2>
              <p className="section-description">
                We make LED signs for organizations, businesses, and sign shops. High-resolution digital signage that lets you share your message, mission, values, or goals with full control.
              </p>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.prev-arrow',
              nextEl: '.next-arrow',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {INDUSTRIES.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="industry-card">
                  <div className="card-img-wrapper">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="card-img-overlay-custom">
                    <h3 className="card-title-custom">{item.title}</h3>
                    <p className="card-text-custom">{item.description}</p>
                    <Link href="#" className="card-link-custom">
                      {item.linkText} <span>→</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="row mt-4">
            <div className="col-12">
              <div className="slider-arrows">
                <button className="arrow-btn prev-arrow" aria-label="Previous Slide">←</button>
                <button className="arrow-btn next-arrow" aria-label="Next Slide">→</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Section */}
      <section className="conversation-section">
        <div className="container">
          <div className="heading-area">
            <h2>Control the Conversation</h2>
            <p>
              Start the conversation where your customers are. We make
              fixed outdoor LED signs, mobile LED signs, and indoor LED
              signs so you can reach people wherever they are.
            </p>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={25}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {CARDS.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="conversation-card">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="card-image"
                  />
                  <div className="overlay"></div>
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <Link href="#">{card.button} →</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-buttons">
            <button className="custom-prev">←</button>
            <button className="custom-next">→</button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="showcase-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <h2 className="showcase-title mb-3">
                Why Choose LED Sign City?
              </h2>
              <p className="showcase-description mb-5">
                We offer two ways to understand our difference: a quick summary for the gist, or the full story for all the details.
              </p>

              <div className="d-flex flex-column gap-5">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="feature-block">
                    <h3 className="feature-title mb-2">
                      {feature.title}
                    </h3>
                    <p className="feature-text mb-2">
                      {feature.text}
                    </p>
                    <Link href="#" className="feature-link">
                      Read More
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-6 showcase-visuals-container">
              <div className="visuals-wrapper">
                <Image
                  src="/LED-1.png"
                  alt="Interchangeable LED Cabinets"
                  width={450}
                  height={300}
                  className="img-fluid object-fit-contain"
                  priority
                />
                <Image
                  src="/LED-2.png"
                  alt="Pixel Perfect LED Modules"
                  width={450}
                  height={300}
                  className="img-fluid object-fit-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}