import { useDataContext } from "@/contexts/dataContext";

export const SummarySection = () => {
  const { detailData } = useDataContext();

  return (
    <div className="flex flex-col">
      <span className="text-double-primary-black font-rubik uppercase font-medium text-xl border-b-3 border-double-primary-black w-full">
        summary
      </span>
      <p className="text-2sm leading-4 py-1 text-double-about font-inter">
        {detailData?.about}
      </p>
    </div>
  );
};
