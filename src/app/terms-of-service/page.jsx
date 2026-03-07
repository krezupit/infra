import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service | Krezup — IT Infrastructure Pune',
    description: 'Read the Terms of Service for Krezup IT infrastructure services including Data Center setup, Networking, AMC, and Structured Cabling in Pune.',
    alternates: { canonical: 'https://krezup.in/terms-of-service' },
};

export default function TermsOfService() {
    return (
        <div className="legal-page">
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">Legal</span>
                    <h1 className="page-title">Terms of <span className="text-accent">Service</span></h1>
                    <div className="section-divider center"></div>
                    <p className="page-subtitle">Last updated: February 2026</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="legal-content">

                        <div className="legal-intro">
                            <p>These Terms of Service ("Terms") govern your use of the website <strong>krezup.in</strong> and any IT infrastructure services provided by <strong>Krezup</strong> ("Company", "we", "us", or "our"). By accessing our website or engaging our services, you agree to be bound by these Terms.</p>
                        </div>

                        <div className="legal-section">
                            <h2>1. Services</h2>
                            <p>Krezup provides professional IT infrastructure services including but not limited to:</p>
                            <ul>
                                <li>Data Center Design, Setup & Maintenance</li>
                                <li>Enterprise Networking (LAN/WAN, Routing, Switching)</li>
                                <li>Structured Cabling (Cat6, Cat6A, Fiber Optic)</li>
                                <li>Server & Storage Deployment and Virtualization</li>
                                <li>Network Security Solutions</li>
                                <li>Annual Maintenance Contracts (AMC)</li>
                                <li>Hardware Supply & Installation</li>
                            </ul>
                            <p>Specific service scope, deliverables, timelines, and pricing are defined in individual <strong>Service Agreements</strong> or <strong>Purchase Orders</strong> signed between Krezup and the client.</p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Acceptance of Terms</h2>
                            <p>By using our website or engaging our services, you confirm that:</p>
                            <ul>
                                <li>You are at least 18 years of age</li>
                                <li>You have the legal authority to enter into agreements on behalf of your organization</li>
                                <li>You have read and agree to these Terms in full</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Quotations & Pricing</h2>
                            <ul>
                                <li>All quotations are valid for <strong>30 days</strong> from the date of issue unless otherwise specified</li>
                                <li>Prices are in Indian Rupees (INR) and exclusive of applicable GST unless stated otherwise</li>
                                <li>Hardware pricing may vary based on OEM availability and market conditions</li>
                                <li>Krezup reserves the right to revise pricing with prior written notice</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>4. Payment Terms</h2>
                            <ul>
                                <li>Payment terms are as specified in the invoice or service agreement</li>
                                <li>Standard terms: <strong>50% advance</strong> before project commencement, balance on completion</li>
                                <li>AMC contracts are invoiced annually or as agreed</li>
                                <li>Late payments may attract interest at 1.5% per month</li>
                                <li>All payments to be made via bank transfer, cheque, or UPI to Krezup's designated account</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>5. Client Responsibilities</h2>
                            <p>The client agrees to:</p>
                            <ul>
                                <li>Provide timely access to site, systems, and relevant technical information</li>
                                <li>Designate a technical point-of-contact for the project</li>
                                <li>Ensure a safe working environment compliant with applicable safety standards</li>
                                <li>Obtain necessary permissions, licenses, and approvals before project commencement</li>
                                <li>Promptly review and sign off on deliverables to avoid project delays</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>6. Warranty & Support</h2>
                            <ul>
                                <li>Installation workmanship is warranted for <strong>90 days</strong> from project completion unless an AMC is in effect</li>
                                <li>Hardware warranties are subject to OEM/manufacturer terms</li>
                                <li>AMC support is governed by the specific SLA terms in the signed AMC agreement</li>
                                <li>Warranty is void in cases of misuse, unauthorized modifications, or acts of nature</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>7. Intellectual Property</h2>
                            <p>All content on krezup.in — including text, graphics, logos, and documentation — is the intellectual property of Krezup and protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use our content without prior written permission.</p>
                        </div>

                        <div className="legal-section">
                            <h2>8. Limitation of Liability</h2>
                            <p>To the maximum extent permitted by law, Krezup's total liability for any claim arising out of or relating to our services shall not exceed the total fees paid by the client for the specific service in question during the three months preceding the claim. Krezup shall not be liable for:</p>
                            <ul>
                                <li>Indirect, incidental, or consequential damages</li>
                                <li>Loss of data, revenue, or business opportunity</li>
                                <li>Delays caused by circumstances beyond our reasonable control (force majeure)</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>9. Confidentiality</h2>
                            <p>Both parties agree to maintain the confidentiality of proprietary information shared during the course of service delivery. This obligation survives termination of the service agreement for a period of <strong>2 years</strong>.</p>
                        </div>

                        <div className="legal-section">
                            <h2>10. Termination</h2>
                            <p>Either party may terminate a service agreement with <strong>30 days' written notice</strong>. In the event of termination:</p>
                            <ul>
                                <li>All work completed to date shall be invoiced and payable</li>
                                <li>Hardware procured specifically for the project shall be billed in full</li>
                                <li>AMC contracts terminated before expiry are non-refundable for the remaining period</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>11. Governing Law</h2>
                            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in <strong>Pune, Maharashtra, India</strong>.</p>
                        </div>

                        <div className="legal-section">
                            <h2>12. Changes to Terms</h2>
                            <p>We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised date. Continued use of our services after such changes constitutes acceptance of the updated Terms.</p>
                        </div>

                        <div className="legal-section">
                            <h2>13. Contact</h2>
                            <p>For questions regarding these Terms of Service, please contact:</p>
                            <div className="legal-contact-box">
                                <p><strong>Krezup</strong></p>
                                <p>Pune, Maharashtra, India</p>
                                <p>📞 <a href="tel:+919145361357">+91 91453 61357</a></p>
                                <p>✉️ <a href="mailto:info@krezup.in">info@krezup.in</a></p>
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
