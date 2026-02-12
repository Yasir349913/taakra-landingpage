// Remove this line
// "use client";

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar"; // make sure this is a client component
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/common/LoadingScreen";
import AOSInitializer from "@/components/common/AOSInitializer";
import CanvasCursor from "@/components/common/Cursor";
import SmoothScroll from "@/components/common/SmoothScroll";

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"]
});

// Taakra metadata
export const metadata: Metadata = {
  title: "Taakra | University of Central Punjab",
  description: "Discover and join Taakra at University of Central Punjab. Connect with like-minded students, explore your interests, and grow together.",
  keywords: "Taakra, UCP, University of Central Punjab, students, skill development, workshops, events, student club",
  authors: [{ name: "Taakra" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/images/logos/logo.jfif", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/logos/logo.jfif", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: { url: "/images/logos/logo.jfif", sizes: "180x180", type: "image/jpeg" },
    shortcut: "/images/logos/logo.jfif",
  },
  openGraph: {
    title: "Taakra",
    description: "Join the vibrant student community at University of Central Punjab",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/logos/logo.jfif",
        width: 1200,
        height: 630,
        alt: "Taakra",
      },
    ],
  },
};

// Viewport settings
export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 5 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`} suppressHydrationWarning={true}>
        {/* Global utilities */}
        <SmoothScroll />
        <AOSInitializer />
        <LoadingScreen />

        {/* Layout */}
        <Navbar />
        {children}
        <Footer />
        <CanvasCursor />
      </body>
    </html>
  );
}
