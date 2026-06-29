"use client";

import React from 'react';
import Image from "next/image";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import './style.css';

export default function ProductHero() {

    // Gallery works data
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
            title: "Double-sided programmable LED sign for highway visibility",
            desc: "Highway double-sided display",
            location: "New York, NY",
        },
        {
            img: "/Solutions-4.png",
            title: "Full-color LED sign for retail storefront",
            desc: "Storefront full-color sign",
            location: "Rosenberg, TX",
        },
    ];

    // User reviews data
    const userReviewsData = [
        {
            id: 1,
            videoUrl: "https://www.youtube.com/embed/5UxaloWhHso",
            reviewText: "The upgrade process was seamless and saved us thousands highly recommend!",
            name: "Mike R.",
            role: "Auto Dealership, Houston TX",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop"
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/CS5LPLtZhDI",
            reviewText: "Easy software, bright display, and great support from day one.",
            name: "Lisa K.",
            role: "Restaurant Owner, Rosenberg TX",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop"
        },
        {
            id: 3,
            videoUrl: "https://www.youtube.com/embed/yMAbhFe8Be8",
            reviewText: "Easy software, bright display, and great support from day one.",
            name: "Lisa K.",
            role: "Restaurant Owner, Rosenberg TX",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop"
        },
        {
            id: 4,
            videoUrl: "https://www.youtube.com/embed/yX9yN_BxoRQ",
            reviewText: "Easy software, bright display, and great support from day one.",
            name: "Lisa K.",
            role: "Restaurant Owner, Rosenberg TX",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop"
        }
    ];

    // Features list data
    const featuresData = [
        {
            id: 1,
            title: "Customize Online",
            desc: "Build your perfect sign with our easy configurator.",
            image: "online.svg"
        },
        {
            id: 2,
            title: "Direct Pricing",
            desc: "Skip the middleman manufacturer- direct savings.",
            image: "price.svg"
        },
        {
            id: 3,
            title: "Future-Proof",
            desc: "Upgradeable components so your sign stays relevant for years.",
            image: "proof.svg"
        },
        {
            id: 4,
            title: "2 Year Warranty",
            desc: "Industry-leading coverage, up to 2 years.",
            image: "warrenty.svg"
        },
        {
            id: 5,
            title: "Satisfaction Guaranteed",
            desc: "Upgrade resolution or brightness anytime, no hassle.",
            image: "satisfaction.svg"
        },
        {
            id: 6,
            title: "Insured Shipping",
            desc: "Fast, reliable delivery protected every step of the way.",
            image: "in_shipping.svg"
        },
        {
            id: 7,
            title: "Dedicated Support",
            desc: "Real people before, during, and after your purchase.",
            image: "support.svg"
        }
    ];

    // Specifications sections data
    const sectionsData = [
        {
            key: "physical",
            title: "Physical Specifications",
            specs: [
                { label: "Screen Size", value: '50.4" × 50.4" (4.20ft × 4.20ft)' },
                { label: "Total Cabinets", value: "16 cabinets (4 × 4)" },
                { label: "Cabinet Weight", value: "160 lbs/side (10 lbs per cabinet)" },
                { label: "Power", value: "14 AMPS @ 120V | 6 AMPS @ 240V" },
                { label: "Max Power Consumption", value: "1,520 watts (95W per cabinet)" },
                { label: "Brightness", value: "Up to 10,000 NITS (auto-adjusting sensors)" }
            ]
        },
        {
            key: "technical",
            title: "Technical Specifications",
            specs: [
                { label: "Pixel Pitch", value: "3.91mm" },
                { label: "LED Type", value: "SMD National Star" },
                { label: "Refresh Rate", value: "3840 Hz" },
                { label: "Control System", value: "NovaStar Architecture" }
            ]
        },
        {
            key: "extra",
            title: "Extra",
            specs: [
                { label: "Certifications", value: "UL Listed, FCC Certified, CE Compliant" },
                { label: "Warranty Period", value: "5 Years Component Protection Coverage" },
                { label: "Maintenance", value: "Front & Rear Service Access Utility Support" }
            ]
        }
    ];

    // Video cards data
    const videoCards = [
        {
            videoId: "4ghCqLJXh34",
            title: "LED Display Board Animation",
            text: "Learn how LED display boards work with scrolling messages and moving animations."
        },
        {
            videoId: "BXsiQiQA93g",
            title: "LED Video Wall Advertising Display",
            text: "Explore LED video walls and digital advertising displays."
        },
        {
            videoId: "iKImJgpeeDA",
            title: "RGB LED Matrix Display Animation",
            text: "Create custom LED animations and digital display effects."
        },
        {
            videoId: "4W6OyjtY7T8",
            title: "Animated LED Sign Board",
            text: "Learn how animated LED sign boards work with custom text and lighting effects."
        }
    ];

    // Installation phases data
    const phases = [
        {
            title: "Phase 1: Component Verification",
            textContainerClass: "faq-text-container",
            steps: [
                {
                    title: "Step 1: Inventory Inspection",
                    text: "Unpack all components and verify against the shipping manifest. Ensure you have the main LED display module, outdoor wireless receiver, POE injector, power supply unit, and all necessary Cat6 shielded Ethernet cables.",
                    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                }
            ]
        },
        {
            title: "Phase 2: Network Configuration",
            textContainerClass: "faq-text-container",
            steps: [
                {
                    title: "Step 2: Antenna & POE Setup",
                    text: "Connect the outdoor antenna to the 'POE' port of the injector using a shielded Ethernet cable. Connect the 'LAN' port to your workstation to configure the bridge settings via the provided management software.",
                    // Updated with a more relevant image for network/POE hardware
                    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
                }
            ]
        },
        {
            title: "Phase 3: Structural Assembly",
            textContainerClass: "faq-text-container",
            steps: [
                {
                    title: "Step 3: Chassis Alignment",
                    text: "Align the LED panel guide pins with the main frame. Slide the modules into the locking rail system until you hear a definitive click, ensuring the internal structural rivets are fully engaged for safety.",
                    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80"
                }
            ]
        },
        {
            title: "Phase 4: Electrical Integration",
            textContainerClass: "faq-text-container",
            steps: [
                {
                    title: "Step 4: Terminal Power Rail Wiring",
                    text: "Verify the power source is disconnected. Insert the live, neutral, and ground conductors into the distribution block. Tighten terminal screws to the specified torque to prevent arcing and ensure a stable connection.",
                    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80"
                }
            ]
        },
        {
            title: "Phase 5: Mounting & Installation",
            textContainerClass: "faq-text-container",
            steps: [
                {
                    title: "Step 5: Load-Bearing Wall Mounting",
                    text: "Install the primary support brackets, ensuring they are anchored directly into structural studs or concrete using high-tensile expansion bolts. Use a spirit level to verify a perfect horizontal alignment, and perform a static load test to ensure the mounting surface can support the total weight of the LED array before hanging the modules.",
                    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
                }
            ]
        }
    ];
    // FAQ accordion items data
    const accordionItems = [
        {
            id: "manage-content",
            question: "How Easy Is It to Manage Content on Our LED Signs?",
            answer: "Managing your content has never been easier. With our intuitive software, you can quickly update your message, schedule content, and adjust settings—all at your fingertips.",
            hasVideo: true
        },
        {
            id: "clear-bright",
            question: "How Clear and Bright Are Our LED Signs?",
            answer: "Our signs feature premium high-grade LEDs with automatic ambient light sensors, ensuring vivid clarity and balanced brightness levels through any daytime or nighttime visibility condition.",
            hasVideo: false
        },
        {
            id: "resolution-options",
            question: "What Resolution Options Do You Have?",
            answer: "We offer an array of pixel pitch configurations ranging from high-definition tight-pitch modules for close-up viewing to standard pitches tailored for massive outdoor digital billboards.",
            hasVideo: false
        },
        {
            id: "harsh-weather",
            question: "How Durable Are Our LED Signs in Harsh Weather?",
            answer: "Engineered with weatherproofing seals and a robust ventilation system, our LED displays are fully rated to flawlessly operate in heavy rain, deep freezes, and high heat spikes.",
            hasVideo: false
        },
        {
            id: "maintain-signs",
            question: "How Easy Is It to Own and Maintain Our LED Signs?",
            answer: "With our front-serviceable module configurations and step-by-step remote diagnostics toolkit, minimal effort is required to maintain peak structural performance and long lifespan operational health.",
            hasVideo: false
        },
        {
            id: "adjust-brightness",
            question: "Can You Adjust the Brightness of Your LED Sign?",
            answer: "Yes, brightness controls can be configured dynamically through software intervals, or automated entirely to adjust relative to shifting localized environment conditions.",
            hasVideo: false
        }
    ];

    const [openSectionKey, setOpenSectionKey] = useState("physical");

    const [activeVideoId, setActiveVideoId] = useState("dQw4w9WgXcQ");

    const toggleSection = (key) => {
        setOpenSectionKey((currentKey) => (currentKey === key ? null : key));
    };

    const [activePhaseIndex, setActivePhaseIndex] = useState(1);

    const togglePhase = (index) => {
        setActivePhaseIndex((currentIndex) => (currentIndex === index ? null : index));
    };

    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
    };

    return (
        <>

            {/* Hero Section */}
            <section className="hero-frame">

                <div className="container p-0 h-100 position-relative">
                    <div className="row h-100 align-items-center">

                        {/* Left Side  */}
                        <div className="col-12 col-lg-6 z-1">
                            <div className="left-container">

                                <div className="badge-row">
                                    <span className="badge-yellow">Best Seller</span>
                                    <span className="badge-white">Free Software Included</span>
                                </div>

                                <div className="heading-group">
                                    <h1 className="main-title">4×4 Outdoor Custom</h1>
                                    <h1 className="sub-title-line">LED Sign</h1>
                                </div>

                                <p className="description-text">
                                    Full-color programmable digital signage that commands attention and converts passersby into customers.
                                </p>

                                <div className="review-row">
                                    <div className="stars-group">
                                        <Image src="/rating.svg" alt="rating" height="24" width="24" />
                                        <Image src="/rating.svg" alt="rating" height="24" width="24" />
                                        <Image src="/rating.svg" alt="rating" height="24" width="24" />
                                        <Image src="/rating.svg" alt="rating" height="24" width="24" />
                                        <Image src="/rating.svg" alt="rating" height="24" width="24" />
                                    </div>
                                    <span className="rating-value">5.0</span>
                                    <span className="review-count">Based on 128 reviews</span>
                                </div>

                                <div className="price-card">
                                    <span className="price-label">STARTING AT</span>
                                    <span className="price-amount">$13,648.70</span>
                                </div>

                                <div className="action-button-group">
                                    <button className="btn-primary-custom">
                                        <Image src="/star.svg" alt="star" height="20" width="20" />
                                        Build Your LED Sign
                                    </button>
                                    <button className="btn-secondary-custom">
                                        <Image src="/outdoor_product/phone.svg" alt="Phone" height="20" width="20" />
                                        Get a Quote
                                    </button>
                                </div>

                                <div className="trust-row">
                                    <div className="trust-item">
                                        <Image src="/outdoor_product/warr.svg" alt="Warranty" height="20" width="20" />
                                        <span>Up to 2-Year Warranty</span>
                                    </div>
                                    <div className="trust-item">
                                        <Image src="/outdoor_product/shipping.svg" alt="Shipping" height="20" width="20" />
                                        <span>Free Insured Shipping</span>
                                    </div>
                                </div>

                                <div className="certification-logos">
                                    <img src="/outdoor_product/logo-1.svg" alt="UL Certified" height="40" width="auto" />
                                    <img src="/outdoor_product/logo-2.svg" alt="TUV Certified" height="40" width="auto" />
                                </div>

                            </div>
                        </div>

                        {/* Right side */}
                        <div className="col-12 col-lg-6 position-relative d-flex flex-column align-items-center justify-content-center">
                            <div className="main-image-wrapper">
                                <img
                                    src="/LED.png"
                                    alt="4x4 Outdoor Custom LED Sign Panels"
                                    className="main-showcase-image"
                                />
                            </div>

                            <div className="thumbnail-carousel-container">
                                <button className="carousel-arrow-left">
                                    <Image src="/outdoor_product/arrow.svg" alt="Prev" className="rotate-180" height="24" width="24" />
                                </button>

                                <div className="thumb-frame">
                                    <Image src="/outdoor_product/img-1.png" alt="Thumbnail View 1" height="101" width="151" />
                                </div>
                                <div className="thumb-frame">
                                    <Image src="/outdoor_product/img-2.png" alt="Thumbnail View 2" height="101" width="151" />
                                </div>
                                <div className="thumb-frame">
                                    <Image src="/outdoor_product/img-3.png" alt="Thumbnail View 3" height="101" width="151" />
                                </div>
                                <div className="thumb-frame">
                                    <Image src="/outdoor_product/img-4.png" alt="Thumbnail View 4" height="101" width="151" />
                                </div>

                                <button className="carousel-arrow-right">
                                    <Image src="/outdoor_product/arrow.svg" alt="Next" height="24" width="24" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Secondary Bottom Navigation */}
            <nav className="bottom-sticky-nav">
                <div className="container h-100 d-flex align-items-center">
                    <div className="nav-scroll-container">
                        <button className="nav-btn">
                            <Image src="/outdoor_product/eye.svg" alt="eye icon" height="16" width="16" />
                            <span>Overview </span>
                        </button>
                        <button className="nav-btn">
                            <Image src="/outdoor_product/photo.svg" alt="photo icon" height="16" width="16" />
                            <span>Gallery </span>
                        </button>
                        <button className="nav-btn">
                            <Image src="/outdoor_product/message.svg" alt="message icon" height="16" width="16" />
                            <span>Reviews </span>
                        </button>
                        <button className="nav-btn">
                            <Image src="/outdoor_product/setting.svg" alt="setting icon" height="16" width="16" />
                            <span>Customize </span>
                        </button>
                        <button className="nav-btn">
                            <Image src="/outdoor_product/award.svg" alt="award icon" height="16" width="16" />
                            <span>Why Us & Software </span>
                        </button>
                        <button className="nav-btn">
                            <Image src="/outdoor_product/protect.svg" alt="protect icon" height="16" width="16" />
                            <span>Warranty & Specs </span>
                        </button>
                        <button className="nav-btn">
                            <Image src="/outdoor_product/setup.svg" alt="protect icon" height="16" width="16" />
                            <span>Setup & FAQ </span>
                        </button>
                        <button className="nav-btn-blue">
                            <Image src="/outdoor_product/phone.svg" alt="phone" height="16" width="16" />
                            <span>Contact </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overview Details Section */}
            <section>
                <div className="led-main-frame">
                    <div className="led-content-wrapper">

                        <h2 className="led-section-title">Overview</h2>
                        <p className="led-main-description">
                            This powerhouse delivers exceptional visibility. Available in single or double-sided configurations,
                            the 4×8 LED sign offers a resolution of up to 192 × 384 pixels—that's 73728 total pixels per side—for
                            crisp, full-color content that stands out day or night. Choose from multiple resolution and brightness
                            options, including models reaching up to 10,000 NITS for excellent performance in direct sunlight.
                        </p>

                        {/* Product List  */}
                        <div className="row g-4 w-100 m-0 justify-content-start">

                            <div className="col-12 col-md-4 px-2">
                                <div className="led-product-card">
                                    <div className="led-image-placeholder-big">
                                        <Image src="/outdoor_product/overview-1.png" alt="overview" height="260" width="260" />
                                    </div>
                                    <div className="led-card-header-row">
                                        <div className="led-title-container">
                                            <h3 className="led-product-name">Beacon HD</h3>
                                            <span className="led-product-tag">P6 MM</span>
                                        </div>
                                        <div className="led-badge-yellow">Highest Detail</div>
                                    </div>
                                    <div className="led-divider"></div>
                                    <div className="led-spec-list">
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Pixel Density</span>
                                            <span className="led-spec-value">16,384</span>
                                        </div>
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Resolution</span>
                                            <span className="led-spec-value">128 × 128 px</span>
                                        </div>
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Brightness</span>
                                            <span className="led-spec-value">7,000 – 8,000 NITS</span>
                                        </div>
                                    </div>
                                    <div className="led-best-for-container">
                                        <span className="led-best-for-text">Best for: Close viewing, storefronts, shopping centers</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 px-2">
                                <div className="led-product-card">
                                    <div className="led-image-placeholder-big">
                                        <Image src="/outdoor_product/overview-2.png" alt="overview" height="260" width="260" />

                                    </div>
                                    <div className="led-card-header-row">
                                        <div className="led-title-container">
                                            <h3 className="led-product-name">Beacon</h3>
                                            <span className="led-product-tag">P8 MM</span>
                                        </div>
                                        <div className="led-badge-yellow">Best Value</div>
                                    </div>
                                    <div className="led-divider"></div>
                                    <div className="led-spec-list">
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Pixel Density</span>
                                            <span className="led-spec-value">6,400</span>
                                        </div>
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Resolution</span>
                                            <span className="led-spec-value">80 × 80 px</span>
                                        </div>
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Brightness</span>
                                            <span className="led-spec-value">7,500 – 8,500 NITS</span>
                                        </div>
                                    </div>
                                    <div className="led-best-for-container">
                                        <span className="led-best-for-text">Best for: Mid-range roads, general commercial use</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 px-2">
                                <div className="led-product-card">
                                    <div className="led-image-placeholder-big">
                                        <Image src="/outdoor_product/overview-3.png" alt="overview" height="260" width="260" />
                                    </div>
                                    <div className="led-card-header-row">
                                        <div className="led-title-container">
                                            <h3 className="led-product-name">Spotlight</h3>
                                            <span className="led-product-tag">P10 MM</span>
                                        </div>
                                        <div className="led-badge-yellow">Brightest</div>
                                    </div>
                                    <div className="led-divider"></div>
                                    <div className="led-spec-list">
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Pixel Density</span>
                                            <span className="led-spec-value">4,096</span>
                                        </div>
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Resolution</span>
                                            <span className="led-spec-value">64 × 64 px</span>
                                        </div>
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Brightness</span>
                                            <span className="led-spec-value">8,500 – 10,000 NITS</span>
                                        </div>
                                    </div>
                                    <div className="led-best-for-container">
                                        <span className="led-best-for-text">Best for: High-speed roads, maximum sun visibility</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="led-main-description">
                            Built for flexibility, the 4×8 supports both DIY installation and turnkey setup, allowing you to take
                            control or leave it to the pros. It draws 27 AMPS @ 110V (or 13 AMPS @ 220V) and weighs approximately 320 lbs per side.
                        </p>

                        {/* Specifications  */}
                        <div className="row g-4 w-100 m-0 justify-content-start">

                            <div className="col-12 col-md-4 px-2">
                                <div className="led-spec-card">
                                    <div className="led-header-icon-layout">
                                        <Image src="/outdoor_product/weight.png" alt="weight" height="74" width="74" />
                                        <h4 className="led-icon-heading">Weight</h4>
                                    </div>
                                    <div className="led-spec-list">
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Cabinet Weight</span>
                                            <span className="led-spec-value">10-lbs. / sq ft.</span>
                                        </div>
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Max weight</span>
                                            <span className="led-spec-value">(4x8)x10 = 320 lbs/side</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 px-2">
                                <div className="led-spec-card">
                                    <div className="led-header-icon-layout">
                                        <Image src="/outdoor_product/power.png" alt="power" height="74" width="74" />
                                        <h4 className="led-icon-heading">Power</h4>
                                    </div>
                                    <div className="led-spec-list">
                                        <div className="led-spec-row align-items-start">
                                            <span className="led-spec-label">Power Use</span>
                                            <span className="led-spec-value">
                                                95 Watts / sq ft. 27 AMPS@110V or 13 AMPS@220V / Side
                                            </span>
                                        </div>
                                        <div className="led-spec-row">
                                            <span className="led-spec-label">Power Consumption</span>
                                            <span className="led-spec-value">Max 3040 watts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 px-2 d-none d-md-block"></div>
                        </div>

                        <p className="led-main-description">
                            Content is easy to manage with our free smart software, which allows you to schedule slideshows,
                            stream video, and display live elements like weather, clocks, or countdowns—from your phone, tablet, or computer.
                        </p>

                        {/* Product List */}
                        <div className="row g-4 w-100 m-0 justify-content-start">

                            <div className="col-12 col-md-4 px-2">
                                <div className="led-info-card">
                                    <Image src="/outdoor_product/communication.png" alt="weight" height="74" width="74" />
                                    <div className="led-info-content">
                                        <h4 className="led-info-title">Communication</h4>
                                        <p className="led-info-desc">LAN, WIFI, 4G (Optional)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 px-2">
                                <div className="led-info-card">
                                    <Image src="/outdoor_product/support.png" alt="weight" height="74" width="74" />
                                    <div className="led-info-content">
                                        <h4 className="led-info-title">Support</h4>
                                        <p className="led-info-desc">Images, Videos, Slides, and more.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 px-2 d-none d-md-block"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Gallery Showcase Section */}
            <section className="gallery-section position-relative py-5">
                <div className="container-xl p-0">

                    <div className="row mb-4">
                        <div className="col-12 text-start">
                            <h2 className="gallery-main-title mb-2">Gallery</h2>
                            <p className="gallery-main-desc mb-0">
                                See Our Outdoor LED Signs in Action. Browse real custom LED signage installations from businesses across the country.
                            </p>
                        </div>
                    </div>

                    {/* Swiper */}
                    <div className="row">
                        <div className="col-12 position-relative">

                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: ".gallery-next",
                                    prevEl: ".gallery-prev"
                                }}
                                spaceBetween={24}
                                slidesPerView={1}
                                loop={true}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 }
                                }}
                                className="gallery-swiper"
                            >
                                {works.map((item, index) => (
                                    <SwiperSlide key={index} className="h-auto">
                                        <div className="gallery-card position-relative overflow-hidden h-100 shadow-sm">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="gallery-card-img img-fluid w-100 h-100 object-fit-cover"
                                            />

                                            <div className="gallery-card-content position-absolute p-4 d-flex flex-column gap-1 text-white">
                                                <h3 className="gallery-card-title mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="gallery-card-desc mb-1">
                                                    {item.desc}
                                                </p>
                                                <span className="gallery-card-location small opacity-75">
                                                    {item.location}
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="gallery-arrows d-flex gap-2 justify-content-end mt-3 me-3">
                                <button className="gallery-arrow-btn gallery-prev" aria-label="Previous slide">
                                    <Image src="arrow.svg" alt="arrow" width="20" height="20" className="rotate-180" />
                                </button>
                                <button className="gallery-arrow-btn gallery-next" aria-label="Next slide">
                                    <Image src="arrow.svg" alt="arrow" width="20" height="20" />
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <button className="gallery-action-btn btn">
                                <Image src="/star.svg" alt="star" width="18" height="18" className="ml-3" />
                                Ready to Build Yours? Customize Now
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* User Reviews Section */}
            <section className="user-reviews-section py-5 px-3 px-md-0">
                <div className="container-xl p-0">

                    <div className="row mb-4 mb-md-5">
                        <div className="col-12 text-center text-md-start">
                            <h2 className="user-reviews-main-title mb-1">
                                Reviews
                            </h2>
                            <p className="user-reviews-main-desc mb-0">
                                Loved by Businesses Nationwide
                            </p>
                        </div>
                    </div>

                    {/* Swiper */}
                    <div className="row">
                        <div className="col-12">

                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: '.user-reviews-arrow-next',
                                    prevEl: '.user-reviews-arrow-prev',
                                }}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 }
                                }}
                                className="mySwiper"
                            >
                                {userReviewsData.map((item) => (
                                    <SwiperSlide key={item.id} className="h-auto">
                                        <div className="user-reviews-card p-4 shadow-sm">
                                            <div className="user-reviews-card-inner d-flex flex-column gap-3">

                                                <div className="user-reviews-video-frame position-relative">
                                                    <iframe
                                                        src={item.videoUrl}
                                                        title={`Review Video ${item.id}`}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>

                                                <div className="user-reviews-card-body d-flex flex-column justify-content-between gap-2">
                                                    <div>
                                                        <div className="user-reviews-stars d-flex gap-1 mb-2">
                                                            {[...Array(5)].map((_, i) => (
                                                                <i key={i} className="bi bi-star-fill"></i>
                                                            ))}
                                                        </div>
                                                        <p className="user-reviews-card-text mb-0">{item.reviewText}</p>
                                                    </div>

                                                    <div className="user-reviews-profile d-flex align-items-center gap-2 mt-2">
                                                        <img src={item.img} alt={item.name} className="user-reviews-profile-avatar rounded-circle img-fluid" />
                                                        <div className="user-reviews-profile-info d-flex flex-column">
                                                            <span className="user-reviews-profile-name">{item.name}</span>
                                                            <span className="user-reviews-profile-role text-muted">{item.role}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="mt-4">
                                <div className="row mb-4">
                                    <div className="col-12 d-flex justify-content-center justify-content-md-end">
                                        <div className="user-reviews-arrows d-flex gap-2">
                                            <button className="user-reviews-arrow-btn user-reviews-arrow-prev" aria-label="Previous slide">
                                                <Image src="arrow.svg" alt="arrow" width="20" height="20" className="rotate-180" />
                                            </button>
                                            <button className="user-reviews-arrow-btn user-reviews-arrow-next" aria-label="Next slide">
                                                <Image src="arrow.svg" alt="arrow" width="20" height="20" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <button className="btn btn-warning d-flex align-items-center gap-2 fw-semibold px-4 py-2.5 shadow-sm" style={{ backgroundColor: '#FFD000', border: 'none', borderRadius: '6px' }}>
                                            <Image src="/star.svg" alt="star" height="20" width="20" />
                                            Customize Your Sign Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Customise & why us Section */}
            <section>
                <div className="sign-canvas-container">

                    {/* Customise Section */}
                    <div className="section-customise-frame">
                        <div className="customise-container">

                            <div className="customise-header">
                                <h2 className="customise-title">Customise</h2>
                                <p className="customise-subtitle">Build Your Perfect Custom LED Sign</p>
                            </div>


                            <div className="customise-inner-layout">

                                {/* Blue Section */}
                                <div className="custom-size-banner">
                                    <div className="banner-text-frame">
                                        <h4 className="banner-heading">Need a Custom Size?</h4>
                                        <p className="banner-description">
                                            Enter your desired dimensions to see an instant price estimate, or jump straight to the sign builder.
                                        </p>
                                    </div>

                                    <div className="banner-config-row">
                                        <div className="dimensions-input-group">

                                            <div className="input-container-box">
                                                <label className="input-label-frame" htmlFor="width-input">
                                                    <span className="input-label-text">Width (ft)</span>
                                                </label>
                                                <input
                                                    id="width-input"
                                                    type="number"
                                                    className="dimension-field"
                                                    placeholder="e.g. 5"
                                                />
                                            </div>

                                            <div className="input-container-box">
                                                <label className="input-label-frame" htmlFor="height-input">
                                                    <span className="input-label-text">Height (ft)</span>
                                                </label>
                                                <input
                                                    id="height-input"
                                                    type="number"
                                                    className="dimension-field"
                                                    placeholder="e.g. 5"
                                                />
                                            </div>
                                        </div>

                                        <button className="btn-yellow-primary" type="button">
                                            <Image src="/star.svg" alt="star" width={24} height={24} />
                                            <span>Open Full Sign Builder</span>
                                        </button>
                                    </div>
                                </div>

                                {/* White section */}
                                <div className="service-split-container">

                                    <div className="service-card-diy">
                                        <div className="service-card-body">
                                            <div className="card-heading-frame">
                                                <h3 className="card-heading-diy-text">Self-Installation (DIY)</h3>
                                            </div>
                                            <div className="card-desc-frame">
                                                <p className="card-desc-diy">
                                                    You handle the installation and setup. We provide step-by-step instructions, videos, and free live support to guide you every step of the way.
                                                </p>
                                            </div>
                                            <button className="btn-diy-action" type="button">
                                                <Image src="/star.svg" alt="star" width="24" height="24" />
                                                <span>Configure DIY Sign</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="service-card-turnkey">
                                        <div className="service-card-body">
                                            <div className="card-heading-frame">
                                                <h3 className="card-heading-turnkey-text">Full-Service (Turnkey)</h3>
                                            </div>
                                            <div className="card-desc-frame">
                                                <p className="card-desc-turnkey">
                                                    We handle everything from permitting to installation and training. Ideal for businesses that want a completely hassle-free experience.
                                                </p>
                                            </div>
                                            <button className="btn-turnkey-action" type="button">
                                                <Image src="/outdoor_product/star.svg" alt="star" width="24" height="24" />
                                                <span>Configure Turnkey Sign</span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why Us Section */}
                    <div className="section-whyus-frame">
                        <div className="whyus-inner-layout">

                            {/* Header */}
                            <div className="whyus-header">
                                <h2 className="whyus-title m-0">Why Us?</h2>
                                <p className="whyus-subtitle m-0">
                                    We're more than sign builders—we're partners in your success. Every sign is backed by hands-on support, fast and insured delivery, and tools that make content creation easy, even for beginners. From day one, our team is here to help you design, install, and manage your sign with confidence. We believe your sign should work as hard as you do—and we're committed to helping you make the most of it.
                                </p>
                            </div>

                            {/* You tube */}
                            <div className="video-player-canvas">
                                <iframe
                                    className="benefits-video-iframe"
                                    src="https://www.youtube.com/embed/0i_6IzleU70"
                                    title="How to Wire Multi-Row LED Signs: XIGNZ Modular Series by LED Sign City"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Features */}
                            <div className="features-grid-container">
                                {featuresData.map((feat) => (
                                    <div key={feat.id} className="feature-item-card">
                                        <div className="feature-card-header">
                                            <div className="feature-icon-wrapper">
                                                <Image
                                                    src={`/outdoor_product/${feat.image}`}
                                                    alt={feat.title}
                                                    width={20}
                                                    height={20}
                                                />
                                            </div>
                                            <div className="feature-heading-container">
                                                <h4 className="feature-card-title m-0">{feat.title}</h4>
                                            </div>
                                        </div>
                                        <div className="feature-desc-container">
                                            <p className="feature-desc-text m-0">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Warranty & Specs Section */}
            <section className="warranty-section-frame">
                <div className="mainFrame">
                    <div className="contentContainer">

                        <div className="headingFrame">
                            <h2 className="sectionHeading">Warranty & Specs</h2>
                        </div>

                        {/* Drop-down specs */}
                        <div className="specsWrapper">
                            <div className="accordionContainer">

                                {sectionsData.map((section) => {
                                    const isOpen = openSectionKey === section.key;
                                    return (
                                        <React.Fragment key={section.key}>
                                            <div
                                                className={isOpen ? "activeHeader" : "collapsedHeader"}
                                                onClick={() => toggleSection(section.key)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <span className={isOpen ? "headerText" : "collapsedHeaderText"}>
                                                    {section.title}
                                                </span>
                                                <img
                                                    src={isOpen ? "/outdoor_product/drop-down_open.svg" : "/outdoor_product/drop-down_close.svg"}
                                                    alt="Toggle icon"
                                                    className="chevronIcon"
                                                />
                                            </div>

                                            <div className={isOpen ? "tableBackgroundOpen" : "tableBackgroundClosed"}>
                                                {section.specs.map((spec, index) => (
                                                    <div key={index} className={index === 0 ? "tableRow" : "tableRowBorder"}>
                                                        <span className="rowTag">{spec.label}</span>
                                                        <div className="rowValueContainer">
                                                            <p className="rowValue">{spec.value}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </React.Fragment>
                                    );
                                })}

                            </div>
                        </div>

                        {/* Free software &Wireless Control */}
                        <div className="descriptionFrame">
                            <h2 className="sectionHeading">Free Software & Wireless Control</h2>
                            <p className="sectionDescription">
                                The videos above walk you through how to use our software to add eye-catching visuals, custom text, and smooth transitions. No design background? No problem. With just a few clicks, you can transform your LED sign into a professional-grade marketing tool.
                            </p>
                        </div>

                        {/* Swiper */}
                        <div className="carouselContainer">

                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={'auto'}
                                navigation={{
                                    prevEl: '.arrowLeft',
                                    nextEl: '.arrowRight',
                                }}
                                className="cardsWrapper"
                            >
                                {videoCards.map((card, index) => (
                                    <SwiperSlide
                                        key={card.videoId || index}
                                        style={{ width: 'auto' }}
                                    >
                                        <div
                                            className={`videoCard ${activeVideoId === card.videoId ? 'activeCard' : ''}`}
                                            onClick={() => setActiveVideoId(card.videoId)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div className="innerLayout">

                                                <div className="videoPlayer" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
                                                    <iframe
                                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                                        src={`https://www.youtube.com/embed/${card.videoId}`}
                                                        title={card.title}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                                <div className="textBlock">
                                                    <h5 className="cardTitle">{card.title}</h5>
                                                    <p className="cardText">{card.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="arrowFrame">
                                <div className="arrowLeft" style={{ cursor: 'pointer' }}>
                                    <Image src="/arrow.svg" alt="Scroll Left" height="24" width="24" className="rotate-180" />
                                </div>
                                <div className="arrowRight" style={{ cursor: 'pointer' }}>
                                    <Image src="/arrow.svg" alt="Scroll Right" height="24" width="24" />
                                </div>
                            </div>
                        </div>

                        <div className="helpActionFrame">
                            <button className="primaryButton btn d-flex flex-row align-items-center justify-content-center">
                                <div className="phoneIconFrame">
                                    <img src="/outdoor_product/phone_blue.svg" alt="Phone" className="buttonIcon" />
                                </div>
                                <span className="buttonLinkText">Schedule a Support Call</span>
                            </button>
                            <p className="footerHelpText">Need help understanding the specs?</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Setup & FAQ Section */}
            <section className="setup-section-wrapper">
                <div className="setup-frame-container">
                    <div className="setup-inner-layout">

                        <div className="setup-header-block">
                            <h2 className="setup-main-title">Setup & FAQ</h2>
                            <p className="setup-sub-description">
                                Start using your LED sign right away! Follow the link below, enter your sign dimensions, and instantly receive customized instructions tailored specifically for your sign.
                            </p>
                        </div>

                        {/* Drop-down */}
                        <div className="setup-accordion-stack">
                            <div className="setup-accordion-inner">

                                {phases.map((phase, index) => {
                                    const isOpen = activePhaseIndex === index;

                                    return (
                                        <div
                                            key={index}
                                            className={isOpen ? "setup-overlay-border-shadow" : "setup-border-collapsed"}
                                        >

                                            <button
                                                className={isOpen ? "setup-btn-expanded" : "setup-btn-collapsed"}
                                                type="button"
                                                onClick={() => togglePhase(index)}
                                            >
                                                <div className={isOpen ? "setup-text-container" : phase.textContainerClass}>
                                                    {phase.title}
                                                </div>

                                                <div className={isOpen ? "setup-arrow-icon-up" : "setup-arrow-icon-down"}>
                                                    <Image
                                                        src={
                                                            isOpen
                                                                ? "/outdoor_product/drop-down_open.svg"
                                                                : "/outdoor_product/drop-down_close.svg"
                                                        }
                                                        alt="Toggle Icon"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </div>
                                            </button>

                                            {isOpen && (
                                                <div className="setup-content-pane">
                                                    <div className="setup-content-inner-stack">
                                                        {phase.steps.map((step, stepIndex) => (
                                                            <div key={stepIndex} className="setup-step-row">
                                                                <div className="setup-image-wrapper">
                                                                    <Image
                                                                        src={step.image}
                                                                        alt={step.title}
                                                                        width={330}
                                                                        height={234}
                                                                        unoptimized
                                                                        className="setup-step-img"
                                                                    />
                                                                </div>
                                                                <div className="setup-text-column">
                                                                    <h5 className="setup-step-heading">{step.title}</h5>
                                                                    <p className="setup-step-text">{step.text}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    );
                                })}

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* General FAQ Section */}
            <section id="general-faq-section-wrapper" className="general-faq-section-wrapper container-fluid p-0">
                <div id="general-faq-main-container" className="general-faq-main-container">

                    {/* Haeder & buttons  */}
                    <div id="general-faq-header-block" className="general-faq-header-block">
                        <div id="general-faq-title-container" className="general-faq-title-container">
                            <h2 id="general-faq-main-title" className="general-faq-main-title">Frequently Asked Questions</h2>
                        </div>
                        <div id="general-faq-filter-buttons" className="general-faq-filter-buttons">
                            <button id="general-faq-btn-popular" className="general-faq-btn general-faq-btn-popular" type="button">
                                <span className="general-faq-btn-text">Popular Questions</span>
                            </button>
                            <button id="general-faq-btn-common" className="general-faq-btn general-faq-btn-common" type="button">
                                <span className="general-faq-btn-text">Common Questions</span>
                            </button>
                        </div>
                    </div>

                    {/* drop-down */}
                    <div id="general-faq-accordion-list" className="general-faq-accordion-list">
                        {accordionItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={item.id}
                                    id={`general-faq-row-${item.id}`}
                                    className={`general-faq-item-row ${isOpen ? 'expanded' : ''}`}
                                >

                                    <div
                                        id={`general-faq-trigger-${item.id}`}
                                        className="general-faq-item-header"
                                        onClick={() => toggleItem(index)}
                                    >
                                        <h5 className="general-faq-item-question">{item.question}</h5>
                                        <div className={`general-faq-chevron-icon ${isOpen ? 'rotate' : ''}`}>
                                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L6 6L11 1" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div
                                        id={`general-faq-panel-${item.id}`}
                                        className={`general-faq-panel-collapse ${isOpen ? 'show' : ''}`}
                                    >
                                        <div className="general-faq-panel-body">
                                            <p className="general-faq-item-answer">{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* Contact Section */}
            <section className="frame-main">
                <div className="container-fluid h-100 position-relative">
                    <div className="row align-items-center h-100">

                        {/* Left side */}
                        <div className="frame-left-content col-12 col-lg-6">
                            <div className="frame-text-group">
                                <h2 className="heading-h2">
                                    Ready to Light Up Your Business with a Custom LED Sign?
                                </h2>
                                <p className="paragraph-p">
                                    Get a personalized quote, ask a question, or chat with our team. We typically respond within a few hours.
                                </p>
                            </div>

                            <div className="container-contact">

                                <div className="background-card">
                                    <div className="icon-background">
                                        <Image src="/outdoor_product/blue_phone.svg" alt="alt" width="24" height="24" />
                                    </div>
                                    <div className="container-text">
                                        <h6 className="heading-h6">Call Us</h6>
                                        <p className="card-text">Mon–Fri, 9am–5pm CST</p>
                                    </div>
                                </div>

                                <div className="background-card">
                                    <div className="icon-background">
                                        <Image src="/outdoor_product/blue_mail.svg" alt="alt" width="24" height="24" />
                                    </div>
                                    <div className="container-text">
                                        <h6 className="heading-h6">Email Us</h6>
                                        <p className="card-text">We respond within hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="group-30">
                                <div className="group-24">
                                    <Image
                                        src="/outdoor_product/monitor.png"
                                        alt="monitor"
                                        width="620"
                                        height="617"
                                    />
                                </div>

                                <button className="primary-button">
                                    <Image src="/star.svg" alt="star" width="24" height="24" />
                                    <span className="build-sign-text">Build Your LED Sign</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}