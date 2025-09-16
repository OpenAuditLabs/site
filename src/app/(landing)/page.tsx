import Hero from "@/components/landing/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PricingSection from "./pricing/pricing";
import About from "./about/about";
import RevolutionaryFeatures from "./RevolutionaryFeatures/revolutionaryFeatures";
import OpenAuditAction from "./OpenAuditAction/OpenAuditAction";
import Research from "./research/research";
import Contact from "./contact/contact";

/**
 * Top-level homepage component that composes the site's landing page.
 *
 * Renders the primary landing sections in order: Navbar, Hero, RevolutionaryFeatures,
 * OpenAuditAction, Research, PricingSection, About, and Footer.
 *
 * @returns The assembled homepage JSX element.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RevolutionaryFeatures />
      <OpenAuditAction />
      <Research />
      <PricingSection />
      <Contact />
      <About />
      <Footer />
    </>
  );
}
