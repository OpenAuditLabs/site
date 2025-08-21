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
  OpenSourceSection,
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
      <OpenSourceSection />
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
