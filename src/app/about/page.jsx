import AnimeWrapper from '../../components/AnimeWrapper';
import Link from 'next/link';
import { ArrowRight, Target, Eye } from 'lucide-react';

export const metadata = {
    title: 'About Us | Krezup',
    description: 'Learn about Krezup, our mission, vision, and expertise in delivering enterprise-grade IT infrastructure solutions.',
};

const strengths = [
    'Experienced Data Center & Network Engineers',
    'Industry best practices and documentation',
    'OEM-based hardware solutions',
    '24/7 support options',
    'Customized solutions for each business',
];

const expertiseAreas = [
    'Data Center Design & Migration',
    'Enterprise Networking',
    'Industrial Networking (PLC/SCADA)',
    'Virtualization & Cloud Integration',
    'Network Security Implementation',
];

export default function AboutPage() {
    return (
        <div>
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <AnimeWrapper animationType="fadeUp" delay={200}>
                        <span className="section-label">Who We Are</span>
                        <h1 className="page-title">About <span className="text-accent">Krezup</span></h1>
                        <div className="section-divider center"></div>
                        <p className="page-subtitle">Building secure, scalable, and high-performance IT environments across Pune.</p>
                    </AnimeWrapper>
                </div>
            </section>

            {/* Overview */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid-2-col align-center">
                        <AnimeWrapper animationType="slideRight">
                            <span className="section-label">Company Overview</span>
                            <h2 className="section-title">Trusted IT Infrastructure Partner</h2>
                            <div className="section-divider"></div>
                            <p>We are a professional IT infrastructure service provider delivering hardware, networking, and data center solutions across Pune. Our goal is to help businesses build secure, scalable, and high-performance IT environments.</p>
                            <p>With over a decade of experience, our certified engineers have completed 500+ projects for companies across manufacturing, BFSI, pharma, data centers, and IT sectors.</p>
                            <Link href="/contact" className="btn btn-primary mt-2">
                                Get In Touch <ArrowRight size={16} className="btn-icon" />
                            </Link>
                        </AnimeWrapper>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <AnimeWrapper animationType="fadeUp" delay={200} className="card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ width: 44, height: 44, background: 'rgba(26,108,246,0.1)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', flexShrink: 0 }}>
                                        <Target size={22} />
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Our Mission</h3>
                                </div>
                                <p style={{ margin: 0 }}>To provide reliable, secure, and cost-effective IT infrastructure solutions that support business growth and operational continuity.</p>
                            </AnimeWrapper>

                            <AnimeWrapper animationType="fadeUp" delay={400} className="card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ width: 44, height: 44, background: 'rgba(14,165,233,0.1)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)', flexShrink: 0 }}>
                                        <Eye size={22} />
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Our Vision</h3>
                                </div>
                                <p style={{ margin: 0 }}>To become a trusted IT infrastructure partner for enterprises, industries, and data centers in Pune and across India.</p>
                            </AnimeWrapper>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strengths & Expertise */}
            <section className="section-padding bg-alt">
                <div className="container">
                    <AnimeWrapper animationType="fadeUp" className="text-center">
                        <span className="section-label">Our Edge</span>
                        <h2 className="section-title">Why Partner With Us?</h2>
                        <div className="section-divider center"></div>
                    </AnimeWrapper>

                    <div className="grid-2-col mt-3">
                        <AnimeWrapper animationType="slideRight" delay={200}>
                            <h3 style={{ marginBottom: '1rem' }}>Our Strengths</h3>
                            <ul className="feature-list">
                                {strengths.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                        </AnimeWrapper>
                        <AnimeWrapper animationType="slideLeft" delay={400}>
                            <h3 style={{ marginBottom: '1rem' }}>Our Expertise Areas</h3>
                            <ul className="feature-list">
                                {expertiseAreas.map((e, i) => <li key={i}>{e}</li>)}
                            </ul>
                        </AnimeWrapper>
                    </div>
                </div>
            </section>
        </div>
    );
}
