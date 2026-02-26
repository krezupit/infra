import AnimeWrapper from '../../components/AnimeWrapper';
import { Server, Network, Cpu, Cable, ShieldCheck, Settings, Wrench } from 'lucide-react';

export const metadata = {
    title: 'IT Infrastructure Services Pune | Data Center, Networking, Cabling & AMC — Krezup',
    description:
        'Krezup offers complete IT infrastructure services in Pune: Data Center setup, Enterprise Networking (LAN/WAN), Structured Cabling (Cat6/Fiber), Server Virtualization, Network Security, and Annual Maintenance Contracts (AMC).',
    keywords: 'data center services Pune, structured cabling Pune, network AMC Pune, server installation Pune, fiber optic cabling Pune, firewall installation Pune, IT services MIDC',
    alternates: { canonical: 'https://krezup.com/services' },
    openGraph: {
        title: 'IT Infrastructure Services Pune — Krezup',
        description: 'Data Center, Networking, Cabling, Server & Security services in Pune.',
        url: 'https://krezup.com/services',
    },
};

const services = [
    {
        id: 'data-center',
        title: 'Data Center Services',
        icon: <Server size={22} />,
        items: ['Data Center Design & Setup', 'Rack & PDU Installation', 'Server & Storage Deployment', 'Cooling & Environmental Monitoring', 'Data Center Migration', 'Remote Hands Support', 'Data Center AMC'],
    },
    {
        id: 'networking',
        title: 'Networking Solutions',
        icon: <Network size={22} />,
        tech: ['Cisco', 'HP', 'Juniper', 'MikroTik'],
        items: ['LAN/WAN Setup', 'Router & Switch Configuration', 'VLAN & Network Segmentation', 'Network Redundancy & High Availability', 'Performance Monitoring & Troubleshooting'],
    },
    {
        id: 'cabling',
        title: 'Structured Cabling',
        icon: <Cable size={22} />,
        items: ['Cat6 / Cat6A Cabling', 'Fiber Optic Backbone', 'OFC Termination & Splicing', 'Cable Testing & Certification', 'Industrial Network Cabling'],
    },
    {
        id: 'server',
        title: 'Server & Storage',
        icon: <Cpu size={22} />,
        items: ['Rack & Blade Server Installation', 'VMware / Hyper-V Virtualization', 'NAS/SAN Setup', 'Backup & Disaster Recovery', 'Server Health Monitoring'],
    },
    {
        id: 'security',
        title: 'Network Security',
        icon: <ShieldCheck size={22} />,
        items: ['Firewall Installation & Configuration', 'VPN Setup', 'Endpoint Security', 'Network Security Audit', 'Access Control Implementation'],
    },
    {
        id: 'amc',
        title: 'Hardware Supply & AMC',
        icon: <Wrench size={22} />,
        items: ['Enterprise IT Hardware Supply', 'Network Equipment Installation', 'Hardware AMC & Network AMC', 'Preventive Maintenance', 'SLA-based support'],
    },
];

export default function ServicesPage() {
    return (
        <div>
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <AnimeWrapper animationType="fadeUp" delay={200}>
                        <span className="section-label">What We Offer</span>
                        <h1 className="page-title">Our <span className="text-accent">Services</span></h1>
                        <div className="section-divider center"></div>
                        <p className="page-subtitle">End-to-end solutions for modern IT infrastructure across Pune.</p>
                    </AnimeWrapper>
                </div>
            </section>

            {/* Services grid */}
            <section className="section-padding">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <AnimeWrapper key={service.id} className="card service-card" animationType="fadeUp" delay={index * 100}>
                                <div id={service.id} className="anchor-offset"></div>
                                <div className="service-title">
                                    <div className="service-title-icon">{service.icon}</div>
                                    {service.title}
                                </div>
                                {service.tech && (
                                    <div className="service-tech-tags">
                                        {service.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                                    </div>
                                )}
                                <ul className="service-list">
                                    {service.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </AnimeWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
