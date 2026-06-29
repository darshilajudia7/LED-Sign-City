import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "@/components/Navbar";
import Footer from '@/components/footer';
import './globals.css';

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
