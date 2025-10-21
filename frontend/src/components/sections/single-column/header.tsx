import { useDataContext } from "@/contexts";
import classNames from "classnames";

interface headerProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeaderSectionSingle = ({ pageRef }: headerProps) => {
  const { overviewData, selectedArea, setSelectedArea, load } =
    useDataContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => setSelectedArea("header")}
      className={classNames(
        "flex transition-all w-full items-center justify-center duration-500 p-6 flex-col bg-gradient-to-r from-blue-600 to-indigo-700 text-white",
        {
          "animate-pulse": !load,
          "border border-dashed cursor-pointer": load,
          "border-white rounded-md": selectedArea === "header",
          "border-transparent": selectedArea !== "header",
        }
      )}
    >
      <img
        src={load ? overviewData?.profilePictureURL : "./user.png"}
        alt="Profile Photo"
        draggable={false}
        className="rounded-full size-32 mb-4 border-4 border-white shadow-lg"
      />
      <h1
        className={classNames(
          "font-bold text-4xl text-white uppercase tracking-wide",
          {
            "h-10": !load,
          }
        )}
      >
        {load ? overviewData?.fullName : "Full Name"}
      </h1>
      <p
        className={classNames("text-white/90 text-xl font-light mt-2", {
          "h-8": !load,
        })}
      >
        {load ? overviewData?.headline : "Professional Headline"}
      </p>
      <div className="mt-4 flex flex-col gap-2 text-center text-sm text-white/80">
        <p>{load ? overviewData?.location?.fullLocation : "Location"}</p>
        <p>
          linkedin.com/in/
          {load ? overviewData?.publicIdentifier : "username"}
        </p>
      </div>
    </div>
  );
};
