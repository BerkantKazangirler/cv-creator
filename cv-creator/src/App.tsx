import { HeaderSection } from "./components/sections/header";
import { LanguagesSection } from "./components/sections/languages";
import { SummarySection } from "./components/sections/sumarry";
import { ToolsArea } from "./layouts/toolsArea";

export default function App() {
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
          <div className="bg-white p-27 w-940 h-full flex flex-col">
            <HeaderSection />
            <div className="grid grid-cols-[1.3fr_1fr] gap-3">
              <SummarySection />
              <LanguagesSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
