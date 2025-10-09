import { useDataContext } from "@/contexts/dataContext";
import classNames from "classnames";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const ExperienceSection = () => {
  const { experienceData } = useDataContext();

  return (
    <div className="flex flex-col">
      <span className="text-double-primary-black font-rubik uppercase font-medium text-xl border-b-3 border-double-primary-black w-full">
        experience
      </span>
      <div className="flex flex-col">
        {experienceData?.map((data, index) => (
          <>
            {data.isMultiPositions ? (
              <>
                {data.positions?.map((positionData, posIndex) => (
                  <div
                    key={posIndex}
                    className={classNames("flex flex-col", {
                      "border-b border-opacity-30 border-dashed border-double-about":
                        posIndex !== (data.positions?.length || 0) - 1 ||
                        index !== (experienceData?.length || 0) - 1,
                    })}
                  >
                    <span className="text-double-primary-black font-rubik text-lg">
                      {positionData.title}
                    </span>
                    <span className="text-double-main-blue w-full font-rubik text-sm">
                      {positionData.companyName}
                    </span>
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-row gap-1">
                        <FaCalendarAlt className="text-double-about text-xs my-auto" />
                        <span className="text-xs text-double-about font-inter">
                          {positionData.durationParsed.start.month +
                            "/" +
                            positionData.durationParsed.start.year +
                            " - " +
                            (positionData.durationParsed.present
                              ? "Present"
                              : positionData.durationParsed.end.month +
                                "/" +
                                positionData.durationParsed.end.year)}
                        </span>
                      </div>
                      <div className="flex flex-row gap-1">
                        <FaLocationDot className="text-double-about text-xs my-auto" />
                        <span
                          className={classNames("text-xs font-inter", {
                            "text-double-about": positionData.location,
                            "opacity-50": !positionData.location,
                          })}
                        >
                          {positionData.location
                            ? positionData.location
                            : "Location"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div
                className={classNames("flex flex-col", {
                  "border-b border-opacity-30 border-dashed border-double-about":
                    index !== (experienceData?.length || 0) - 1,
                })}
              >
                <span className="text-double-primary-black font-rubik text-lg">
                  {data.title}
                </span>
                <span className="text-double-main-blue w-full font-rubik text-sm">
                  {data.companyName}
                </span>
                <div className="flex flex-row gap-3">
                  <div className="flex flex-row gap-1">
                    <FaCalendarAlt className="text-double-about text-xs my-auto" />
                    <span className="text-xs text-double-about font-inter">
                      {data.durationParsed.start.month +
                        "/" +
                        data.durationParsed.start.year +
                        " - " +
                        (data.durationParsed.present
                          ? "Present"
                          : data.durationParsed.end.month +
                            "/" +
                            data.durationParsed.end.year)}
                    </span>
                  </div>
                  <div className="flex flex-row gap-1">
                    <FaLocationDot className="text-double-about text-xs my-auto" />
                    <span
                      className={classNames("text-xs font-inter", {
                        "text-double-about": data.location,
                        "opacity-50": !data.location,
                      })}
                    >
                      {data.location ? data.location : "Location"}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
