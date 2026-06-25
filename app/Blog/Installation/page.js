"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./style.css";

export default function Installation() {
    // Categories and active filter checkboxes based on the UI layout
    const [categoriesData, setCategoriesData] = useState([
        { name: 'Viper Express', checked: true },
        { name: 'Viper Handy', checked: true },
        { name: 'Vnnox', checked: true },
        { name: 'Viplex Brightness', checked: true },
    ]);

    // Card grid data mapped to match the actual textual layout shown in the UI image
    const caseStudiesPosts = Array(6).fill({
        category: 'LED Sign Ads',
        date: 'Jun 9, 2026',
        title: '2×4 LED Sign Specifications - Compact Roadside Display',
        description: 'The 2×4 LED Sign is a compact, outdoor ready digital display built for high-visibility messaging in a smaller footprint. A strong fit for storefronts, entrances, and drive lanes.',
        imageUrl: '/ads_temp.png' // Replace with your image source path
    });

    const [expandedPosts, setExpandedPosts] = useState(
        new Array(caseStudiesPosts.length).fill(false)
    );

    const toggleReadMore = (index) => {
        const updatedExpanded = [...expandedPosts];
        updatedExpanded[index] = !updatedExpanded[index];
        setExpandedPosts(updatedExpanded);
    };

    const handleCheckboxChange = (index) => {
        const updatedCategories = [...categoriesData];
        updatedCategories[index].checked = !updatedCategories[index].checked;
        setCategoriesData(updatedCategories);
    };

    return (
        <>
            <main className="container-fluid p-0 bg-light-gray-base">

                {/* Hero Banner matched exactly to layout */}
                <section className="insights-hero d-flex align-items-center">
                    <div className="container px-3 px-md-0 d-flex flex-column gap-2 text-white">
                        <h1 className="hero-title m-0">
                            Case Studies
                        </h1>
                        <p className="hero-subtitle m-0">
                            Choose your category to see the case studies.
                        </p>
                    </div>
                </section>

                {/* Main Content Area */}
                <section className="content-dashboard-wrapper py-5">
                    <div className="container px-3 px-md-0">
                        <div className="row g-4 justify-content-between">

                            {/* Sidebar Left Navigation Panel */}
                            <aside className="col-lg-4 col-xl-3">
                                <div className="sidebar-filter-panel p-4">
                                    <div className="sidebar-stack d-flex flex-column gap-4">

                                        {/* Search Input Box */}
                                        <div className="sidebar-search-group w-100">
                                            <div className="sidebar-search-bar d-flex align-items-center px-3 mb-2">
                                                <Image
                                                    src="/search.svg"
                                                    alt="Search Icon"
                                                    width="16"
                                                    height="16"
                                                    className="me-2"
                                                />
                                                <input
                                                    type="text"
                                                    id="sidebarSearchInput"
                                                    placeholder="Search Support Article"
                                                    className="sidebar-search-input w-100"
                                                />
                                            </div>
                                            <button className="sidebar-reset-btn btn p-0 text-white border-0 text-start text-decoration-none">
                                                SHOW ALL
                                            </button>
                                        </div>

                                        {/* Dropdown Filters Accordion UI */}
                                        <div className="sidebar-filters-accordion w-100">
                                            <div className="accordion-state-group w-100">
                                                <div className="accordion-state-header d-flex justify-content-between align-items-center mb-3 cursor-pointer">
                                                    <div className="state-title-wrap d-flex align-items-center gap-2">
                                                        <Image
                                                            src="/drop.svg"
                                                            alt="Toggle Chevron Down"
                                                            width="16"
                                                            height="16"
                                                        />
                                                        <span className="state-name-heading fw-medium text-white">Programming & Setup</span>
                                                    </div>
                                                </div>

                                                {/* Checkbox Options Loop */}
                                                <div className="checkbox-options-stack d-flex flex-column gap-2 ps-3">
                                                    {categoriesData.map((category, index) => (
                                                        <label key={index} className="custom-checkbox-label d-flex align-items-center gap-2 text-white cursor-pointer m-0">
                                                            <input
                                                                type="checkbox"
                                                                checked={category.checked}
                                                                onChange={() => handleCheckboxChange(index)}
                                                                className="native-checkbox-hidden"
                                                            />
                                                            <span className={`custom-checkbox-box rounded ${category.checked ? 'checkbox-box--active' : 'checkbox-box--inactive'}`}>
                                                                {category.checked && (
                                                                    <Image
                                                                        src="/checked.svg"
                                                                        alt="Checked Status"
                                                                        width="14"
                                                                        height="14"
                                                                    />
                                                                )}
                                                            </span>
                                                            <span className="city-label-text">{category.name}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Collapsed Section Heading */}
                                            <div className="accordion-state-header d-flex align-items-center gap-2 mt-4 cursor-pointer">
                                                <Image
                                                    src="/drop.svg"
                                                    alt="Toggle Chevron Up"
                                                    width="16"
                                                    height="16"
                                                    className="chevron-icon--collapsed"
                                                />
                                                <span className="state-name-heading fw-medium text-white">LED Components & Issues</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </aside>

                            {/* Cards Grid Right Panel */}
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
                                                                <span className="post-card__btn-text me-1">{isExpanded ? "Show Less" : "Read More"}</span>
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