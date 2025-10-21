import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";
import type { MouseEvent } from "react";

interface languageProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const LanguagesSectionSingle = ({ pageRef }: languageProps) => {
  const { detailData, setSelectedArea, selectedArea, setDetailData } =
    useDataContext();

  const { languagesStyles, setLanguagesStyles } = useStylesContext();

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
    const levelKey = Object.keys(levels).find((key) => levels[key] === level);
    if (!levelKey) return;
    newDetailData.languages.languages[langIndex].Level = levelKey;
    setDetailData(newDetailData);
  }

  return (
    <div
      className={classNames(
        "flex transition-all duration-500 h-fit cursor-pointer border-2 border-dashed p-4 flex-col bg-white rounded-lg",
        {
          "border-blue-600": selectedArea === "languages",
          "border-transparent": selectedArea !== "languages",
        }
      )}
      ref={pageRef}
      onClick={() => setSelectedArea("languages")}
    >
      <input
        type="text"
        readOnly={selectedArea !== "languages"}
        value={languagesStyles?.title}
        maxLength={20}
        onChange={(e) =>
          setLanguagesStyles({
            ...languagesStyles,
            title: e.target.value,
          })
        }
        className="w-full text-gray-900 font-bold text-2xl mb-4 border-b-2 border-blue-600 bg-transparent focus:outline-none pb-2"
      />
      <div className="flex flex-col gap-3">
        {detailData?.languages?.languages?.map((data, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <span className="text-base font-semibold text-gray-900">
                {data.Language}
              </span>
              {languagesStyles?.showProficiency && (
                <span className="text-xs text-gray-600">{data.Level}</span>
              )}
            </div>
            {languagesStyles?.showSlider && (
              <div className="flex flex-row gap-1">
                {languagesStyles?.sliderStyle === "dots" ? (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        onClick={() => changeLevel(i + 1, data.Language)}
                        className={classNames(
                          "rounded-full size-3 cursor-pointer transition-colors",
                          {
                            "bg-blue-600": i < (levels[data.Level] ?? 0),
                            "bg-gray-300": i >= (levels[data.Level] ?? 0),
                          }
                        )}
                      ></div>
                    ))}
                  </>
                ) : (
                  languagesStyles?.sliderStyle === "slider" && (
                    <div
                      className="w-full cursor-pointer"
                      onClick={(e: MouseEvent<HTMLDivElement>) => {
                        const target = e.currentTarget as HTMLElement;
                        const rect = target.getBoundingClientRect();
                        const x = (e as MouseEvent).clientX - rect.left;
                        const ratio = rect.width > 0 ? x / rect.width : 0;
                        let level = Math.ceil(ratio * 5);
                        if (level < 1) level = 1;
                        if (level > 5) level = 5;
                        changeLevel(level, data.Language);
                      }}
                    >
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${((levels[data.Level] ?? 0) / 5) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
