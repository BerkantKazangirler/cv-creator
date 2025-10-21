import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface experienceProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const ExperienceSectionCreative = ({ pageRef }: experienceProps) => {
  const { experienceData, selectedArea, setSelectedArea, load } =
    useDataContext();
  const { experienceGlobalStyles, setExperienceGlobalStyles } =
    useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("experience") : null)}
      className={classNames(
        "flex transition-all duration-500 h-fit p-5 flex-col rounded-2xl bg-white",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-purple-600": selectedArea === "experience",
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
          "w-fit text-purple-900 font-bold text-xl mb-4 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "experience",
          }
        )}
      />
      <div className="flex flex-col gap-4">
        {load ? (
          experienceData?.map((data, index) => (
            <div
              key={index}
              className="relative pl-6 border-l-4 border-gradient-to-b from-purple-500 to-pink-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg"></div>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl">
                <h3 className="text-lg font-bold text-purple-900">
                  {data.title}
                </h3>
                <p className="text-base text-pink-700 font-semibold">
                  {data.companyName}
                </p>
                <div className="flex gap-3 mt-2 text-xs text-gray-600">
                  <span>
                    {data.durationParsed.start.month}/
                    {data.durationParsed.start.year} -{" "}
                    {data.durationParsed.present
                      ? "Present"
                      : `${data.durationParsed.end.month}/${data.durationParsed.end.year}`}
                  </span>
                  <span>•</span>
                  <span>{data.location || "Remote"}</span>
                </div>
                {data.isMultiPositions &&
                  data.positions?.map((position, posIndex) => (
                    <div key={posIndex} className="mt-3 ml-2">
                      <h4 className="text-sm font-semibold text-purple-800">
                        {position.title}
                      </h4>
                      {position.description && (
                        <p className="text-xs text-gray-700 mt-1">
                          {position.description}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div className="relative pl-6">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl">
              <h3 className="text-lg font-bold text-purple-900">Job Title</h3>
              <p className="text-base text-pink-700">Company Name</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
