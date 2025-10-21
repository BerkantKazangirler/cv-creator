import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface certificationProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const CertificationSectionSidebar = ({
  pageRef,
}: certificationProps) => {
  const { certificationsData, setSelectedArea, selectedArea, load } =
    useDataContext();
  const { certificationsGlobalStyles, setCertificationsGlobalStyles } =
    useStylesContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => (load ? setSelectedArea("certification") : null)}
      className={classNames(
        "flex transition-all duration-500 p-5 flex-col bg-white",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-slate-700": selectedArea === "certification",
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
          "w-full text-slate-900 font-bold text-xl mb-4 border-b-2 border-slate-700 pb-2 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "certification",
          }
        )}
      />
      <div className="flex flex-col gap-3">
        {load ? (
          certificationsData?.map((data, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-slate-900">
                {data.certificationName}
              </h4>
              <p className="text-xs text-gray-600">{data.issuedBy}</p>
            </div>
          ))
        ) : (
          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              Certificate
            </h4>
            <p className="text-xs text-gray-600">Issuer</p>
          </div>
        )}
      </div>
    </div>
  );
};
