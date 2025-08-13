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
import TeamMemberSection from "@/components/sections/TeamMemberSection";

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
      <TeamMemberSection/>
      <JoinMission />
    </>
  );
}
