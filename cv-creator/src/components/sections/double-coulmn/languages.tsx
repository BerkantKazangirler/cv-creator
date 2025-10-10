import { useDataContext } from "@/contexts";
import classNames from "classnames";

interface languageProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const LanguagesSection = ({ pageRef }: languageProps) => {
  const { detailData, setSelectedArea, selectedArea, setDetailData } =
    useDataContext();

  const levels: Record<string, number> = {
    "Elementary proficiency": 1,
    "Limited working proficiency": 2,
    "Professional working proficiency": 3,
    "Full professional proficiency": 4,
    "Native or bilingual proficiency": 5,
  };

  function changeLevel(level: number, languageIndex: string) {
    const newDetailData = { ...detailData };
    if (!newDetailData?.languages) return;
    const langIndex = newDetailData.languages.languages.findIndex(
      (lang) => lang.Language === languageIndex
    );
    const levelKey = Object.keys(levels).find(
      (key) => levels[key] === level + 1
    );
    if (!levelKey) return;
    newDetailData.languages.languages[langIndex].Level = levelKey;
    setDetailData(newDetailData);
  }

  return (
    <div
      className={classNames(
        "flex transition-all duration-500 cursor-pointer border border-dashed p-1 flex-col",
        {
          "border-black rounded-md": selectedArea === "languages",
          "border-transparent": selectedArea !== "languages",
        }
      )}
      ref={pageRef}
      onClick={() => setSelectedArea("languages")}
    >
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
                  onClick={() => changeLevel(i, data.Language)}
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
