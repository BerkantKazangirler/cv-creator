import { useDataContext } from "@/contexts";
import classNames from "classnames";

interface summaryProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const SummarySection = ({ pageRef }: summaryProps) => {
  const { detailData, selectedArea, setSelectedArea } = useDataContext();

  return (
    <div
      ref={pageRef}
      onClick={() => setSelectedArea("summary")}
      className={classNames(
        "flex transition-all duration-500 cursor-pointer border border-dashed p-1 flex-col",
        {
          "border-black rounded-md": selectedArea === "summary",
          "border-transparent": selectedArea !== "summary",
        }
      )}
    >
      <span className="text-double-primary-black font-rubik uppercase font-medium text-xl border-b-3 border-double-primary-black w-full">
        summary
      </span>
      <p className="text-2sm leading-4 py-1 text-double-about font-inter">
        {detailData?.about}
      </p>
    </div>
  );
};
