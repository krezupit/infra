import Link from 'next/link';
import { Home, Info, Wrench, Building2, Phone, Map } from 'lucide-react';

export const metadata = {
    title: 'Sitemap | Krezup — IT Infrastructure Pune',
    description: 'Browse all pages of the Krezup website — IT infrastructure services, industries, about us, and contact information.',
    alternates: { canonical: 'https://krezup.in/sitemap' },
    robots: { index: false },
};

const sitemapSections = [
    {
        title: 'Main Pages',
        icon: <Home size={20} />,
        color: '#1a6cf6',
        links: [
            { label: 'Home', href: '/', desc: 'IT infrastructure company in Pune — Data Center, Networking & AMC' },
            { label: 'About Us', href: '/about', desc: 'Our company, mission, vision, and expertise' },
            { label: 'Contact Us', href: '/contact', desc: 'Get in touch for IT infrastructure support' },
        ],
    },
    {
        title: 'Services',
        icon: <Wrench size={20} />,
        color: '#0ea5e9',
        links: [
            { label: 'All Services', href: '/services', desc: 'Complete list of IT infrastructure services' },
            { label: 'Data Center Setup', href: '/services#data-center', desc: 'Rack install, server deploy, DC migration' },
            { label: 'Enterprise Networking', href: '/services#networking', desc: 'LAN/WAN, VLAN, routing & switching' },
            { label: 'Structured Cabling', href: '/services#cabling', desc: 'Cat6, Cat6A, Fiber Optic installation' },
            { label: 'Server & Storage', href: '/services#server', desc: 'VMware, Hyper-V, NAS/SAN, backup' },
            { label: 'Network Security', href: '/services#security', desc: 'Firewall, VPN, endpoint protection' },
            { label: 'Hardware AMC', href: '/services#amc', desc: 'Annual Maintenance Contracts with SLA' },
        ],
    },
    {
        title: 'Industries',
        icon: <Building2 size={20} />,
        color: '#8b5cf6',
        links: [
            { label: 'Industries We Serve', href: '/industries', desc: 'Sectors we deliver IT solutions for' },
            { label: 'Manufacturing & Industrial', href: '/industries', desc: 'PLC/SCADA, rugged infrastructure' },
            { label: 'IT & Software Companies', href: '/industries', desc: 'Office networking, server rooms' },
            { label: 'Pharma & Healthcare', href: '/industries', desc: 'Secure, compliant IT environments' },
            { label: 'BFSI & Corporate', href: '/industries', desc: 'High-availability network architecture' },
            { label: 'Data Centers', href: '/industries', desc: 'Rack deployment & remote hands' },
        ],
    },
    {
        title: 'Legal & Info',
        icon: <Info size={20} />,
        color: '#f97316',
        links: [
            { label: 'Privacy Policy', href: '/privacy-policy', desc: 'How we collect and use your information' },
            { label: 'Terms of Service', href: '/terms-of-service', desc: 'Terms governing our services' },
            { label: 'XML Sitemap', href: '/sitemap.xml', desc: 'For search engine crawlers' },
        ],
    },
];

export default function SitemapPage() {
    return (
        <div>
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">Navigation</span>
                    <h1 className="page-title">Site <span className="text-accent">Map</span></h1>
                    <div className="section-divider center"></div>
                    <p className="page-subtitle">Find every page on the Krezup website quickly.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="sitemap-grid">
                        {sitemapSections.map((section, i) => (
                            <div key={i} className="card sitemap-card">
                                <div className="sitemap-card-header" style={{ color: section.color }}>
                                    <span className="sitemap-icon" style={{ background: `${section.color}18`, color: section.color }}>
                                        {section.icon}
                                    </span>
                                    <h2 className="sitemap-section-title">{section.title}</h2>
                                </div>
                                <ul className="sitemap-links">
                                    {section.links.map((link, j) => (
                                        <li key={j}>
                                            <Link href={link.href} className="sitemap-link">
                                                <span className="sitemap-link-label">{link.label}</span>
                                                <span className="sitemap-link-desc">{link.desc}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
