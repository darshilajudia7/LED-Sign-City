"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import "./style.css";

export default function Installation() {

    // Status for checkbox
    const [statesData, setStatesData] = useState([
        { name: 'Alton', checked: true },
        { name: 'Aurora', checked: false },
        { name: 'Belleville', checked: false },
        { name: 'Bolingbrook', checked: false },
    ]);

    // Data of initialBlogPosts
    const initialBlogPosts = [
        {
            category: 'LED Sign Ads',
            date: 'Jan 9, 2026',
            title: '2×4 LED Sign Specifications - Compact Roadside Display',
            description: 'The 2×4 LED Sign is a compact, outdoor ready digital display built for high-visibility messaging in a smaller footprint. A strong fit for storefronts, entrances, and drive lanes.',
            imageUrl: '/ads_temp.png'
        },
        {
            category: 'Hardware Insights',
            date: 'Feb 14, 2026',
            title: 'Pixel Pitch Decoded: Choosing the Right Resolution',
            description: 'Understanding the distance between pixels is essential for clear messaging. This guide breaks down how viewing distance impacts your choice between P4, P6, and P10 setups.',
            imageUrl: '/ads_temp.png'
        },
        {
            category: 'Installation Tips',
            date: 'Mar 22, 2026',
            title: 'Securing Your Roadside Billboard Against High Winds',
            description: 'Outdoor displays face harsh elements. Learn the foundational engineering requirements, structural brackets, and ballast metrics needed to protect your hardware investments safely.',
            imageUrl: '/ads_temp.png'
        },
        {
            category: 'Digital Strategy',
            date: 'Apr 05, 2026',
            title: 'Maximum Impact ROI: Designing High-Contrast Graphics',
            description: 'Text size, font weight, and color choices determine whether a driver registers your billboard or passes by. Explore verified formatting guidelines built for 45 MPH zones.',
            imageUrl: '/ads_temp.png'
        },
        {
            category: 'Maintenance Core',
            date: 'May 18, 2026',
            title: 'Preventative Care Routine for High-Bright Modules',
            description: 'Keep your digital signage running smoothly year-round. Master power supply inspections, fan filter cleaning, and receiving card diagnostics to avoid unexpected onsite downtime.',
            imageUrl: '/ads_temp.png'
        },
        {
            category: 'Compliance Rules',
            date: 'Jun 11, 2026',
            title: 'Navigating Local Municipal Dimming Ordinances Safely',
            description: 'Avoid costly zoning violations by managing nit levels correctly. Learn how integrated light sensors automate day-to-night transitions to comply with commercial district laws.',
            imageUrl: '/ads_temp.png'
        }
    ];

    const [expandedPosts, setExpandedPosts] = useState(
        new Array(initialBlogPosts.length).fill(false)
    );

    const toggleReadMore = (index) => {
        const updatedExpanded = [...expandedPosts];
        updatedExpanded[index] = !updatedExpanded[index];
        setExpandedPosts(updatedExpanded);
    };

    const handleCheckboxChange = (index) => {
        const updatedStates = [...statesData];
        updatedStates[index].checked = !updatedStates[index].checked;
        setStatesData(updatedStates);
    };

    return (
        <>
            <main className="container-fluid p-0">

                {/* Hero Banner */}
                <section className="insights-hero d-flex align-items-center">
                    <div className="container px-0 d-flex flex-column gap-2 text-white">
                        <h1 className="hero-title m-0">
                            Latest Insights from LED SIGN City
                        </h1>
                        <p className="hero-subtitle m-0">
                            Choose a category below to explore guides, tips, and real-world case studies.
                        </p>
                    </div>
                </section>

                {/* Dashboard */}
                <section className="content-dashboard-wrapper py-5">
                    <div className="container px-0">
                        <div className="row g-4 justify-content-between">

                            {/* Left Side */}
                            <aside className="col-lg-4 col-xl-3">
                                <div className="sidebar-filter-panel p-4">
                                    <div className="sidebar-stack d-flex flex-column gap-4">

                                        {/* Search Box Elements Container */}
                                        <div className="sidebar-search-group w-100">
                                            <div className="sidebar-search-bar d-flex align-items-center px-3 mb-2">
                                                <Image
                                                    src="/search.svg"
                                                    alt="Search Icon"
                                                    width="20"
                                                    height="20"
                                                    className="me-2"
                                                />
                                                <input
                                                    type="text"
                                                    id="sidebarSearchInput"
                                                    placeholder="Search States or Cities"
                                                    className="sidebar-search-input w-100"
                                                />
                                            </div>
                                            <button className="sidebar-reset-btn btn p-0 text-white border-0 text-start text-decoration-none">
                                                SHOW ALL
                                            </button>
                                        </div>

                                        {/* Filter Selection Accordions */}
                                        <div className="sidebar-filters-accordion w-100">
                                            <div className="accordion-state-group w-100">
                                                <div className="accordion-state-header d-flex justify-content-between align-items-center mb-3">
                                                    <div className="state-title-wrap d-flex align-items-center gap-2">
                                                        <Image
                                                            src="/drop.svg"
                                                            alt="Toggle Chevron"
                                                            width="24"
                                                            height="24"
                                                        />
                                                        <span className="state-name-heading fw-medium text-white">Illinois</span>
                                                    </div>
                                                </div>

                                                <div className="checkbox-options-stack d-flex flex-column gap-2 ps-3">
                                                    {statesData.map((state, index) => (
                                                        <label key={index} className="custom-checkbox-label d-flex align-items-center gap-2 text-white cursor-pointer m-0">
                                                            <input
                                                                type="checkbox"
                                                                checked={state.checked}
                                                                onChange={() => handleCheckboxChange(index)}
                                                                className="native-checkbox-hidden"
                                                            />
                                                            <span className={`custom-checkbox-box rounded ${state.checked ? 'checkbox-box--active' : 'checkbox-box--inactive'}`}>
                                                                {state.checked ? (
                                                                    <Image
                                                                        src="/checked.svg"
                                                                        alt="Checked status indicator"
                                                                        width="25"
                                                                        height="25"
                                                                    />
                                                                ) : (
                                                                    <Image
                                                                        src="/unchecked.svg"
                                                                        alt="Unchecked status indicator"
                                                                        width="25"
                                                                        height="25"
                                                                    />
                                                                )}
                                                            </span>
                                                            <span className="city-label-text">{state.name}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="accordion-state-header d-flex align-items-center gap-2 mt-4">
                                                <Image
                                                    src="/drop.svg"
                                                    alt="Toggle Chevron"
                                                    width="24"
                                                    height="24"
                                                    className="chevron-icon--collapsed"
                                                />
                                                <span className="state-name-heading fw-medium text-white">Indiana</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </aside>

                            {/* Right Side */}
                            <main className="col-lg-8 col-xl-9">
                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                    {initialBlogPosts.map((post, idx) => {
                                        const isExpanded = expandedPosts[idx];
                                        const displayedDescription = isExpanded
                                            ? post.description
                                            : `${post.description.substring(0, 85)}...`;

                                        return (
                                            <div key={idx} className="col">
                                                <article className="post-card h-100 d-flex flex-column bg-white rounded border overflow-hidden">

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
                                                            <span className="badge post-card__badge text-dark rounded-pill py-1 px-3">
                                                                {post.category}
                                                            </span>
                                                            <span className="post-card__date text-muted small">{post.date}</span>
                                                        </div>

                                                        <h5 className="post-card__title fw-bold mb-2">{post.title}</h5>
                                                        <p className="post-card__description text-muted mb-4">
                                                            {displayedDescription}
                                                        </p>

                                                        <div className="post-card__actions d-flex align-items-center mt-auto">
                                                            <button
                                                                type="button"
                                                                onClick={() => toggleReadMore(idx)}
                                                                className="post-card__btn btn btn-link p-0 text-decoration-none fw-semibold border-0 d-inline-flex align-items-center"
                                                            >
                                                                <span className="post-card__btn-text">{isExpanded ? "Show Less" : "Read More"}</span>
                                                                <Image
                                                                    src="/b_arrow.svg"
                                                                    alt="Arrow Icon"
                                                                    width="24"
                                                                    height="24"
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