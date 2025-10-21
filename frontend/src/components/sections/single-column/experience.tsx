import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface experienceProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const ExperienceSectionSingle = ({ pageRef }: experienceProps) => {
  const { experienceData, selectedArea, setSelectedArea, load } =
    useDataContext();
  const { experienceGlobalStyles, setExperienceGlobalStyles } =
    useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("experience") : null)}
      className={classNames(
        "flex transition-all duration-500 p-4 flex-col bg-white rounded-lg",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-blue-600": selectedArea === "experience",
          "border-transparent": selectedArea !== "experience",
        }
      )}
    >
      <input
        type="text"
        readOnly={selectedArea !== "experience" || !load}
        value={load ? experienceGlobalStyles?.title : "Work Experience"}
        maxLength={30}
        onChange={(e) =>
          setExperienceGlobalStyles({
            ...experienceGlobalStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-full text-gray-900 font-bold text-2xl mb-4 border-b-2 border-blue-600 bg-transparent focus:outline-none pb-2",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "experience",
          }
        )}
      />
      <div className="flex flex-col gap-6">
        {load ? (
          experienceData?.map((data, index) => (
            <div
              key={index}
              className="relative pl-6 border-l-2 border-blue-300"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <h3 className="text-lg font-bold text-gray-900">
                {data.companyName}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {data.title} | {data.location || "Remote"}
              </p>
              <p className="text-xs text-gray-500 mb-2">
                {data.durationParsed.start.month}/
                {data.durationParsed.start.year} -{" "}
                {data.durationParsed.present
                  ? "Present"
                  : `${data.durationParsed.end.month}/${data.durationParsed.end.year}`}
              </p>
              {data.isMultiPositions &&
                data.positions?.map((position, posIndex) => (
                  <div key={posIndex} className="mb-3 ml-4">
                    <h4 className="text-base font-semibold text-gray-800">
                      {position.title}
                    </h4>
                    <p className="text-xs text-gray-500 mb-1">
                      {position.durationParsed.start.month}/
                      {position.durationParsed.start.year} -{" "}
                      {position.durationParsed.present
                        ? "Present"
                        : `${position.durationParsed.end.month}/${position.durationParsed.end.year}`}
                    </p>
                    {position.description && (
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {position.description}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          ))
        ) : (
          <div className="relative pl-6 border-l-2 border-blue-300">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
            <h3 className="text-lg font-bold text-gray-900">Company Name</h3>
            <p className="text-sm text-gray-600 mb-2">Job Title | Location</p>
            <p className="text-xs text-gray-500">Date Range</p>
          </div>
        )}
      </div>
    </div>
  );
};
