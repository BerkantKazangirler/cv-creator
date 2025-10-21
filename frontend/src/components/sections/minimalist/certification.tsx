import { useDataContext, useStylesContext } from "@/contexts";
import classNames from "classnames";

interface certificationProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const CertificationSectionMinimalist = ({
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
        "flex transition-all duration-500 py-6 px-2 flex-col border-t border-gray-200",
        {
          "animate-pulse select-none cursor-not-allowed": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-black": selectedArea === "certification",
          "border-transparent border-t-gray-200":
            selectedArea !== "certification",
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
          "w-fit text-black font-light text-xs uppercase tracking-widest mb-4 bg-transparent focus:outline-none",
          {
            "cursor-not-allowed": !load,
            "text-opacity-50": selectedArea === "certification",
          }
        )}
      />
      <div className="flex flex-col gap-2">
        {load ? (
          certificationsData?.map((data, index) => (
            <div key={index}>
              <span className="text-sm text-gray-700">
                {data.certificationName}
              </span>
              <span className="text-xs text-gray-500"> — {data.issuedBy}</span>
            </div>
          ))
        ) : (
          <div>
            <span className="text-sm text-gray-700">Certificate Name</span>
            <span className="text-xs text-gray-500"> — Issuer</span>
          </div>
        )}
      </div>
    </div>
  );
};
