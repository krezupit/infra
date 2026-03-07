import './globals.css';
import { Outfit, Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
});

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
});

export const metadata = {
    title: 'Krezup | Hardware & Networking Solutions Pune',
    description: 'End-to-end IT infrastructure services including Data Center setup, Enterprise Networking, Structured Cabling, Server Installation, and AMC support.',
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#1e40af',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
            <body>
                <Navbar />
                <main className="main-content">
                    {children}
                </main>
                <FloatingChat />
                <Footer />
            </body>
        </html>
    );
}
