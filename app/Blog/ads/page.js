"use client";
import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';
import './style.css';

export default function Ads() {
    // State logic for interactive read-more tracking
    const [expandedCards, setExpandedCards] = useState({});

    const toggleExpand = (e, id) => {
        e.preventDefault();
        setExpandedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const blogListNodes = [
        {
            id: 1,
            tag: 'LED Sign Ads',
            date: 'Jan 9, 2026',
            title: '2×4 LED Sign Specifications - Compact Roadside Display',
            description: 'The 2×4 LED Sign is a compact, outdoor ready digital display built for high-visibility messaging in a smaller footprint. A strong fit for storefronts, entrances, and drive lanes.',
            imageSrc: '/ads_temp.png'
        },
        {
            id: 2,
            tag: 'Hardware Tech',
            date: 'Feb 14, 2026',
            title: 'High-Refresh Rate Controller Modules for Outdoor Units',
            description: 'An in-depth look into synchronous controller systems that maximize diode refresh cycles. Ideal for maintaining crisp content playback under direct, intense afternoon sunlight.',
            imageSrc: '/ads_temp.png'
        },
        {
            id: 3,
            tag: 'Installation',
            date: 'Mar 02, 2026',
            title: 'Structural Mounting Guide: Secure Roadside Anchoring',
            description: 'A complete breakdown of wind-load calculations and foundational footing requirements for standard roadside digital frameworks. Ensure safety clearances match local zoning mandates.',
            imageSrc: '/ads_temp.png'
        },
        {
            id: 4,
            tag: 'Maintenance',
            date: 'Apr 18, 2026',
            title: 'Thermal Management & Cooling in Compact Enclosures',
            description: 'Explore active vs. passive ventilation setups for sealed outdoor sign cabinets. Prevent premature diode degradation by optimizing internal ambient airflow channels effectively.',
            imageSrc: '/ads_temp.png'
        },
        {
            id: 5,
            tag: 'Digital Signage',
            date: 'May 22, 2026',
            title: 'Optimal Pixel Pitch Selection for Commercial Storefronts',
            description: 'How to balance viewing distance and resolution requirements when picking hardware configurations. Discover why smaller custom profiles demand tight spacing configurations.',
            imageSrc: '/ads_temp.png'
        },
        {
            id: 6,
            tag: 'Energy Tech',
            date: 'Jun 11, 2026',
            title: 'Smart Dimming Sensors: Reducing Off-Peak Power Draw',
            description: 'Integrate automated ambient light sensors to dynamically adjust sign nit outputs. Drastically lower operating overhead costs while complying with nocturnal light pollution rules.',
            imageSrc: '/ads_temp.png'
        }
    ];

    return (
        <>
            <main className="container-fluid p-0">
                {/* Top Section */}
                <section className="top-section-frame bg-primary-blue d-flex align-items-center">
                    <div className="px-3 d-flex flex-column gap-2 text-white">
                        <h1 className="main-heading-insights m-0">Latest Insights from LED SIGN City</h1>
                        <p className="main-para m-0">Choose a category below to explore guides, tips, and real-world case studies.</p>
                    </div>
                </section>

                {/* Canvas/Grid Section via Bootstrap row/col system */}
                <section className="canvas-wrapper">
                    <div className="layout-grid-frame container-fluid p-0">
                        <div className="row g-4 justify-content-center justify-content-xl-start">
                            {blogListNodes.map((node) => {
                                const isExpanded = expandedCards[node.id];
                                return (
                                    <div key={node.id} className="col-12 col-md-6 col-xl-4 d-flex justify-content-center">
                                        <div className="blog-card-item d-flex flex-column align-items-start p-0 rounded-3 bg-white w-100">

                                            {/* Iamge */}
                                            <div className="image-header-container w-100 position-relative">
                                                <Image
                                                    src={node.imageSrc}
                                                    alt={node.title}
                                                    placeholder="blur"
                                                    blurDataURL={node.imageSrc}
                                                    fill
                                                    className="object-fit-cover card-thumbnail"
                                                />
                                            </div>

                                            <div className="card-data-body w-100 d-flex flex-column align-items-start p-3 p-md-4">
                                                <div className="inner-content-frame d-flex flex-column align-items-start p-0 gap-2 w-100">

                                                    {/* Header */}
                                                    <div className="w-100 d-flex flex-row align-items-center p-0 gap-2">
                                                        <div className="category-pill d-flex align-items-center justify-content-center">
                                                            <span className="category-text text-nowrap">{node.tag}</span>
                                                        </div>
                                                        <div className="timestamp-container">
                                                            {node.date}
                                                        </div>
                                                    </div>

                                                    {/* Title */}
                                                    <h6 className="heading-title-text w-100 d-flex align-items-center">
                                                        {node.title}
                                                    </h6>

                                                    {/* Content */}
                                                    <p className={`description-paragraph-text w-100 ${isExpanded ? 'expanded' : ''}`}>
                                                        {node.description}
                                                    </p>

                                                    {/* Link */}
                                                    <Link
                                                        href="#"
                                                        onClick={(e) => toggleExpand(e, node.id)}
                                                        className="action-link-anchor w-100 d-flex flex-row align-items-center p-0 gap-1 mt-auto"
                                                    >
                                                        <span className="action-link-text">
                                                            {isExpanded ? 'Show Less' : 'Read More'}
                                                        </span>
                                                        <Image
                                                            src="/b_arrow.svg"
                                                            alt="arrow"
                                                            width={24}
                                                            height={24}
                                                            className={`arrow-icon ${isExpanded ? 'rotate-arrow' : ''}`}
                                                        />
                                                    </Link>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}