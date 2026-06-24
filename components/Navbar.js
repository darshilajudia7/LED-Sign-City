"use client";
import React from 'react';
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
    const announcements = [
        "FREE Resolution Upgrade",
        "30% OFF Retail Pricing",
        ...Array(5).fill("15-Year Manufacturer Warranty")
    ];

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>
            <header className="w-100 built-with-bootstrap position-relative header-container">

                {/* Announcement */}
                <div className="w-100 custom-top-bar text-white overflow-hidden">
                    <div className="d-flex text-nowrap announcement-track align-items-center">
                        {[...Array(2)].map((_, i) => (
                            <div className="custom-top-bar-text" key={i}>
                                {announcements.map((text, j) => (
                                    <React.Fragment key={j}>
                                        <span className="announcement-item">{text}</span>
                                        <span className="custom-star-top">✦</span>
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}
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
                                        <li><Link href="#" className="dropdown-item rounded-2">Outdoor LED Displays</Link></li>
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
                                    <Link href="/Blog" className="nav-link p-0">
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
                                    <i className="bi bi-search"></i>
                                </button>
                                <button className="btn p-0 border-0 d-inline-flex align-items-center custom-icon-btn" aria-label="Profile">
                                    <i className="bi bi-person"></i>
                                </button>
                                <button className="btn p-0 border-0 d-inline-flex align-items-center custom-icon-btn" aria-label="Cart">
                                    <i className="bi bi-cart"></i>
                                </button>
                            </div>

                            <div className="d-flex d-lg-none align-items-center gap-2 gap-sm-3 icon-group-mobile">
                                <button className="btn p-0 border-0 d-inline-flex align-items-center custom-icon-btn" aria-label="Search">
                                    <i className="bi bi-search"></i>
                                </button>
                                <button className="btn p-0 border-0 d-inline-flex align-items-center custom-icon-btn" aria-label="Profile">
                                    <i className="bi bi-person"></i>
                                </button>
                                <button className="btn p-0 border-0 d-inline-flex align-items-center custom-icon-btn" aria-label="Cart">
                                    <i className="bi bi-cart"></i>
                                </button>
                            </div>

                            <Link href="#" className="btn text-dark custom-yellow-btn">
                                <span className="custom-star-btn">✦</span> <span className="btn-text">Build Your Sign</span>
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