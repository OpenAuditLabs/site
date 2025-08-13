import {
  HeroSection,
  PortfolioStats,
  JoinMission,
  TrustedLeadingProtocols,
  PricingSection,
  AuditProcess,
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
      <JoinMission />
    </>
  );
}
