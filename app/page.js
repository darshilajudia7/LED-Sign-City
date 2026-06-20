"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// CARDS
const CARDS = [
  {
    id: "fixed-outdoor",
    title: "Fixed Outdoor LED Signs",
    button: "Shop Fixed Outdoor",
    image: "/Solutions-1.png",
    link: "/shop/fixed-outdoor"
  },
  {
    id: "mobile-led",
    title: "Mobile LED Signs",
    button: "Shop Mobile",
    image: "/Solutions-2.png",
    link: "/shop/mobile"
  },
  {
    id: "indoor-led",
    title: "Indoor LED Signs",
    button: "Shop Indoor",
    image: "/Solutions-3.png",
    link: "/shop/indoor"
  },
  {
    id: "custom-displays",
    title: "Custom LED Displays",
    button: "Shop Custom",
    image: "/Solutions-4.png",
    link: "/shop/custom"
  },
];

// INDUSTRIES
const INDUSTRIES = [
  {
    id: "public-nonprofit",
    title: "LED Signs for Public and Non-Profit Organizations",
    description: "Share community updates, events, missions, and causes with programmable displays that reach far and wide.",
    linkText: "Shop Public & Non-Profit Signs",
    imgSrc: "/serve-1.png",
    link: "/industries/public-nonprofit"
  },
  {
    id: "retail-businesses",
    title: "LED Signs for Retail and Businesses",
    description: "Drive foot traffic with instant price changes, promotions, specials, and eye-catching messages that convert customers.",
    linkText: "Shop Retail & Business Signs",
    imgSrc: "/serve-2.png",
    link: "/industries/retail-businesses"
  },
  {
    id: "partners-resellers",
    title: "LED Signs for Partners and Resellers",
    description: "White-label options, bulk pricing, and easy integration for sign shops, installers, or affiliates to expand your offerings.",
    linkText: "Shop Partner & Resellers Signs",
    imgSrc: "/serve-3.png",
    link: "/industries/partners-resellers"
  },
  {
    id: "custom-architecture",
    title: "LED Signs for Custom Architecture",
    description: "Tailor-made structural screen specs built natively to dynamically align into bespoke geometric structures.",
    linkText: "Shop Custom Signs",
    imgSrc: "/serve-4.png",
    link: "/industries/custom-architecture"
  }
];

// FEATURES
const FEATURES = [
  {
    id: "no-obsolescence",
    title: "We flipped the old model no planned obsolescence",
    text: "Unlike most LED signs replaced every 5–10 years (industry standard lifespan before major issues or full swap), XIGNZ is designed to upgrade forever. Your sign gets better over time with free software updates (new features, efficiency) and hardware module swaps (brighter, sharper, more advanced tech).",
    link: "/features/no-obsolescence"
  },
  {
    id: "modular-platform",
    title: "Modular XIGNZ platform true flexibility",
    text: "Interchangeable cabinets and components let you build or expand to any size without starting over. Resize or refresh? No tearing down structures—just add or upgrade modules seamlessly.",
    link: "/features/modular-platform"
  },
  {
    id: "resolution-choices",
    title: "Smart, no-confusion resolution choices",
    text: "Limited options tailored to real viewing distances—so you get optimal clarity and performance without overwhelming specs or wrong picks.",
    link: "/features/resolution-choices"
  },
  {
    id: "massive-savings",
    title: "Massive savings on upgrades like changing light bulbs",
    text: "Replace only modules at end-of-life or for better tech—save up to 80% vs. full replacement. Avoid new permits in most cases (module swaps often don't trigger full sign permits like new installs do), skip shopping for a whole new sign, dodge high labor costs for tear-down/re-install, and eliminate new structure builds for size changes. Upgrades are fast, low-disruption, and dramatically cheaper long-term.",
    link: "/features/massive-savings"
  },
  {
    id: "lifetime-support",
    title: "Lifetime support + aligned incentives",
    text: "Backed by a 2-year comprehensive parts replacement warranty and lifetime prorated parts exchange program—even if old parts disappear, new compatible components fit right in. We're more motivated than other suppliers to deliver exceptional service and make upgrades a no-brainer—because your ongoing success (and easy upgrades) keeps you with us for decades. We're in it together.",
    link: "/features/lifetime-support"
  }
];

// BENEFIT_BOXES
const BENEFIT_BOXES = [
  {
    id: "consistent-design",
    image: "/feature-1.svg",
    title: "Super Consistent Design",
    description: "Every XIGNZ sign uses the same 7 core components 85%+ identical across all sizes. Only the modules change (based on size & viewing distance). Less hassle, easier upgrades, no surprises.",
    link: "/benefits/consistent-design"
  },
  {
    id: "easy-software",
    image: "/feature-2.svg",
    title: "Easy Software Everywhere",
    description: "One powerful app for all signs: animated text, images, videos. Beginners use built-in tools; pros upload JPEGs/MP4s. Schedule everything in one go: holidays, random days, whatever.",
    link: "/benefits/easy-software"
  },
  {
    id: "smart-brightness",
    image: "/feature-3.svg",
    title: "Auto-Smart Brightness",
    description: "Built-in light sensor adjusts day/night automatically. Failsafe defaults + software scheduling overrides. Looks perfect, saves energy, no manual tweaks.",
    link: "/benefits/smart-brightness"
  },
  {
    id: "lifetime-help",
    image: "/feature-4.svg",
    title: "Lifetime Support",
    description: "2-year full parts warranty + lifetime prorated exchange. Lifetime free remote help & onboarding (campaigns never die if someone leaves). Free quarterly design training sessions (exclusive to customers).",
    link: "/benefits/lifetime-help"
  }
];

// How it works
const stepsList = [
  {
    step: "STEP 1",
    title: "Configure Your LED Sign Online",
    text: "Jump into our custom LED sign builder. Enter your desired size (width and height), choose single or double-sided, select the best resolution for your viewing distance (we show the top 3-4 options), and add extras like frames, poles, or professional installation."
  },
  {
    step: "STEP 2",
    title: "Get an Instant LED Sign Quote",
    text: "See real-time pricing for your outdoor LED sign or digital message board full breakdown, no surprises."
  },
  {
    step: "STEP 3",
    title: "Lock In Your LED Sign with $1 Down",
    text: "Love the quote? Hold your LED sign price and secure your order with just $1 down. This confirms your programmable LED sign build and locks everything in."
  },
  {
    step: "STEP 4",
    title: "Specialist Reviews Your LED Sign Build",
    text: "Our team quickly reviews your configuration, confirms the specs for your LED sign are perfect for your project, and reaches out if any tweaks will make it even better."
  },
  {
    step: "STEP 5",
    title: "Pay the Balance and Production Starts",
    text: "We send the final invoice. Once paid, your LED sign production starts typically ready in 4-8 weeks, depending on size and options."
  }
];

// Review
const reviewData = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/5UxaloWhHso",
    reviewText: "The hardware-as-a-service model changed how we budget. The display visibility is incredible and saved us thousands!",
    name: "Marcus R.",
    role: "Auto Dealership, Houston TX",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/CS5LPLtZhDI",
    reviewText: "Our custom 3D acrylic letters look magnificent against the city nightscape. Customers mention it all the time.",
    name: "Elena K.",
    role: "Boutique Owner, New York NY",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/yMAbhFe8Be8",
    reviewText: "Transformative energy. Upgrading to the large scale programmable digital boards dropped our signage swap labor by 30%.",
    name: "David L.",
    role: "Venue Manager, Chicago IL",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/yX9yN_BxoRQ",
    reviewText: "The waterproof smart app integration lets us flash dynamic promotions and animations seamlessly straight from the storefront.",
    name: "Chloe M.",
    role: "Retail Shop, Los Angeles CA",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop"
  }
];

// Action
const works = [
  {
    img: "/Solutions-1.png",
    title: "Double-sided programmable LED sign for highway visibility",
    desc: "Highway double-sided display",
    location: "Houston, TX",
  },
  {
    img: "/Solutions-2.png",
    title: "Full-color LED sign for retail storefront",
    desc: "Storefront full-color sign",
    location: "Rosenberg, TX",
  },
  {
    img: "/Solutions-3.png",
    title: "Double-sided programmable LED sign",
    desc: "Highway digital display",
    location: "New York, NY",
  },
  {
    img: "/Solutions-4.png",
    title: "Outdoor LED display solution",
    desc: "Business signage",
    location: "Texas, TX",
  },
];

// Question - Answer Section
const faqData = [
  {
    question: "Do you sell ad space on billboards, or do you sell the physical signs?",
    answer: "We sell the physical LED signs. We are the manufacturer, which means you are buying the actual hardware directly from us. You own the screen, you control the messaging 100%, and if you sell ad space on it, you keep all the profits."
  },
  {
    question: "What makes your XIGNZ platform different from other LED signs?",
    answer: "Our XIGNZ platform provides ultra-modular configurations, energy-efficient display hardware, and cloud-native software built directly for easy, localized control."
  },
  {
    question: "Will I need a new city permit if I upgrade my sign later?",
    answer: "Permit requirements depend on your city ordinances. However, because our systems are modular, dimension-identical upgrades often do not require completely new zoning permits."
  },
  {
    question: "I am not a \"tech person.\" Is the sign difficult to program?",
    answer: "Not at all. We intentionally created an intuitive, drag-and-drop web dashboard that makes uploading media files and scheduling announcements as easy as sending an email."
  },
  {
    question: "Do I have to pay the full amount before I can even talk to a human?",
    answer: "Absolutely not. Consultation, discovery calls, and exact blueprint specifications are completely free before you ever put down a deposit."
  },
  {
    question: "How do your signs handle different lighting conditions? Will it blind drivers at night?",
    answer: "Our signs feature automated ambient light photodiode sensors. They dynamically dim down to acceptable regulatory nit levels at night and scale up brightness during direct sunlight exposure."
  }
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

                  <Link href="#how-it-works" className="see-how-link text-white text-decoration-none">
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
                          <Link href={item.link} className="card-link-custom">
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
              {CARDS.map((card) => (
                <SwiperSlide key={card.id} className="h-auto">
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
                      <Link href={card.link}>
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
                {FEATURES.map((feature) => (
                  <div key={feature.id} className="feature-block">
                    <h3 className="feature-title">
                      {feature.title}
                    </h3>
                    <p className="feature-text">
                      {feature.text}
                    </p>
                    <Link href={feature.link} className="feature-link">
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

      {/* Benefit section */}
      <section className="Benefit-section">

        {/* Blue Block Layout */}
        <div id="how-it-works" className="hero-block">
          <div className="hero-inside-container">
            <div className="hero-text-content">
              Ready to own an LED sign that evolves, saves you serious money, and stays supported forever?
            </div>

            <div className="hero-actions-wrapper">
              <button className="custom-action-btn">
                <span className="custom-star-btn">✦</span>
                <span className="custom-action-btn-text">
                  Build Your Custom Sign Now
                </span>
              </button>

              <Link href="#" className="redirect-link-container">
                <span className="redirect-text-content">See How XIGNZ Works</span>
                <span className="icon-box-24">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* White Block Layout */}
        <div className="white-main-block">
          <div className="text-grid-container">
            <div className="features-inner-block">
              <h2 className="main-section-heading">
                Why Owning a XIGNZ Sign Actually Pays Off?
              </h2>

              <div className="features-grid-content">
                <div className="row g-x-4 g-y-5">
                  {BENEFIT_BOXES.map((box) => (
                    <div key={box.id} className="col-12 col-lg-6">
                      <div className="feature-box">
                        <div className="feature-box-heading-layer">
                          <div className="icon-padding-wrapper">
                            <div className="bootstrap-custom-icon">
                              <Image
                                src={box.image}
                                alt={box.title}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 437px"
                              />

                            </div>
                          </div>
                          <h5 className="feature-heading-text">{box.title}</h5>
                        </div>
                        <div className="feature-paragraph-block">
                          <p className="feature-description">{box.description}</p>
                          <Link href={box.link} className="feature-read-more">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video Block Section */}
          <div className="video-block-wrapper">
            <iframe
              className="youtube-iframe-embed"
              src="https://www.youtube.com/embed/0i_6IzleU70"
              title="How to Wire Multi-Row LED Signs: XIGNZ Modular Series by LED Sign City"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="How-it-works-section">
        <div className="sub-dashboard">
          <div className="top-sub-dashboard">
            <h2>
              How It Works: Build Your Custom LED Sign Online
            </h2>
            <p>
              Ready to build your LED sign online? Our LED sign configurator
              makes it super straightforward to configure your programmable
              LED sign or digital sign in just a few steps no complicated
              quotes or waiting around.
            </p>
          </div>
          <div className="bottom-sub-dashboard">

            {/* Left Side */}
            <div className="left-side">
              {
                stepsList.map((item, index) => (
                  <div
                    className="layout-content"
                    key={index}
                  >
                    <div className="heading-row">
                      <button className="step-btn">
                        {item.step}
                      </button>
                      <h3 className="step-title">
                        {item.title}
                      </h3>
                    </div>
                    <p>
                      {item.text}
                    </p>
                  </div>
                ))
              }

              <button className="bottom-button">
                <span className="custom-star-btn">✦</span>
                Build Your Custom LED Sign
              </button>
            </div>

            {/* Right Side */}
            <div className="right-side">
              <Image
                src="/monitor.png"
                alt="LED sign configurator preview"
                width={620}
                height={557}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="review-section container-fluid px-0">
        <div className="sub-dashboard">

          <div className="top-dashboard">
            <h2>Hear From Our Growing Number of Happy Critics</h2>
            <p>
              We take pride in bringing cinematic milestones to life. Hundreds of movie enthusiasts and verified
              critics love the high-octane storytelling, exceptional musical scores, and cinematic brilliance
              witnessed in these hand-picked Indian blockbusters.
            </p>
          </div>

          {/* Video Slider Area */}
          <div className="video-dashboard">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.arrow-next',
                prevEl: '.arrow-prev',
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 }
              }}
              className="mySwiper"
            >
              {reviewData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="each-video-dashboard">
                    <div className="sub-video-dashboard-inner">

                      <div className="video-container">
                        <iframe
                          src={item.videoUrl}
                          title={`Movie Trailer ${item.id}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>

                      <div className="description-block">
                        <div className="star-rating">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>

                        <p className="review-content">{item.reviewText}</p>

                        <div className="reviewer-side">
                          <img src={item.img} alt={item.name} className="reviewer-logo" />
                          <div className="reviewer-info">
                            <span className="reviewer-name">{item.name}</span>
                            <span className="reviewer-position">{item.role}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="slider-footer-controls">
              <Link href="#" className="review-link-btn">
                Want to read all movie reviews? <i className="bi bi-arrow-right"></i>
              </Link>

              <div className="custom-nav-arrows">
                <button className="nav-arrow arrow-prev" aria-label="Previous slide">
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button className="nav-arrow arrow-next" aria-label="Next slide">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* work section */}
      <section className="works-section">
        <div className="works-container">
          <div className="works-top">
            <h2>
              See XIGNZ Signs in Action
            </h2>
            <p>
              Real businesses, real results. Check out some of our recent installs making an impact across Texas and beyond.
            </p>
          </div>
          <div className="works-slider">

            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".works-next",
                prevEl: ".works-prev"
              }}
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
            >
              {
                works.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="work-card">
                      <img
                        src={item.img}
                        alt="sign"
                      />

                      <div className="work-content">
                        <h3>
                          {item.title}
                        </h3>
                        <p>
                          {item.desc}
                        </p>
                        <span>
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>

            <div className="slider-arrow">

              <button className="works-prev">
                <i className="bi bi-arrow-left"></i>
              </button>

              <button className="works-next">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>

          </div>

          <div className="works-bottom">
            <button className="works-btn">
              <span className="custom-star-btn">✦</span>
              Inspired? Join our growing list of happy customers.
            </button>
            <a href="#" className="works-link">
              Want to see all past projects?
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Question - Answer Question */}
      <section className="faq-main-section container-fluid">
        <div className="faq-sub-section">

          {/* Top Section */}
          <div className="faq-top-section">
            <h2>Frequently Asked Questions</h2>
            <p>
              Got questions about XIGNZ modular LED signs, the build process, upgrades, warranty, software, or anything else?
              We're putting together the most common ones right here check back soon as we add them. visibility.
            </p>
          </div>

          {/* Middle Layout */}
          <div className="faq-middle-layout">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="faq-item">
                  <button
                    className="faq-header"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform var(--transition-smooth)' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                  <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Section */}
          <div className="faq-bottom-section">
            <a href="#" className="faq-btn">
              Don't see your question?
              <span className="faq-btn-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
            <p className="faq-bottom-line">We're happy to answer directly reach out anytime.</p>
          </div>

        </div>
      </section>

    </main>
  );
}