"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <header className="w-100 built-with-bootstrap position-relative">

            {/* Announcement Bar */}
            <div className="w-100 custom-top-bar text-white">
                <div className="d-flex text-nowrap announcement-track align-items-center">
                    {[...Array(3)].map((_, index) => (
                        <div className="d-flex align-items-center custom-top-bar-text" key={index}>
                            <span className="announcement-item">FREE Resolution Upgrade</span>
                            <span className="custom-star-top">✦</span>
                            <span className="announcement-item">30% OFF Retail Pricing</span>
                            <span className="custom-star-top">✦</span>
                            <span className="announcement-item">15-Year Manufacturer Warranty</span>
                            <span className="custom-star-top">✦</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg border-bottom border-light navbar-light custom-nav-container px-3 px-lg-0 py-2 py-lg-0">
                <div className="container-fluid p-0 h-100 d-flex align-items-center justify-content-between position-relative">

                    {/* Logo */}
                    <Link href="#" className="navbar-brand p-0 m-0 d-flex align-items-center custom-logo-position">
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

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#ledNavbarContent"
                        aria-controls="ledNavbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse custom-navbar-collapse" id="ledNavbarContent">

                        {/* Navigation Links */}
                        <ul className="navbar-nav custom-nav-links my-3 my-lg-0">
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link dropdown-toggle border-0 bg-transparent p-0 text-start w-100"
                                    data-bs-toggle="dropdown"
                                    type="button"
                                >
                                    Shop Displays
                                </button>
                                <ul className="dropdown-menu shadow-sm border-0 rounded-3 p-2 custom-mobile-dropdown">
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
                                <Link href="#" className="nav-link p-0">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#" className="nav-link p-0">
                                    Support
                                </Link>
                            </li>
                        </ul>

                        {/* Action Layout Group */}
                        <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center custom-action-icons-responsive">
                            <div className="d-flex align-items-center gap-4 mb-3 mb-lg-0">
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

                            <Link
                                href="#"
                                className="btn text-dark custom-yellow-btn w-100 w-lg-auto"
                            >
                                <span className="custom-star-btn">✦</span> Build Your Sign
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;