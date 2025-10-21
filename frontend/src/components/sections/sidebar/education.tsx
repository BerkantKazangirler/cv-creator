import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface educationProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const EducationSectionSidebar = ({ pageRef }: educationProps) => {
  const { detailData, selectedArea, setSelectedArea, load } = useDataContext();
  const { educationGlobalStyles, setEducationGlobalStyles } =
    useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("education") : null)}
      className={classNames(
        "flex transition-all duration-500 p-5 flex-col bg-white",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-slate-700": selectedArea === "education",
          "border-transparent": selectedArea !== "education",
        }
      )}
    >
      <input
        type="text"
        readOnly={selectedArea !== "education" || !load}
        value={load ? educationGlobalStyles?.title : "Education"}
        maxLength={30}
        onChange={(e) =>
          setEducationGlobalStyles({
            ...educationGlobalStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-full text-slate-900 font-bold text-xl mb-4 border-b-2 border-slate-700 pb-2 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "education",
          }
        )}
      />
      <div className="flex flex-col gap-4">
        {load ? (
          detailData?.education?.map((data, index) => (
            <div key={index}>
              <h4 className="text-base font-bold text-slate-900">
                {data.degree}
              </h4>
              <p className="text-sm text-slate-700 font-semibold mt-1">
                {data.university}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {data.durationParsed.start.month}/
                {data.durationParsed.start.year} —{" "}
                {data.durationParsed.end.month}/{data.durationParsed.end.year}
              </p>
            </div>
          ))
        ) : (
          <div>
            <h4 className="text-base font-bold text-slate-900">Degree</h4>
            <p className="text-sm text-slate-700 font-semibold mt-1">
              University
            </p>
            <p className="text-xs text-gray-500 mt-1">01/2020 — 12/2024</p>
          </div>
        )}
      </div>
    </div>
  );
};
