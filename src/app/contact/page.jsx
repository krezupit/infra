import AnimeWrapper from '../../components/AnimeWrapper';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

export const metadata = {
    title: 'Contact Krezup | IT Infrastructure Support in Pune — Call +91 9145361357',
    description:
        'Contact Krezup for Data Center setup, Enterprise Networking, AMC & IT infrastructure support in Pune. Call +91 9145361357 or email info@krezup.com. Serving Hinjewadi, Chakan, MIDC, Pimpri-Chinchwad.',
    keywords: 'contact Krezup Pune, IT support Pune, data center support Pune, network AMC contact, IT AMC Pune phone',
    alternates: { canonical: 'https://krezup.com/contact' },
    openGraph: {
        title: 'Contact Krezup | IT Infrastructure Pune',
        description: 'Call +91 9145361357 for data center, networking & AMC support across Pune.',
        url: 'https://krezup.com/contact',
    },
};

export default function ContactPage() {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="page-hero section-padding">
                <div className="container">
                    <AnimeWrapper animationType="fadeUp" delay={200}>
                        <h1 className="page-title">Contact <span className="text-accent">Us</span></h1>
                        <p className="page-subtitle">Ready to upgrade your IT infrastructure? We're here to help.</p>
                    </AnimeWrapper>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid-2-col">

                        {/* Contact Information */}
                        <AnimeWrapper animationType="slideRight">
                            <h2 className="section-title">Get In Touch</h2>
                            <p className="mb-4">Reach out to us for consultations, quotes, or support. Our team is ready to assist you.</p>

                            <div className="contact-info-list">
                                <div className="contact-info-item">
                                    <div className="contact-icon-wrapper">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4>Our Office</h4>
                                        <p>Pune, Maharashtra, India<br />Serving all MIDC areas.</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-icon-wrapper">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+91 91453 61357</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-icon-wrapper">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>info@krezup.com</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-icon-wrapper">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4>Working Hours</h4>
                                        <p>Monday - Saturday: 9:00 AM - 6:00 PM<br />24/7 Support for AMC Clients</p>
                                    </div>
                                </div>
                            </div>
                        </AnimeWrapper>

                        {/* Contact Form */}
                        <AnimeWrapper animationType="slideLeft" delay={200} className="card glass-card">
                            <h3 className="mb-4">Send Us A Message</h3>
                            <ContactForm />
                        </AnimeWrapper>

                    </div>
                </div>
            </section>
        </div>
    );
}
