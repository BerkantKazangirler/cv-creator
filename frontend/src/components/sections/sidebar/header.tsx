import { useDataContext } from "@/contexts";
import classNames from "classnames";

interface headerProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeaderSectionSidebar = ({ pageRef }: headerProps) => {
  const { overviewData, selectedArea, setSelectedArea, load } =
    useDataContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => setSelectedArea("header")}
      className={classNames(
        "flex transition-all w-full flex-col items-center duration-500 p-6 bg-slate-800 text-white",
        {
          "animate-pulse": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-white": selectedArea === "header",
          "border-transparent": selectedArea !== "header",
        }
      )}
    >
      <img
        src={load ? overviewData?.profilePictureURL : "./user.png"}
        alt="Profile"
        draggable={false}
        className="size-32 rounded-full border-4 border-slate-600 mb-4 object-cover"
      />
      <h1
        className={classNames(
          "font-bold text-2xl text-white text-center mb-2",
          {
            "h-8": !load,
          }
        )}
      >
        {load ? overviewData?.fullName : "Full Name"}
      </h1>
      <p
        className={classNames("text-slate-300 text-sm text-center", {
          "h-5": !load,
        })}
      >
        {load ? overviewData?.headline : "Professional Headline"}
      </p>
    </div>
  );
};
