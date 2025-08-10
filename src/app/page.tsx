import { AboutMeSection } from "@/components/home/AboutMeSection";
import { CertificateSection } from "@/components/home/CertificateSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import Introduction from "@/components/home/Introduction";
import { QuoteSection } from "@/components/home/QuoteSection";
import SkillsSection from "@/components/home/SkillsSection";

export default function Home() {
  return (
    <>
      <Introduction />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificateSection />
      <QuoteSection />
    </>
  );
}
