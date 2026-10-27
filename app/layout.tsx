import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "XMEGA — Turning Ideas Into Digital Experiences",
    template: "%s · XMEGA",
  },
  description:
    "From websites and mobile apps to AI-powered solutions, XMEGA designs and develops technology that helps businesses grow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
