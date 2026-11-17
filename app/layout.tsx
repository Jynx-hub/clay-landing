import type { Metadata, Viewport } from "next";
import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clay on Campus · Become a Clay Ambassador at UT Austin",
  description:
    "Become a Clay Ambassador at UT Austin. Rep Clay on campus, learn modern go-to-market, and join the first cohort. Applications open for Fall 2026.",
  keywords: [
    "Clay",
    "GTM",
    "UT Austin",
    "go-to-market",
    "ambassador club",
    "student organization",
    "Austin startups",
  ],
  openGraph: {
    title: "Clay on Campus · UT Austin GTM Ambassador Club",
    description:
      "Become a Clay Ambassador at UT Austin. Applications open for Fall 2026.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F4EF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
