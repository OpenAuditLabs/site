import {
  HeroSection,
  FeaturePills,
  FeatureCards,
  ServiceSection,
  FeaturedReports,
  WorkingProcess,
  PortfolioStats,
  JoinMission,
  TrustedLeadingProtocols,
  MethodologySection,
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
      <ServiceSection />
      <MethodologySection />
      <FeaturedReports />
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
