import type { Metadata } from "next";
import { Syne, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import GridBackground from "@/components/GridBackground";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eshaniqbal.co.in"),
  title: "ESHAN IQBAL | AI/ML Engineer & Full-Stack Developer",
  description: "Senior AI/ML Engineer and Full-Stack Developer specializing in high-performance digital systems, scalable AI solutions, and innovative software development. Based in Bangalore.",
  keywords: ["Eshan Iqbal", "AI Engineer", "ML Engineer", "Full-Stack Developer", "Next.js", "React", "AWS", "Machine Learning", "Software Developer", "Bangalore Developer"],
  authors: [{ name: "Eshan Iqbal" }],
  creator: "Eshan Iqbal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eshaniqbal.co.in",
    title: "ESHAN IQBAL | AI/ML Engineer & Full-Stack Developer",
    description: "Building the future with AI and Scalable Digital Solutions.",
    siteName: "Eshan Iqbal Portfolio",
    images: [{
      url: "/logo.png",
      width: 800,
      height: 800,
      alt: "Eshan Iqbal Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESHAN IQBAL | AI/ML Engineer & Full-Stack Developer",
    description: "Building the future with AI and Scalable Digital Solutions.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSerif.variable} font-syne antialiased relative`}>
        <GridBackground />
        {children}
      </body>
    </html>
  );
}

