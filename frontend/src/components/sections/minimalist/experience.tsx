import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface experienceProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const ExperienceSectionMinimalist = ({ pageRef }: experienceProps) => {
  const { experienceData, selectedArea, setSelectedArea, load } =
    useDataContext();
  const { experienceGlobalStyles, setExperienceGlobalStyles } =
    useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("experience") : null)}
      className={classNames(
        "flex transition-all duration-500 py-6 px-2 flex-col border-t border-gray-200",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-black": selectedArea === "experience",
          "border-transparent border-t-gray-200": selectedArea !== "experience",
        }
      )}
    >
      <input
        type="text"
        readOnly={selectedArea !== "experience" || !load}
        value={load ? experienceGlobalStyles?.title : "Experience"}
        maxLength={30}
        onChange={(e) =>
          setExperienceGlobalStyles({
            ...experienceGlobalStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-fit text-black font-light text-xs uppercase tracking-widest mb-6 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "experience",
          }
        )}
      />
      <div className="flex flex-col gap-6">
        {load ? (
          experienceData?.map((data, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex-1">
                <h3 className="text-base font-normal text-black">
                  {data.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{data.companyName}</p>
                {data.isMultiPositions &&
                  data.positions?.map((position, posIndex) => (
                    <div key={posIndex} className="mt-2 ml-4">
                      <h4 className="text-sm font-normal text-black">
                        {position.title}
                      </h4>
                      {position.description && (
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {position.description}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
              <div className="flex flex-col items-end text-right text-xs text-gray-500 ml-8">
                <span>
                  {data.durationParsed.start.month}/
                  {data.durationParsed.start.year}
                </span>
                <span>—</span>
                <span>
                  {data.durationParsed.present
                    ? "Present"
                    : `${data.durationParsed.end.month}/${data.durationParsed.end.year}`}
                </span>
                <span className="mt-2">{data.location || "Remote"}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-between">
            <div>
              <h3 className="text-base font-normal text-black">Job Title</h3>
              <p className="text-sm text-gray-600 mt-1">Company Name</p>
            </div>
            <div className="text-xs text-gray-500 text-right">
              <p>01/2020 — Present</p>
              <p className="mt-2">Location</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
