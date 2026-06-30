"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./style.css";

export default function CaseStudies() {
    // Software Platforms & Solutions filters
    const [categoriesData, setCategoriesData] = useState([
        { name: 'Viper Express', checked: true },
        { name: 'Viper Handy', checked: true },
        { name: 'Vnnox Management', checked: true },
        { name: 'Viplex Brightness', checked: true },
    ]);

    // Deployment Contexts & Technical Focus filters
    const [hardwareComponentsData, setHardwareComponentsData] = useState([
        { name: 'Hardware Integration', checked: false },
        { name: 'Signal & Wiring', checked: false },
        { name: 'Power Infrastructure', checked: false },
        { name: 'Display Panels', checked: false },
    ]);

    // Grid data mapped with 6 unique, context-aware Case Studies
    const caseStudiesPosts = [
        {
            category: 'Programming & Setup',
            date: 'Jun 9, 2026',
            title: 'Cloud Publishing Framework Setup with Vnnox',
            description: 'A step-by-step walkthrough detailing how to configure remote cloud synchronous publishing on a multi-screen commercial node using the Vnnox management platform.',
            imageUrl: '/blog/ads_temp.png'
        },
        {
            category: 'LED Sign Ads',
            date: 'May 24, 2026',
            title: '2×4 LED Sign Specifications - Compact Roadside Display',
            description: 'The 2×4 LED Sign is a compact, outdoor ready digital display built for high-visibility messaging in a smaller footprint. A strong fit for storefronts, entrances, and drive lanes.',
            imageUrl: '/blog/ads_temp.png'
        },
        {
            category: 'Hardware & Maintenance',
            date: 'May 12, 2026',
            title: 'Diagnosing Power Supply Failures on Perimeter Boards',
            description: 'An architectural breakdown on isolation workflows, checking DC output parameters, and replacing faulty switching power supplies without taking the entire ribbon display offline.',
            imageUrl: '/blog/ads_temp.png'
        },
        {
            category: 'Viper Software',
            date: 'Apr 28, 2026',
            title: 'Real-time Playlist Scheduling via Viper Express',
            description: 'Optimizing local network broadcast cycles using Viper Express. Learn how to sequence programmatic dayparting rules and cache heavy media files directly onto the asynchronous player.',
            imageUrl: '/blog/ads_temp.png'
        },
        {
            category: 'Wiring & Signal',
            date: 'Mar 15, 2026',
            title: 'Resolving Data Cascade Drops in Hub Board Connections',
            description: 'Addressing structural signal attenuation issues. This guide covers testing flat ribbon cables, identifying cold solder joints, and utilizing differential signal boosters for long runs.',
            imageUrl: '/blog/ads_temp.png'
        },
        {
            category: 'Display Panels',
            date: 'Feb 02, 2026',
            title: 'Outdoor Calibration: Matching Brightness & Color Profiles',
            description: 'Utilizing Viplex Brightness alongside smart sensor arrays to fine-tune white balance levels, avoiding pixelation, and maintaining optimal nit output across aging module batches.',
            imageUrl: '/blog/ads_temp.png'
        }
    ];

    const [expandedPosts, setExpandedPosts] = useState(
        new Array(caseStudiesPosts.length).fill(false)
    );

    const [isSoftwareOpen, setIsSoftwareOpen] = useState(true);
    const [isHardwareOpen, setIsHardwareOpen] = useState(false);

    const toggleReadMore = (index) => {
        const updatedExpanded = [...expandedPosts];
        updatedExpanded[index] = !updatedExpanded[index];
        setExpandedPosts(updatedExpanded);
    };

    const handleSoftwareCheckboxChange = (index) => {
        const updatedCategories = [...categoriesData];
        updatedCategories[index].checked = !updatedCategories[index].checked;
        setCategoriesData(updatedCategories);
    };

    const handleHardwareCheckboxChange = (index) => {
        const updatedComponents = [...hardwareComponentsData];
        updatedComponents[index].checked = !updatedComponents[index].checked;
        setHardwareComponentsData(updatedComponents);
    };

    return (
        <>
            <main className="container-fluid p-0 bg-light-gray-base">

                {/* Hero Banner aligned with Case Studies Theme */}
                <section className="insights-hero d-flex align-items-center">
                    <div className="container px-3 px-md-0 d-flex flex-column gap-2 text-white">
                        <h1 className="hero-title m-0">
                            Technical Case Studies
                        </h1>
                        <p className="hero-subtitle m-0">
                            Explore engineering deployment analyses, hardware optimizations, and digital sign configurations.
                        </p>
                    </div>
                </section>

                {/* Main Content Area */}
                <section className="content-dashboard-wrapper py-5">
                    <div className="container px-3 px-md-0">
                        <div className="row g-4 justify-content-between">

                            {/* Sidebar Filter Navigation Panel */}
                            <aside className="col-lg-4 col-xl-3">
                                <div className="sidebar-filter-panel p-4">
                                    <div className="sidebar-stack d-flex flex-column gap-4">

                                        {/* Search Input Box */}
                                        <div className="sidebar-search-group w-100">
                                            <div className="sidebar-search-bar d-flex align-items-center px-3 mb-2">
                                                <Image
                                                    src="/blog/search.svg"
                                                    alt="Search Icon"
                                                    width="16"
                                                    height="16"
                                                    className="me-2"
                                                />
                                                <input
                                                    type="text"
                                                    id="sidebarSearchInput"
                                                    placeholder="Search Case Studies"
                                                    className="sidebar-search-input w-100"
                                                />
                                            </div>
                                            <button className="sidebar-reset-btn btn p-0 text-white border-0 text-start text-decoration-none">
                                                VIEW ALL PROJECTS
                                            </button>
                                        </div>

                                        {/* Dropdown Filters Accordion UI */}
                                        <div className="sidebar-filters-accordion w-100">

                                            {/* Software Platforms Section */}
                                            <div className="accordion-state-group w-100 mb-4">
                                                <div
                                                    className="accordion-state-header d-flex justify-content-between align-items-center mb-3 cursor-pointer"
                                                    onClick={() => setIsSoftwareOpen(!isSoftwareOpen)}
                                                >
                                                    <div className="state-title-wrap d-flex align-items-center gap-2">
                                                        <Image
                                                            src="/drop.svg"
                                                            alt="Toggle Chevron"
                                                            width="16"
                                                            height="16"
                                                            className={`transition-transform ${!isSoftwareOpen ? 'chevron-icon--collapsed' : ''}`}
                                                        />
                                                        <span className="state-name-heading fw-medium text-white">Software & Tools</span>
                                                    </div>
                                                </div>

                                                {/* Checkbox Options Loop */}
                                                {isSoftwareOpen && (
                                                    <div className="checkbox-options-stack d-flex flex-column gap-2 ps-3">
                                                        {categoriesData.map((category, index) => (
                                                            <label key={index} className="custom-checkbox-label d-flex align-items-center gap-2 text-white cursor-pointer m-0">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={category.checked}
                                                                    onChange={() => handleSoftwareCheckboxChange(index)}
                                                                    className="native-checkbox-hidden"
                                                                />
                                                                <span className={`custom-checkbox-box rounded ${category.checked ? 'checkbox-box--active' : 'checkbox-box--inactive'}`}>
                                                                    {category.checked ? (
                                                                        <Image
                                                                            src="/blog/checked.svg"
                                                                            alt="Checked Status"
                                                                            width="14"
                                                                            height="14"
                                                                        />
                                                                    ) : (
                                                                        <Image
                                                                            src="/blog/unchecked.svg"
                                                                            alt="Unchecked Status"
                                                                            width="14"
                                                                            height="14"
                                                                        />
                                                                    )}
                                                                </span>
                                                                <span className="city-label-text">{category.name}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Hardware Infrastructure Section */}
                                            <div className="accordion-state-group w-100">
                                                <div
                                                    className="accordion-state-header d-flex justify-content-between align-items-center mb-3 cursor-pointer"
                                                    onClick={() => setIsHardwareOpen(!isHardwareOpen)}
                                                >
                                                    <div className="state-title-wrap d-flex align-items-center gap-2">
                                                        <Image
                                                            src="/drop.svg"
                                                            alt="Toggle Chevron"
                                                            width="16"
                                                            height="16"
                                                            className={`transition-transform ${!isHardwareOpen ? 'chevron-icon--collapsed' : ''}`}
                                                        />
                                                        <span className="state-name-heading fw-medium text-white">Hardware Systems</span>
                                                    </div>
                                                </div>

                                                {/* Checkbox Options Loop */}
                                                {isHardwareOpen && (
                                                    <div className="checkbox-options-stack d-flex flex-column gap-2 ps-3">
                                                        {hardwareComponentsData.map((category, index) => (
                                                            <label key={index} className="custom-checkbox-label d-flex align-items-center gap-2 text-white cursor-pointer m-0">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={category.checked}
                                                                    onChange={() => handleHardwareCheckboxChange(index)}
                                                                    className="native-checkbox-hidden"
                                                                />
                                                                <span className={`custom-checkbox-box rounded ${category.checked ? 'checkbox-box--active' : 'checkbox-box--inactive'}`}>
                                                                    {category.checked ? (
                                                                        <Image
                                                                            src="/checked.svg"
                                                                            alt="Checked Status"
                                                                            width="14"
                                                                            height="14"
                                                                        />
                                                                    ) : (
                                                                        <Image
                                                                            src="/unchecked.svg"
                                                                            alt="Unchecked Status"
                                                                            width="14"
                                                                            height="14"
                                                                        />
                                                                    )}
                                                                </span>
                                                                <span className="city-label-text">{category.name}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </aside>

                            {/* Case Studies Grid Right Panel */}
                            <main className="col-lg-8 col-xl-9">
                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                    {caseStudiesPosts.map((post, idx) => {
                                        const isExpanded = expandedPosts[idx];
                                        const displayedDescription = isExpanded
                                            ? post.description
                                            : `${post.description.substring(0, 110)}...`;

                                        return (
                                            <div key={idx} className="col">
                                                <article className="post-card h-100 d-flex flex-column bg-white rounded-0 border-0 overflow-hidden">

                                                    <div className="post-card__image-wrapper overflow-hidden position-relative">
                                                        <Image
                                                            src={post.imageUrl}
                                                            alt={post.title}
                                                            width={435}
                                                            height={240}
                                                            className="post-card__img w-100 h-auto object-fit-cover"
                                                            priority={idx < 2}
                                                        />
                                                    </div>

                                                    <div className="post-card__body p-4 d-flex flex-column flex-grow-1">
                                                        <div className="post-card__meta d-flex align-items-center gap-2 mb-2">
                                                            <span className="badge post-card__badge text-dark rounded-pill py-1 px-2">
                                                                {post.category}
                                                            </span>
                                                            <span className="post-card__date text-muted small">{post.date}</span>
                                                        </div>

                                                        <h5 className="post-card__title fw-bold mb-2">{post.title}</h5>
                                                        <p className="post-card__description text-muted mb-3 small">
                                                            {displayedDescription}
                                                        </p>

                                                        <div className="post-card__actions d-flex align-items-center mt-auto">
                                                            <button
                                                                type="button"
                                                                onClick={() => toggleReadMore(idx)}
                                                                className="post-card__btn btn btn-link p-0 text-decoration-none fw-semibold border-0 d-inline-flex align-items-center"
                                                            >
                                                                <span className="post-card__btn-text me-1">{isExpanded ? "Minimize Summary" : "Read Overview"}</span>
                                                                <Image
                                                                    src="/b_arrow.svg"
                                                                    alt="Arrow Icon"
                                                                    width="16"
                                                                    height="16"
                                                                    className={`post-card__arrow transition-transform ${isExpanded ? 'post-card__arrow--rotated' : ''}`}
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>

                                                </article>
                                            </div>
                                        );
                                    })}
                                </div>
                            </main>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}