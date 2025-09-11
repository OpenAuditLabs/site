import Hero from "@/components/landing/Hero";
import PricingCard from "@/components/landing/PricingTableCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PricingSection from "./pricing/pricing";
import About from "./about/about";
import RevolutionaryFeatures from "./RevolutionaryFeatures/revolutionaryFeatures";
import OpenAuditAction from "./OpenAuditAction/OpenAuditAction";
import Research from "./research/research";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RevolutionaryFeatures />
      <OpenAuditAction />
      <Research />
      <PricingSection />
      <About />
      <Footer />
    </>
  );
}
