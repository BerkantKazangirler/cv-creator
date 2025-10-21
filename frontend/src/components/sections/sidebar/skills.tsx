import { useDataContext } from "@/contexts";
import classNames from "classnames";

interface skillsProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const SkillsSectionSidebar = ({ pageRef }: skillsProps) => {
  const { skillsData, setSelectedArea, selectedArea, load } = useDataContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("skills") : null)}
      className={classNames(
        "flex transition-all duration-500 p-4 flex-col bg-slate-700",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-white": selectedArea === "skills",
          "border-transparent": selectedArea !== "skills",
        }
      )}
    >
      <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3 border-b border-slate-500 pb-2">
        Skills
      </h3>
      <div className="flex flex-col gap-2">
        {load ? (
          skillsData?.map((data, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></div>
              <span className="text-sm text-slate-200">{data.skillName}</span>
            </div>
          ))
        ) : (
          <>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              <span className="text-sm text-slate-200">Skill 1</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              <span className="text-sm text-slate-200">Skill 2</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
