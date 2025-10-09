import { createContext, useContext, useEffect, useState } from "react";
import type { OverviewI } from "../types/overview";
import type { SkillsI } from "../types/skills";
import type { certificationsI } from "../types/certifications";
import type { experienceI } from "../types/experience";
import type { detailsI } from "../types/details";

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

  useEffect(() => {
    setOverviewData({
      firstName: "Berkant",
      lastName: "Kazangirler",
      fullName: "Berkant Kazangirler",
      headline:
        "Team Captain @Spirit Dynamics | Intern @Innoventures Yazılım ve Danışmanlık Ltd. Şti.",
      publicIdentifier: "berkant-kazangirler",
      followerCount: 195,
      connectionsCount: 192,
      creator: false,
      qualityProfile: true,
      joined: 1640015621567,
      profileID: "955607609",
      urn: "ACoAADj1ajkBQvQaebgw7CZTTdYgh6ULOKVgC5s",
      CurrentPositions: [
        {
          urn: "2190982",
          name: "Karabuk University",
          url: "https://www.linkedin.com/school/karabuk-university/",
          logoURL:
            "https://media.licdn.com/dms/image/v2/D4D0BAQEXkfB-jWZopw/company-logo_400_400/company-logo_400_400/0/1732281131939/karabuk_university_logo?e=1762992000&v=beta&t=gWvsBHbyn3Gs90KKsX7ESurr7v59OfEERX_FtjIEltI",
        },
        {
          urn: "87989972",
          name: "Innoventures",
          url: "https://www.linkedin.com/company/innoventures-software/",
          logoURL:
            "https://media.licdn.com/dms/image/v2/D4D0BAQHh-vdLDa79SA/company-logo_400_400/company-logo_400_400/0/1720010701534/innoventures_software_logo?e=1762992000&v=beta&t=F7h9cOI9P7XNJ3zDQWMTlw3G-Z_Kl2RezGbZXV74U1g",
        },
      ],
      isTopVoice: false,
      premium: false,
      influencer: false,
      location: {
        countryCode: "TR",
        countryName: "Türkiye",
        city: "Karabuk",
        region: "Karabuk",
        fullLocation: "Karabuk, Türkiye",
        geoCountryUrn: "urn:li:fsd_geo:102105699",
        geoRegionUrn: "urn:li:fsd_geo:105250269",
      },
      backgroundImageURL:
        "https://media.licdn.com/dms/image/v2/D4D16AQFXVQT66KR3kg/profile-displaybackgroundimage-shrink_350_1400/B4DZhpLBjoH4Ac-/0/1754111161747?e=1762992000&v=beta&t=6MK4M8YaY_31jviV5pwc58ptd6RYxOWgSRqrm-LcY34",
      profilePictureURL:
        "https://media.licdn.com/dms/image/v2/D4D03AQE13EZ8Qrcr6w/profile-displayphoto-crop_800_800/B4DZlVtt8TJQAM-/0/1758079672654?e=1762992000&v=beta&t=NVUNhT1Ehs9Eb61uiAi74eRC_2x3Og7EL2lf6ZAtZC4",
      supportedLocales: [
        {
          country: "TR",
          language: "tr",
        },
      ],
    });

    setDetailData({
      about:
        "I am Berkant Kazangirler. Thanks to my passion for technology, I became a member of SafranTech, the technology and robotics team of Safranbolu Ahi Evran Vocational and Technical Anatolian High School, during my high school years. Throughout my time on the team, I focused on developing my skills in software and contributed to significant projects.\n\nAfter graduating from high school, I joined Spirit Dynamics, a team founded with former SafranTech members to continue and share the experiences we had gained. Here, I actively serve as a Team Mentor and Team Captain, guiding the next generation of students while contributing to the team’s technical and strategic growth.\n\nIn addition, I am currently working as a Frontend Developer Intern at Innoventures Software and Consulting Ltd.. In this role, I have the opportunity to closely experience software development processes and participate in real-world projects. I continue to improve myself in the technology field, gaining valuable experience both individually and as part of a team. 🚀\n\n📌 Career Highlights:\n Participated in 40+ projects between 2022 – 2025\n 2nd place in Acceleration / Performance Category, Teknofest Electric Vehicle Competition 2024\n 2nd place in Regional Finals, Robotex 2024\n Winner, FRC Ankara Regional 2025\n Earned the right to participate in the FIRST Championship 2025",
      featuredPosts: [
        {
          postLink:
            "https://www.linkedin.com/feed/update/urn:li:activity:7355312336036868096?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7355312336036868096%29",
          postText:
            "🎓 Bugün, dört yıl boyunca büyük bir tutkuyla parçası olduğum SafranTech Teknoloji ve Robotik Takımına veda ediyorum.\n\nBu süreçte yalnızca teknik beceriler değil; ekip ruhu, liderlik, sorumluluk alma ve birlikte başarmanın ne demek olduğunu öğrendim. SafranTech, benim için sadece bir okul takımı değil; aynı zamanda bir aile, bir gelişim ortamı ve ilham kaynağıydı.\n\nBu yolculukta bana her zaman destek olan, yalnızca bir danışman değil aynı zamanda bize güvenen, yol gösteren, öğreten ve ilham veren Cumhur TORUN hocama en içten teşekkürlerimi sunuyorum. Emekleriniz ve rehberliğiniz benim için çok kıymetli.\n\nAyrıca birlikte emek verdiğim, başarılar yaşadığım ve unutulmaz anılar biriktirdiğim tüm takım arkadaşlarıma da gönülden teşekkür ederim.\nİyi ki SafranTech’in bir parçası olmuşum. ",
        },
        {
          postLink:
            "https://www.linkedin.com/feed/update/urn:li:activity:7313271124962742273?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7313271124962742273%29",
          postText:
            "🇹🇷\nSafranTech FRC Takımı’nın Takım Kaptanı ve Driver’ı olarak, 14-16 Mart tarihleri arasında FİKRET YÜKSEL FOUNDATION koordinatörlüğünde gerçekleştirilen 2025 Ankara Regional'da görev aldım. 3 gün süren zorlu bir yarışma sürecinde, Playoff’larda 1. İttifak’ın 2. Pick’i olarak büyük bir başarıya imza attık. Son senemde, takımım ile birlikte Winner olmayı başardık, sadece bireysel değil, takım ruhu, azim, dayanışma ve inovasyona olan tutkumuzun bir simgesidir.\n\n2025 yılında, takım olarak büyük bir yenilenme sürecine girdik. Yeni ruhlar ve öğrencilerle takımı güçlendirme hedefimizi gerçekleştirdik ve bu yolculukta başarılı olmaktan büyük gurur duyuyorum. Bu süreçte emeği geçen, katkı sağlayan herkese teşekkürlerimi sunuyorum! 🦾\n\n🇺🇲\nAs the Team Captain and Driver of SafranTech FRC Team, I participated in the 2025 Ankara Regional, organized under the coordination of the FİKRET YÜKSEL FOUNDATION from March 14-16. Throughout the challenging three-day competition, we achieved great success by being selected as the 2nd pick of the 1st Alliance in the Playoffs. In my final year, my team and I managed to become Winners, which is not only a personal achievement but also a symbol of our passion for teamwork, perseverance, solidarity, and innovation.\nIn 2025, we underwent a major renewal process as a team. We successfully strengthened our team with new spirits and students, and I am incredibly proud of our achievements on this journey. I would like to express my gratitude to everyone who contributed and supported us along the way! 🦾",
        },
        {
          postLink:
            "https://www.linkedin.com/feed/update/urn:li:activity:7213151353764794368?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7213151353764794368%29",
          postText:
            "UIBee Labs şirketinde Stajyer Yazılım Geliştirici olarak çalışmaya başladığımı paylaşmaktan mutluluk duyuyorum! ",
        },
      ],
      positions: [
        {
          jobTitle: "Intern Software Developer",
          company: "Innoventures Yazılım ve Danışmanlık Ltd. Şti. · Internship",
          location: "Karabuk, Türkiye · On-site",
          duration: "Jun 2024 - Present · 1 yr 5 mos",
          companyLink: "https://www.linkedin.com/company/87989972/",
          companyId: "87989972",
          jobDescription: "",
        },
        {
          jobTitle: "Spirit Dynamics",
          company: "7 mos",
          location: "",
          duration: "",
          companyLink: "https://www.linkedin.com/company/106999519/",
          companyId: "106999519",
          jobDescription: "",
        },
        {
          jobTitle: "FIRST",
          company: "3 yrs 10 mos",
          location: "",
          duration: "",
          companyLink: "https://www.linkedin.com/company/355664/",
          companyId: "355664",
          jobDescription: "",
        },
        {
          jobTitle: "SafranTech",
          company: "3 yrs 10 mos",
          location: "",
          duration: "",
          companyLink: "https://www.linkedin.com/company/86377622/",
          companyId: "86377622",
          jobDescription: "",
        },
        {
          jobTitle: "Project Assistant",
          company: "eTwinning France (Réseau Canopé) · Seasonal",
          location: "",
          duration: "Jan 2022 - Sep 2024 · 2 yrs 9 mos",
          companyLink: "https://www.linkedin.com/company/922742/",
          companyId: "922742",
          jobDescription:
            "Erasmus+ Projesi kapsamında yürüttüğümüz eTwinning projelerinde Asistan olarak görev aldım.",
        },
      ],
      education: [
        {
          duration: "Sep 2025 - 2027",
          durationParsed: {
            start: {
              year: 2025,
              month: 9,
              day: 1,
            },
            end: {
              year: 2027,
              month: 1,
              day: 1,
            },
          },
          university: "Karabuk University",
          universityLink: "https://www.linkedin.com/company/2190982/",
          degree: "Ön Yüz Yazılım Geliştirme",
          description: null,
          subDescription: null,
        },
        {
          duration: "Sep 2021 - Jun 2025",
          durationParsed: {
            start: {
              year: 2021,
              month: 9,
              day: 1,
            },
            end: {
              year: 2025,
              month: 6,
              day: 1,
            },
          },
          university:
            "Ahi Evran Vocational and Technical Anatolian High School",
          universityLink:
            "https://www.linkedin.com/search/results/all/?keywords=Ahi+Evran+Vocational+and+Technical+Anatolian+High+School",
          degree: "Lise, Bilgisayar Programlama",
          description: null,
          subDescription: null,
        },
      ],
      languages: {
        languages: [
          {
            Language: "Türkçe",
            Level: "Native or bilingual proficiency",
          },
          {
            Language: "İngilizce",
            Level: "Limited working proficiency",
          },
        ],
        deepLink: "",
      },
    });

    setExperienceData([
      {
        companyName: "Innoventures",
        companyId: "87989972",
        companyLink: "https://www.linkedin.com/company/87989972/",
        companyLogo:
          "https://media.licdn.com/dms/image/v2/D4D0BAQHh-vdLDa79SA/company-logo_200_200/company-logo_200_200/0/1720010701534/innoventures_software_logo?e=1762992000&v=beta&t=z_FYNcPBY0dAV56TorSvhHraL3BQxO8R-BG6cDbKQSI",
        location: "Karabük, Türkiye · On-site",
        title: "Intern Software Developer",
        subTitle: "Innoventures Yazılım ve Danışmanlık Ltd. Şti. · Internship",
        description:
          "Skills: JavaScript · Web Sitesi Güncellenmesi · HTML5 · CSS · Web Geliştirme · Web Sitesi Oluşturma",
        duration: "Jun 2024 - Present · 1 yr 5 mos",
        durationParsed: {
          start: {
            year: 2024,
            month: 6,
            day: 1,
          },
          end: {
            year: 0,
            month: 0,
            day: 0,
          },
          present: true,
          period: "1 yr 5 mos",
        },
        isMultiPositions: false,
        totalDuration: "",
      },
      {
        companyName: "Spirit Dynamics",
        companyId: "106999519",
        companyLink: "https://www.linkedin.com/company/106999519/",
        companyLogo:
          "https://media.licdn.com/dms/image/v2/D560BAQGO860r6J2ASQ/company-logo_400_400/B56ZhlavPgH0AY-/0/1754048166471?e=1762992000&v=beta&t=lwWQmIukjyMzQW4jtJfXhnGZdWvi3j-EsF6alzu2N8U",
        location: "",
        title: "Spirit Dynamics",
        subTitle: "7 mos",
        description: "",
        duration: "7 mos",
        durationParsed: {
          start: {
            year: 0,
            month: 0,
            day: 0,
          },
          end: {
            year: 0,
            month: 0,
            day: 0,
          },
          present: false,
          period: "",
        },
        positions: [
          {
            companyName: "Spirit Dynamics",
            companyId: "106999519",
            companyLink: "https://www.linkedin.com/company/106999519/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D560BAQGO860r6J2ASQ/company-logo_400_400/B56ZhlavPgH0AY-/0/1754048166471?e=1762992000&v=beta&t=lwWQmIukjyMzQW4jtJfXhnGZdWvi3j-EsF6alzu2N8U",
            location: "Hybrid",
            title: "Team Captain",
            subTitle: "",
            description: "",
            duration: "Apr 2025 - Present · 7 mos",
            durationParsed: {
              start: {
                year: 2025,
                month: 4,
                day: 1,
              },
              end: {
                year: 0,
                month: 0,
                day: 0,
              },
              present: true,
              period: "7 mos",
            },
          },
          {
            companyName: "Spirit Dynamics",
            companyId: "106999519",
            companyLink: "https://www.linkedin.com/company/106999519/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D560BAQGO860r6J2ASQ/company-logo_400_400/B56ZhlavPgH0AY-/0/1754048166471?e=1762992000&v=beta&t=lwWQmIukjyMzQW4jtJfXhnGZdWvi3j-EsF6alzu2N8U",
            location: "Karabük, Türkiye · Remote",
            title: "Software Captain",
            subTitle: "Part-time",
            description: "Skills: Robotics",
            duration: "Apr 2025 - Present · 7 mos",
            durationParsed: {
              start: {
                year: 2025,
                month: 4,
                day: 1,
              },
              end: {
                year: 0,
                month: 0,
                day: 0,
              },
              present: true,
              period: "7 mos",
            },
          },
        ],
        isMultiPositions: true,
        totalDuration: "7 mos",
      },
      {
        companyName: "FIRST",
        companyId: "355664",
        companyLink: "https://www.linkedin.com/company/355664/",
        companyLogo:
          "https://media.licdn.com/dms/image/v2/D4E0BAQE8-tYaXidBhA/company-logo_200_200/company-logo_200_200/0/1688993672142/first_2_logo?e=1762992000&v=beta&t=0Qn55HdTF_ANDiM04_zHlSxRHJCq_Qttw620IrRYrWw",
        location: "",
        title: "FIRST",
        subTitle: "3 yrs 10 mos",
        description: "",
        duration: "3 yrs 10 mos",
        durationParsed: {
          start: {
            year: 0,
            month: 0,
            day: 0,
          },
          end: {
            year: 0,
            month: 0,
            day: 0,
          },
          present: false,
          period: "",
        },
        positions: [
          {
            companyName: "FIRST",
            companyId: "355664",
            companyLink: "https://www.linkedin.com/company/355664/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D4E0BAQE8-tYaXidBhA/company-logo_200_200/company-logo_200_200/0/1688993672142/first_2_logo?e=1762992000&v=beta&t=0Qn55HdTF_ANDiM04_zHlSxRHJCq_Qttw620IrRYrWw",
            location: "Hybrid",
            title: "Team Captain of Team 10042 - Spirit Dynamics",
            subTitle: "",
            description: "",
            duration: "Apr 2025 - Present · 7 mos",
            durationParsed: {
              start: {
                year: 2025,
                month: 4,
                day: 1,
              },
              end: {
                year: 0,
                month: 0,
                day: 0,
              },
              present: true,
              period: "7 mos",
            },
          },
          {
            companyName: "FIRST",
            companyId: "355664",
            companyLink: "https://www.linkedin.com/company/355664/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D4E0BAQE8-tYaXidBhA/company-logo_200_200/company-logo_200_200/0/1688993672142/first_2_logo?e=1762992000&v=beta&t=0Qn55HdTF_ANDiM04_zHlSxRHJCq_Qttw620IrRYrWw",
            location: "",
            title: "Team Captain of Team 8777 - SafranTech",
            subTitle: "Full-time",
            description: "Skills: Ekip Yönetimi",
            duration: "Oct 2024 - Jul 2025 · 10 mos",
            durationParsed: {
              start: {
                year: 2024,
                month: 10,
                day: 1,
              },
              end: {
                year: 2025,
                month: 7,
                day: 1,
              },
              present: false,
              period: "10 mos",
            },
          },
          {
            companyName: "FIRST",
            companyId: "355664",
            companyLink: "https://www.linkedin.com/company/355664/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D4E0BAQE8-tYaXidBhA/company-logo_200_200/company-logo_200_200/0/1688993672142/first_2_logo?e=1762992000&v=beta&t=0Qn55HdTF_ANDiM04_zHlSxRHJCq_Qttw620IrRYrWw",
            location: "",
            title: "Software Captain of Team 8777 - SafranTech",
            subTitle: "Full-time",
            description: "Skills: Java · Programlama",
            duration: "Jul 2024 - Jul 2025 · 1 yr 1 mo",
            durationParsed: {
              start: {
                year: 2024,
                month: 7,
                day: 1,
              },
              end: {
                year: 2025,
                month: 7,
                day: 1,
              },
              present: false,
              period: "1 yr 1 mo",
            },
          },
          {
            companyName: "FIRST",
            companyId: "355664",
            companyLink: "https://www.linkedin.com/company/355664/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D4E0BAQE8-tYaXidBhA/company-logo_200_200/company-logo_200_200/0/1688993672142/first_2_logo?e=1762992000&v=beta&t=0Qn55HdTF_ANDiM04_zHlSxRHJCq_Qttw620IrRYrWw",
            location: "",
            title: "Software Member of Team 8777 - SafranTech",
            subTitle: "Full-time",
            description: "Skills: Robotics · Ekip Çalışması · Takım Çalışması",
            duration: "Jan 2022 - Jul 2024 · 2 yrs 7 mos",
            durationParsed: {
              start: {
                year: 2022,
                month: 1,
                day: 1,
              },
              end: {
                year: 2024,
                month: 7,
                day: 1,
              },
              present: false,
              period: "2 yrs 7 mos",
            },
          },
        ],
        isMultiPositions: true,
        totalDuration: "3 yrs 10 mos",
      },
      {
        companyName: "SafranTech",
        companyId: "86377622",
        companyLink: "https://www.linkedin.com/company/86377622/",
        companyLogo:
          "https://media.licdn.com/dms/image/v2/D4D0BAQH9TiYS2A6tpA/company-logo_200_200/B4DZgdVkt.GkAM-/0/1752838851926/safrantech_logo?e=1762992000&v=beta&t=i8sFc4WL5GZXxKwuUGqti7v6ZFBSyNm8RpzoUlEh6hs",
        location: "",
        title: "SafranTech",
        subTitle: "3 yrs 10 mos",
        description: "",
        duration: "3 yrs 10 mos",
        durationParsed: {
          start: {
            year: 0,
            month: 0,
            day: 0,
          },
          end: {
            year: 0,
            month: 0,
            day: 0,
          },
          present: false,
          period: "",
        },
        positions: [
          {
            companyName: "SafranTech",
            companyId: "86377622",
            companyLink: "https://www.linkedin.com/company/86377622/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D4D0BAQH9TiYS2A6tpA/company-logo_200_200/B4DZgdVkt.GkAM-/0/1752838851926/safrantech_logo?e=1762992000&v=beta&t=i8sFc4WL5GZXxKwuUGqti7v6ZFBSyNm8RpzoUlEh6hs",
            location: "Karabük, Türkiye · Hybrid",
            title: "Team Captain",
            subTitle: "Full-time",
            description:
              "Skills: Takım Oluşturma · Ekip Yönetimi · Liderlik · Yönetim · Ekip Liderliği",
            duration: "Oct 2024 - Jul 2025 · 10 mos",
            durationParsed: {
              start: {
                year: 2024,
                month: 10,
                day: 1,
              },
              end: {
                year: 2025,
                month: 7,
                day: 1,
              },
              present: false,
              period: "10 mos",
            },
          },
          {
            companyName: "SafranTech",
            companyId: "86377622",
            companyLink: "https://www.linkedin.com/company/86377622/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D4D0BAQH9TiYS2A6tpA/company-logo_200_200/B4DZgdVkt.GkAM-/0/1752838851926/safrantech_logo?e=1762992000&v=beta&t=i8sFc4WL5GZXxKwuUGqti7v6ZFBSyNm8RpzoUlEh6hs",
            location: "Karabük, Türkiye · Hybrid",
            title: "Software Captain",
            subTitle: "Full-time",
            description:
              'I am currently serving as the Software Captain of the SafranTech Robotics Team. One of the most significant projects I have worked on in this role was the "2024 Teknofest Liseler Arası Elektrikli Araçlar". In this project, I was responsible for developing the software of vehicle control systems, sensor integration, and the driver interface.\n\nAnother major project I contributed to was the 2025 FIRST® Robotics Competition (FRC). We participated in the 2025 Ankara Regional, an international-level event that brought together high school robotics teams from around the world. In this competition, I led the development of our robot\'s software, focusing on autonomous driving, driver-assist systems, and strategy-based algorithm design.\n\nI continue to take an active leadership role in both projects, contributing to my team’s technical success through my work in software development.',
            duration: "Jul 2024 - Jul 2025 · 1 yr 1 mo",
            durationParsed: {
              start: {
                year: 2024,
                month: 7,
                day: 1,
              },
              end: {
                year: 2025,
                month: 7,
                day: 1,
              },
              present: false,
              period: "1 yr 1 mo",
            },
          },
          {
            companyName: "SafranTech",
            companyId: "86377622",
            companyLink: "https://www.linkedin.com/company/86377622/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D4D0BAQH9TiYS2A6tpA/company-logo_200_200/B4DZgdVkt.GkAM-/0/1752838851926/safrantech_logo?e=1762992000&v=beta&t=i8sFc4WL5GZXxKwuUGqti7v6ZFBSyNm8RpzoUlEh6hs",
            location: "Safranbolu, Karabük, Türkiye · Hybrid",
            title: "Head of Content & Social Media",
            subTitle: "Full-time",
            description:
              "I am currently serving as the Social Media and Corporate Communications Lead at SafranTech Technology and the SafranTech Robotics Team. I manage the content planning and administration of our Instagram and LinkedIn accounts, while also coordinating sponsorship meetings and communication with partner companies. Additionally, I actively work on strengthening inter-team communication to enhance collaborations and increase our overall engagement.",
            duration: "Oct 2021 - Jul 2025 · 3 yrs 10 mos",
            durationParsed: {
              start: {
                year: 2021,
                month: 10,
                day: 1,
              },
              end: {
                year: 2025,
                month: 7,
                day: 1,
              },
              present: false,
              period: "3 yrs 10 mos",
            },
          },
          {
            companyName: "SafranTech",
            companyId: "86377622",
            companyLink: "https://www.linkedin.com/company/86377622/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D4D0BAQH9TiYS2A6tpA/company-logo_200_200/B4DZgdVkt.GkAM-/0/1752838851926/safrantech_logo?e=1762992000&v=beta&t=i8sFc4WL5GZXxKwuUGqti7v6ZFBSyNm8RpzoUlEh6hs",
            location: "Karabük, Türkiye · On-site",
            title: "Captain of Electronics",
            subTitle: "Full-time",
            description:
              "Skills: Elektronik · Elektriksel Sorun Giderme · Elektriksel Tasarım",
            duration: "Oct 2024 - Apr 2025 · 7 mos",
            durationParsed: {
              start: {
                year: 2024,
                month: 10,
                day: 1,
              },
              end: {
                year: 2025,
                month: 4,
                day: 1,
              },
              present: false,
              period: "7 mos",
            },
          },
          {
            companyName: "SafranTech",
            companyId: "86377622",
            companyLink: "https://www.linkedin.com/company/86377622/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D4D0BAQH9TiYS2A6tpA/company-logo_200_200/B4DZgdVkt.GkAM-/0/1752838851926/safrantech_logo?e=1762992000&v=beta&t=i8sFc4WL5GZXxKwuUGqti7v6ZFBSyNm8RpzoUlEh6hs",
            location: "Karabük, Türkiye · On-site",
            title: "Member of Research and Development Department",
            subTitle: "",
            description:
              "Skills: Test Etme · Araştırma · Rapor Yazma · Raporlama",
            duration: "Oct 2021 - Oct 2024 · 3 yrs 1 mo",
            durationParsed: {
              start: {
                year: 2021,
                month: 10,
                day: 1,
              },
              end: {
                year: 2024,
                month: 10,
                day: 1,
              },
              present: false,
              period: "3 yrs 1 mo",
            },
          },
          {
            companyName: "SafranTech",
            companyId: "86377622",
            companyLink: "https://www.linkedin.com/company/86377622/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D4D0BAQH9TiYS2A6tpA/company-logo_200_200/B4DZgdVkt.GkAM-/0/1752838851926/safrantech_logo?e=1762992000&v=beta&t=i8sFc4WL5GZXxKwuUGqti7v6ZFBSyNm8RpzoUlEh6hs",
            location: "Karabük, Türkiye · Hybrid",
            title: "Software Vice Captain",
            subTitle: "Full-time",
            description: "Skills: C# · Java · Rapor Yazma · Raporlama",
            duration: "Aug 2023 - Jul 2024 · 1 yr",
            durationParsed: {
              start: {
                year: 2023,
                month: 8,
                day: 1,
              },
              end: {
                year: 2024,
                month: 7,
                day: 1,
              },
              present: false,
              period: "1 yr",
            },
          },
          {
            companyName: "SafranTech",
            companyId: "86377622",
            companyLink: "https://www.linkedin.com/company/86377622/",
            companyLogo:
              "https://media.licdn.com/dms/image/v2/D4D0BAQH9TiYS2A6tpA/company-logo_200_200/B4DZgdVkt.GkAM-/0/1752838851926/safrantech_logo?e=1762992000&v=beta&t=i8sFc4WL5GZXxKwuUGqti7v6ZFBSyNm8RpzoUlEh6hs",
            location: "Karabük, Türkiye · Hybrid",
            title: "Software Member",
            subTitle: "",
            description: "Skills: C# · C++",
            duration: "Oct 2021 - Aug 2023 · 1 yr 11 mos",
            durationParsed: {
              start: {
                year: 2021,
                month: 10,
                day: 1,
              },
              end: {
                year: 2023,
                month: 8,
                day: 1,
              },
              present: false,
              period: "1 yr 11 mos",
            },
          },
        ],
        isMultiPositions: true,
        totalDuration: "3 yrs 10 mos",
      },
      {
        companyName: "eTwinning France (Réseau Canopé)",
        companyId: "922742",
        companyLink: "https://www.linkedin.com/company/922742/",
        companyLogo:
          "https://media.licdn.com/dms/image/v2/C4E0BAQH4QgpmTaXl3A/company-logo_200_200/company-logo_200_200/0/1630579650629/etwinning_cndp__logo?e=1762992000&v=beta&t=iPUraQ4dDRg23ZZVo_RrGFkK4z1Hrc_MSjZcS0Eu6fA",
        location: "",
        title: "Project Assistant",
        subTitle: "eTwinning France (Réseau Canopé) · Seasonal",
        description:
          "Erasmus+ Projesi kapsamında yürüttüğümüz eTwinning projelerinde Asistan olarak görev aldım.",
        duration: "Jan 2022 - Sep 2024 · 2 yrs 9 mos",
        durationParsed: {
          start: {
            year: 2022,
            month: 1,
            day: 1,
          },
          end: {
            year: 2024,
            month: 9,
            day: 1,
          },
          present: false,
          period: "2 yrs 9 mos",
        },
      },
    ]);

    setSkillsData([
      {
        skillName: "Tanıtım",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Tan%C4%B1t%C4%B1m&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 4006,
      },
      {
        skillName: "Robotics",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Robotics&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Elektriksel Sorun Giderme",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Elektriksel+Sorun+Giderme&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Elektriksel Tasarım",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Elektriksel+Tasar%C4%B1m&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Photoshop",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Photoshop&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Video Düzenleme",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Video+D%C3%BCzenleme&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Yabancı Dil Olarak İngilizce Öğretimi",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Yabanc%C4%B1+Dil+Olarak+%C4%B0ngilizce+%C3%96%C4%9Fretimi&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "WordPress",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=WordPress&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Microsoft Word",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Microsoft+Word&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Sponsorluk",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Sponsorluk&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 2025,
      },
      {
        skillName: "Kurumsal İletişim",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Kurumsal+%C4%B0leti%C5%9Fim&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Elektronik",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Elektronik&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 2025,
      },
      {
        skillName: "Proje Planlama",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Proje+Planlama&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Manuel Test Etme",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Manuel+Test+Etme&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Teknik Tasarım",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Teknik+Tasar%C4%B1m&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Sosyal Medya",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Sosyal+Medya&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 2025,
      },
      {
        skillName: "Sosyal Medya İletişimleri",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Sosyal+Medya+%C4%B0leti%C5%9Fimleri&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 2025,
      },
      {
        skillName: "Yönetim",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Y%C3%B6netim&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Yazılım Geliştirme",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Yaz%C4%B1l%C4%B1m+Geli%C5%9Ftirme&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "CSS",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=CSS&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Yapay Zeka Aracıları",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Yapay+Zeka+Arac%C4%B1lar%C4%B1&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Ekip Yönetimi",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Ekip+Y%C3%B6netimi&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 2024,
      },
      {
        skillName: "Liderlik",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Liderlik&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Farkındalık",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Fark%C4%B1ndal%C4%B1k&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Takım Çalışması",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Tak%C4%B1m+%C3%87al%C4%B1%C5%9Fmas%C4%B1&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Ekip Liderliği",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Ekip+Liderli%C4%9Fi&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Ekip Çalışması",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Ekip+%C3%87al%C4%B1%C5%9Fmas%C4%B1&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "İletişim",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=%C4%B0leti%C5%9Fim&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Yapay Zeka",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Yapay+Zeka&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "Raporlama",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Raporlama&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 2024,
      },
      {
        skillName: "Rapor Yazma",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Rapor+Yazma&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 2024,
      },
      {
        skillName: "Teknik Sunumlar",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Teknik+Sunumlar&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 2024,
      },
      {
        skillName: "Elektrikli Araçlar",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Elektrikli+Ara%C3%A7lar&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 2024,
      },
      {
        skillName: "JavaScript",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=JavaScript&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "HTML5",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=HTML5&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "C++",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=C%2B%2B&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 2024,
      },
      {
        skillName: "Java",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Java&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
      {
        skillName: "MySQL",
        endorsementsLink:
          "https://www.linkedin.com/in/berkant-kazangirler/details/skills/urn:li:fsd_skill:(ACoAADj1ajkBQvQaebgw7CZTTdYgh6ULOKVgC5s,9)/endorsers?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADj1ajkBQvQaebgw7CZTTdYgh6ULOKVgC5s&tabIndex=0&modalTabIndex=0&detailScreenTabIndex=1",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=MySQL&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 1,
      },
      {
        skillName: "Python",
        endorsementsLink:
          "https://www.linkedin.com/in/berkant-kazangirler/details/skills/urn:li:fsd_skill:(ACoAADj1ajkBQvQaebgw7CZTTdYgh6ULOKVgC5s,10)/endorsers?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADj1ajkBQvQaebgw7CZTTdYgh6ULOKVgC5s&tabIndex=0&modalTabIndex=0&detailScreenTabIndex=1",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=Python&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 1,
      },
      {
        skillName: "C#",
        endorsementsLink:
          "https://www.linkedin.com/in/berkant-kazangirler/details/skills/urn:li:fsd_skill:(ACoAADj1ajkBQvQaebgw7CZTTdYgh6ULOKVgC5s,2069277499)/endorsers?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADj1ajkBQvQaebgw7CZTTdYgh6ULOKVgC5s&tabIndex=0&modalTabIndex=0&detailScreenTabIndex=1",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=C%23&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 1,
      },
      {
        skillName: "İngilizce",
        endorsementsLink: "",
        textActionTarget:
          "https://www.linkedin.com/search/results/all/?keywords=%C4%B0ngilizce&origin=PROFILE_PAGE_SKILL_NAVIGATION",
        isPassedLinkedInSkillAssessment: false,
        endorsementsCount: 0,
      },
    ]);

    setCertificationsData([
      {
        issuedBy: "Fikret Yüksel Foundation",
        certificationLink:
          "https://portal.fikretyukselfoundation.org/Sertifika/sertifika/0fa6fe7d-3f2f-4033-9703-4e148ebfb55c",
        certificationName: "FIRST Robotic Competition 2025 Ankara Regional",
        issuedDate: "Issued Mar 2025",
        issuerId: "25172355",
        issuerLink: "https://www.linkedin.com/company/25172355/",
        issuedDateParsed: {
          year: 2025,
          month: 3,
          day: 1,
        },
      },
      {
        issuedBy: "FIRST",
        certificationLink: "",
        certificationName: "FIRST Robotic Competition 2025 Ankara Regional",
        issuedDate: "Issued Mar 2025",
        issuerId: "355664",
        issuerLink: "https://www.linkedin.com/company/355664/",
        issuedDateParsed: {
          year: 2025,
          month: 3,
          day: 1,
        },
      },
      {
        issuedBy: "FIRST",
        certificationLink:
          "https://portal.fikretyukselfoundation.org/Sertifika/sertifika/9f1940ee-704d-4066-bed0-89f49a5ff04c",
        certificationName: "FIRST Robotic Competition 2025 Ankara Regional",
        issuedDate: "Issued Mar 2025",
        issuerId: "355664",
        issuerLink: "https://www.linkedin.com/company/355664/",
        issuedDateParsed: {
          year: 2025,
          month: 3,
          day: 1,
        },
      },
      {
        issuedBy: "Bartın Üniversitesi ",
        certificationLink: "",
        certificationName: "7. Uluslararası Bartın Proje Pazarı",
        issuedDate: "Issued Nov 2024",
        issuerId: "15128831",
        issuerLink: "https://www.linkedin.com/company/15128831/",
        issuedDateParsed: {
          year: 2024,
          month: 11,
          day: 1,
        },
      },
      {
        issuedBy: "eTwinning France (Réseau Canopé)",
        certificationLink: "",
        certificationName: "eTwinning 2024",
        issuedDate: "Issued Jun 2024",
        issuerId: "922742",
        issuerLink: "https://www.linkedin.com/company/922742/",
        issuedDateParsed: {
          year: 2024,
          month: 6,
          day: 1,
        },
      },
      {
        issuedBy: "TÜBİTAK",
        certificationLink: "",
        certificationName: "4006 Bilim Fuarı Destekleme Programı",
        issuedDate: "Issued May 2024",
        issuerId: "8970",
        issuerLink: "https://www.linkedin.com/company/8970/",
        issuedDateParsed: {
          year: 2024,
          month: 5,
          day: 1,
        },
      },
      {
        issuedBy: "Türkiye Cumhuriyeti Karabük Valiliği",
        certificationLink: "",
        certificationName: "Karabük Bilim Şenliği 2024 ",
        issuedDate: "Issued May 2024",
        issuerId: "97627693",
        issuerLink: "https://www.linkedin.com/company/97627693/",
        issuedDateParsed: {
          year: 2024,
          month: 5,
          day: 1,
        },
      },
      {
        issuedBy: "FIRST",
        certificationLink:
          "https://portal.fikretyukselfoundation.org/Sertifika/sertifika/a93059f9-6ea7-45fb-981f-2e6746bc988e",
        certificationName: "FIRST Robotic Competition 2024 Haliç Regional",
        issuedDate: "Issued Mar 2024",
        issuerId: "355664",
        issuerLink: "https://www.linkedin.com/company/355664/",
        issuedDateParsed: {
          year: 2024,
          month: 3,
          day: 1,
        },
      },
      {
        issuedBy: "FIRST",
        certificationLink: "",
        certificationName: "FIRST Robotic Competition 2024 Haliç Regional",
        issuedDate: "Issued Mar 2024",
        issuerId: "355664",
        issuerLink: "https://www.linkedin.com/company/355664/",
        issuedDateParsed: {
          year: 2024,
          month: 3,
          day: 1,
        },
      },
      {
        issuedBy: "Robotex International",
        certificationLink: "",
        certificationName: "Robotex Bölgesel Finaller",
        issuedDate: "Issued Mar 2024",
        issuerId: "18668457",
        issuerLink: "https://www.linkedin.com/company/18668457/",
        issuedDateParsed: {
          year: 2024,
          month: 3,
          day: 1,
        },
      },
      {
        issuedBy: "Bartın Üniversitesi ",
        certificationLink: "",
        certificationName: "6. Uluslararası Bartın Proje Pazarı",
        issuedDate: "Issued Dec 2023",
        issuerId: "15128831",
        issuerLink: "https://www.linkedin.com/company/15128831/",
        issuedDateParsed: {
          year: 2023,
          month: 12,
          day: 1,
        },
      },
      {
        issuedBy: "SistersLab - Association of Women in Science and Technology",
        certificationLink: "",
        certificationName: "Eğitim Tamamlama",
        issuedDate: "Issued Dec 2023",
        issuerId: "67748573",
        issuerLink: "https://www.linkedin.com/company/67748573/",
        issuedDateParsed: {
          year: 2023,
          month: 12,
          day: 1,
        },
      },
      {
        issuedBy: "T.C. Gençlik ve Spor Bakanlığı",
        certificationLink: "",
        certificationName: "Gençlik Politika Belgesi Vizyon Çalıştayı",
        issuedDate: "Issued Dec 2023",
        issuerId: "36098881",
        issuerLink: "https://www.linkedin.com/company/36098881/",
        issuedDateParsed: {
          year: 2023,
          month: 12,
          day: 1,
        },
      },
      {
        issuedBy: "eTwinning France (Réseau Canopé)",
        certificationLink: "",
        certificationName: "eTwinning 2023",
        issuedDate: "Issued Dec 2023",
        issuerId: "922742",
        issuerLink: "https://www.linkedin.com/company/922742/",
        issuedDateParsed: {
          year: 2023,
          month: 12,
          day: 1,
        },
      },
      {
        issuedBy: "eTwinning France (Réseau Canopé)",
        certificationLink: "",
        certificationName: "eTwinning 2023",
        issuedDate: "Issued May 2023",
        issuerId: "922742",
        issuerLink: "https://www.linkedin.com/company/922742/",
        issuedDateParsed: {
          year: 2023,
          month: 5,
          day: 1,
        },
      },
      {
        issuedBy: "FIRST",
        certificationLink: "",
        certificationName: "FIRST Robotic Competition 2023 Bosphorus Regional",
        issuedDate: "Issued Mar 2023",
        issuerId: "355664",
        issuerLink: "https://www.linkedin.com/company/355664/",
        issuedDateParsed: {
          year: 2023,
          month: 3,
          day: 1,
        },
      },
      {
        issuedBy: "Riders.ai",
        certificationLink: "",
        certificationName: "4. RRL - Yarışma Hakkı",
        issuedDate: "Issued Nov 2022",
        issuerId: "42305869",
        issuerLink: "https://www.linkedin.com/company/42305869/",
        issuedDateParsed: {
          year: 2022,
          month: 11,
          day: 1,
        },
      },
      {
        issuedBy: "European Commission",
        certificationLink: "",
        certificationName: "EC Code Week 2022",
        issuedDate: "Issued Oct 2022",
        issuerId: "1809",
        issuerLink: "https://www.linkedin.com/company/1809/",
        issuedDateParsed: {
          year: 2022,
          month: 10,
          day: 1,
        },
      },
      {
        issuedBy: "TEKNOFEST",
        certificationLink: "",
        certificationName: "2022 - Teknofest Elektrikli Araç",
        issuedDate: "Issued Aug 2022",
        issuerId: "18714001",
        issuerLink: "https://www.linkedin.com/company/18714001/",
        issuedDateParsed: {
          year: 2022,
          month: 8,
          day: 1,
        },
      },
      {
        issuedBy: "eTwinning France (Réseau Canopé)",
        certificationLink: "",
        certificationName: "2022 eTwinning - Kalite Etiketi",
        issuedDate: "Issued Aug 2022",
        issuerId: "922742",
        issuerLink: "https://www.linkedin.com/company/922742/",
        issuedDateParsed: {
          year: 2022,
          month: 8,
          day: 1,
        },
      },
    ]);
  }, []);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
