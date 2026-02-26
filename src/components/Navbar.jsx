'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link href="/" className="logo-link">
                        <div className="logo-mark">
                            <span className="logo-name">Krezup<span className="logo-dot">.</span></span>
                            <span className="logo-tagline">Innovation Leads To Future</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-links desktop-only">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/about" className="nav-link">About Us</Link>
                    <Link href="/services" className="nav-link">Services</Link>
                    <Link href="/industries" className="nav-link">Industries</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>

                <div className="navbar-actions desktop-only">
                    <Link href="/contact" className="btn btn-primary">Request Quote</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    aria-label="Menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <Link href="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link href="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                <Link href="/services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                <Link href="/industries" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
                <Link href="/contact" className="btn btn-primary mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Request Quote</Link>
            </div>
        </nav>
    );
}
