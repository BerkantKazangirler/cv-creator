import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface educationProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const EducationSectionCreative = ({ pageRef }: educationProps) => {
  const { detailData, selectedArea, setSelectedArea, load } = useDataContext();
  const { educationGlobalStyles, setEducationGlobalStyles } =
    useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("education") : null)}
      className={classNames(
        "flex transition-all duration-500 h-fit p-5 flex-col rounded-2xl bg-white",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-purple-600": selectedArea === "education",
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
          "w-fit text-purple-900 font-bold text-xl mb-4 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "education",
          }
        )}
      />
      <div className="flex flex-col gap-3">
        {load ? (
          detailData?.education?.map((data, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl"
            >
              <h4 className="text-base font-bold text-purple-900">
                {data.degree}
              </h4>
              <p className="text-sm text-pink-700 font-semibold mt-1">
                {data.university}
              </p>
              <p className="text-xs text-gray-600 mt-2">
                {data.durationParsed.start.month}/
                {data.durationParsed.start.year} —{" "}
                {data.durationParsed.end.month}/{data.durationParsed.end.year}
              </p>
            </div>
          ))
        ) : (
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl">
            <h4 className="text-base font-bold text-purple-900">Degree</h4>
            <p className="text-sm text-pink-700 font-semibold mt-1">
              University
            </p>
            <p className="text-xs text-gray-600 mt-2">01/2020 — 12/2024</p>
          </div>
        )}
      </div>
    </div>
  );
};
