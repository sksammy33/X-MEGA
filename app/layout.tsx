import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

// Body text. Upright only: italics are not part of the XMEGA type system.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: "normal",
});

// Display: headings, big numbers, logo-style text.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  style: "normal",
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable} antialiased`}>
      <body className="min-h-full font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
