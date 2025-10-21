import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface skillsProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const SkillsSectionSingle = ({ pageRef }: skillsProps) => {
  const { skillsData, setSelectedArea, selectedArea, load } = useDataContext();
  const { skillsStyles, setSkillsStyles } = useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("skills") : null)}
      className={classNames(
        "flex transition-all duration-500 h-fit p-4 flex-col bg-gray-50 rounded-lg",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-blue-600": selectedArea === "skills",
          "border-transparent": selectedArea !== "skills",
        }
      )}
    >
      <input
        type="text"
        readOnly={selectedArea !== "skills" || !load}
        value={load ? skillsStyles?.title : "Skills"}
        maxLength={30}
        onChange={(e) =>
          setSkillsStyles({
            ...skillsStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-full text-gray-900 transition-all font-bold text-2xl mb-4 border-b-2 border-blue-600 bg-transparent focus:outline-none pb-2",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "skills",
          }
        )}
      />
      <div className="flex flex-wrap gap-2">
        {load ? (
          skillsData?.map((data, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
            >
              {data.skillName}
              {data.endorsementsCount > 0 && (
                <span className="ml-2 text-xs text-blue-600">
                  {data.endorsementsCount}
                </span>
              )}
            </span>
          ))
        ) : (
          <>
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
              Skill 1
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
              Skill 2
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
              Skill 3
            </span>
          </>
        )}
      </div>
    </div>
  );
};
