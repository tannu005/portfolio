import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Tannu Yadav | Full-Stack Product Engineer",
  description: "Shipped 5 Deployed Systems | 5,000 records in <200ms | Zero SQL Injection Vulnerabilities | Designed for 10K Concurrent Users",
  keywords: "full-stack, product engineer, react, node.js, postgresql, fintech, portfolio, tannu yadav",
  openGraph: {
    title: "Tannu Yadav | Full-Stack Product Engineer",
    description: "Shipped 4 Deployed Systems. See the architecture, the decisions, and the metrics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased selection:bg-emerald-500/30">
        {children}
      </body>
    </html>
  );
}
