import type { Metadata } from "next";
import { Syne, DM_Serif_Display } from "next/font/google";
import "./globals.css";

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
  title: "ESHAN IQBAL | Full-Stack Developer",
  description: "Creative web & app developer specializing in capturing digital solutions that shape the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSerif.variable} font-syne antialiased`}>
        {children}
      </body>
    </html>
  );
}

