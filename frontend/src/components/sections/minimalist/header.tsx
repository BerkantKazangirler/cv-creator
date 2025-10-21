import { useDataContext } from "@/contexts";
import classNames from "classnames";

interface headerProps {
  pageRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeaderSectionMinimalist = ({ pageRef }: headerProps) => {
  const { overviewData, selectedArea, setSelectedArea, load } =
    useDataContext();

  return (
    <div
      ref={load ? pageRef : null}
      onClick={() => setSelectedArea("header")}
      className={classNames(
        "flex transition-all w-full items-center justify-between duration-500 py-8 px-2",
        {
          "animate-pulse": !load,
          "border-2 border-dashed cursor-pointer": load,
          "border-black": selectedArea === "header",
          "border-transparent": selectedArea !== "header",
        }
      )}
    >
      <div className="flex flex-col">
        <h1
          className={classNames(
            "font-light text-5xl text-black tracking-tight mb-2",
            {
              "h-12": !load,
            }
          )}
        >
          {load ? overviewData?.fullName : "Full Name"}
        </h1>
        <p
          className={classNames("text-gray-600 text-lg font-light", {
            "h-6": !load,
          })}
        >
          {load ? overviewData?.headline : "Professional Headline"}
        </p>
        <div className="mt-4 flex flex-col gap-1 text-sm text-gray-500">
          <p>{load ? overviewData?.location?.fullLocation : "Location"}</p>
          <p>
            linkedin.com/in/
            {load ? overviewData?.publicIdentifier : "username"}
          </p>
        </div>
      </div>
      <img
        src={load ? overviewData?.profilePictureURL : "./user.png"}
        alt="Profile"
        draggable={false}
        className="size-24 object-cover grayscale opacity-90"
      />
    </div>
  );
};
