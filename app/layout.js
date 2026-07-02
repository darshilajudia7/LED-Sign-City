import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import './globals.css';

const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/footer"));

export const metadata = {
  title: 'LED Sign City',
  description: 'Custom Next.js ',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
