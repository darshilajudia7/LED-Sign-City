import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import './globals.css';

import { Anek_Latin, Inter } from 'next/font/google';

const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/footer"));

export const metadata = {
  title: 'LED Sign City',
  description: 'Custom Next.js ',
};

const anekLatin = Anek_Latin({
  subsets: ['latin'],
  variable: '--font-anek',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${anekLatin.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
