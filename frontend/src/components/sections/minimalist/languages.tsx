import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface languageProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const LanguagesSectionMinimalist = ({ pageRef }: languageProps) => {
  const { detailData, setSelectedArea, selectedArea } = useDataContext();
  const { languagesStyles, setLanguagesStyles } = useStylesContext();

  return (
    <div
      className={classNames(
        "flex transition-all duration-500 cursor-pointer py-6 px-2 flex-col border-t border-gray-200",
        {
          "border-2 border-dashed": true,
          "border-black": selectedArea === "languages",
          "border-transparent border-t-gray-200": selectedArea !== "languages",
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
        className="w-fit text-black font-light text-xs uppercase tracking-widest mb-4 bg-transparent focus:outline-none"
      />
      <div className="text-sm text-gray-700 leading-relaxed">
        {detailData?.languages?.languages?.map((data, index) => (
          <span key={index}>
            {data.Language}
            {index < (detailData?.languages?.languages?.length || 0) - 1 &&
              " · "}
          </span>
        ))}
      </div>
    </div>
  );
};
