
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer-container">

            <div className="footer-blue-band">

                <div className="footer-cta-card">
                    <div className="footer-cta-inner">
                        <h3 className="footer-cta-heading">
                            Ready to own an Build your LED Sign that evolves?
                        </h3>

                        <div className="footer-cta-button-row">
                            <button type="button" className="footer-btn-primary">
                                <span className="custom-star-btn">✦</span>
                                Build Your Custom Sign Now
                            </button>

                            <button type="button" className="footer-btn-secondary">
                                See How XIGNZ Works
                                <span className="footer-arrow-icon" aria-hidden="true">
                                    <i className="bi bi-arrow-right"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* copy right and links */}
                <div className="footer-link-columns" aria-label="Footer Navigation">
                    <div className="footer-col">
                        <h6 className="footer-col-heading">Shop Sign</h6>
                        <ul className="footer-col-list">
                            <li><Link href="#" className="footer-col-link">Custom Sign Builder</Link></li>
                            <li><Link href="#" className="footer-col-link">Outdoor LED Signs</Link></li>
                            <li><Link href="#" className="footer-col-link">Indoor LED Displays</Link></li>
                            <li><Link href="#" className="footer-col-link">Gas Price Signs</Link></li>
                            <li><Link href="#" className="footer-col-link">Mobile LED Signs</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h6 className="footer-col-heading">Services</h6>
                        <ul className="footer-col-list">
                            <li><Link href="#" className="footer-col-link">Installation</Link></li>
                            <li><Link href="#" className="footer-col-link">Managed LED Ads</Link></li>
                            <li><Link href="#" className="footer-col-link">LED Design Studio</Link></li>
                            <li><Link href="#" className="footer-col-link">Financing</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h6 className="footer-col-heading">Learn</h6>
                        <ul className="footer-col-list">
                            <li><Link href="#" className="footer-col-link">About Us</Link></li>
                            <li><Link href="#" className="footer-col-link">Past Projects</Link></li>
                            <li><Link href="#" className="footer-col-link">Reviews</Link></li>
                            <li><Link href="#" className="footer-col-link">Blog</Link></li>
                            <li><Link href="#" className="footer-col-link">Case Studies</Link></li>
                            <li><Link href="#" className="footer-col-link">Partner With Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h6 className="footer-col-heading">Help</h6>
                        <ul className="footer-col-list">
                            <li><Link href="#" className="footer-col-link">Support Desk</Link></li>
                            <li><Link href="#" className="footer-col-link">Contact Us</Link></li>
                            <li><Link href="#" className="footer-col-link">Forum</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h6 className="footer-col-heading">Existing Customers</h6>
                        <ul className="footer-col-list">
                            <li><Link href="#" className="footer-col-link">Parts Accessories</Link></li>
                            <li><Link href="#" className="footer-col-link">Dealer Sign Up / Portal</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-legal-block">
                    <p className="footer-copyright">©2025, LED Sign City. All Rights Reserved.</p>
                    <div className="footer-legal-links">
                        <Link href="#" className="footer-col-link">Terms of Service</Link>
                        <Link href="#" className="footer-col-link">Privacy Policy</Link>
                        <Link href="#" className="footer-col-link">Refund Policy</Link>
                        <Link href="#" className="footer-col-link">Dealer Sign UP</Link>
                        <Link href="#" className="footer-col-link">Website Design by Comsci</Link>
                    </div>
                </div>

                {/* Social media */}
                <div className="footer-social-block">
                    <span className="footer-social-label">We’re on Social Media</span>
                    <div className="footer-social-icons-row">
                        <a href="#" className="footer-social-icon" aria-label="Facebook">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="footer-social-icon" aria-label="Twitter">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="#" className="footer-social-icon" aria-label="YouTube">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                </div>


                {/* Logo */}
                <div className="footer-wordmark-group" aria-hidden="true">
                    <Image
                        src="/LED-logo.png"
                        alt="LED Sign City Large Brand Wordmark"
                        width={1351}
                        height={102}
                        className="footer-vector-logo"
                        priority
                    />
                </div>
            </div>
        </footer>
    );
}