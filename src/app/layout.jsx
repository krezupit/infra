import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';

export const metadata = {
    title: 'Krezup | Hardware & Networking Solutions Pune',
    description: 'End-to-end IT infrastructure services including Data Center setup, Enterprise Networking, Structured Cabling, Server Installation, and AMC support.',
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
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
