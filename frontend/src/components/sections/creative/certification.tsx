import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface certificationProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const CertificationSectionCreative = ({
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
        "flex transition-all duration-500 p-5 flex-col rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-purple-600": selectedArea === "certification",
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
          "w-fit text-purple-900 font-bold text-xl mb-4 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "certification",
          }
        )}
      />
      <div className="flex flex-col gap-2">
        {load ? (
          certificationsData?.map((data, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-red-500"></div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  {data.certificationName}
                </h4>
                <p className="text-xs text-gray-600">{data.issuedBy}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-red-500"></div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                Certificate
              </h4>
              <p className="text-xs text-gray-600">Issuer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
