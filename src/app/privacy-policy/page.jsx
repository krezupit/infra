import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Krezup — IT Infrastructure Pune',
    description: 'Read the Privacy Policy of Krezup to understand how we collect, use, and protect your personal information.',
    alternates: { canonical: 'https://krezup.com/privacy-policy' },
};

export default function PrivacyPolicy() {
    return (
        <div className="legal-page">
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">Legal</span>
                    <h1 className="page-title">Privacy <span className="text-accent">Policy</span></h1>
                    <div className="section-divider center"></div>
                    <p className="page-subtitle">Last updated: February 2026</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="legal-content">

                        <div className="legal-intro">
                            <p>At <strong>Krezup</strong> ("we", "us", or "our"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>krezup.com</strong> or contact us for our IT infrastructure services.</p>
                        </div>

                        <div className="legal-section">
                            <h2>1. Information We Collect</h2>
                            <h3>Information you provide directly:</h3>
                            <ul>
                                <li>Name, company name, job title</li>
                                <li>Email address and phone number</li>
                                <li>Project details and service inquiries submitted via our contact form</li>
                                <li>Any other information you voluntarily share with us</li>
                            </ul>
                            <h3>Information collected automatically:</h3>
                            <ul>
                                <li>IP address and browser type</li>
                                <li>Pages visited and time spent on the site</li>
                                <li>Referring website and search terms</li>
                                <li>Device and operating system information</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>2. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul>
                                <li>Respond to your inquiries and provide IT infrastructure services</li>
                                <li>Send service proposals, quotes, and project updates</li>
                                <li>Improve our website and service offerings</li>
                                <li>Send periodic newsletters or service updates (with your consent)</li>
                                <li>Comply with applicable laws and regulations</li>
                                <li>Prevent fraud and maintain website security</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Sharing Your Information</h2>
                            <p>We do <strong>not sell, trade, or rent</strong> your personal information to third parties. We may share information only in the following limited circumstances:</p>
                            <ul>
                                <li><strong>Service providers:</strong> Trusted vendors who help us operate our website (e.g., hosting, analytics) under strict confidentiality agreements</li>
                                <li><strong>Legal requirements:</strong> When required by law, court order, or governmental authority</li>
                                <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>4. Cookies</h2>
                            <p>Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality.</p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Data Security</h2>
                            <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Data Retention</h2>
                            <p>We retain your personal information only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When no longer needed, we securely delete or anonymize your data.</p>
                        </div>

                        <div className="legal-section">
                            <h2>7. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your personal information</li>
                                <li>Opt out of marketing communications at any time</li>
                                <li>Lodge a complaint with a data protection authority</li>
                            </ul>
                            <p>To exercise any of these rights, contact us at <a href="mailto:info@krezup.com">info@krezup.com</a>.</p>
                        </div>

                        <div className="legal-section">
                            <h2>8. Third-Party Links</h2>
                            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies separately.</p>
                        </div>

                        <div className="legal-section">
                            <h2>9. Changes to This Policy</h2>
                            <p>We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this page with an updated date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
                        </div>

                        <div className="legal-section">
                            <h2>10. Contact Us</h2>
                            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
                            <div className="legal-contact-box">
                                <p><strong>Krezup</strong></p>
                                <p>Pune, Maharashtra, India</p>
                                <p>📞 <a href="tel:+919145361357">+91 91453 61357</a></p>
                                <p>✉️ <a href="mailto:info@krezup.com">info@krezup.com</a></p>
                            </div>
                        </div>

                        <div className="legal-back">
                            <Link href="/" className="btn btn-outline">← Back to Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
