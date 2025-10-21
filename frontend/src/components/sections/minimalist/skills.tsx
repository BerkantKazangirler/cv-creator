import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface skillsProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const SkillsSectionMinimalist = ({ pageRef }: skillsProps) => {
  const { skillsData, setSelectedArea, selectedArea, load } = useDataContext();
  const { skillsStyles, setSkillsStyles } = useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("skills") : null)}
      className={classNames(
        "flex transition-all duration-500 py-6 px-2 flex-col border-t border-gray-200",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-black": selectedArea === "skills",
          "border-transparent border-t-gray-200": selectedArea !== "skills",
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
          "w-fit text-black font-light text-xs uppercase tracking-widest mb-4 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "skills",
          }
        )}
      />
      <div className="text-sm text-gray-700 leading-relaxed">
        {load ? (
          skillsData?.map((data, index) => (
            <span key={index}>
              {data.skillName}
              {index < skillsData.length - 1 && " · "}
            </span>
          ))
        ) : (
          <span>Skill 1 · Skill 2 · Skill 3</span>
        )}
      </div>
    </div>
  );
};
