import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navebar from "@/components/Elements/Navbar";
import Footer from "@/components/Elements/Footer";
// fonts


 const SatoshiMedium = localFont({
  src: "../fonts/Satoshi/Fonts/Satoshi-Medium.ttf"
 })

export const metadata: Metadata = {
  title: "North N Loans",
  description: "Financial Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${SatoshiMedium.className}`}
      >
        <>
        <Navebar />
            {children}
          <div className="bg-white" >
               <Footer />
          </div>

        </>

      </body>
    </html>
  );
}
