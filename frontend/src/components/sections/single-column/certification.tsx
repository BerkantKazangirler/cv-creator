import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface certificationProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const CertificationSectionSingle = ({ pageRef }: certificationProps) => {
  const { certificationsData, setSelectedArea, selectedArea, load } =
    useDataContext();

  const { certificationsGlobalStyles, setCertificationsGlobalStyles } =
    useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("certification") : null)}
      className={classNames(
        "flex transition-all duration-500 p-4 flex-col bg-white rounded-lg",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-blue-600": selectedArea === "certification",
          "border-transparent": selectedArea !== "certification",
        }
      )}
    >
      <input
        type="text"
        readOnly={selectedArea !== "certification" || !load}
        value={load ? certificationsGlobalStyles.title : "Certifications"}
        maxLength={30}
        onChange={(e) =>
          setCertificationsGlobalStyles({
            ...certificationsGlobalStyles,
            title: e.target.value,
          })
        }
        className={classNames(
          "w-full text-gray-900 font-bold text-2xl mb-4 border-b-2 border-blue-600 bg-transparent focus:outline-none pb-2",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "certification",
          }
        )}
      />
      <div className="flex flex-col gap-3">
        {load ? (
          certificationsData?.map((data, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900">
                  {data.certificationName}
                </h4>
                <p className="text-xs text-gray-600">{data.issuedBy}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900">
                Certificate Name
              </h4>
              <p className="text-xs text-gray-600">Issuing Organization</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
