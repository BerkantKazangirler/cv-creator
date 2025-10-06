import { useEffect, useState } from "react";
import { requestData } from "./utils/fetch-data";
import type { OverviewI } from "./types/overview";
import type { SkillsI } from "./types/skills";
import type { certificationsI } from "./types/certifications";
import type { experienceI } from "./types/experience";
import type { detailsI } from "./types/details";

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

  useEffect(() => {
    requestData<OverviewI>(`/overview?username=${profileName}`).then((data) => {
      setOverviewData(data);
      setProfileUrn(data?.urn);
    });
  }, []);

  useEffect(() => {
    if (profileUrn) return;
    requestData<detailsI>(`/details?urn=${profileUrn}`).then((data) => {
      setDetailData(data);
    });

    requestData<SkillsI>(`/skills?urn=${profileUrn}`).then((data) => {
      setSkillsData(data);
    });

    requestData<certificationsI>(`/certifications?urn=${profileUrn}`).then(
      (data) => {
        setCertificationsData(data);
      }
    );

    requestData<experienceI>(`/full-experience?urn=${profileUrn}`).then(
      (data) => {
        setExperienceData(data);
      }
    );
  }, [profileUrn]);

  return (
    <div className="w-screen h-screen bg-red-400">
      <button onClick={() => console.log(skillsData)}>asd</button>
    </div>
  );
}
