import { HeroSection } from "@/components/blocks/HeroSection";
import { ImpactStrip } from "@/components/blocks/ImpactStrip";
import { WhyRafSection } from "@/components/blocks/WhyRafSection";
import { ProgrammesPreview } from "@/components/blocks/ProgrammesPreview";
import { ClimateCulturePreview } from "@/components/blocks/ClimateCulturePreview";
import { FeaturedProjectTeaser } from "@/components/blocks/FeaturedProjectTeaser";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactStrip />
      <WhyRafSection />
      <ProgrammesPreview />
      <ClimateCulturePreview />
      <FeaturedProjectTeaser />
    </>
  );
}
