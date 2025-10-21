import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface experienceProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const ExperienceSectionSidebar = ({ pageRef }: experienceProps) => {
  const { experienceData, selectedArea, setSelectedArea, load } =
    useDataContext();
  const { experienceGlobalStyles, setExperienceGlobalStyles } =
    useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("experience") : null)}
      className={classNames(
        "flex transition-all duration-500 p-5 flex-col bg-white",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-slate-700": selectedArea === "experience",
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
          "w-full text-slate-900 font-bold text-xl mb-4 border-b-2 border-slate-700 pb-2 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "experience",
          }
        )}
      />
      <div className="flex flex-col gap-5">
        {load ? (
          experienceData?.map((data, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <h3 className="text-base font-bold text-slate-900">
                  {data.title}
                </h3>
                <span className="text-xs text-gray-500">
                  {data.durationParsed.start.month}/
                  {data.durationParsed.start.year} -{" "}
                  {data.durationParsed.present
                    ? "Present"
                    : `${data.durationParsed.end.month}/${data.durationParsed.end.year}`}
                </span>
              </div>
              <p className="text-sm text-slate-700 font-semibold">
                {data.companyName} • {data.location || "Remote"}
              </p>
              {data.isMultiPositions &&
                data.positions?.map((position, posIndex) => (
                  <div key={posIndex} className="mt-2 ml-3">
                    <h4 className="text-sm font-semibold text-slate-800">
                      {position.title}
                    </h4>
                    {position.description && (
                      <p className="text-xs text-gray-600 mt-1">
                        {position.description}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          ))
        ) : (
          <div>
            <h3 className="text-base font-bold text-slate-900">Job Title</h3>
            <p className="text-sm text-slate-700">Company Name • Location</p>
          </div>
        )}
      </div>
    </div>
  );
};
