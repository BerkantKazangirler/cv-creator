import { ToolsArea } from "@/components";
import {
  PageLayout,
  PageLayoutSingle,
  PageLayoutMinimalist,
  PageLayoutCreative,
  PageLayoutSidebar,
} from "@/layouts";
import { useEffect, useState } from "react";
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
  } = useDataContext();

  const [templateType, setTemplateType] = useState<
    "double" | "single" | "minimalist" | "creative" | "sidebar"
  >("minimalist");

  useEffect(() => {
    requestData<OverviewI>("overview").then((data) => {
      setOverviewData(data);
      setProfileUrn(data?.urn);
    });
  }, [setOverviewData, setProfileUrn]);

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
  }, [
    profileUrn,
    setDetailData,
    setSkillsData,
    setCertificationsData,
    setExperienceData,
    setLoad,
  ]);

  return (
    <div className="w-full flex-row py-6 px-4 h-full bg-slate-200">
      <div className="flex flex-row h-full gap-4">
        <ToolsArea />
        <div className="flex flex-col h-full w-full items-center gap-4">
          {/* Template Switcher */}
          <div className="flex flex-wrap gap-2 bg-white rounded-lg p-3 shadow-md">
            <button
              onClick={() => setTemplateType("double")}
              className={`px-4 py-2 rounded-md transition-colors text-sm font-medium ${
                templateType === "double"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Double Column
            </button>
            <button
              onClick={() => setTemplateType("single")}
              className={`px-4 py-2 rounded-md transition-colors text-sm font-medium ${
                templateType === "single"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Single Column
            </button>
            <button
              onClick={() => setTemplateType("minimalist")}
              className={`px-4 py-2 rounded-md transition-colors text-sm font-medium ${
                templateType === "minimalist"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Minimalist
            </button>
            <button
              onClick={() => setTemplateType("creative")}
              className={`px-4 py-2 rounded-md transition-colors text-sm font-medium ${
                templateType === "creative"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Creative
            </button>
            <button
              onClick={() => setTemplateType("sidebar")}
              className={`px-4 py-2 rounded-md transition-colors text-sm font-medium ${
                templateType === "sidebar"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Sidebar
            </button>
          </div>

          {/* Template Display */}
          {templateType === "double" && <PageLayout />}
          {templateType === "single" && <PageLayoutSingle />}
          {templateType === "minimalist" && <PageLayoutMinimalist />}
          {templateType === "creative" && <PageLayoutCreative />}
          {templateType === "sidebar" && <PageLayoutSidebar />}
        </div>
      </div>
    </div>
  );
}
