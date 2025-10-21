import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface skillsProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const SkillsSectionCreative = ({ pageRef }: skillsProps) => {
  const { skillsData, setSelectedArea, selectedArea, load } = useDataContext();
  const { skillsStyles, setSkillsStyles } = useStylesContext();

  const colors = [
    "from-purple-500 to-purple-700",
    "from-pink-500 to-pink-700",
    "from-orange-500 to-orange-700",
    "from-red-500 to-red-700",
    "from-yellow-500 to-yellow-700",
  ];

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("skills") : null)}
      className={classNames(
        "flex transition-all duration-500 h-fit p-5 flex-col rounded-2xl bg-white",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-purple-600": selectedArea === "skills",
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
          "w-fit text-purple-900 font-bold text-xl mb-4 bg-transparent focus:outline-none",
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
              className={classNames(
                "bg-gradient-to-r text-white px-4 py-2 rounded-full text-sm font-bold shadow-md",
                colors[index % colors.length]
              )}
            >
              {data.skillName}
            </span>
          ))
        ) : (
          <>
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-bold">
              Skill 1
            </span>
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-4 py-2 rounded-full text-sm font-bold">
              Skill 2
            </span>
          </>
        )}
      </div>
    </div>
  );
};
