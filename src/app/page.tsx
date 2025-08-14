import {
  HeroSection,
  PortfolioStats,
  JoinMission,
  TrustedLeadingProtocols,
  PricingSection,
  AuditProcess,
  LatestBlogSection,
  ReadyToSecure,
  TeamMemberSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioStats />
      <PricingSection />
      <AuditProcess />
      <ReadyToSecure />
      <TrustedLeadingProtocols />
      <LatestBlogSection />
      <TeamMemberSection />
      <JoinMission />
    </>
  );
}
