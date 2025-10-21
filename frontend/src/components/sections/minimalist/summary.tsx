import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface summaryProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const SummarySectionMinimalist = ({ pageRef }: summaryProps) => {
  const { detailData, selectedArea, setSelectedArea, load } = useDataContext();
  const { summaryStyles, setSummaryStyles } = useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => setSelectedArea("summary")}
      className={classNames(
        "flex transition-all duration-500 py-6 px-2 flex-col border-t border-gray-200",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-black": selectedArea === "summary",
          "border-transparent border-t-gray-200": selectedArea !== "summary",
        }
      )}
    >
      <input
        type="text"
        readOnly={selectedArea !== "summary" || !load}
        value={load ? summaryStyles?.title : "About"}
        maxLength={30}
        onChange={(e) =>
          setSummaryStyles({
            ...summaryStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-fit text-black font-light text-xs uppercase tracking-widest mb-4 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "summary",
          }
        )}
      />
      <p className="text-sm leading-relaxed text-gray-700 font-light">
        {load ? detailData?.about : "Summary about yourself..."}
      </p>
    </div>
  );
};
