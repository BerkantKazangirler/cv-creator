import {
  CertificationSectionCreative,
  EducationSectionCreative,
  ExperienceSectionCreative,
  HeaderSectionCreative,
  LanguagesSectionCreative,
  SkillsSectionCreative,
  SummarySectionCreative,
} from "@/components/sections/creative";
import { useDataContext } from "@/contexts/data";
import { useEffect, useRef } from "react";

export const PageLayoutCreative = () => {
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
      className="bg-gradient-to-br from-gray-50 to-gray-100 relative w-940 h-full flex flex-col overflow-hidden"
    >
      <HeaderSectionCreative pageRef={pageRef} />
      <div className="flex flex-col gap-4 p-6">
        <SummarySectionCreative pageRef={pageRef} />
        <ExperienceSectionCreative pageRef={pageRef} />
        <div className="grid grid-cols-2 gap-4">
          <SkillsSectionCreative pageRef={pageRef} />
          <LanguagesSectionCreative pageRef={pageRef} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <EducationSectionCreative pageRef={pageRef} />
          <CertificationSectionCreative pageRef={pageRef} />
        </div>
      </div>
    </div>
  );
};
