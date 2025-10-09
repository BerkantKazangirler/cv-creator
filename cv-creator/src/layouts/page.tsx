import {
  CertificationSection,
  EducationSection,
  ExperienceSection,
  HeaderSection,
  LanguagesSection,
  SkillsSection,
  SummarySection,
} from "@/components";

export const PageLayout = () => {
  return (
    <div className="bg-white relative p-27 w-940 h-full flex flex-col">
      <HeaderSection />
      <div className="grid grid-cols-[1.3fr_1fr] gap-12">
        <div className="flex flex-col gap-3">
          <SummarySection />
          <ExperienceSection />
          <SkillsSection />
        </div>
        <div className="flex flex-col gap-3">
          <LanguagesSection />
          <CertificationSection />
          <EducationSection />
        </div>
      </div>
      {/* <span className="absolute right-0">asd</span> */}
    </div>
  );
};
