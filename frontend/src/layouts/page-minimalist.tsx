import {
  CertificationSectionMinimalist,
  EducationSectionMinimalist,
  ExperienceSectionMinimalist,
  HeaderSectionMinimalist,
  LanguagesSectionMinimalist,
  SkillsSectionMinimalist,
  SummarySectionMinimalist,
} from "@/components/sections/minimalist";
import { useDataContext } from "@/contexts/data";
import { useEffect, useRef } from "react";

export const PageLayoutMinimalist = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { setSelectedArea } = useDataContext();

  useEffect(() => {
    const outsideClickListener = (e: Event) => {
      const clickInside =
        pageRef.current && e.composedPath().includes(pageRef.current);
      if (!clickInside) setSelectedArea("");
    };

    const wrapper = wrapperRef.current;
    wrapper?.addEventListener("click", outsideClickListener);

    return () => {
      wrapper?.removeEventListener("click", outsideClickListener);
    };
  }, [setSelectedArea]);

  return (
    <div
      ref={wrapperRef}
      className="bg-white relative px-16 py-12 w-940 h-full flex flex-col"
    >
      <HeaderSectionMinimalist pageRef={pageRef} />
      <SummarySectionMinimalist pageRef={pageRef} />
      <ExperienceSectionMinimalist pageRef={pageRef} />
      <SkillsSectionMinimalist pageRef={pageRef} />
      <LanguagesSectionMinimalist pageRef={pageRef} />
      <EducationSectionMinimalist pageRef={pageRef} />
      <CertificationSectionMinimalist pageRef={pageRef} />
    </div>
  );
};
