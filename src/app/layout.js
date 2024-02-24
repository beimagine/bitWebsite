import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/Components/Navbar/Navbar'
import Footer from '@/Components/Footer/Footer'
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bit"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
