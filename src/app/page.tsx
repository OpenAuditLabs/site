import {
  HeroSection,
  PortfolioStats,
  JoinMission,
} from "@/components/sections";
import ReadyToSecure from "@/components/sections/ReadyToSecure";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioStats />
      <ReadyToSecure />
      <JoinMission />
    </>
  );
}
