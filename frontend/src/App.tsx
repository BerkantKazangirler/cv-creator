import { ToolsArea } from "@/components";
import { PageLayout } from "@/layouts";
import { useEffect } from "react";
import { requestData } from "./utils";
import type {
  certificationsI,
  detailsI,
  experienceI,
  OverviewI,
  SkillsI,
} from "./types";
import { useDataContext } from "./contexts";

export default function App() {
  const {
    setOverviewData,
    setProfileUrn,
    profileUrn,
    setDetailData,
    setSkillsData,
    setCertificationsData,
    setExperienceData,
    setLoad,
    load,
  } = useDataContext();

  useEffect(() => {
    requestData<OverviewI>("overview").then((data) => {
      setOverviewData(data);
      setProfileUrn(data?.urn);
    });
  }, []);

  useEffect(() => {
    if (profileUrn) return;
    requestData<detailsI>("details").then((data) => {
      setDetailData(data);
    });

    requestData<SkillsI>("skills").then((data) => {
      setSkillsData(data);
    });

    requestData<certificationsI>("certifications").then((data) => {
      setCertificationsData(data);
    });

    requestData<experienceI>("experience")
      .then((data) => {
        setExperienceData(data);
      })
      .finally(() => {
        setLoad(true);
      });
  }, [profileUrn]);

  return (
    <div className="w-full flex-row py-6 px-4 h-full bg-slate-200">
      <div className="flex flex-row h-full">
        <ToolsArea />
        <div className="flex flex-col h-full w-full items-center">
          <PageLayout />
        </div>
      </div>
    </div>
  );
}
