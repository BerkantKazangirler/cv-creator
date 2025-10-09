import { useDataContext } from "@/contexts/dataContext";
import classNames from "classnames";

export const SkillsSection = () => {
  const { skillsData } = useDataContext();
  return (
    <div className="flex flex-col">
      <span className="text-double-primary-black font-rubik uppercase font-medium text-xl border-b-3 border-double-primary-black w-full">
        skills
      </span>
      <div className="flex flex-col">
        {skillsData.map((data, index) => (
          <div
            className={classNames("flex flex-row justify-between", {
              "border-b border-opacity-30 border-dashed py-1 border-double-about":
                index - 1,
            })}
            key={index}
          >
            <span className="text-lg font-rubik leading-6 text-double-primary-black">
              {data.skillName}
            </span>
            <span className="text-sm text-double-main-blue font-inter font-medium">
              {data.endorsementsCount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
