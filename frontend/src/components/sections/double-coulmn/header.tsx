import { useDataContext } from "@/contexts";
import classNames from "classnames";
import { FaPhoneAlt } from "react-icons/fa";

interface headerProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeaderSection = ({ pageRef }: headerProps) => {
  const { overviewData, selectedArea, setSelectedArea, load } =
    useDataContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => setSelectedArea("header")}
      className={classNames(
        "flex transition-all w-full justify-between duration-500 p-1 flex-row",
        {
          "animate-pulse": !load,
          "border border-dashed cursor-pointer": load,
          "border-black rounded-md": selectedArea === "header",
          "border-transparent": selectedArea !== "header",
        }
      )}
    >
      <div className="flex flex-col pr-20">
        <p
          className={classNames(
            "font-rubik pb-0.5 text-4xl text-primary-black uppercase font-medium",
            {
              "h-10": !load,
            }
          )}
        >
          {load ? overviewData?.fullName : "Full Name"}
        </p>
        <p
          className={classNames(
            "text-double-main-blue pb-0.5 font-medium text-lg font-rubik",
            {
              "h-10": !load,
            }
          )}
        >
          {load ? overviewData?.headline : "Professional Headline"}
        </p>
        <div className="py-2 flex flex-row gap-3">
          <div className="flex flex-row gap-1">
            <FaPhoneAlt className="text-double-main-blue my-auto text-xs" />
            <p className="text-xs font-rubik font-medium opacity-70">
              https://linkedin.com/in/
              {load ? overviewData?.publicIdentifier : "Url"}/
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <FaPhoneAlt className="text-double-main-blue my-auto text-xs" />
            <p className="text-xs font-rubik font-medium opacity-70">
              {load ? overviewData?.location?.fullLocation : "Location"}
            </p>
          </div>
        </div>
      </div>
      <img
        src={load ? overviewData?.profilePictureURL : "./user.png"}
        alt="Profile Photo"
        draggable={false}
        className="rounded-full size-36"
      />
    </div>
  );
};
