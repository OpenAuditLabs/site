import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenAudit | Revolutionizing Smart Contract Security",
  description:
    "OpenAudit is a next-generation platform for smart contract security, offering automated audits, research-driven features, and seamless collaboration for Web3 projects.",
  keywords: [
    "Smart Contract Security",
    "Automated Audit",
    "Web3 Security",
    "Blockchain Audit",
    "OpenAudit Platform",
    "Ethereum",
    "Solidity",
    "Security Research",
    "Decentralized",
    "Audit Collaboration"
  ],
};

/**
 * Root HTML layout for the application.
 *
 * Renders the top-level HTML structure, applies configured Google font CSS variables and global body classes,
 * and wraps page content with the ThemeProvider that controls class-based theming (system default enabled).
 *
 * @param children - Page content to render inside the layout.
 * @returns The root JSX element for the app (HTML -> body -> ThemeProvider -> children).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
