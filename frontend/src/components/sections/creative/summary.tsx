import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface summaryProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const SummarySectionCreative = ({ pageRef }: summaryProps) => {
  const { detailData, selectedArea, setSelectedArea, load } = useDataContext();
  const { summaryStyles, setSummaryStyles } = useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => setSelectedArea("summary")}
      className={classNames(
        "flex transition-all duration-500 p-5 flex-col bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-purple-600": selectedArea === "summary",
          "border-transparent": selectedArea !== "summary",
        }
      )}
    >
      <input
        type="text"
        readOnly={selectedArea !== "summary" || !load}
        value={load ? summaryStyles?.title : "About Me"}
        maxLength={30}
        onChange={(e) =>
          setSummaryStyles({
            ...summaryStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-fit text-purple-900 font-bold text-xl mb-3 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "summary",
          }
        )}
      />
      <p className="text-sm leading-relaxed text-gray-800">
        {load ? detailData?.about : "Summary about yourself..."}
      </p>
    </div>
  );
};
