import { useDataContext } from "@/contexts";
import classNames from "classnames";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

interface headerProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeaderSection = ({ pageRef }: headerProps) => {
  const { overviewData, selectedArea, setSelectedArea } = useDataContext();

  const [headerStyles, setHeaderStyles] = useState<{
    showTitle: boolean;
    showPhone: boolean;
    showLink: boolean;
    showExtraLink: boolean;
    showMail: boolean;
    showLocation: boolean;
    uppercaseName: boolean;
    showPhoto: boolean;
    showExtraField: boolean;
    showDOB: boolean;
    showNational: boolean;
    photoStyle: "FULL" | "CIRCLE";
  }>({
    showTitle: false,
    showPhone: false,
    showLink: false,
    showExtraLink: false,
    showMail: false,
    showLocation: false,
    uppercaseName: false,
    showPhoto: false,
    showExtraField: false,
    showDOB: false,
    showNational: false,
    photoStyle: "FULL",
  });

  return (
    <div
      ref={pageRef}
      onClick={() => setSelectedArea("header")}
      className={classNames(
        "flex transition-all w-full justify-between duration-500 cursor-pointer border border-dashed p-1 flex-row",
        {
          "border-black rounded-md": selectedArea === "header",
          "border-transparent": selectedArea !== "header",
        }
      )}
    >
      <div className="flex flex-col pr-20">
        <p className="font-rubik pb-0.5 text-4xl text-primary-black uppercase font-medium">
          {overviewData?.fullName}
        </p>
        <p className="text-double-main-blue pb-0.5 font-medium text-lg font-rubik">
          {overviewData?.headline}
        </p>
        <div className="py-2 flex flex-row gap-3">
          <div className="flex flex-row gap-1">
            <FaPhoneAlt className="text-double-main-blue my-auto text-xs" />
            <p className="text-xs font-rubik font-medium opacity-70">
              https://linkedin.com/in/{overviewData?.publicIdentifier}/
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <FaPhoneAlt className="text-double-main-blue my-auto text-xs" />
            <p className="text-xs font-rubik font-medium opacity-70">
              {overviewData?.location?.fullLocation}
            </p>
          </div>
        </div>
      </div>
      <img
        src={overviewData?.profilePictureURL}
        alt="Profile Photo"
        draggable={false}
        className="rounded-full size-36"
      />
    </div>
  );
};
