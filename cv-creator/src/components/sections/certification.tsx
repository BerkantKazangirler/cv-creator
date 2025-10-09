import { useDataContext } from "@/contexts/dataContext";
import classNames from "classnames";

export const CertificationSection = () => {
  const { certificationsData } = useDataContext();

  return (
    <div className="flex flex-col">
      <span className="text-double-primary-black font-rubik uppercase font-medium text-xl border-b-3 border-double-primary-black w-full">
        certification
      </span>
      <div className="flex flex-col">
        {certificationsData?.map((data, index) => (
          <div
            key={index}
            className={classNames("flex flex-col", {
              "border-b border-opacity-30 border-dashed border-double-about":
                index !== (certificationsData?.length || 0) - 1 ||
                index !== (certificationsData?.length || 0) - 1,
            })}
          >
            <span className="text-sm text-double-main-blue font-bold font-inter">
              {data.certificationName}
            </span>
            <span className="text-double-about font-inter text-2sm">
              {data.issuedBy}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
