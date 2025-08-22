import {
  HeroSection,
  FeaturePills,
  FeatureCards,
  ServiceSection,
  FeaturedReports,
  TrustedByTeamsSection,
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
      <TrustedByTeamsSection />
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
