import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import { Inter, Anek_Latin } from 'next/font/google';
import './globals.css';

const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/footer"));

export const metadata = {
  title: 'LED Sign City',
  description: 'Custom Next.js ',
};

// Configure Inter
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: true,
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Configure Anek Latin
const anek = Anek_Latin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anek',
  adjustFontFallback: true,
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${anek.variable}`}>
      
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
