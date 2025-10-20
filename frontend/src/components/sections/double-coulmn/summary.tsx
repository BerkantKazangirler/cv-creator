import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface summaryProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const SummarySection = ({ pageRef }: summaryProps) => {
  const { detailData, selectedArea, setSelectedArea, load } = useDataContext();
  const { summaryStyles, setSummaryStyles } = useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => setSelectedArea("summary")}
      className={classNames("flex transition-all duration-500 p-1 flex-col", {
        "animate-pulse select-none cursor-not-allowed": !load,
        "border border-dashed cursor-pointer": load,
        "border-black rounded-md": selectedArea === "summary",
        "border-transparent": selectedArea !== "summary",
      })}
    >
      <input
        type="text"
        readOnly={selectedArea !== "summary" || !load}
        value={load ? summaryStyles?.title : "Summary"}
        maxLength={30}
        onChange={(e) =>
          setSummaryStyles({
            ...summaryStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-full text-double-primary-black font-rubik font-medium text-xl border-b-3 border-double-primary-black bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            uppercase: summaryStyles.underline,
            italic: summaryStyles.italic,
            "text-center": summaryStyles.align === "center",
            "text-left": summaryStyles.align === "left",
            "text-right": summaryStyles.align === "right",
            "font-bold": summaryStyles.bold,
            "font-medium": !summaryStyles.bold,
            "text-opacity-50": selectedArea === "summary",
          }
        )}
      />

      <p className="text-2sm leading-4 py-1 text-double-about font-inter">
        {load ? detailData?.about : "Summary about yourself..."}
      </p>
    </div>
  );
};
