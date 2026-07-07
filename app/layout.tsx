import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fastik Media | Short-form Content Agency",
  description:
    "We turn your expertise into viral short-form content that builds trust and drives attention. Built for creators and brands ready to grow.",
  openGraph: {
    title: "Fastik Media | Short-form Content Agency",
    description:
      "We turn your expertise into viral short-form content that builds trust and drives attention.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fragmentMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
