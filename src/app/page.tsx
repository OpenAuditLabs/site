import {
  HeroSection,
  FeaturePills,
  FeatureCards,
  WorkingProcess,
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
      <FeaturePills />
      <FeatureCards />
      <PortfolioStats />
      <AuditProcess />
      <PricingSection />
      <TeamMemberSection />
      <JoinMission />
      <LatestBlogSection />
      <WorkingProcess />
      <TrustedLeadingProtocols />
      <ReadyToSecure />
    </>
  );
}
