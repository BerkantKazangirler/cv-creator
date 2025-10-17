import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface skillsProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const SkillsSection = ({ pageRef }: skillsProps) => {
  const { skillsData, setSelectedArea, selectedArea } = useDataContext();
  const { skillsStyles, setSkillsStyles } = useStylesContext();

  return (
    <div
      ref={pageRef}
      onClick={() => setSelectedArea("skills")}
      className={classNames(
        "flex transition-all duration-500 cursor-pointer border border-dashed p-1 flex-col",
        {
          "border-black rounded-md": selectedArea === "skills",
          "border-transparent": selectedArea !== "skills",
        }
      )}
    >
      <input
        type="text"
        readOnly={selectedArea !== "skills"}
        value={skillsStyles?.title}
        maxLength={30}
        onChange={(e) =>
          setSkillsStyles({
            ...skillsStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-full text-double-primary-black transition-all uppercase font-rubik font-medium text-xl border-b-3 border-double-primary-black bg-transparent focus:outline-none",
          {
            "text-opacity-50": selectedArea === "skills",
          }
        )}
      />
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
