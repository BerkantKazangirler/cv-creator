import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";
import type { MouseEvent } from "react";

interface languageProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const LanguagesSection = ({ pageRef }: languageProps) => {
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

  // Progress click logic is now inlined where the slider UI is rendered.

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
        className="w-full text-double-primary-black uppercase font-rubik font-medium text-xl border-b-3 border-double-primary-black bg-transparent focus:outline-none"
      />
      <div className="flex flex-col">
        {detailData?.languages?.languages?.map((data, index) => (
          <div
            key={index}
            className={classNames("p-1 w-full flex flex-row justify-between", {
              "border-b border-opacity-30 border-dashed py-1 border-double-about":
                index - 1,
            })}
          >
            <div
              className={classNames("flex w-full py-1 gap-1", {
                "flex-col": languagesStyles?.showSlider,
                "flex-row justify-between items-center":
                  !languagesStyles?.showSlider,
              })}
            >
              <span className="text-sm w-fit font-medium text-double-primary-black leading-3 font-inter">
                {data.Language}
              </span>
              {languagesStyles?.showProficiency && (
                <span className="text-2sm text-double-about leading-3 font-inter">
                  {data.Level}
                </span>
              )}
            </div>
            {languagesStyles?.showSlider && (
              <div className="flex flex-row my-auto gap-1">
                {languagesStyles?.sliderStyle === "dots" ? (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        onClick={() => changeLevel(i + 1, data.Language)}
                        className={classNames(
                          "rounded-full size-4 cursor-pointer",
                          {
                            "bg-double-main-blue":
                              i < (levels[data.Level] ?? 0),
                            "bg-double-grey": i >= (levels[data.Level] ?? 0),
                          }
                        )}
                      ></div>
                    ))}
                  </>
                ) : (
                  languagesStyles?.sliderStyle === "slider" && (
                    <div
                      className="w-32 cursor-pointer"
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
                      <div className="w-full bg-slate-200 rounded-full h-3.5">
                        <div
                          className="bg-double-main-blue h-3.5 rounded-full"
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
