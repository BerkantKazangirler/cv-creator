import {
  CertificationSectionSidebar,
  EducationSectionSidebar,
  ExperienceSectionSidebar,
  HeaderSectionSidebar,
  LanguagesSectionSidebar,
  SkillsSectionSidebar,
  SummarySectionSidebar,
} from "@/components/sections/sidebar";
import { useDataContext } from "@/contexts/data";
import { useEffect, useRef } from "react";

export const PageLayoutSidebar = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { setSelectedArea, overviewData, load } = useDataContext();

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
      className="bg-white relative w-940 h-full flex flex-row overflow-hidden"
    >
      {/* Left Sidebar - Dark */}
      <div className="w-80 bg-slate-800 flex flex-col">
        <HeaderSectionSidebar pageRef={pageRef} />
        <div className="flex flex-col p-4 gap-4 text-white">
          <div className="border-t border-slate-600 pt-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">
              Contact
            </h3>
            <div className="text-xs text-slate-300 space-y-1">
              <p>{load ? overviewData?.location?.fullLocation : "Location"}</p>
              <p className="break-all">
                linkedin.com/in/
                {load ? overviewData?.publicIdentifier : "username"}
              </p>
            </div>
          </div>
          <SkillsSectionSidebar pageRef={pageRef} />
          <LanguagesSectionSidebar pageRef={pageRef} />
        </div>
      </div>

      {/* Right Main Content - Light */}
      <div className="flex-1 bg-gray-50 flex flex-col overflow-auto">
        <SummarySectionSidebar pageRef={pageRef} />
        <ExperienceSectionSidebar pageRef={pageRef} />
        <EducationSectionSidebar pageRef={pageRef} />
        <CertificationSectionSidebar pageRef={pageRef} />
      </div>
    </div>
  );
};
