'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import Link from 'next/link';
import ParticleBackground from './ParticleBackground';
import { ArrowRight, PhoneCall, CheckCircle2, Shield, Clock, Award } from 'lucide-react';

/* ── Polished server-rack SVG illustration ───────────────────────────── */
function DCIllustration() {
    return (
        <svg viewBox="0 0 520 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg-illustration">
            <defs>
                <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1a6cf6" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
                <linearGradient id="hg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f4f8ff" />
                    <stop offset="100%" stopColor="#e8f0fe" />
                </linearGradient>
                <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
                    <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#1a6cf6" floodOpacity="0.15" />
                </filter>
                <filter id="glowGreen">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#22c55e" floodOpacity="0.8" />
                </filter>
            </defs>

            {/* Card */}
            <rect x="30" y="20" width="460" height="400" rx="24" fill="white" filter="url(#cardShadow)" />
            {/* Header */}
            <rect x="30" y="20" width="460" height="56" rx="24" fill="url(#hg1)" />
            <rect x="30" y="58" width="460" height="18" fill="url(#hg1)" />
            <circle cx="62" cy="48" r="7" fill="rgba(255,255,255,0.35)" />
            <circle cx="84" cy="48" r="7" fill="rgba(255,255,255,0.35)" />
            <circle cx="106" cy="48" r="7" fill="rgba(255,255,255,0.35)" />
            <text x="255" y="53" fill="white" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="'Outfit',sans-serif">Data Center Control Panel</text>
            {/* Uptime badge */}
            <rect x="360" y="32" width="104" height="26" rx="13" fill="rgba(34,197,94,0.18)" stroke="rgba(34,197,94,0.35)" strokeWidth="1" />
            <circle cx="375" cy="45" r="4" fill="#22c55e" className="uptime-dot" />
            <text x="384" y="50" fill="#16a34a" fontSize="10" fontWeight="700" fontFamily="'Outfit',sans-serif">99.9% Uptime</text>

            {/* RACK A */}
            <rect x="55" y="90" width="175" height="290" rx="10" fill="url(#hg2)" stroke="#dbeafe" strokeWidth="1.5" />
            <text x="142" y="112" fill="#1a6cf6" fontSize="10" fontWeight="800" textAnchor="middle" fontFamily="'Outfit',sans-serif" letterSpacing="1">SERVER RACK A</text>
            {[0, 1, 2, 3, 4, 5, 6].map(i => {
                const y = 122 + i * 36;
                const active = [0, 1, 3, 5, 6].includes(i);
                return (
                    <g key={i} className={`rack-row rack-row-${i}`}>
                        <rect x="68" y={y} width="148" height="26" rx="5" fill="white" stroke="#dbeafe" strokeWidth="1" />
                        <rect x="72" y={y + 4} width="50" height="18" rx="3" fill={active ? 'rgba(26,108,246,0.1)' : 'rgba(241,245,249,1)'} />
                        <circle cx="208" cy={y + 13} r="5" fill={active ? '#22c55e' : '#f59e0b'} filter={active ? 'url(#glowGreen)' : ''} />
                        <rect x="126" y={y + 8} width="70" height="3" rx="1.5" fill="#e2e8f0" />
                        <rect x="126" y={y + 14} width={active ? 45 : 25} height="3" rx="1.5" fill={active ? '#bfdbfe' : '#fde68a'} />
                    </g>
                );
            })}

            {/* RACK B */}
            <rect x="290" y="90" width="175" height="290" rx="10" fill="url(#hg2)" stroke="#dbeafe" strokeWidth="1.5" />
            <text x="377" y="112" fill="#0ea5e9" fontSize="10" fontWeight="800" textAnchor="middle" fontFamily="'Outfit',sans-serif" letterSpacing="1">SERVER RACK B</text>
            {[0, 1, 2, 3, 4, 5, 6].map(i => {
                const y = 122 + i * 36;
                const active = [0, 2, 3, 4, 6].includes(i);
                return (
                    <g key={i} className={`rack-row-b rack-row-b-${i}`}>
                        <rect x="303" y={y} width="148" height="26" rx="5" fill="white" stroke="#dbeafe" strokeWidth="1" />
                        <rect x="307" y={y + 4} width="50" height="18" rx="3" fill={active ? 'rgba(14,165,233,0.1)' : 'rgba(241,245,249,1)'} />
                        <circle cx="443" cy={y + 13} r="5" fill={active ? '#22c55e' : '#f59e0b'} filter={active ? 'url(#glowGreen)' : ''} />
                        <rect x="361" y={y + 8} width="70" height="3" rx="1.5" fill="#e2e8f0" />
                        <rect x="361" y={y + 14} width={active ? 55 : 20} height="3" rx="1.5" fill={active ? '#bae6fd' : '#fde68a'} />
                    </g>
                );
            })}

            {/* Cables */}
            {[160, 196, 232, 268, 304].map((y, i) => (
                <path key={i} d={`M230 ${y} Q260 ${y} 260 ${y + 18} Q260 ${y + 36} 290 ${y + 36}`}
                    stroke={i % 2 === 0 ? '#1a6cf6' : '#0ea5e9'} strokeWidth="1.5" strokeDasharray="5 4"
                    opacity="0.5" fill="none" className={`cable-path cable-${i}`} />
            ))}
        </svg>
    );
}

/* ── Animated counter ────────────────────────────────────────────────── */
function useCountUp(target, delay = 800, suffix = '') {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obj = { val: 0 };
        anime({
            targets: obj, val: target, duration: 1800, easing: 'easeOutExpo', delay,
            update() { el.textContent = Math.floor(obj.val) + suffix; }
        });
    }, [target, delay, suffix]);
    return ref;
}

export default function HeroAnime() {
    const badgeRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const illusRef = useRef(null);
    const statProjects = useCountUp(500, 900, '+');
    const statYears = useCountUp(10, 1000, '+');
    const statClients = useCountUp(120, 1100, '+');

    useEffect(() => {
        const tl = anime.timeline({ easing: 'easeOutExpo' });
        tl
            .add({ targets: badgeRef.current, translateY: [-24, 0], opacity: [0, 1], duration: 600 })
            .add({ targets: '.hero-title-word', translateY: [50, 0], opacity: [0, 1], duration: 800, delay: anime.stagger(60) }, '-=300')
            .add({ targets: subtitleRef.current, translateY: [18, 0], opacity: [0, 1], duration: 600 }, '-=400')
            .add({ targets: '.trust-pill', translateX: [-16, 0], opacity: [0, 1], duration: 450, delay: anime.stagger(90) }, '-=350')
            .add({ targets: ctaRef.current, translateY: [16, 0], opacity: [0, 1], duration: 600 }, '-=250')
            .add({ targets: '.hero-stat', translateY: [24, 0], opacity: [0, 1], duration: 500, delay: anime.stagger(100) }, '-=350')
            .add({ targets: illusRef.current, translateX: [70, 0], opacity: [0, 1], duration: 1000, easing: 'easeOutElastic(1, 0.55)' }, 150);

        // Rack LED flicker
        anime({
            targets: '.rack-row, .rack-row-b', opacity: [1, 0.45, 1],
            duration: () => anime.random(2000, 4000), delay: () => anime.random(0, 2000), loop: true, easing: 'easeInOutSine'
        });

        // Cable animation
        anime({
            targets: '.cable-path', strokeDashoffset: [anime.setDashoffset, 0],
            duration: 2500, delay: anime.stagger(200, { start: 800 }), loop: true, easing: 'easeInOutSine', direction: 'alternate'
        });

        // Uptime pulse
        anime({ targets: '.uptime-dot', r: [4, 6, 4], opacity: [1, 0.4, 1], duration: 1400, loop: true, easing: 'easeInOutSine' });

        // Floating orbs
        anime({
            targets: '.hero-orb', translateX: () => anime.random(-22, 22), translateY: () => anime.random(-22, 22),
            duration: () => anime.random(5000, 7500), direction: 'alternate', loop: true, easing: 'easeInOutSine', delay: anime.stagger(600)
        });
    }, []);

    const trust = [
        { icon: <Shield size={12} />, text: 'SLA Guaranteed' },
        { icon: <Clock size={12} />, text: '24/7 Support' },
        { icon: <Award size={12} />, text: 'Certified Engineers' },
    ];

    return (
        <section className="hero-section">
            <ParticleBackground />
            <div className="hero-orb orb-1" />
            <div className="hero-orb orb-2" />
            <div className="hero-orb orb-3" />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="hero-two-col">

                    {/* ── LEFT ── */}
                    <div className="hero-text-col">
                        <div ref={badgeRef} className="hero-badge" style={{ opacity: 0 }}>
                            <span className="badge-dot" />
                            IT Infrastructure Experts in Pune
                        </div>

                        <h1 className="hero-title">
                            {/* Line 1 */}
                            <div className="hero-title-line">
                                {['Reliable', 'Hardware', '&'].map((w, i) => (
                                    <span key={i} className="hero-title-word" style={{ opacity: 0 }}>
                                        {w === '&' ? <span className="text-accent">&amp;</span> : w}{' '}
                                    </span>
                                ))}
                            </div>
                            {/* Line 2 */}
                            <div className="hero-title-line">
                                {['Networking', 'Solutions'].map((w, i) => (
                                    <span key={i} className="hero-title-word" style={{ opacity: 0 }}>{w}{' '}</span>
                                ))}
                            </div>
                            {/* Line 3 */}
                            <div className="hero-title-line">
                                {['for', 'Data'].map((w, i) => (
                                    <span key={i} className="hero-title-word" style={{ opacity: 0 }}>{w}{' '}</span>
                                ))}
                                <span className="hero-title-word text-accent" style={{ opacity: 0 }}>Centers</span>
                                <span className="hero-title-word" style={{ opacity: 0 }}>&nbsp;<span className="text-accent">&amp;</span> Industries</span>
                            </div>
                        </h1>

                        <p ref={subtitleRef} className="hero-subtitle" style={{ opacity: 0 }}>
                            End-to-end IT infrastructure — Data Center setup, Enterprise Networking,
                            Structured Cabling, Server Installation, and AMC support with SLA guarantees.
                        </p>

                        {/* Trust pills */}
                        <div className="hero-trust-row">
                            {trust.map((t, i) => (
                                <span key={i} className="trust-pill" style={{ opacity: 0 }}>
                                    <span style={{ color: 'var(--accent-primary)', display: 'flex' }}>{t.icon}</span>
                                    {t.text}
                                </span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div ref={ctaRef} className="hero-cta-group" style={{ opacity: 0 }}>
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Request a Quote <ArrowRight size={17} className="btn-icon" />
                            </Link>
                            <Link href="tel:+919145361357" className="btn btn-outline btn-lg">
                                <PhoneCall size={16} style={{ flexShrink: 0 }} /> +91 91453 61357
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="hero-stats">
                            {[
                                { ref: statProjects, label: 'Projects' },
                                { ref: statYears, label: 'Years Experience' },
                                { ref: statClients, label: 'Clients' },
                            ].map((s, i) => (
                                <div key={i} className="hero-stat" style={{ opacity: 0 }}>
                                    <div className="stat-value" ref={s.ref}>0+</div>
                                    <div className="stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT ── */}
                    <div ref={illusRef} className="hero-illustration" style={{ opacity: 0 }}>
                        <DCIllustration />
                    </div>

                </div>
            </div>
        </section>
    );
}
