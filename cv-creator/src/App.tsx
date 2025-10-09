import { ToolsArea } from "@/components";
import { PageLayout } from "@/layouts";

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
