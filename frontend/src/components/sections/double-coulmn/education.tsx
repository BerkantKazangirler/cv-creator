import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";
import { FaCalendarAlt } from "react-icons/fa";

interface educationProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const EducationSection = ({ pageRef }: educationProps) => {
  const { detailData, selectedArea, setSelectedArea } = useDataContext();
  const { educationGlobalStyles, setEducationGlobalStyles } =
    useStylesContext();

  return (
    <div
      ref={pageRef}
      onClick={() => setSelectedArea("education")}
      className={classNames(
        "flex transition-all duration-500 cursor-pointer border border-dashed p-1 flex-col",
        {
          "border-black rounded-md": selectedArea === "education",
          "border-transparent": selectedArea !== "education",
        }
      )}
    >
      <input
        type="text"
        readOnly={selectedArea !== "education"}
        value={educationGlobalStyles  ?.title}
        maxLength={20}
        onChange={(e) =>
          setEducationGlobalStyles({
            ...educationGlobalStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-full text-double-primary-black uppercase font-rubik font-medium text-xl border-b-3 border-double-primary-black bg-transparent focus:outline-none",
          {
            "text-opacity-50": selectedArea === "education",
          }
        )}
      />
      <div className="flex flex-col">
        {detailData?.education?.map((data, index) => (
          <div
            className={classNames("flex flex-col", {
              "border-b border-opacity-30 border-dashed py-1 border-double-about":
                index - 1,
            })}
            key={index}
          >
            <span className="text-lg font-rubik leading-6 text-double-primary-black">
              {data.degree}
            </span>
            <span className="text-sm text-double-main-blue font-inter font-medium">
              {data.university}
            </span>
            <div className="flex flex-row gap-1">
              <FaCalendarAlt className="text-double-about text-xs my-auto" />
              <span className="font-inter text-xs text-double-about">
                {data.durationParsed.start.month +
                  "/" +
                  data.durationParsed.start.year +
                  " - " +
                  data.durationParsed.end.month +
                  "/" +
                  data.durationParsed.end.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
