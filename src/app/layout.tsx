import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import ClientGuards from "@/components/UI/ClientGuards";
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
        <ClientGuards />

            {children}
          <div className="bg-white" >

          </div>

        </>

      </body>
    </html>
  );
}
