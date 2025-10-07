import { useEffect, useState } from "react";
import { requestData } from "./utils/fetch-data";
import type { OverviewI } from "./types/overview";
import type { SkillsI } from "./types/skills";
import type { certificationsI } from "./types/certifications";
import type { experienceI } from "./types/experience";
import type { detailsI } from "./types/details";
import { ToolsArea } from "./layouts/toolsArea";

export default function App() {
  const [detailData, setDetailData] = useState<detailsI>({} as detailsI);
  const [overviewData, setOverviewData] = useState<OverviewI>({} as OverviewI);
  const [skillsData, setSkillsData] = useState<SkillsI>({} as SkillsI);
  const [certificationsData, setCertificationsData] = useState<certificationsI>(
    {} as certificationsI
  );
  const [experienceData, setExperienceData] = useState<experienceI>(
    {} as experienceI
  );
  const [profileUrn, setProfileUrn] = useState<string | null>(null);
  const [profileName, setProfileName] = useState<string>("berkant-kazangirler");

  const [showBrand, setShowBrand] = useState<boolean>(false);

  // useEffect(() => {
  //   requestData<OverviewI>(`/overview?username=${profileName}`).then((data) => {
  //     setOverviewData(data);
  //     setProfileUrn(data?.urn);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (profileUrn) return;
  //   requestData<detailsI>(`/details?urn=${profileUrn}`).then((data) => {
  //     setDetailData(data);
  //   });

  //   requestData<SkillsI>(`/skills?urn=${profileUrn}`).then((data) => {
  //     setSkillsData(data);
  //   });

  //   requestData<certificationsI>(`/certifications?urn=${profileUrn}`).then(
  //     (data) => {
  //       setCertificationsData(data);
  //     }
  //   );

  //   requestData<experienceI>(`/full-experience?urn=${profileUrn}`).then(
  //     (data) => {
  //       setExperienceData(data);
  //     }
  //   );
  // }, [profileUrn]);

  return (
    <div className="w-screen flex-row py-6 px-4 h-screen bg-slate-200">
      <div className="flex flex-row h-full">
        <ToolsArea />
        <div className="flex flex-col h-full w-full items-center">
          <div className="bg-white w-940 h-full">asd</div>
        </div>
      </div>
    </div>
  );
}
