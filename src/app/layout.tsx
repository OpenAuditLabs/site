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
        <head>
          <style>
            .skip-to-content {
              position: absolute;
              left: -9999px;
              width: 1px;
              height: 1px;
              top: auto;
              font-size: 1rem;
              overflow: hidden;
              z-index: 999;
            }

            .skip-to-content:focus {
              position: static;
              width: auto;
              height: auto;
              padding: 0.5rem 1rem;
              background-color: #007bff; /* Example focus background */
              color: white; /* Example focus text color */
              text-decoration: none;
              left: auto;
              top: auto;
            }
          </style>
        </head>
        <body
          className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        >
          <a href="#main-content" className="skip-to-content">Skip to content</a>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Navbar />
            <main id="main-content">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
