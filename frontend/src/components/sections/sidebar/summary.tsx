import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface summaryProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const SummarySectionSidebar = ({ pageRef }: summaryProps) => {
  const { detailData, selectedArea, setSelectedArea, load } = useDataContext();
  const { summaryStyles, setSummaryStyles } = useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => setSelectedArea("summary")}
      className={classNames(
        "flex transition-all duration-500 p-5 flex-col bg-white",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-slate-700": selectedArea === "summary",
          "border-transparent": selectedArea !== "summary",
        }
      )}
    >
      <input
        type="text"
        readOnly={selectedArea !== "summary" || !load}
        value={load ? summaryStyles?.title : "Professional Summary"}
        maxLength={30}
        onChange={(e) =>
          setSummaryStyles({
            ...summaryStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-full text-slate-900 font-bold text-xl mb-3 border-b-2 border-slate-700 pb-2 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "summary",
          }
        )}
      />
      <p className="text-sm leading-relaxed text-gray-700">
        {load ? detailData?.about : "Summary about yourself..."}
      </p>
    </div>
  );
};
