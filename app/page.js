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
    <main className="overflow-hidden">

      {/* Hero Section */}
      <section className="hero-section position-relative d-flex align-items-center">
        <div className="container-xl hero-container">
          <div className="row align-items-center justify-content-between g-4 g-lg-5">

            {/* Left Column */}
            <div className="col-lg-7 col-12">
              <div className="hero-content-wrapper">
                <div className="hero-heading-block">
                  <h1 className="hero-title">
                    Let Your Sign Do More.<br className="d-none d-sm-inline" />
                    Control the Conversation.
                  </h1>
                </div>

                <p className="hero-subtitle">
                  Let your sign do more for you. Move from static, inconvenient signs to powerful digital.
                </p>

                <div className="hero-actions-group">
                  <Link href="#" className="btn btn-custom-yellow shadow-sm">
                    <span className="custom-star-btn">✦</span>
                    <span className="btn-text">
                      Build Your Custom Sign Now
                    </span>
                  </Link>

                  <Link href="#" className="see-how-link text-white text-decoration-none">
                    <span className="link-text">
                      See How XIGNZ Works
                      <span className="icon-box arrow-icon">
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>

                <div className="star-rating-section">
                  <div className="star-group">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">
                        <i className="bi bi-star-fill"></i>
                      </span>
                    ))}
                  </div>
                  <span className="rating-score">5.0</span>
                  <span className="review-count">Based on 128 reviews</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-5 col-12 d-flex justify-content-center justify-content-lg-end">
              <div className="hero-image-wrapper">
                <Image
                  src="/LED.png"
                  alt="Digital LED Sign Cabinets"
                  width={545}
                  height={369}
                  priority
                  className="img-fluid object-contain hero-led-img"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="industries-section position-relative">
        <div className="container-xl sub-main-container">

          {/* Top Heading */}
          <div className="top-heading-group">
            <h2 className="section-heading-custom">Industries We Serve</h2>
            <p className="section-paragraph-custom">
              We make LED signs for organizations, businesses, and sign shops. High-resolution digital signage that lets you share your message, mission, values, or goals with full control.
            </p>
          </div>

          {/* Slider Layout */}
          <div className="slider-layout-wrapper">
            <div className="photos-slider-container">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                  prevEl: '.industries-prev-arrow',
                  nextEl: '.industries-next-arrow',
                }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                className="mySwiper h-100"
              >
                {INDUSTRIES.map((item) => (
                  <SwiperSlide key={item.id} className="h-auto">
                    <div className="industry-card-custom">
                      <div className="card-img-wrapper">
                        <Image
                          src={item.imgSrc}
                          alt={item.title}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 437px"
                        />
                      </div>

                      <div className="card-content-custom">
                        <h3 className="card-heading-custom">{item.title}</h3>
                        <p className="card-para-custom">{item.description}</p>

                        <div className="last-row-custom">
                          <Link href="#" className="card-link-custom">
                            {item.linkText}
                          </Link>
                          <i className="bi bi-arrow-right arrow-icon-spec"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Slider Arrow Controls */}
            <div className="slider-arrows-row">
              <button className="arrow-btn-spec industries-prev-arrow" aria-label="Previous Slide">
                <i className="bi bi-arrow-left arrow-icon-spec"></i>
              </button>
              <button className="arrow-btn-spec industries-next-arrow" aria-label="Next Slide">
                <i className="bi bi-arrow-right arrow-icon-spec"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Section */}
      <section className="conversation-section">
        <div className="container-xl">
          <div className="heading-area">
            <h2>Control the Conversation</h2>
            <p>
              Start the conversation where your customers are. We make
              fixed outdoor LED signs, mobile LED signs, and indoor LED
              signs so you can reach people wherever they are.
            </p>
          </div>

          {/* Slider */}
          <div className="swiper-outer-wrapper position-relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".conversation-next",
                prevEl: ".conversation-prev",
              }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
            >
              {CARDS.map((card, index) => (
                <SwiperSlide key={index} className="h-auto">
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
                      <Link href="#">
                        {card.button} <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Slider Navigation Buttons */}
            <div className="slider-buttons">
              <button className="conversation-prev">
                <i className="bi bi-arrow-left"></i>
              </button>
              <button className="conversation-next">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="showcase-section">
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-stretch">

            {/* Left Column */}
            <div className="col-12 col-xl-6 col-left-panel">
              <div className="showcase-title-area">
                <h2 className="showcase-title">
                  Why Choose LED Sign City?
                </h2>
                <p className="showcase-description">
                  We offer two ways to understand our difference: a quick summary for the gist, or the full story for all the details.
                </p>
              </div>

              <div className="features-container">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="feature-block">
                    <h3 className="feature-title">
                      {feature.title}
                    </h3>
                    <p className="feature-text">
                      {feature.text}
                    </p>
                    <Link href="#" className="feature-link">
                      Read More
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-12 col-xl-6 showcase-visuals-container">
              <div className="visuals-wrapper">
                <div className="visual-top-panel">
                  <Image
                    src="/LED-1.png"
                    alt="Interchangeable LED Cabinets"
                    fill
                    className="object-fit-contain"
                    priority
                  />
                </div>
                <div className="visual-bottom-panel">
                  <Image
                    src="/LED-2.png"
                    alt="Pixel Perfect LED Modules"
                    fill
                    className="object-fit-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}