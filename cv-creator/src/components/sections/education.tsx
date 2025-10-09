import { useDataContext } from "@/contexts/dataContext";
import classNames from "classnames";
import { FaCalendarAlt } from "react-icons/fa";

export const EducationSection = () => {
  const { detailData } = useDataContext();

  return (
    <div className="flex flex-col">
      <span className="text-double-primary-black font-rubik uppercase font-medium text-xl border-b-3 border-double-primary-black w-full">
        education
      </span>
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
