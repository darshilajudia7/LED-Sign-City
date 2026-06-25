"use client";
import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import './style.css';

export default function LedSignsZoningGuide() {
    return (
        <main className="container-fluid p-0">

            {/* Hero Banner Section */}
            <section className="hero-banner">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-container mb-3">
                                <p className="breadcrumb-link m-0">
                                    Home &gt; Permits and Zoning &gt; Are LED Signs Allowed in Douglassville, Amity Township, Berks County, Pennsylvania? A Guide to Permits, Sizes, and Zoning
                                </p>
                            </div>
                            <h1 className="hero-title m-0">
                                Are LED Signs Allowed in Douglassville, Amity Township, Berks County, Pennsylvania? A Guide to Permits, Sizes, and Zoning
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Canvas Section */}
            <section className="legal-article-container">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-12">

                            {/* Introduction Overview */}
                            <div className="article-section-spacing">
                                <h3 className="section-title-h3">
                                    Ready to take control? Here's what you'll need:
                                </h3>
                                <p className="body-copy-text">
                                    The great news is that LED/EMC signs are allowed in Amity Township, PA when installed as on-site signs in eligible zoning districts (HC, SCC, LI/O adjacent to US Route 422, and PBOI) and designed within the Township's sign standards. Your total sign area depends on your building's frontage and assigned use, with electronic message displays capped at 50 sq ft or 25% of your total allowable signage—whichever is less. Digital displays must show static messages only (no scrolling, flashing, or animation), with each message held for at least 5 seconds and transitions under 0.3 seconds. Brightness must be non-glaring and screened from adjacent properties, signs near state roadways require PennDOT compliance, and off-site digital displays are only permitted in specific Highway Commercial corridors. Permanent signs may not be installed until the principal structure is complete.
                                </p>
                            </div>

                            {/* Variance / Appeals Process */}
                            <div className="article-section-spacing">
                                <h4 className="section-title-h4">
                                    Variance / Appeals Process:
                                </h4>
                                <div className="body-copy-text">
                                    <p className="mb-3">
                                        A variance is not required for EMD signs that comply with §32-927(g)(2)(iv) and §32-927(j)(6).
                                    </p>
                                    <p className="mb-2">
                                        If your proposal exceeds code limits (size, height, location), submit a Variance Application to the Amity Township Board of Supervisors, including:
                                    </p>
                                    <ul className="ps-4 mb-0 dynamic-list-style">
                                        <li>Detailed sign plan (dimensions, mounting, setbacks)</li>
                                        <li>Engineering certification for structural integrity</li>
                                        <li>EMD specification sheet (message timing, dimming capabilities)</li>
                                        <li>PennDOT compliance documentation (if near state roadway)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Visual Graphic Block */}
                            <div className="article-section-spacing">
                                <div className="responsive-image-frame">
                                    <Image
                                        src="/software.png"
                                        alt="One-Stop Cloud Platform Dashboard"
                                        width={626}
                                        height={433}
                                        className="img-fluid custom-styled-img"
                                        placeholder="blur"
                                        blurDataURL="/software.png"
                                    />
                                </div>
                            </div>

                            {/* Legal Definition */}
                            <div className="article-section-spacing">
                                <p className="content-label-bold">Definition of Sign:</p>
                                <div className="blockquote-container">
                                    <p className="blockquote-copy m-0">
                                        “219.02 Sign. A name, identification, description, display or illustration which is affixed to or painted upon a building, structure or piece of land; or affixed to the glass on the outside or inside of a window so as to be seen from the outside of a building and which directs attention to an object, product, place, activity, person, institution, organization, or business.”
                                    </p>
                                </div>
                            </div>

                            {/* Structural Divider */}
                            <div className="article-section-spacing">
                                <hr className="divider-line" />
                            </div>

                            {/* Data Summary Grid Table */}
                            <div className="mb-0">
                                <p className="content-label-bold mb-3">EMC Sign Summary Table</p>

                                <div className="summary-table container-fluid px-0">
                                    <div className="row mx-0 table-header align-items-center">
                                        <div className="col-md-4 col-12 table-cell border-end-md px-3">
                                            <span className="cell-header-tag">FEATURES</span>
                                        </div>
                                        <div className="col-md-8 col-12 table-cell px-3">
                                            <span className="cell-header-tag">ANSWERS</span>
                                        </div>
                                    </div>

                                    <div className="row mx-0 table-row align-items-center">
                                        <div className="col-md-4 col-12 table-cell border-end-md px-3">
                                            <span className="cell-data-text">Zoning districts that allow EMCs</span>
                                        </div>
                                        <div className="col-md-8 col-12 table-cell px-3">
                                            <span className="cell-data-text">All districts — only with approved variance</span>
                                        </div>
                                    </div>

                                    <div className="row mx-0 table-row align-items-center">
                                        <div className="col-md-4 col-12 table-cell border-end-md px-3">
                                            <span className="cell-data-text">EMC sign styles allowed</span>
                                        </div>
                                        <div className="col-md-8 col-12 table-cell px-3">
                                            <span className="cell-data-text">Wall, Freestanding, Projecting (subject to variance approval)</span>
                                        </div>
                                    </div>

                                    <div className="row mx-0 table-row align-items-center">
                                        <div className="col-md-4 col-12 table-cell border-end-md px-3">
                                            <span className="cell-data-text">Off-premise EMCs allowed</span>
                                        </div>
                                        <div className="col-md-8 col-12 table-cell px-3">
                                            <span className="cell-data-text">No</span>
                                        </div>
                                    </div>

                                    <div className="row mx-0 table-row align-items-center">
                                        <div className="col-md-4 col-12 table-cell border-end-md px-3">
                                            <span className="cell-data-text">EMCs allowed in the public right-of-way</span>
                                        </div>
                                        <div className="col-md-8 col-12 table-cell px-3">
                                            <span className="cell-data-text">10 ft from property line or per variance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}