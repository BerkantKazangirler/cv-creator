import {
  CertificationSectionSingle,
  EducationSectionSingle,
  ExperienceSectionSingle,
  HeaderSectionSingle,
  LanguagesSectionSingle,
  SkillsSectionSingle,
  SummarySectionSingle,
} from "@/components/sections/single-column";
import { useDataContext } from "@/contexts/data";
import { useEffect, useRef } from "react";

export const PageLayoutSingle = () => {
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
      className="bg-white relative w-940 h-full flex flex-col overflow-hidden shadow-xl"
    >
      <HeaderSectionSingle pageRef={pageRef} />
      <div className="flex flex-col gap-4 p-8">
        <SummarySectionSingle pageRef={pageRef} />
        <ExperienceSectionSingle pageRef={pageRef} />
        <div className="grid grid-cols-2 gap-4">
          <SkillsSectionSingle pageRef={pageRef} />
          <LanguagesSectionSingle pageRef={pageRef} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <CertificationSectionSingle pageRef={pageRef} />
          <EducationSectionSingle pageRef={pageRef} />
        </div>
      </div>
    </div>
  );
};
