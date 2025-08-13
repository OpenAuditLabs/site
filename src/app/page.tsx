import {
  HeroSection,
  PortfolioStats,
  JoinMission,
  TrustedLeadingProtocols,
  PricingSection,
} from "@/components/sections";
import ReadyToSecure from "@/components/sections/ReadyToSecure";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioStats />
      <PricingSection/>
      <ReadyToSecure />
      <TrustedLeadingProtocols />
      <JoinMission />
    </>
  );
}
