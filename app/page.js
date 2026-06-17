"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const INDUSTRIES = [
  {
    id: 1,
    title: "LED Signs for Public and Non-Profit Organizations",
    description: "Share community updates, events, missions, and causes with programmable displays that reach far and wide.",
    linkText: "Shop Public & Non-Profit Signs",
    imgSrc: "/serve-1.png"
  },
  {
    id: 2,
    title: "LED Signs for Retail and Businesses",
    description: "Drive foot traffic with instant price changes, promotions, specials, and eye-catching messages that convert customers.",
    linkText: "Shop Retail & Business Signs",
    imgSrc: "/serve-2.png"
  },
  {
    id: 3,
    title: "LED Signs for Partners and Resellers",
    description: "White-label options, bulk pricing, and easy integration for sign shops, installers, or affiliates to expand your offerings.",
    linkText: "Shop Partner & Resellers Signs",
    imgSrc: "/serve-3.png"
  },
  {
    id: 4,
    title: "LED Signs for Custom Architecture",
    description: "Tailor-made structural screen specs built natively to dynamically align into bespoke geometric structures.",
    linkText: "Shop Custom Signs",
    imgSrc: "/serve-4.png"
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1200) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, INDUSTRIES.length - visibleCards);

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const translateAmount = currentIndex * (100 / visibleCards);

  return (
    <main>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-5">

            {/* Left Side */}
            <div className="col-lg-6 col-12">
              <h1 className="hero-title mb-3">
                Let Your Sign Do More.<br />
                Control the Conversation.
              </h1>

              <p className="hero-subtitle mb-4">
                Let your sign do more for you. Move from static, inconvenient signs to powerful digital displays.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-4 mb-4">
                <a href="#" className="btn btn-custom-yellow shadow-sm">
                  <span>✦</span> Build Your Custom Sign Now
                </a>
                <a href="#" className="text-white text-decoration-none fw-semibold d-inline-flex align-items-center gap-2">
                  See How XIGNZ Works <span className="fs-5">→</span>
                </a>
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

            {/* Right Side */}
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

          {/* Heading */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-title mb-3">Industries We Serve</h2>
              <p className="section-description">
                We make LED signs for organizations, businesses, and sign shops. High-resolution digital signage that lets you share your message, mission, values, or goals with full control.
              </p>
            </div>
          </div>

          {/* Slider */}
          <div className="slider-window">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${translateAmount}%)` }}
            >
              {INDUSTRIES.map((item) => (
                <div key={item.id} className="slider-item">
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
                      <a href="#" className="card-link-custom">
                        {item.linkText} <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider button */}
          <div className="row">
            <div className="col-12">
              <div className="slider-arrows">
                <button
                  className="arrow-btn"
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  aria-label="Previous Slide"
                >
                  ←
                </button>
                <button
                  className="arrow-btn"
                  onClick={nextSlide}
                  disabled={currentIndex >= maxIndex}
                  aria-label="Next Slide"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
} 