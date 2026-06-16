import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "@/components/Navbar";
import './globals.css';

export const metadata = {
  title: 'LED Sign City',
  description: 'Custom Next.js ',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
