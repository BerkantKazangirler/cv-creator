export interface detailsI {
  about: string;
  featuredPosts: {
    postLink: string;
    postText: string;
  };
  positions: {
    jobTitle: string;
    company: string;
    location: string;
    duration: string;
    companyLink: string;
    companyId: string;
    jobDescription: string;
  };
  education: {
    duration: string;
    durationParsed: {
      start: {
        year: number;
        month: number;
        day: number;
      };
      end: {
        year: number;
        month: number;
        day: number;
      };
    };
    university: string;
    universityLink: string;
    degree: string;
    description: string | null;
    subDescription: string | null;
  };
  languages: {
    languages: {
      Language: string;
      Level: string;
    };
  };
}
