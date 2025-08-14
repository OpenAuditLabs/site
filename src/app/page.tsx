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
      <AuditProcess />
      <PricingSection />
      <TeamMemberSection />
      <JoinMission />
      <LatestBlogSection />
      <TrustedLeadingProtocols />
      <ReadyToSecure />
    </>
  );
}
