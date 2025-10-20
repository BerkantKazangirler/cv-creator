import { useDataContext } from "@/contexts";
import classNames from "classnames";

interface certificationProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const CertificationSection = ({ pageRef }: certificationProps) => {
  const { certificationsData, setSelectedArea, selectedArea, load } =
    useDataContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("certification") : null)}
      className={classNames("flex transition-all duration-500 p-1 flex-col", {
        "animate-pulse select-none cursor-not-allowed": !load,
        "border border-dashed cursor-pointer": load,
        "border-black rounded-md": selectedArea === "certification",
        "border-transparent": selectedArea !== "certification",
      })}
    >
      <span className="text-double-primary-black font-rubik uppercase font-medium text-xl border-b-3 border-double-primary-black w-full">
        certification
      </span>
      <div className="flex flex-col">
        {load ? (
          certificationsData?.map((data, index) => (
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
          ))
        ) : (
          <div className="flex flex-col border-b border-opacity-30 border-dashed border-double-about">
            <span className="text-sm text-double-about font-bold font-inter">
              Test
            </span>
            <span className="text-double-about/80 font-inter text-2sm">
              Test
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
