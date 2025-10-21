import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface summaryProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const SummarySectionSingle = ({ pageRef }: summaryProps) => {
  const { detailData, selectedArea, setSelectedArea, load } = useDataContext();
  const { summaryStyles, setSummaryStyles } = useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => setSelectedArea("summary")}
      className={classNames(
        "flex transition-all duration-500 h-fit p-4 flex-col bg-gray-50 rounded-lg",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-blue-600": selectedArea === "summary",
          "border-transparent": selectedArea !== "summary",
        }
      )}
    >
      <input
        type="text"
        readOnly={selectedArea !== "summary" || !load}
        value={load ? summaryStyles?.title : "Profile Summary"}
        maxLength={30}
        onChange={(e) =>
          setSummaryStyles({
            ...summaryStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-full text-gray-900 font-bold text-2xl mb-3 border-b-2 border-blue-600 bg-transparent focus:outline-none pb-2",
          {
            "cursor-not-allowed": !load,
            uppercase: summaryStyles.underline,
            italic: summaryStyles.italic,
            "text-center": summaryStyles.align === "center",
            "text-left": summaryStyles.align === "left",
            "text-right": summaryStyles.align === "right",
            "text-opacity-50": selectedArea === "summary",
          }
        )}
      />

      <p className="text-sm leading-6 text-gray-700">
        {load ? detailData?.about : "Summary about yourself..."}
      </p>
    </div>
  );
};
