import {
  HeroSection,
  PortfolioStats,
  JoinMission,
  TrustedLeadingProtocols,
  PricingSection,
  AuditProcess,
  LatestBlogSection,
} from "@/components/sections";
import ReadyToSecure from "@/components/sections/ReadyToSecure";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioStats />
      <PricingSection/>
      <AuditProcess />
      <ReadyToSecure />
      <TrustedLeadingProtocols />
      <LatestBlogSection/>
      <JoinMission />
    </>
  );
}
