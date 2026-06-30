"use client";
import React from 'react';
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
    const data = [
        "FREE Resolution Upgrade",
        "30% OFF Retail Pricing",
        "15-Year Manufacturer Warranty"
    ];

    const trackItems = [...data, ...data, ...data, ...data];

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>
            <header className="w-100 built-with-bootstrap position-relative header-container">

                {/* Announcement */}
                <div className="w-100 custom-top-bar text-white overflow-hidden">
                    <div className="announcement-track">
                        <div className="track-content">
                            {trackItems.map((item, index) => (
                                <div key={index} className="track-item">
                                    <span>{item}</span>
                                    <Image src="/w_star.svg" alt="star" width="15" height="15" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light custom-nav-container shadow-sm border-bottom">
                    <div className="container-xl d-flex align-items-center justify-content-between position-relative px-2 px-sm-3 px-xl-0">

                        {/* Logo */}
                        <Link href="/" className="navbar-brand p-0 m-0 d-flex align-items-center">
                            <div className="custom-logo-wrapper">
                                <Image
                                    src="/logo.svg"
                                    alt="LED SIGN CITY Logo and Text"
                                    width={200}
                                    height={34}
                                    className="w-100 h-100 object-fit-contain"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Navigation Links */}
                        <div className="collapse navbar-collapse" id="ledNavbarContent">
                            <ul className="navbar-nav custom-nav-links my-3 my-lg-0 align-items-lg-center me-auto">
                                <li className="nav-item dropdown custom-dropdown-item">
                                    <button
                                        className="nav-link dropdown-toggle border-0 bg-transparent p-0 text-start w-100 d-flex align-items-center gap-1"
                                        data-bs-toggle="dropdown"
                                        type="button"
                                    >
                                        Shop Displays
                                    </button>
                                    <ul className="dropdown-menu shadow border-0 rounded-3 p-2 custom-mobile-dropdown">
                                        <li><Link href="/outdoor_product" className="dropdown-item rounded-2">Outdoor LED Displays</Link></li>
                                        <li><Link href="#" className="dropdown-item rounded-2">Indoor LED Signs</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link href="#" className="nav-link p-0">
                                        Custom Sign Builder
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#" className="nav-link p-0">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/blog" className="nav-link p-0">
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#" className="nav-link p-0">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Button & Icons */}
                        <div className="d-flex align-items-center gap-2 gap-sm-3 custom-right-actions">

                            <div className="d-none d-lg-flex align-items-center gap-4 icon-group-desktop">
                                <button className="btn p-0 border-0 d-inline-flex align-items-center custom-icon-btn" aria-label="Search">
                                    <Image src="/header_footer/search.svg" alt="search" width="24" height="24" />
                                </button>
                                <button className="btn p-0 border-0 d-inline-flex align-items-center custom-icon-btn" aria-label="Profile">
                                    <Image src="/header_footer/profile.svg" alt="profile" width="24" height="24" />
                                </button>
                                <button className="btn p-0 border-0 d-inline-flex align-items-center custom-icon-btn" aria-label="Cart">
                                    <Image src="/header_footer/cart.svg" alt="cart" width="24" height="24" />
                                </button>
                            </div>

                            <div className="d-flex d-lg-none align-items-center gap-2 gap-sm-3 icon-group-mobile">
                                <button className="btn p-0 border-0 d-inline-flex align-items-center custom-icon-btn" aria-label="Search">
                                    <Image src="/header_footer/search.svg" alt="search" width="24" height="24" />
                                </button>
                                <button className="btn p-0 border-0 d-inline-flex align-items-center custom-icon-btn" aria-label="Profile">
                                    <Image src="/header_footer/profile.svg" alt="profile" width="24" height="24" />
                                </button>
                                <button className="btn p-0 border-0 d-inline-flex align-items-center custom-icon-btn" aria-label="Cart">
                                    <Image src="/header_footer/cart.svg" alt="cart" width="24" height="24" />
                                </button>
                            </div>

                            <Link href="#" className="btn text-dark custom-yellow-btn">
                                <Image src="/star.svg" alt="star" width="20" height="20" />
                                <span className="btn-text">Build Your Sign</span>
                            </Link>

                            {/* Mobile Toggle */}
                            <button
                                className="navbar-toggler border-0 shadow-none p-0"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#ledNavbarContent"
                                aria-controls="ledNavbarContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;