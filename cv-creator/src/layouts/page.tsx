import {
  CertificationSection,
  EducationSection,
  ExperienceSection,
  HeaderSection,
  LanguagesSection,
  SkillsSection,
  SummarySection,
} from "@/components";
import { useDataContext } from "@/contexts/dataContext";
import { useEffect, useRef } from "react";

export const PageLayout = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { setSelectedArea } = useDataContext();

  useEffect(() => {
    const outsideClickListener = (e: any) => {
      const clickInside = e.composedPath().includes(pageRef.current);
      if (!clickInside) setSelectedArea("");
    };

    const wrapper = wrapperRef.current;
    wrapper?.addEventListener("click", outsideClickListener);

    return () => {
      wrapper?.removeEventListener("click", outsideClickListener);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="bg-white gap-3 relative p-27 w-940 h-full flex flex-col"
    >
      <HeaderSection pageRef={pageRef} />
      <div className="grid grid-cols-[1.3fr_1fr] gap-12">
        <div className="flex flex-col gap-3">
          <SummarySection pageRef={pageRef} />
          <ExperienceSection pageRef={pageRef} />
          <SkillsSection pageRef={pageRef} />
        </div>
        <div className="flex flex-col gap-3">
          <LanguagesSection pageRef={pageRef} />
          <CertificationSection pageRef={pageRef} />
          <EducationSection pageRef={pageRef} />
        </div>
      </div>
      {/* <span className="absolute right-0">asd</span> */}
    </div>
  );
};
