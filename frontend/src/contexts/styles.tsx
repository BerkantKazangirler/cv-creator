import { createContext, useContext, useState } from "react";

interface headerStyles {
  showTitle: boolean;
  showLink: boolean;
  showLocation: boolean;
  uppercaseName: boolean;
  showPhoto: boolean;
  photoStyle: "FULL" | "CIRCLE";
}

interface summaryStyles {
  title: string;
  underline: boolean;
  italic: boolean;
  bold: boolean;
  align: "left" | "center" | "right";
}

interface experienceStyles {
  showTitle: boolean;
  showCompanyName: boolean;
  showDescription: boolean;
  showLocation: boolean;
  showPeriod: boolean;
  showCompanyLogo: boolean;
}

interface certificationsStyle {
  showInstitution: boolean;
}

interface educationStles {
  showInstitution: boolean;
  showLocation: boolean;
  showInstitutionLogo: boolean;
}

interface languagesStyles {
  title: string;
  showSlider: boolean;
  showProficiency: boolean;
  sliderStyle: "dots" | "slider" | "lines" | "thin";
}

type StylesContextType = {
  headerStyles: headerStyles;
  setHeaderStyles: React.Dispatch<React.SetStateAction<headerStyles>>;
  summaryStyles: summaryStyles;
  setSummaryStyles: React.Dispatch<React.SetStateAction<summaryStyles>>;
  experienceStyles: Record<number, experienceStyles>;
  setExperienceStyles: React.Dispatch<
    React.SetStateAction<Record<number, experienceStyles>>
  >;
  experienceGlobalStyles: { title: string };
  setExperienceGlobalStyles: React.Dispatch<
    React.SetStateAction<{ title: string }>
  >;
  certificationsGlobalStyles: { title: string };
  setCertificationsGlobalStyles: React.Dispatch<
    React.SetStateAction<{ title: string }>
  >;
  certificationsStyles: Record<number, certificationsStyle>;
  setCertificationsStyles: React.Dispatch<
    React.SetStateAction<Record<number, certificationsStyle>>
  >;
  educationStyles: Record<number, educationStles>;
  setEducationStyles: React.Dispatch<
    React.SetStateAction<Record<number, educationStles>>
  >;
  educationGlobalStyles: { title: string };
  setEducationGlobalStyles: React.Dispatch<
    React.SetStateAction<{ title: string }>
  >;
  skillsStyles: { title: string };
  setSkillsStyles: React.Dispatch<React.SetStateAction<{ title: string }>>;
  languagesStyles: languagesStyles;
  setLanguagesStyles: React.Dispatch<React.SetStateAction<languagesStyles>>;
};

const StylesContext = createContext<StylesContextType>({
  headerStyles: {} as headerStyles,
  setHeaderStyles: () => {},
  summaryStyles: {} as summaryStyles,
  setSummaryStyles: () => {},
  experienceStyles: {},
  setExperienceStyles: () => {},
  experienceGlobalStyles: { title: "Experience" },
  setExperienceGlobalStyles: () => {},
  certificationsGlobalStyles: { title: "Certifications" },
  setCertificationsGlobalStyles: () => {},
  certificationsStyles: {},
  setCertificationsStyles: () => {},
  educationStyles: {},
  setEducationStyles: () => {},
  educationGlobalStyles: { title: "Education" },
  setEducationGlobalStyles: () => {},
  skillsStyles: { title: "Skills" },
  setSkillsStyles: () => {},
  languagesStyles: {} as languagesStyles,
  setLanguagesStyles: () => {},
});

export const useStylesContext = () => useContext(StylesContext);

export const StyleProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerStyles, setHeaderStyles] = useState<headerStyles>({
    showTitle: false,
    showLink: false,
    showLocation: false,
    uppercaseName: false,
    showPhoto: false,
    photoStyle: "FULL",
  });
  const [languagesStyles, setLanguagesStyles] = useState<languagesStyles>({
    title: "Languages",
    showSlider: true,
    showProficiency: true,
    sliderStyle: "lines",
  });
  const [summaryStyles, setSummaryStyles] = useState<summaryStyles>({
    title: "Summary",
    underline: true,
    italic: true,
    bold: true,
    align: "center",
  });

  const [experienceStyles, setExperienceStyles] = useState<
    Record<number, experienceStyles>
  >({
    0: {
      showTitle: true,
      showCompanyName: true,
      showDescription: true,
      showLocation: true,
      showPeriod: true,
      showCompanyLogo: false,
    },
    1: {
      showTitle: true,
      showCompanyName: true,
      showDescription: true,
      showLocation: true,
      showPeriod: true,
      showCompanyLogo: false,
    },
  });

  const [experienceGlobalStyles, setExperienceGlobalStyles] = useState<{
    title: string;
  }>({
    title: "Experience",
  });

  const [certificationsGlobalStyles, setCertificationsGlobalStyles] = useState<{
    title: string;
  }>({
    title: "Certifications",
  });
  const [certificationsStyles, setCertificationsStyles] = useState<
    Record<number, certificationsStyle>
  >({
    0: { showInstitution: true },
    1: { showInstitution: false },
  });
  const [educationStyles, setEducationStyles] = useState<
    Record<number, educationStles>
  >({
    0: {
      showInstitution: true,
      showLocation: true,
      showInstitutionLogo: false,
    },
  });
  const [educationGlobalStyles, setEducationGlobalStyles] = useState<{
    title: string;
  }>({
    title: "Education",
  });

  const [skillsStyles, setSkillsStyles] = useState<{
    title: string;
  }>({
    title: "Skills",
  });

  return (
    <StylesContext.Provider
      value={{
        headerStyles,
        setHeaderStyles,

        summaryStyles,
        setSummaryStyles,

        experienceStyles,
        setExperienceStyles,

        experienceGlobalStyles,
        setExperienceGlobalStyles,

        certificationsGlobalStyles,
        setCertificationsGlobalStyles,

        certificationsStyles,
        setCertificationsStyles,

        educationStyles,
        setEducationStyles,

        educationGlobalStyles,
        setEducationGlobalStyles,

        skillsStyles,
        setSkillsStyles,

        languagesStyles,
        setLanguagesStyles,
      }}
    >
      {children}
    </StylesContext.Provider>
  );
};

export default StyleProvider;
