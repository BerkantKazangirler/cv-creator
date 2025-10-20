import { createContext, useContext, useState } from "react";
import type {
  OverviewI,
  SkillsI,
  experienceI,
  certificationsI,
  detailsI,
} from "@/types";

type DataContextType = {
  detailData: detailsI;
  setDetailData: React.Dispatch<React.SetStateAction<detailsI>>;
  overviewData: OverviewI;
  setOverviewData: React.Dispatch<React.SetStateAction<OverviewI>>;
  skillsData: SkillsI[];
  setSkillsData: React.Dispatch<React.SetStateAction<SkillsI[]>>;
  certificationsData: certificationsI[];
  setCertificationsData: React.Dispatch<
    React.SetStateAction<certificationsI[]>
  >;
  experienceData: experienceI[];
  setExperienceData: React.Dispatch<React.SetStateAction<experienceI[]>>;
  profileUrn: string | null;
  setProfileUrn: React.Dispatch<React.SetStateAction<string | null>>;
  showBrand: boolean;
  setShowBrand: React.Dispatch<React.SetStateAction<boolean>>;
  selectedArea: string;
  setSelectedArea: React.Dispatch<React.SetStateAction<string>>;
  profileName: string;
  setProfileName: React.Dispatch<React.SetStateAction<string>>;
  load: boolean;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
};

const DataContext = createContext<DataContextType>({
  detailData: {} as detailsI,
  setDetailData: () => {},
  overviewData: {} as OverviewI,
  setOverviewData: () => {},
  skillsData: [],
  setSkillsData: () => {},
  certificationsData: [],
  setCertificationsData: () => {},
  experienceData: [],
  setExperienceData: () => {},
  profileUrn: "",
  setProfileUrn: () => {},
  profileName: "",
  setProfileName: () => {},
  showBrand: false,
  setShowBrand: () => {},
  selectedArea: "",
  setSelectedArea: () => {},
  load: false,
  setLoad: () => {},
});

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [detailData, setDetailData] = useState<detailsI>({} as detailsI);
  const [overviewData, setOverviewData] = useState<OverviewI>({} as OverviewI);
  const [skillsData, setSkillsData] = useState<SkillsI[]>([]);
  const [certificationsData, setCertificationsData] = useState<
    certificationsI[]
  >([]);
  const [experienceData, setExperienceData] = useState<experienceI[]>([]);
  const [profileUrn, setProfileUrn] = useState<string | null>(null);
  const [profileName, setProfileName] = useState<string>("berkant-kazangirler");

  const [showBrand, setShowBrand] = useState<boolean>(false);

  const [selectedArea, setSelectedArea] = useState<string>("");

  const [load, setLoad] = useState<boolean>(false);

  return (
    <DataContext.Provider
      value={{
        detailData,
        setDetailData,
        overviewData,
        setOverviewData,
        skillsData,
        setSkillsData,
        certificationsData,
        setCertificationsData,
        experienceData,
        setExperienceData,
        profileUrn,
        setProfileUrn,
        profileName,
        setProfileName,
        showBrand,
        setShowBrand,
        selectedArea,
        setSelectedArea,
        load,
        setLoad,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
