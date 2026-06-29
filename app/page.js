"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// DATA CONFIGURATIONS

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
    link: "#"
  },
  {
    id: "retail-businesses",
    title: "LED Signs for Retail and Businesses",
    description: "Drive foot traffic with instant price changes, promotions, specials, and eye-catching messages that convert customers.",
    linkText: "Shop Retail & Business Signs",
    imgSrc: "/serve-2.png",
    link: "#"
  },
  {
    id: "partners-resellers",
    title: "LED Signs for Partners and Resellers",
    description: "White-label options, bulk pricing, and easy integration for sign shops, installers, or affiliates to expand your offerings.",
    linkText: "Shop Partner & Resellers Signs",
    imgSrc: "/serve-3.png",
    link: "#"
  },
  {
    id: "custom-architecture",
    title: "LED Signs for Custom Architecture",
    description: "Tailor-made structural screen specs built natively to dynamically align into bespoke geometric structures.",
    linkText: "Shop Custom Signs",
    imgSrc: "/serve-4.png",
    link: "#"
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

// MAIN HOMEPAGE COMPONENT

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="overflow-hidden">


      {/* Hero Section */}
      <section className="hero-section position-relative d-flex align-items-center">
        <div className="container-xl">
          <div className="row align-items-center justify-content-between g-4 g-lg-5 text-center text-lg-start">

            {/* Left Column */}
            <div className="col-lg-7 col-12">
              <div className="hero-content-wrapper">
                <h1 className="hero-title mb-3">
                  Let Your Sign Do More.<br />
                  Control the Conversation.
                </h1>

                <p className="hero-subtitle mb-4">
                  Let your sign do more for you. Move from static, inconvenient signs to powerful digital.
                </p>

                <div className="hero-actions-group mb-4 justify-content-center justify-content-lg-start">
                  <Link href="#" className="btn btn-custom-yellow shadow-sm">
                    <Image src="/star.svg" alt="star" width="24" height="24" />
                    Build Your Custom Sign Now
                  </Link>

                  <Link href="#how-it-works" className="see-how-link text-white text-decoration-none">
                    See How XIGNZ Works
                    <span className="arrow-icon ms-2">
                      <Image src="/w_arrow.svg" alt="arrow" width="24" height="24" />
                    </span>
                  </Link>
                </div>

                <div className="star-rating-section justify-content-center justify-content-lg-start">
                  <div className="star-group me-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="me-1">
                        <Image src="/rating.svg" alt="star" width="20" height="20" />
                      </span>
                    ))}
                  </div>
                  <span className="rating-score me-2">5.0</span>
                  <span className="review-count">Based on 128 reviews</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-5 col-12 d-flex justify-content-center justify-content-lg-end">
              <div className="hero-image-wrapper mt-4 mt-lg-0">
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



      {/* Industries Section */}
      <section className="industries-section position-relative">
        <div className="container-xl">

          {/* Heading */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-heading-custom mb-3 text-white">Industries We Serve</h2>
              <p className="section-paragraph-custom mb-0 text-white">
                We make LED signs for organizations, businesses, and sign shops. High-resolution digital signage that lets you share your message, mission, values, or goals with full control.
              </p>
            </div>
          </div>

          {/* Slider  */}
          <div className="position-relative">
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
                        <Image src="/w_arrow.svg" alt="arrow" width="18" height="18" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrow */}
            <div className="slider-arrows-row justify-content-center justify-content-md-end mt-4">
              <button className="arrow-btn-spec industries-prev-arrow" aria-label="Previous Slide">
                <Image src="/w_arrow.svg" alt="arrow" width="18" height="18" className="rotate-180" />
              </button>
              <button className="arrow-btn-spec industries-next-arrow" aria-label="Next Slide">
                <Image src="/w_arrow.svg" alt="arrow" width="18" height="18" />
              </button>
            </div>
          </div>

        </div>
      </section>



      {/* Conversation Section */}
      <section className="conversation-section position-relative">
        <div className="container-xl">

          {/* Heading */}
          <div className="row mb-4">
            <div className="col-12 col-lg-9 col-xl-8">
              <h2 className="section-heading-custom mb-3">Control the Conversation</h2>
              <p className="section-paragraph-custom mb-0">
                Start the conversation where your customers are. We make
                fixed outdoor LED signs, mobile LED signs, and indoor LED
                signs so you can reach people wherever they are.
              </p>
            </div>
          </div>

          {/* Slider */}
          <div className="position-relative">
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
                        {card.button} <Image src="/w_arrow.svg" alt="arrow" width="18" height="18" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Slider Navigation Buttons */}
            <div className="slider-buttons justify-content-center justify-content-md-end mt-4">
              <button className="conversation-prev" aria-label="Previous Slide">
                <Image src="/arrow.svg" alt="arrow" width="20" height="20" className="rotate-180" />
              </button>
              <button className="conversation-next" aria-label="Next Slide">
                <Image src="/arrow.svg" alt="arrow" width="20" height="20" />
              </button>
            </div>
          </div>

        </div>
      </section>



      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="showcase-section position-relative">
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-stretch">

            {/* Left Panel */}
            <div className="col-12 col-xl-6 showcase-content-column">
              <header className="showcase-header mb-5">
                <h2 className="showcase-main-title mb-3">
                  Why Choose LED Sign City?
                </h2>
                <p className="showcase-main-desc mb-0">
                  We offer two ways to understand our difference: a quick summary for the gist, or the full story for all the details.
                </p>
              </header>

              <div className="row g-5 showcase-features-grid">
                {FEATURES.map((feature) => (
                  <div key={feature.id} className="col-12 showcase-feature-item">
                    <h3 className="showcase-feature-title mb-2">
                      {feature.title}
                    </h3>
                    <p className="showcase-feature-desc mb-2">
                      {feature.text}
                    </p>
                    <Link href={feature.link} className="showcase-feature-link">
                      Read More
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-12 col-xl-6 showcase-visuals-column">
              <div className="showcase-image-frame">
                <Image
                  src="/LED-1.png"
                  alt="Interchangeable LED Cabinets"
                  fill
                  className="object-fit-contain p-3"
                  priority
                />
              </div>
              <div className="showcase-image-frame">
                <Image
                  src="/LED-2.png"
                  alt="Pixel Perfect LED Modules"
                  fill
                  className="object-fit-contain p-3"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Benefits Section */}
      <section className="benefits-section position-relative">

        {/* CTA section */}
        <div id="how-it-works" className="benefits-cta-block py-5">
          <div className="container-xl">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-10">
                <h2 className="benefits-cta-text mb-4">
                  Ready to own an LED sign that evolves, saves you serious money, and stays supported forever?
                </h2>

                <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                  <button className="btn-custom-yellow px-4 py-2">
                    <Image src="/star.svg" alt="star" width="24" height="24" />
                    Build Your Custom Sign Now
                  </button>

                  <Link href="#" className="benefits-cta-link ms-md-3">
                    See How XIGNZ Works <span className="arrow-icon"><Image src="/w_arrow.svg" alt="arrow" width="24" height="24" /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Block */}
        <div className="benefits-content-block py-5 bg-white">
          <div className="container-xl">

            <div className="row mb-5">
              <div className="col-12 col-xl-9">
                <h2 className="benefits-main-title mb-0">
                  Why Owning a XIGNZ Sign Actually Pays Off?
                </h2>
              </div>
            </div>

            <div className="row g-4 g-md-5 mb-5">
              {BENEFIT_BOXES.map((box) => (
                <div key={box.id} className="col-12 col-md-6">
                  <div className="benefits-card d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-center text-sm-start gap-3">

                    {/* Icon Visual Frame wrapper */}
                    <div className="benefits-icon-frame position-relative flex-shrink-0">
                      <Image
                        src={box.image}
                        alt={box.title}
                        fill
                        priority
                        className="p-3 object-fit-contain"
                        sizes="80px"
                      />
                    </div>

                    <div className="benefits-card-body">
                      <h3 className="benefits-card-title mb-2">{box.title}</h3>
                      <p className="benefits-card-desc mb-2">{box.description}</p>
                      <Link href={box.link} className="benefits-card-link">
                        Read More
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* You Tube */}
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="benefits-video-wrapper shadow-sm">
                  <iframe
                    className="benefits-video-iframe"
                    src="https://www.youtube.com/embed/0i_6IzleU70"
                    title="How to Wire Multi-Row LED Signs: XIGNZ Modular Series by LED Sign City"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>



      {/* Process Section */}
      <section className="process-section position-relative py-5">
        <div className="container-xl">

          {/* Header */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="process-main-title mb-3">
                How It Works: Build Your Custom LED Sign Online
              </h2>
              <p className="process-main-desc mb-0">
                Ready to build your LED sign online? Our LED sign configurator
                makes it super straightforward to configure your programmable
                LED sign or digital sign in just a few steps—no complicated
                quotes or waiting around.
              </p>
            </div>
          </div>

          <div className="row align-items-center g-4 g-lg-5">

            {/* Right Column */}
            <div className="col-12 col-lg-6 order-lg-last d-flex justify-content-center">
              <div className="process-image-frame">
                <Image
                  src="/monitor.png"
                  alt="LED sign configurator preview"
                  width={620}
                  height={557}
                  priority
                  className="img-fluid object-contain"
                />
              </div>
            </div>

            {/* Left Column */}
            <div className="col-12 col-lg-6">
              <div className="process-steps-list d-flex flex-column gap-4">
                {stepsList.map((item, index) => (
                  <div className="process-step-item" key={index}>
                    <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2 mb-2">
                      <span className="process-step-badge badge bg-white text-black fw-bold px-3 py-2">
                        {item.step}
                      </span>
                      <h3 className="process-step-title mb-0 ms-sm-1">
                        {item.title}
                      </h3>
                    </div>
                    <p className="process-step-desc mb-0">
                      {item.text}
                    </p>
                  </div>
                ))}

                <div className="pt-2">
                  <button className="btn-custom-yellow px-4 py-2 w-sm-auto ">
                    <Image src="/star.svg" alt="star" width="24" height="24" />
                    Build Your Custom LED Sign
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>



      {/* Review Section */}
      <section className="reviews-section py-5 px-3 px-md-0">
        <div className="container-xl">

          {/* Top Dashboard Header Block */}
          <div className="row mb-4 mb-md-5">
            <div className="col-12">
              <h2 className="reviews-main-title mb-3">
                Hear From Our Growing Number of Happy Critics
              </h2>
              <p className="reviews-main-desc mb-0">
                We take pride in bringing cinematic milestones to life. Hundreds of movie enthusiasts and verified
                critics love the high-octane storytelling, exceptional musical scores, and cinematic brilliance
                witnessed in these hand-picked Indian blockbusters.
              </p>
            </div>
          </div>

          {/* Video Slider */}
          <div className="row">
            <div className="col-12">

              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  nextEl: '.reviews-arrow-next',
                  prevEl: '.reviews-arrow-prev',
                }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 }
                }}
                className="mySwiper"
              >
                {reviewData.map((item) => (
                  <SwiperSlide key={item.id} className="h-auto">
                    <div className="reviews-card p-4 shadow-sm">
                      <div className="reviews-card-inner d-flex flex-column gap-3">

                        {/* Video Aspect Container */}
                        <div className="reviews-video-frame position-relative">
                          <iframe
                            src={item.videoUrl}
                            title={`Movie Trailer ${item.id}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>

                        <div className="reviews-card-body d-flex flex-column justify-content-between gap-2">
                          <div>
                            <div className="reviews-stars d-flex gap-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Image key={i} src="/rating.svg" alt="star" width="20" height="20" />
                              ))}
                            </div>
                            <p className="reviews-card-text mb-0">{item.reviewText}</p>
                          </div>

                          <div className="reviews-profile d-flex align-items-center gap-2 mt-2">
                            <img src={item.img} alt={item.name} className="reviews-profile-avatar rounded-circle img-fluid" />
                            <div className="reviews-profile-info d-flex flex-column">
                              <span className="reviews-profile-name">{item.name}</span>
                              <span className="reviews-profile-role text-muted">{item.role}</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Iocns and links */}
              <div className="mt-4">

                <div className="row mb-3">
                  <div className="col-12 d-flex justify-content-center justify-content-md-end">
                    <div className="reviews-arrows d-flex gap-2">
                      <button className="reviews-arrow-btn reviews-arrow-prev" aria-label="Previous slide">
                        <Image src="/arrow.svg" alt="arrow" width="18" height="18" className="rotate-180" />
                      </button>
                      <button className="reviews-arrow-btn reviews-arrow-next" aria-label="Next slide">
                        <Image src="/arrow.svg" alt="arrow" width="18" height="18" />
                      </button>
                    </div>
                  </div>
                </div>


                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <Link href="#" className="reviews-cta-link fw-medium text-decoration-none">
                      Want to read all movie reviews?
                      <span className="arrow-icon">
                        <Image src="/b_arrow.svg" alt="arrow" width="18" height="18" />
                      </span>
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>



      {/* Works Section */}
      <section className="works-section position-relative py-5">
        <div className="container-xl">

          {/* Header */}
          <div className="row mb-5 text-center text-md-start">
            <div className="col-12 col-xl-10">
              <h2 className="works-main-title mb-3">
                See XIGNZ Signs in Action
              </h2>
              <p className="works-main-desc mb-0">
                Real businesses, real results. Check out some of our recent installs making an impact across Texas and beyond.
              </p>
            </div>
          </div>


          {/* Slider */}
          <div className="row mb-5">
            <div className="col-12 position-relative">

              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".works-next",
                  prevEl: ".works-prev"
                }}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 }
                }}
                className="mySwiper"
              >
                {works.map((item, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <div className="works-card position-relative overflow-hidden h-100 shadow-sm">
                      <img
                        src={item.img}
                        alt={item.title || "Installation Showcase"}
                        className="works-card-img img-fluid w-100 h-100 object-fit-cover"
                      />

                      <div className="works-card-content position-absolute p-4 d-flex flex-column gap-2">
                        <h3 className="works-card-title mb-1">
                          {item.title}
                        </h3>
                        <p className="works-card-desc mb-1">
                          {item.desc}
                        </p>
                        <span className="works-card-location small fw-medium">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation */}
              <div className="works-arrows d-flex gap-3 justify-content-center justify-content-md-end mt-4">
                <button className="works-arrow-btn works-prev" aria-label="Previous slide">
                  <Image src="/w_arrow.svg" alt="arrow" width="18" height="18" className="rotate-180" />
                </button>
                <button className="works-arrow-btn works-next" aria-label="Next slide">
                  <Image src="/w_arrow.svg" alt="arrow" width="18" height="18" />
                </button>
              </div>

            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 text-center">
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                <button className="works-action-btn btn bg-white text-black border fw-medium px-4 py-2">
                  <Image src="/w_star.svg" alt="star" width="25" height="25" />
                  Inspired? Join our growing list of happy customers.
                </button>
                <Link href="#" className="works-action-link text-white text-decoration-none fw-medium px-4 py-2 d-inline-flex align-items-center gap-2">
                  Want to see all past projects?
                  <span className="arrow-icon"><Image src="/w_arrow.svg" alt="arrow" width="24" height="24" /></span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ  Section */}
      <section className="faq-section py-5">
        <div className="container-xl">

          {/* Header */}
          <div className="row mb-5">
            <div className="col-12 col-xl-10">
              <h2 className="faq-main-title mb-3">Frequently Asked Questions</h2>
              <p className="faq-main-desc mb-0">
                Got questions about XIGNZ modular LED signs, the build process, upgrades, warranty, software, or anything else?
                We're putting together the most common ones right here—check back soon as we add them.
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12">
              <div className="faq-accordion-group d-flex flex-column gap-4 mt-5">
                {faqData.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={index} className="faq-item border-bottom pb-4">
                      <button
                        className="faq-header d-flex justify-content-between align-items-center w-100 p-0 bg-transparent border-0 text-start"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-question fw-semibold pe-3">{item.question}</span>
                        <span className="faq-icon-wrapper flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="faq-icon"
                            style={{
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform var(--transition-smooth)'
                            }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`faq-answer-pane ${isOpen ? 'open' : ''}`}
                        style={{
                          maxHeight: isOpen ? '500px' : '0px',
                          marginTop: isOpen ? '15px' : '0px',
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen ? 'translateY(0)' : 'translateY(-6px)'
                        }}
                      >
                        <p className="faq-answer-text mb-0">{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="row text-center">
            <div className="col-12 d-flex flex-column align-items-center gap-2">
              <Link href="#" className="faq-cta-btn fw-medium text-decoration-none px-4 py-2 rounded">
                Don't see your question?
                <span className="arrow-icon"><Image src="/b_arrow.svg" alt="arrow" width="18" height="18" /></span>
              </Link>
              <p className="faq-footer-line mb-0 mt-1">We're happy to answer directly—reach out anytime.</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}