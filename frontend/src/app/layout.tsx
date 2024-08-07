import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import HeaderMobile from "@/components/HeaderMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{ borderBottom: '1px solid grey' }} className='hidden md:block sticky top-0 z-50 bg-white'>
          <Header />
        </header>

        <header style={{ borderBottom: '1px solid grey' }} className='md:hidden sticky top-0 z-50 bg-white'>
          <HeaderMobile />
        </header>

        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="lg:px-16 bg-[#F1F5F9]">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}
