import AnimeWrapper from '../../components/AnimeWrapper';

export const metadata = {
    title: 'Industries We Serve in Pune | Manufacturing, IT, Pharma, BFSI, Data Centers — Krezup',
    description:
        'Krezup delivers specialized IT infrastructure solutions for manufacturing, IT companies, pharma, BFSI, data centers, and educational institutions in Pune, MIDC, Chakan, Hinjewadi, and Ranjangaon.',
    keywords: 'IT infrastructure manufacturing Pune, pharma IT Pune, BFSI network Pune, data center Pune, MIDC IT company, industrial networking Pune, PLC SCADA networking',
    alternates: { canonical: 'https://krezup.in/industries' },
    openGraph: {
        title: 'Industries We Serve | Krezup Pune',
        description: 'IT solutions for manufacturing, pharma, BFSI, data centers across Pune MIDC.',
        url: 'https://krezup.in/industries',
    },
};

const industries = [
    { title: 'Manufacturing & Industrial', emoji: '🏭', desc: 'Industrial networking, PLC/SCADA connectivity, rugged infrastructure.', color: '#f97316' },
    { title: 'IT & Software Companies', emoji: '💻', desc: 'Office network setup, server rooms, high-speed connectivity.', color: '#1a6cf6' },
    { title: 'Data Centers', emoji: '🖥️', desc: 'Rack deployment, network configuration, remote hands.', color: '#0ea5e9' },
    { title: 'Pharma & Healthcare', emoji: '🏥', desc: 'Secure and compliant IT infrastructure.', color: '#22c55e' },
    { title: 'BFSI', emoji: '🏦', desc: 'High availability and secure network architecture.', color: '#8b5cf6' },
    { title: 'Education', emoji: '🎓', desc: 'Campus networking and centralized server solutions.', color: '#f59e0b' },
];

const locations = ['Hinjewadi', 'Chakan MIDC', 'Ranjangaon', 'Talegaon', 'Pimpri-Chinchwad', 'Hadapsar', 'Kharadi', 'Baner', 'Wakad'];

export default function IndustriesPage() {
    return (
        <div>
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <AnimeWrapper animationType="fadeUp" delay={200}>
                        <span className="section-label">Industries</span>
                        <h1 className="page-title">Industries We <span className="text-accent">Support</span></h1>
                        <div className="section-divider center"></div>
                        <p className="page-subtitle">Delivering robust IT infrastructure customized for your sector's specific demands.</p>
                    </AnimeWrapper>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="section-padding bg-alt">
                <div className="container">
                    <div className="grid-3-col">
                        {industries.map((ind, index) => (
                            <AnimeWrapper key={index} animationType="fadeUp" delay={index * 100} className="card industry-card">
                                <div style={{
                                    width: 64, height: 64,
                                    background: `${ind.color}18`,
                                    border: `2px solid ${ind.color}30`,
                                    borderRadius: 16,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.75rem',
                                    marginBottom: '1.25rem',
                                }}>
                                    {ind.emoji}
                                </div>
                                <h2 className="card-title" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>{ind.title}</h2>
                                <p>{ind.desc}</p>
                            </AnimeWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="section-padding">
                <div className="container text-center">
                    <AnimeWrapper animationType="fadeUp">
                        <span className="section-label">Coverage</span>
                        <h2 className="section-title">Service Areas</h2>
                        <div className="section-divider center"></div>
                        <p className="section-desc mx-auto">We provide on-site support across all major industrial and commercial hubs in Pune.</p>
                        <div className="locations-tags mt-3">
                            {locations.map(loc => <span key={loc} className="tag">{loc}</span>)}
                        </div>
                    </AnimeWrapper>
                </div>
            </section>
        </div>
    );
}
