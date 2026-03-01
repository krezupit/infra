import Script from 'next/script';
import HeroAnime from '../components/HeroAnime';
import AnimeWrapper from '../components/AnimeWrapper';
import Link from 'next/link';
import {
    Server, Network, Wifi, ShieldCheck, Settings, Cpu,
    ArrowRight, Building2, Factory, HardDrive, Lock, Wrench, Cable
} from 'lucide-react';

export const metadata = {
    title: 'IT Infrastructure Company in Pune | Data Center, Networking & AMC — Krezup',
    description:
        'Krezup is a leading IT infrastructure company in Pune. We provide Data Center setup, Enterprise Networking, Structured Cabling, Server Installation, Network Security & AMC across Hinjewadi, Chakan, Pimpri-Chinchwad, MIDC.',
    keywords: 'IT infrastructure Pune, data center setup Pune, enterprise networking Pune, structured cabling Pune, network AMC Pune, server installation Pune, MIDC IT company, Hinjewadi IT services',
    alternates: { canonical: 'https://krezup.com' },
    openGraph: {
        title: 'IT Infrastructure Company in Pune | Krezup',
        description: 'Data Center, Networking, Cabling, Server & AMC services across Pune MIDC.',
        url: 'https://krezup.com',
    },
};


const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What IT infrastructure services does Krezup offer in Pune?', acceptedAnswer: { '@type': 'Answer', text: 'Krezup offers Data Center setup, Enterprise Networking, Structured Cabling (Cat6/Fiber), Server Installation, Network Security, and AMC across Pune and MIDC.' } },
        { '@type': 'Question', name: 'Which areas in Pune does Krezup serve?', acceptedAnswer: { '@type': 'Answer', text: 'Krezup serves Hinjewadi, Baner, Wakad, Pimpri-Chinchwad, Chakan, Ranjangaon MIDC, Talegaon, Hadapsar, Kharadi, and Magarpatta.' } },
        { '@type': 'Question', name: 'Does Krezup provide AMC for network and IT hardware?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Krezup provides SLA-based Annual Maintenance Contracts for networks, servers, and hardware with guaranteed response times.' } },
        { '@type': 'Question', name: 'How can I contact Krezup for IT support in Pune?', acceptedAnswer: { '@type': 'Answer', text: 'Call +91 9145361357 or email info@krezup.com. Hours: Mon–Sat 9AM–6PM, 24/7 for AMC clients.' } },
        { '@type': 'Question', name: 'Does Krezup design and set up data centers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — end-to-end data center design, rack installation, server/storage deployment, cooling, and ongoing AMC across Pune.' } },
    ],
};

export default function Home() {
    const expertise = [
        { title: 'Data Center Infrastructure', icon: <Server size={24} /> },
        { title: 'Enterprise Network Design', icon: <Network size={24} /> },
        { title: 'Server & Storage Deployment', icon: <Cpu size={24} /> },
        { title: 'Fiber & Structured Cabling', icon: <Cable size={24} /> },
        { title: 'Network Security Solutions', icon: <ShieldCheck size={24} /> },
        { title: 'Annual Maintenance Contracts', icon: <Settings size={24} /> },
    ];

    const keyServices = [
        { title: 'Data Center Setup & Support', desc: 'Rack installation, cable management, server deployment, and migration.', icon: <Server size={20} /> },
        { title: 'Enterprise Networking', desc: 'LAN/WAN design, routing, VLAN, redundancy, and performance optimization.', icon: <Network size={20} /> },
        { title: 'Structured Cabling', desc: 'Cat6, Cat6A, and Fiber Optic installation with testing and certification.', icon: <Cable size={20} /> },
        { title: 'Server & Virtualization', desc: 'VMware, Hyper-V, NAS/SAN deployment, and backup solutions.', icon: <Cpu size={20} /> },
        { title: 'Hardware Supply', desc: 'Enterprise servers, switches, firewalls, and UPS systems.', icon: <HardDrive size={20} /> },
        { title: 'Network Security', desc: 'Firewalls, VPN, endpoint protection, and security audits.', icon: <Lock size={20} /> },
    ];

    const industries = [
        { name: 'IT & Software Companies', icon: '💻', desc: 'Office networks, server rooms, high-speed connectivity.' },
        { name: 'Manufacturing & Industrial', icon: '🏭', desc: 'PLC/SCADA connectivity, rugged infrastructure.' },
        { name: 'Data Centers & Colocation', icon: '🖥️', desc: 'Rack deployment, network configuration, remote hands.' },
        { name: 'Pharma & Healthcare', icon: '🏥', desc: 'Secure and compliant IT infrastructure.' },
        { name: 'BFSI & Corporate Offices', icon: '🏦', desc: 'High availability and secure network architecture.' },
        { name: 'Educational Institutions', icon: '🎓', desc: 'Campus networking and centralized server solutions.' },
    ];

    const whyUs = [
        'Local support across Pune & MIDC areas',
        'Certified and experienced engineers',
        'SLA-based support with guaranteed response',
        'Cost-effective AMC plans',
        'Quick on-site service',
    ];

    const locations = ['Hinjewadi', 'Baner', 'Wakad', 'Pimpri-Chinchwad', 'Chakan', 'Talegaon', 'Ranjangaon', 'Hadapsar', 'Kharadi', 'Magarpatta'];

    return (
        <div>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            {/* Google tag (gtag.js) */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17984101281" />
            <Script
                id="google-analytics"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-17984101281');
                    `,
                }}
            />
            {/* === HERO === */}
            <HeroAnime />

            {/* === OUR EXPERTISE === */}
            <section className="section-padding bg-alt">
                <div className="container text-center">
                    <AnimeWrapper animationType="fadeUp">
                        <span className="section-label">What We Do</span>
                        <h2 className="section-title">Our Expertise</h2>
                        <div className="section-divider center"></div>
                        <p className="section-desc mx-auto">Certified engineers specialising in enterprise-grade IT infrastructure across Pune.</p>
                    </AnimeWrapper>

                    <div className="expertise-grid mt-3">
                        {expertise.map((item, i) => (
                            <AnimeWrapper key={i} className="card expertise-card" animationType="scaleUp" delay={i * 100}>
                                <div className="expertise-icon">{item.icon}</div>
                                <h3 className="expertise-title">{item.title}</h3>
                            </AnimeWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* === KEY SERVICES === */}
            <section className="section-padding">
                <div className="container">
                    <AnimeWrapper animationType="fadeUp" className="text-center">
                        <span className="section-label">Services</span>
                        <h2 className="section-title">Key Services</h2>
                        <div className="section-divider center"></div>
                    </AnimeWrapper>

                    <div className="features-grid mt-3">
                        {keyServices.map((s, i) => (
                            <AnimeWrapper key={i} className="feature-item" animationType="fadeUp" delay={i * 80}>
                                <div className="feature-item-icon">{s.icon}</div>
                                <h4>{s.title}</h4>
                                <p>{s.desc}</p>
                            </AnimeWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* === INDUSTRIES === */}
            <section className="section-padding bg-alt">
                <div className="container text-center">
                    <AnimeWrapper animationType="fadeUp">
                        <span className="section-label">Industries</span>
                        <h2 className="section-title">Industries We Serve</h2>
                        <div className="section-divider center"></div>
                    </AnimeWrapper>
                    <div className="expertise-grid mt-3">
                        {industries.map((ind, i) => (
                            <AnimeWrapper key={i} className="card industry-card" animationType="fadeUp" delay={i * 80}>
                                <div className="industry-icon">{ind.icon}</div>
                                <h3>{ind.name}</h3>
                                <p>{ind.desc}</p>
                            </AnimeWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* === WHY CHOOSE US === */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid-2-col align-center">
                        <AnimeWrapper animationType="slideRight">
                            <span className="section-label">Why Us</span>
                            <h2 className="section-title">Why Choose Krezup?</h2>
                            <div className="section-divider"></div>
                            <ul className="check-list">
                                {whyUs.map((w, i) => <li key={i}>{w}</li>)}
                            </ul>
                            <Link href="/about" className="btn btn-outline mt-3">
                                Learn About Us <ArrowRight size={16} className="btn-icon" />
                            </Link>
                        </AnimeWrapper>

                        <AnimeWrapper animationType="slideLeft" className="grid-image-placeholder">
                            <div className="abstract-tech-shape shape-1"></div>
                            <div className="abstract-tech-shape shape-2"></div>
                            <div className="shape-inner"></div>
                        </AnimeWrapper>
                    </div>
                </div>
            </section>

            {/* === SERVICE LOCATIONS === */}
            <section className="section-padding bg-alt">
                <div className="container text-center">
                    <AnimeWrapper animationType="fadeUp">
                        <span className="section-label">Coverage</span>
                        <h2 className="section-title">Service Locations</h2>
                        <div className="section-divider center"></div>
                        <p className="section-desc mx-auto">Serving businesses across Pune, MIDC, and industrial corridors.</p>
                        <div className="locations-tags mt-3">
                            {locations.map((loc, i) => <span key={i} className="tag">{loc}</span>)}
                        </div>
                    </AnimeWrapper>
                </div>
            </section>

            {/* === CTA === */}
            <section className="cta-section section-padding text-center">
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <AnimeWrapper animationType="scaleUp">
                        <span className="section-label" style={{ background: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Free Consultation</span>
                        <h2 className="section-title mt-1">Need reliable IT infrastructure support?</h2>
                        <p className="section-desc mx-auto mt-1">Contact us today — we&apos;ll assess your needs and provide a tailored solution.</p>
                        <div className="hero-cta-group mt-3" style={{ justifyContent: 'center' }}>
                            <Link href="/contact" className="btn btn-lg" style={{ background: 'white', color: 'var(--accent-primary)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
                                Contact Us <ArrowRight size={18} className="btn-icon" />
                            </Link>
                            <Link href="/services" className="btn btn-outline btn-lg">
                                View Services
                            </Link>
                        </div>
                    </AnimeWrapper>
                </div>
            </section>
        </div>
    );
}
