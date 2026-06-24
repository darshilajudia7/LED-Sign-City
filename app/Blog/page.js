import Image from "next/image";
import React from 'react';
import './style.css';

export default function Blog() {
    const CATEGORY_CARDS = [
        {
            id: 'ads',
            icon: '/ad.svg',
            title: 'LED Sign Ads',
            description: "Design tips, content strategies, and ad templates to maximize your sign's ROI.",
            count: 5,
        },
        {
            id: 'software',
            icon: '/sf.svg',
            title: 'Software',
            description: 'Step-by-step guides for Viplex Express, VNNOX Cloud, LED OK, and more.',
            count: 15,
        },
        {
            id: 'installation',
            icon: '/inst.svg',
            title: 'Installation',
            description: 'Installation walkthroughs, hardware guides, and mounting tutorials.',
            count: 25,
        },
        {
            id: 'case-studies',
            icon: '/case.svg',
            title: 'Case Studies',
            description: 'Real results from real businesses, ROI stories from LED Sign City customers.',
            count: 15,
        },
    ];

    const DOWNLOADS = [
        {
            id: 'viplex',
            title: 'Viplex Express',
            version: 'v3.14.0',
            description: 'Primary software for outdoor & indoor XIGNZ signs (Windows)',
            link: '#',
        },
        {
            id: 'vnnox',
            title: 'VNNOX Cloud',
            version: 'Web App',
            description: 'Cloud-based content management for multi-location deployments',
            link: '#',
        },
        {
            id: 'ledok-ios',
            title: 'LED OK App (iOS)',
            version: 'Latest',
            description: 'Control mobile taxi-top LED signs from iPhone/iPad',
            link: '#',
        },
        {
            id: 'ledok-android',
            title: 'LED OK App (Android)',
            version: 'Latest',
            description: 'Control mobile taxi-top LED signs from Android',
            link: '#',
        },
        {
            id: 'xmplayer',
            title: 'XM Player',
            version: 'v2.8',
            description: 'Standalone media player software for small digital signs',
            link: '#',
        },
        {
            id: 'hdplayer',
            title: 'HD Player',
            version: 'v4.1',
            description: 'High-definition content player for indoor video walls',
            link: '#',
        },
    ];

    return (
        <>
            <main className="container-fluid p-0">

                {/* Top Section */}
                <section id="frame-insights-header" className="top-section-frame">
                    <div className="px-3 px-md-4">
                        <h1 className="main-heading-insights">Latest Insights from LED SIGN City</h1>
                    </div>
                </section>

                {/* Main Container Section Frame */}
                <section id="frame-insights-content" className="bottom-section-frame">
                    <div className="container-xl px-0">

                        {/* Category Cards Row */}
                        <div className="row g-4 cards-row-gap">
                            {CATEGORY_CARDS.map((card) => (
                                <div key={card.id} className="col-12 col-md-6 col-lg-3">
                                    <div className="category-card-custom">
                                        <div>
                                            <div className="icon-overlay-badge">
                                                <Image src={card.icon} alt={card.title} width={20} height={20} />
                                            </div>
                                            <h6 className="card-title-text">{card.title}</h6>
                                            <p className="card-body-description">{card.description}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <span className="badge-yellow-overlay">{card.count} articles</span>
                                            <div className="arrow-indicator">
                                                <Image src="/arrow.svg" alt="arrow" width={16} height={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Download Container */}
                        <div id="frame-downloads-panel" className="download-panel-box">
                            <h5 className="section-title-blue">Software Downloads</h5>
                            <p className="section-subtitle-gray">All software is free. Download the version that matches your sign type.</p>

                            <div className="software-cards-grid">
                                {DOWNLOADS.map((file) => (
                                    <div key={file.id} className="software-card-item">
                                        <div>
                                            <div className="software-card-header">
                                                <h6 className="software-card-title">{file.title}</h6>
                                                <span className="version-pill-tag">{file.version}</span>
                                            </div>
                                            <p className="software-card-desc">{file.description}</p>
                                        </div>
                                        <a href={file.link} className="download-action-link">
                                            <Image src="/download.svg" alt="download" width={24} height={24} />
                                            Download
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>
            </main >
        </>
    );
}