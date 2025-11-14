import Link from "next/link";
import Hero from "@/components/landing/Hero";
import PricingSection from "./pricing/pricing";
import About from "./about/about";
import RevolutionaryFeatures from "./RevolutionaryFeatures/revolutionaryFeatures";
import OpenAuditAction from "./OpenAuditAction/OpenAuditAction";
import Research from "./research/research";
import Contact from "./contact/contact";
import SectionHeading from "@/components/common/SectionHeading";

const sections = [
  { id: "hero", title: "Hero", component: Hero },
  { id: "features", title: "Revolutionary Features", component: RevolutionaryFeatures },
  { id: "open-audit-action", title: "Open Audit Action", component: OpenAuditAction },
  { id: "research-section", title: "Research", component: Research },
  { id: "pricing", title: "Pricing", component: PricingSection },
  { id: "contact", title: "Contact", component: Contact },
  { id: "about", title: "About", component: About },
];

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
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-2">
        <ul className="flex justify-center space-x-4">
          {sections.map((section) => (
            <li key={section.id}>
              <Link href={`#${section.id}`} className="text-muted-foreground hover:text-foreground transition-colors">
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {sections.map((section) => {
        const SectionComponent = section.component;
        return <SectionComponent key={section.id} id={section.id} />;
      })}
    </>
  );
}
