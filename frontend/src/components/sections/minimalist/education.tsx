import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface educationProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const EducationSectionMinimalist = ({ pageRef }: educationProps) => {
  const { detailData, selectedArea, setSelectedArea, load } = useDataContext();
  const { educationGlobalStyles, setEducationGlobalStyles } =
    useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("education") : null)}
      className={classNames(
        "flex transition-all duration-500 py-6 px-2 flex-col border-t border-gray-200",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-black": selectedArea === "education",
          "border-transparent border-t-gray-200": selectedArea !== "education",
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
          "w-fit text-black font-light text-xs uppercase tracking-widest mb-4 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "education",
          }
        )}
      />
      <div className="flex flex-col gap-3">
        {load ? (
          detailData?.education?.map((data, index) => (
            <div key={index} className="flex justify-between">
              <div>
                <h4 className="text-sm text-black">{data.degree}</h4>
                <p className="text-xs text-gray-600 mt-1">{data.university}</p>
              </div>
              <div className="text-xs text-gray-500 text-right ml-8">
                {data.durationParsed.start.month}/
                {data.durationParsed.start.year} —{" "}
                {data.durationParsed.end.month}/{data.durationParsed.end.year}
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-between">
            <div>
              <h4 className="text-sm text-black">Degree Name</h4>
              <p className="text-xs text-gray-600 mt-1">University</p>
            </div>
            <div className="text-xs text-gray-500">01/2020 — 12/2024</div>
          </div>
        )}
      </div>
    </div>
  );
};
