import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, phone, service, message } = await req.json();

        // Validate basic inputs
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Name, Email, Phone, and Message are required fields.' },
                { status: 400 }
            );
        }

        // Configure Nodemailer transporter (Fallback to console payload if SMTP not configured)
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;

        if (!smtpUser || !smtpPass) {
            console.log('--- MOCK EMAIL SEND (Missing SMTP_USER/PASS) ---');
            console.log(`From: ${name} <${email}>`);
            console.log(`Phone: ${phone} | Service: ${service}`);
            console.log(`Message:\n${message}`);
            return NextResponse.json({ success: true, dummy: true });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT || 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        // Setup email data
        const mailOptions = {
            from: `"${name}" <${smtpUser}>`, // Must send from authenticated address
            replyTo: email,
            to: process.env.CONTACT_RECEIVER_EMAIL || 'info@krezup.com',
            subject: `New Lead - KrezupIT: ${service || 'General Inquiry'}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
            html: `
                <h3>New Lead from Krezup.com</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Interested In:</strong> ${service || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send mail with defined transport object
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
