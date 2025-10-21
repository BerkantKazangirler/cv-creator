import { useDataContext } from "@/contexts";
import classNames from "classnames";
import type { MouseEvent } from "react";

interface languageProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const LanguagesSectionSidebar = ({ pageRef }: languageProps) => {
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
    const levelKey = Object.keys(levels).find((key) => levels[key] === level);
    if (!levelKey) return;
    newDetailData.languages.languages[langIndex].Level = levelKey;
    setDetailData(newDetailData);
  }

  return (
    <div
      className={classNames(
        "flex transition-all duration-500 cursor-pointer p-4 flex-col bg-slate-700",
        {
          "border-2 border-dashed": true,
          "border-white": selectedArea === "languages",
          "border-transparent": selectedArea !== "languages",
        }
      )}
      ref={pageRef}
      onClick={() => setSelectedArea("languages")}
    >
      <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3 border-b border-slate-500 pb-2">
        Languages
      </h3>
      <div className="flex flex-col gap-3">
        {detailData?.languages?.languages?.map((data, index) => (
          <div key={index}>
            <span className="text-sm font-semibold text-slate-200 block mb-1">
              {data.Language}
            </span>
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
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div
                  className="bg-slate-300 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((levels[data.Level] ?? 0) / 5) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
