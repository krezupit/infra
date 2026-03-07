import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer section-padding">
            <div className="container">
                <div className="footer-grid">

                    {/* Company Info */}
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <div className="logo-mark footer-logo-mark">
                                <span className="logo-name footer-logo-name">Krezup<span className="logo-dot footer-logo-dot">.</span></span>
                                <span className="logo-tagline footer-logo-tagline">Innovation Leads To Future</span>
                            </div>
                        </div>
                        <p className="footer-desc">
                            End-to-end IT infrastructure services including Data Center setup, Enterprise Networking, Structured Cabling, Server Installation, and AMC support.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/industries">Industries</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Our Services</h3>
                        <ul className="footer-links">
                            <li><Link href="/services#data-center">Data Center Setup</Link></li>
                            <li><Link href="/services#networking">Enterprise Networking</Link></li>
                            <li><Link href="/services#cabling">Structured Cabling</Link></li>
                            <li><Link href="/services#security">Network Security</Link></li>
                            <li><Link href="/services#amc">AMC Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Contact Us</h3>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>Pune, Maharashtra, India</span>
                            </li>
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <span>+91 91453 61357</span>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <span>info@krezup.in</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Krezup. All rights reserved.</p>
                    <div className="footer-legal-links">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <span>·</span>
                        <Link href="/terms-of-service">Terms of Service</Link>
                        <span>·</span>
                        <Link href="/sitemap-page">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
