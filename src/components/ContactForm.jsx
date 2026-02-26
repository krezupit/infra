'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! We will contact you shortly.' });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again later.' });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ type: 'error', message: 'An error occurred. Please try again or call us directly.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            {status.message && (
                <div className={`form-status ${status.type === 'success' ? 'status-success' : 'status-error'}`}>
                    {status.message}
                </div>
            )}

            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="+91 XXXXXXXXXX"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="service">Interested Service</label>
                <select
                    id="service"
                    className="form-control"
                    required
                    value={formData.service}
                    onChange={handleChange}
                >
                    <option value="">Select a service...</option>
                    <option value="data-center">Data Center Setup</option>
                    <option value="networking">Enterprise Networking</option>
                    <option value="cabling">Structured Cabling</option>
                    <option value="server">Server Installation</option>
                    <option value="amc">Hardware AMC</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    rows="4"
                    className="form-control"
                    placeholder="How can we help you?"
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-2" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
            <style jsx>{`
                .form-status {
                    padding: 1rem;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                    font-size: 0.95rem;
                    font-weight: 500;
                }
                .status-success {
                    background-color: #f0fdf4;
                    color: #16a34a;
                    border: 1px solid #bbf7d0;
                }
                .status-error {
                    background-color: #fef2f2;
                    color: #dc2626;
                    border: 1px solid #fecaca;
                }
                button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
            `}</style>
        </form>
    );
}
