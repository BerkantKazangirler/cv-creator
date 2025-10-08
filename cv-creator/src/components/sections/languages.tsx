import { useDataContext } from "@/contexts/dataContext";
import classNames from "classnames";

export const LanguagesSection = () => {
  const { detailData } = useDataContext();

  const levels: Record<string, number> = {
    "Elementary proficiency": 1,
    "Limited working proficiency": 2,
    "Professional working proficiency": 3,
    "Full professional proficiency": 4,
    "Native or bilingual proficiency": 5,
  };

  return (
    <div className="flex flex-col">
      <span className="text-double-primary-black font-rubik uppercase font-medium text-xl border-b-3 border-double-primary-black w-full">
        languages
      </span>
      <div className="flex flex-col">
        {detailData?.languages?.languages?.map((data, index) => (
          <div
            key={index}
            className={classNames("p-1 w-full flex flex-row justify-between", {
              "border-b border-opacity-30 border-dashed py-1 border-double-about":
                index - 1,
            })}
          >
            <div className="flex flex-col py-1 gap-1">
              <span className="text-sm w-fit font-medium text-double-primary-black leading-3 font-inter">
                {data.Language}
              </span>
              <span className="text-2sm text-double-about leading-3 font-inter">
                {data.Level}
              </span>
            </div>
            <div className="flex flex-row my-auto gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={classNames("rounded-full size-4", {
                    "bg-double-main-blue": i < (levels[data.Level] ?? 0),
                    "bg-double-grey": i >= (levels[data.Level] ?? 0),
                  })}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
