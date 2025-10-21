import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface educationProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const EducationSectionSingle = ({ pageRef }: educationProps) => {
  const { detailData, selectedArea, setSelectedArea, load } = useDataContext();
  const { educationGlobalStyles, setEducationGlobalStyles } =
    useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("education") : null)}
      className={classNames(
        "flex transition-all duration-500 p-4 flex-col h-fit bg-gray-50 rounded-lg",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-blue-600": selectedArea === "education",
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
          "w-full text-gray-900 font-bold text-2xl mb-4 border-b-2 border-blue-600 bg-transparent focus:outline-none pb-2",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "education",
          }
        )}
      />
      <div className="flex flex-col gap-4">
        {load ? (
          detailData?.education?.map((data, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-base font-bold text-gray-900">
                {data.degree}
              </h4>
              <p className="text-sm text-blue-600 font-medium">
                {data.university}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {data.durationParsed.start.month}/
                {data.durationParsed.start.year} -{" "}
                {data.durationParsed.end.month}/{data.durationParsed.end.year}
              </p>
            </div>
          ))
        ) : (
          <div className="flex flex-col">
            <h4 className="text-base font-bold text-gray-900">Degree Name</h4>
            <p className="text-sm text-blue-600 font-medium">University Name</p>
            <p className="text-xs text-gray-500 mt-1">01/2020 - 12/2024</p>
          </div>
        )}
      </div>
    </div>
  );
};
