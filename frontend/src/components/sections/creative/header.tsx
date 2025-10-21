import { useDataContext } from "@/contexts";
import classNames from "classnames";

interface headerProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeaderSectionCreative = ({ pageRef }: headerProps) => {
  const { overviewData, selectedArea, setSelectedArea, load } =
    useDataContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => setSelectedArea("header")}
      className={classNames(
        "flex transition-all w-full duration-500 p-6 flex-col relative overflow-hidden",
        {
          "animate-pulse": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-purple-600": selectedArea === "header",
          "border-transparent": selectedArea !== "header",
        }
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex-1">
          <h1
            className={classNames(
              "font-black text-6xl text-white tracking-tight mb-3",
              {
                "h-16": !load,
              }
            )}
          >
            {load ? overviewData?.fullName : "Full Name"}
          </h1>
          <p
            className={classNames("text-white/90 text-2xl font-semibold mb-4", {
              "h-8": !load,
            })}
          >
            {load ? overviewData?.headline : "Professional Headline"}
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/80">
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              {load ? overviewData?.location?.fullLocation : "Location"}
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              linkedin.com/in/
              {load ? overviewData?.publicIdentifier : "username"}
            </div>
          </div>
        </div>
        <img
          src={load ? overviewData?.profilePictureURL : "./user.png"}
          alt="Profile"
          draggable={false}
          className="size-32 rounded-2xl border-4 border-white shadow-2xl object-cover ml-6"
        />
      </div>
    </div>
  );
};
