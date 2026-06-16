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
        <header>
            {/* Navbar */}
            <div className="announcement-bar">
                <div className="announcement-track">
                    <span>FREE Resolution Upgrade ✦</span>
                    <span>30% OFF Retail Pricing ✦</span>
                    <span>15-Year Manufacturer Warranty ✦</span>

                    <span>FREE Resolution Upgrade ✦</span>
                    <span>30% OFF Retail Pricing ✦</span>
                    <span>15-Year Manufacturer Warranty ✦</span>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
                <div className="container-fluid px-4">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="navbar-brand fw-bold fs-4 d-flex align-items-center"
                    >
                        <Image
                            src="/logo.svg"
                            alt="LED Sign City"
                            width="150"
                            height="36"
                            className="img-fluid object-contain"
                            priority
                        />
                    </Link>

                    {/* Mobile Menu */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">

                        <ul className="navbar-nav me-auto ms-lg-5">

                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link dropdown-toggle border-0 bg-transparent"
                                    data-bs-toggle="dropdown"
                                >
                                    Shop Displays
                                </button>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link href="/shop-1" className="dropdown-item">
                                            Shop 1
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/shop-2" className="dropdown-item">
                                            Shop 2
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/shop-3" className="dropdown-item">
                                            Shop 3
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link href="/custom-sign-builder" className="nav-link">
                                    Custom Sign Builder
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/about" className="nav-link">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/blog" className="nav-link">
                                    Blog
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/support" className="nav-link">
                                    Support
                                </Link>
                            </li>

                        </ul>

                        {/* Icons */}
                        <div className="d-flex align-items-center gap-4">

                            <button className="btn p-0 border-0 bg-transparent">
                                <i className="bi bi-search nav-icon"></i>
                            </button>

                            <button className="btn p-0 border-0 bg-transparent">
                                <i className="bi bi-person-circle nav-icon"></i>
                            </button>

                            <button className="btn p-0 border-0 bg-transparent">
                                <i className="bi bi-cart3 nav-icon"></i>
                            </button>

                            <Link
                                href="/custom-sign-builder"
                                className="btn btn-warning fw-semibold px-4 py-2"
                            >
                                Build Your Sign
                            </Link>

                        </div>

                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;