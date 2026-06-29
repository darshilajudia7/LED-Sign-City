
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer-container">

            {/* CTA */}
            <div className="footer-cta-wrapper px-3">
                <div className="footer-cta-card d-flex flex-column align-items-center justify-content-center text-center">
                    <h3 className="footer-cta-heading m-0">
                        Ready to own and Build your LED Sign that evolves?
                    </h3>
                    <div className="footer-cta-button-row d-flex flex-wrap justify-content-center">
                        <button type="button" className="footer-btn-primary">
                            <Image src="/star.svg" alt="star" width="23" height="23" />
                            Build Your Custom Sign Now
                        </button>

                        <button type="button" className="footer-btn-secondary">
                            See How XIGNZ Works
                            <span className="footer-arrow-icon" aria-hidden="true">
                                <span className="arrow-icon"><Image src="/arrow.svg" alt="arrow" width="20" height="20" /></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Blue Band */}
            <div className="footer-blue-band px-3">
                <div className="footer-content-inner mx-auto d-flex flex-column">

                    {/* Navigation Columns */}
                    <nav className="footer-link-columns row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5" aria-label="Footer Navigation">
                        <div className="col footer-col d-flex flex-column">
                            <h6 className="footer-col-heading m-0">Shop Sign</h6>
                            <ul className="footer-col-list m-0 p-0 list-unstyled d-flex flex-column">
                                <li><Link href="#" className="footer-col-link">Custom Sign Builder</Link></li>
                                <li><Link href="#" className="footer-col-link">Outdoor LED Signs</Link></li>
                                <li><Link href="#" className="footer-col-link">Indoor LED Displays</Link></li>
                                <li><Link href="#" className="footer-col-link">Gas Price Signs</Link></li>
                                <li><Link href="#" className="footer-col-link">Mobile LED Signs</Link></li>
                            </ul>
                        </div>

                        <div className="col footer-col d-flex flex-column">
                            <h6 className="footer-col-heading m-0">Services</h6>
                            <ul className="footer-col-list m-0 p-0 list-unstyled d-flex flex-column">
                                <li><Link href="#" className="footer-col-link">Installation</Link></li>
                                <li><Link href="#" className="footer-col-link">Managed LED Ads</Link></li>
                                <li><Link href="#" className="footer-col-link">LED Design Studio</Link></li>
                                <li><Link href="#" className="footer-col-link">Financing</Link></li>
                            </ul>
                        </div>

                        <div className="col footer-col d-flex flex-column">
                            <h6 className="footer-col-heading m-0">Learn</h6>
                            <ul className="footer-col-list m-0 p-0 list-unstyled d-flex flex-column">
                                <li><Link href="#" className="footer-col-link">About Us</Link></li>
                                <li><Link href="#" className="footer-col-link">Past Projects</Link></li>
                                <li><Link href="#" className="footer-col-link">Reviews</Link></li>
                                <li><Link href="#" className="footer-col-link">Blog</Link></li>
                                <li><Link href="#" className="footer-col-link">Case Studies</Link></li>
                                <li><Link href="#" className="footer-col-link">Partner With Us</Link></li>
                            </ul>
                        </div>

                        <div className="col footer-col d-flex flex-column">
                            <h6 className="footer-col-heading m-0">Help</h6>
                            <ul className="footer-col-list m-0 p-0 list-unstyled d-flex flex-column">
                                <li><Link href="#" className="footer-col-link">Support Desk</Link></li>
                                <li><Link href="#" className="footer-col-link">Contact Us</Link></li>
                                <li><Link href="#" className="footer-col-link">Forum</Link></li>
                            </ul>
                        </div>

                        <div className="col footer-col d-flex flex-column">
                            <h6 className="footer-col-heading m-0">Existing Customers</h6>
                            <ul className="footer-col-list m-0 p-0 list-unstyled d-flex flex-column">
                                <li><Link href="#" className="footer-col-link">Parts Accessories</Link></li>
                                <li><Link href="#" className="footer-col-link">Dealer Sign Up / Portal</Link></li>
                            </ul>
                        </div>
                    </nav>

                    {/* Legal Block & Social Block */}
                    <div className="footer-meta-row d-flex flex-wrap justify-content-between align-items-start">
                        <div className="footer-legal-block d-flex flex-column">
                            <p className="footer-copyright m-0">©2025, LED Sign City. All Rights Reserved.</p>
                            <div className="footer-legal-links d-flex flex-wrap">
                                <Link href="#" className="footer-col-link">Terms of Service</Link>
                                <Link href="#" className="footer-col-link">Privacy Policy</Link>
                                <Link href="#" className="footer-col-link">Refund Policy</Link>
                                <Link href="#" className="footer-col-link">Dealer Sign UP</Link>
                                <Link href="#" className="footer-col-link">Website Design by Comsci</Link>
                            </div>
                        </div>

                        <div className="footer-social-block d-flex flex-row">
                            <span className="footer-social-label">We’re on Social Media</span>
                            <div className="footer-social-icons-row d-flex align-items-center">
                                <a href="#" className="footer-social-icon d-inline-flex align-items-center justify-content-center" aria-label="Facebook">
                                    <Image src="/header_footer/facebook.svg" alt="facebook" width="25" height="25" />
                                </a>
                                <a href="#" className="footer-social-icon d-inline-flex align-items-center justify-content-center" aria-label="Twitter">
                                    <Image src="/header_footer/twitter.svg" alt="twitter" width="25" height="25" />
                                </a>
                                <a href="#" className="footer-social-icon d-inline-flex align-items-center justify-content-center" aria-label="LinkedIn">
                                    <Image src="/header_footer/linkdin.svg" alt="linkdin" width="25" height="25" />
                                </a>
                                <a href="#" className="footer-social-icon d-inline-flex align-items-center justify-content-center" aria-label="YouTube">
                                    <Image src="/header_footer/youtube.svg" alt="youtube" width="25" height="25" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <div className="footer-wordmark-group mx-auto d-flex justify-content-center" aria-hidden="true">
                    <Image
                        src="/header_footer/LED-logo.png"
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