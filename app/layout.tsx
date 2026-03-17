import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/theme.css';
import './globals.css';
import '../styles/components.css';
import { LocaleProvider } from '@/contexts/LocaleContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Trail Aerospace',
        template: '%s | Trail Aerospace',
    },
    description: 'Trail Aerospace – aerospace products and services',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased min-h-screen flex flex-col font-sans`}>
                <LocaleProvider>
                    <Navbar />
                    <div className="flex-1">{children}</div>
                    <Footer />
                </LocaleProvider>
            </body>
        </html>
    );
}
