import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CardTilt } from "@/components/CardTilt";
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
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Hide <main> until ScrollReveal has set each element's start state (no flash).
            Never hides with reduced motion, and always un-hides after 1.5s as a fallback. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=document.documentElement;if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;h.classList.add('reveal-pending');setTimeout(function(){h.classList.remove('reveal-pending')},1500)})();`,
          }}
        />
      </head>
      <body className="min-h-full font-sans">
        <SmoothScroll />
        <ScrollReveal />
        <CardTilt />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
